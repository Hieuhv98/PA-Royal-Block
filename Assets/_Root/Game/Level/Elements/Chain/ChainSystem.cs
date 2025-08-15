using System;
using System.Collections.Generic;
using TMPro;
using UnityEditor;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;

public class ChainSystem : BaseMono
{
    [SerializeField] GameObject model;
    [SerializeField] GameObject locker;
    [SerializeField] GameObject lockModel;
    [SerializeField] private TextMeshPro txtCount;
    [SerializeField] private BlockColor blockParent;
    [SerializeField] List<ChainLinker> listLinker = new List<ChainLinker>();

    [SerializeField] private Key keyPrefab;
    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundBreak;

    [Header("Fx")]
    [SerializeField] private ParticleSystem fxCrack;

    [Header("Config")]
    [SerializeField] private Vector3 lockModelEulerAngles = new Vector3(15f, 0, 0);

    int _changeValue = 0;

    public bool IsChaining => _changeValue < Count;
    public int Count => listLinker.Count;
    private void Awake()
    {
        _changeValue = 0;
        UpdateUI(Count);
        foreach (var chaninLiner in listLinker)
        {
            if(chaninLiner.Block) chaninLiner.Block.ActionOnDead += OnBlockLinkBreak;
        }

        if (blockParent == null) blockParent = GetComponentInParent<BlockColor>();
        blockParent.UpdateChaning(IsChaining);
        if(fxCrack) fxCrack.transform.position = locker.transform.position;
        lockModel.transform.SetParent(blockParent.transform);
        lockModel.transform.localEulerAngles = lockModelEulerAngles;
        lockModel.transform.SetParent(locker.transform);
        if(fxCrack) fxCrack.transform.position = lockModel.transform.position;
    }
    private void OnDestroy()
    {
        foreach (var chaninLiner in listLinker)
        {
            if (chaninLiner.Block) chaninLiner.Block.ActionOnDead -= OnBlockLinkBreak;
        }
    }
    public void SetBlock(BlockColor block) { blockParent = block; }
    void OnBlockLinkBreak(BlockColor block)
    {
        var key = GetKeyPrefab(block);
        if (key) 
        {
            key.SetParent(block.transform.parent);
            key.Move(lockModel.transform.position, () =>
            {
                if (fxCrack) fxCrack.Play();
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
        UpdateUI(Count - _changeValue);
        model.SetActive(IsChaining);
        blockParent.UpdateChaning(IsChaining);
        if (!IsChaining) OnLockBreak();
    }
    void OnLockBreak() 
    {
        playSfxEvent?.Raise(soundBreak);
    }
    public void UpdateUI(int count) { txtCount.text = $"{count}"; }
    bool Contains(BlockColor block)
    {
        return listLinker.Contains(GetChanin(block));
    }
    public Key GetKeyPrefab(BlockColor block)
    {
        return GetChanin(block).Key;
    }
    ChainLinker GetChanin(BlockColor block)
    {
        return listLinker.Find(x => x.Block == block);
    }

    public void Add(BlockColor block)
    {
        CheckNull();
        if (block != null && !Contains(block))
        {
            Key prefab;
#if UNITY_EDITOR
            prefab = PrefabUtility.InstantiatePrefab(keyPrefab, block.transform) as Key;
#else
            prefab = Instantiate(keyPrefab, transform);
#endif
            prefab.SetPosition(block.GetCenterPosition());
            listLinker.Add(new ChainLinker(block, prefab));
        }
        UpdateUI(Count);
    }
    public void Remove(BlockColor block)
    {
        if (Contains(block))
        {
            var blockLinker = GetChanin(block);
            if (blockLinker != null) 
            {
                var prefab = blockLinker.Key;
                if(prefab) DestroyImmediate(prefab.gameObject);
                listLinker.Remove(blockLinker);
            }

        }
        UpdateUI(Count);
    }
    public void Clear() 
    {
        var linkerCache = new List<ChainLinker>();
        linkerCache.AddRange(listLinker);

        foreach (var chaninLiner in linkerCache)
        {
            Remove(chaninLiner.Block);
        }
        listLinker.Clear();
        linkerCache.Clear();
        UpdateUI(Count);
    }
    public void CheckNull()
    {
        if (listLinker.Count > 0)
        {
            var listLinkerNull = new List<ChainLinker>();
            for (int i = 0; i < listLinker.Count; i++)
            {
                if (listLinker[i].Block == null) { listLinkerNull.Add(listLinker[i]); }
            }
            foreach (var linkerNull in listLinkerNull) listLinker.Remove(linkerNull);
        }
    }
}
[Serializable]
public class ChainLinker
{
    [SerializeField] private BlockColor block;
    [SerializeField] private Key key;

    public BlockColor Block => block;
    public Key Key => key;
    public ChainLinker(BlockColor block, Key prefab)
    {
        this.block = block;
        this.key = prefab;
    }
}