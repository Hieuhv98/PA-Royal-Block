using System;
using System.Collections.Generic;
using TMPro;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;

public class RopeSystem : BaseMono
{
    [SerializeField] protected string objectName;
    [SerializeField] GameObject model;
    [SerializeField] GameObject locker;
    [SerializeField] GameObject lockModel;
    [SerializeField] private TextMeshPro txtCount;
    [SerializeField] string path = "Assets/_Root/Game/Level/Elements/Renders";
    [SerializeField] private BlockColor blockParent;
    [SerializeField] List<RopeLinker> listLinker = new List<RopeLinker>();

    [SerializeField] private Scissor scissorPrefab;
    [SerializeField] private Rope ropePrefab;
    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundBreak;

    [Header("Fx")]
    [SerializeField] private ParticleSystem fxCrack;

    [Header("Config")]
    [SerializeField] private Vector3 lockModelEulerAngles = new Vector3(15f, 0, 0);

    int _changeValue = 0;

    public bool IsRoping => _changeValue < Count;
    public int Count => listLinker.Count;
    private void Awake()
    {
        _changeValue = 0;
        OnUpdateUI(Count);
        foreach (var ropeLinker in listLinker)
        {
            if (ropeLinker.Block) ropeLinker.Block.ActionOnDead += OnBlockLinkBreak;
        }

        if (blockParent == null) blockParent = GetComponentInParent<BlockColor>();
        blockParent.UpdateRoping(IsRoping);
        if (fxCrack) fxCrack.transform.position = locker.transform.position;
        lockModel.transform.SetParent(blockParent.transform);
        lockModel.transform.localEulerAngles = lockModelEulerAngles;
        lockModel.transform.SetParent(locker.transform);
        if (fxCrack) fxCrack.transform.position = lockModel.transform.position;
    }
    private void OnDestroy()
    {
        foreach (var ropeLinker in listLinker)
        {
            if (ropeLinker.Block) ropeLinker.Block.ActionOnDead -= OnBlockLinkBreak;
        }
    }
    public void SetBlock(BlockColor block) { blockParent = block; }
    void OnBlockLinkBreak(BlockColor block)
    {
        var scissors = GetScissorPrefab(block);
        if (scissors)
        {
            var rope = GetRopePrefab(block);
            scissors.SetParent(block.transform.parent);
            scissors.Move(rope.transform.position, () =>
            {
                if (fxCrack) fxCrack.Play();
                if(rope) rope.Destroy();
                _changeValue++;
                OnUpdate();
            });
        }
    }
    public void OnRemoveBlock(BlockColor block)
    {
        block.ActionOnDead -= OnBlockLinkBreak;
        Remove(block);
        OnUpdate();
    }
    void OnUpdate()
    {
        OnUpdateUI(Count - _changeValue);
        model.SetActive(IsRoping);
        blockParent.UpdateRoping(IsRoping);
        if (!IsRoping) OnLockBreak();
    }
    void OnLockBreak()
    {
        playSfxEvent?.Raise(soundBreak);
        gameObject.SetActive(false);
    }
    public void OnUpdateUI(int count) 
    { 
        txtCount.text = $"{count}";
    }
    public void UpdateColor() 
    {
#if UNITY_EDITOR
        foreach(var link in listLinker) 
        {
            link.Scissor.SetMaterial(GetMaterial(link.EColorType));
            link.Rope.SetMaterial(GetMaterial(link.EColorType));
        }
#endif
    }
    bool Contains(BlockColor block)
    {
        return listLinker.Contains(GetRope(block));
    }
    public Scissor GetScissorPrefab(BlockColor block)
    {
        return GetRope(block).Scissor;
    }
    public Rope GetRopePrefab(BlockColor block)
    {
        return GetRope(block).Rope;
    }
    RopeLinker GetRope(BlockColor block)
    {
        return listLinker.Find(x => x.Block == block);
    }

    public void Add(BlockColor block)
    {
        CheckNull();
        if (block != null && !Contains(block))
        {
            Scissor scissor;
            Rope rope;
#if UNITY_EDITOR
            scissor = PrefabUtility.InstantiatePrefab(scissorPrefab, block.transform) as Scissor;
            rope = PrefabUtility.InstantiatePrefab(ropePrefab, transform) as Rope;
#else
            scissor = Instantiate(scissorPrefab, block.transform);
            rope = Instantiate(ropePrefab, transform);
#endif
            scissor.SetPosition(block.GetCenterPosition());
            listLinker.Add(new RopeLinker(block, scissor, rope));
        }
        OnUpdateUI(Count);
    }
    public void Remove(BlockColor block)
    {
        if (Contains(block))
        {
            var blockLinker = GetRope(block);
            if (blockLinker != null)
            {
                var scissor = blockLinker.Scissor;
                if (scissor) DestroyImmediate(scissor.gameObject);

                var rope = blockLinker.Rope;
                if (rope) DestroyImmediate(rope.gameObject);

                listLinker.Remove(blockLinker);
            }

        }
        OnUpdateUI(Count);
    }
    public void Clear()
    {
        var linkerCache = new List<RopeLinker>();
        linkerCache.AddRange(listLinker);

        foreach (var ropeLiner in linkerCache)
        {
            Remove(ropeLiner.Block);
        }
        listLinker.Clear();
        linkerCache.Clear();
        OnUpdateUI(Count);
    }
    public void CheckNull()
    {
        if (listLinker.Count > 0)
        {
            var listLinkerNull = new List<RopeLinker>();
            for (int i = 0; i < listLinker.Count; i++)
            {
                if (listLinker[i].Block == null) { listLinkerNull.Add(listLinker[i]); }
            }
            foreach (var linkerNull in listLinkerNull) listLinker.Remove(linkerNull);
        }
    }

#if UNITY_EDITOR
    public void CreateMaterial(EColorType eColorType)
    {
        if (model)
        {
            var renderer = model.GetComponentInChildren<Renderer>();

            if (renderer)
            {
                if (renderer.material != null)
                {
                    var materialAssetName = $"Material-{objectName}-{eColorType}.asset";
                    var assetPath = $"{path}/{materialAssetName}";
                    var newMaterial = new Material(renderer.material);
                    newMaterial = renderer.material;
                    //newMaterial.SetColor(colorMaterialName, dataColor.Color);
                    AssetDatabase.CreateAsset(newMaterial, assetPath);
                    renderer.material = newMaterial;
                }
            }
        }
    }

    protected Material GetMaterial(EColorType eColorType)
    {
        var materialAssetName = $"Material-{objectName}-{eColorType}.asset";
        var assetPath = $"{path}/{materialAssetName}";

        if (AssetDatabase.LoadAssetAtPath<Material>(assetPath) == null)
        {
            CreateMaterial(eColorType);
        }

        var newMaterial = AssetDatabase.LoadAssetAtPath<Material>(assetPath);
        return newMaterial;
    }
#endif
}

#if UNITY_EDITOR
[CustomEditor(typeof(RopeSystem), true)]
[CanEditMultipleObjects]
public class RopeSystemEditor : Editor
{
    RopeSystem ropeSystem;

    void OnEnable()
    {
        ropeSystem = target as RopeSystem;
    }

    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        if (Application.isPlaying) return;
        ropeSystem.UpdateColor();

        serializedObject.ApplyModifiedProperties();
    }
}
#endif

[Serializable]
public class RopeLinker
{
    [SerializeField] private BlockColor block;
    [SerializeField] private Scissor scissor;
    [SerializeField] private Rope rope;
    [SerializeField] private EColorType eColorType;

    public BlockColor Block => block;
    public Scissor Scissor => scissor;
    public Rope Rope => rope;
    public EColorType EColorType => eColorType;
    public RopeLinker(BlockColor block, Scissor scissor, Rope rope)
    {
        this.block = block;
        this.scissor = scissor;
        this.rope = rope;
    }
}