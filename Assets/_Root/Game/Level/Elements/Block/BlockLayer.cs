using DG.Tweening;
using UnityEngine;
using VirtueSky.Audio;

public class BlockLayer : BlockColor
{
    [Header("Child")] [SerializeField] EColorType eColorChildType;
    [SerializeField] private Material materialChildCache;
    [SerializeField] GameObject child;
    [SerializeField] Mesh meshOrigin;
    [SerializeField] private SoundData soundLayerCrack;

    [Header("Create")]
    [SerializeField] private float scaleWhenClone = .8f;
    [SerializeField] private float timeScaleToOrigin = .5f;
    [SerializeField] private Ease easeScale = Ease.Linear;
    [SerializeField] private float posYWhenCreate = 1f;
    [SerializeField] private float timeDelayWhenCreate = 0f;

    public Color ChildColor => colorConfig.GetColor(eColorChildType);
    private bool _isClone = false;
    private bool _isCreated = false;
    private BlockColor _blockClone;
    public bool IsClone => _isClone;
#if UNITY_EDITOR
    protected override void OnChangeInEditor()
    {
        base.OnChangeInEditor();
        UpdateChildColorInEditor();
    }
#endif

    public override void Initialize()
    {
        base.Initialize();
        child?.SetActive(true);
        _posYUpToStart = posYWhenCreate;
        _timeDelayDownWhenStart = timeDelayWhenCreate;
    }
    public override void OnPreSuckBoosterHit()
    {
        base.OnPreSuckBoosterHit();
        CreateChild();
    }

    public override void OnFreezerBreak()
    {
        base.OnFreezerBreak();
        if(materialChildCache) child.GetComponentInChildren<Renderer>().material = materialChildCache;
    }

    public override void Dead()
    {
        CreateChild();
        base.Dead();
    }
    public void CreateChild() 
    {
        if (_isCreated) return;
        _isCreated = true;
        if (!_isClone)
        {
            playSfxEvent?.Raise(soundLayerCrack);
            var materialNew = materialChildCache == null ? child.GetComponentInChildren<Renderer>().material : materialChildCache;
            child.SetActive(false);
            _blockClone = Clone();
            _blockClone.ChangeMesh(meshOrigin);
            _blockClone.transform.localScale = Vector3.one * scaleWhenClone;
            _blockClone.ChangeColorType(eColorChildType, materialNew);

            _blockClone.OnPreStartLevel();
            _blockClone.transform.DOScale(Vector3.one, timeScaleToOrigin).SetEase(easeScale).OnComplete(() => { });
        }
    }
    public override void DoSuckComplete()
    {
        base.DoSuckComplete();
    }

    public override void OnFreezerSetup(Material material)
    {
        base.OnFreezerSetup(material);
        var render = child.GetComponentInChildren<Renderer>();
        render.material = material;
    }

#if UNITY_EDITOR
    void UpdateChildColorInEditor()
    {
        if (child)
        {
            var colorData = colorConfig.GetData(eColorChildType);
            var render = child.GetComponentInChildren<Renderer>();
            if(!isFreeze) render.material = GetMaterial(colorData);
            materialChildCache = GetMaterial(colorData);
        }
    }
#endif


    public void SetClone(bool isClone)
    {
        child?.SetActive(!isClone);
        _isClone = isClone;
        _isChanning = false;
        _isRoping = false;
        isHaveSticky = false;
        _isAttaching = false;
        IsFrezering = false;
        UnAttachAll();
    }

    public BlockLayer Clone()
    {
        var pos = _cellOnGrid == null ? transform.position : _cellOnGrid.GetPostion();
        ActiveOutline(false);
        var blockClone = Instantiate(this, pos, Quaternion.identity);
        blockClone.transform.SetParent(transform.parent, true);
        blockClone.SetClone(true);
        return blockClone;
    }
}