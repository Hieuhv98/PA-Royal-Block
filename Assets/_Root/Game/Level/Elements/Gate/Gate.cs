using DG.Tweening;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.ObjectPooling;

public class Gate : ObjectBase, IShutter
{
    [SerializeField] private EDirectionType eDirectionType;
    [SerializeField] private DirectionConfig directionConfig;
    [SerializeField] private List<CellGrid> listCellLinker = new List<CellGrid>();

    [Header("Suck")] [SerializeField] private float downInSuckingHeight = 1f;
    [SerializeField] private float suckSpeed = 2f;
    [SerializeField] private float timeSuckMin = .75f;
    [SerializeField] private float offsetSuck = .5f;
    [SerializeField] private LayerMask layerSuck;
    [SerializeField] private float distaneCheck = 1f;
    [SerializeField] GameObject mask;
    [SerializeField] EventNoParam onGateSuckComplete;
    [SerializeField] ParticleSystem fxSuckPrefab;
    [SerializeField] float fxScale = 0.5f;
    [SerializeField] Vector3 fxAngle = new Vector3(0, 180, 0); 
    [SerializeField] Vector3 offsetFx = new Vector3(0, 1f, 0); 

    [Header("Create Resources")] [SerializeField]
    private CollisionComponent collisionComponent;

    [SerializeField] private CreateResourcesEvent createResourcesEvent;
    [SerializeField] private ResourcePrefab resourcePrefab;
    [SerializeField] private float resourceMoveDistane = 0.1f;
    [SerializeField] private float resourceMoveTime = 0.15f;
    [SerializeField] private LayerMask layerResource;

    [Header("Collection")] [SerializeField]
    private GateCollection collection;

    [Header("Shutter")] [SerializeField] private bool isHaveShutter;
    [SerializeField] private Shutter shutterPrefab;
    [SerializeField] private bool isShutterOpen = true;
    [SerializeField] private Shutter shutter;

    [Header("Swither")] [SerializeField] private bool isHaveSwither;
    [SerializeField] private BlockCollection blockCollection;
    [SerializeField] private GateSwitcher switherPrefab;
    [SerializeField] private EColorType eSwitherColorType;
    [SerializeField] private GateSwitcher swither;

    [Header("Audio")] [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundSuck;

    private Vector3 _direction;
    private float _width;
    public Vector2 GetDirection() => _direction;
    private Vector3 _positionOrigin, _posDownInSucking;
    private bool _isSucking = false;
    Tween _tweenSuck;
    private CellGrid _cellStartCheck;
    private List<CellGrid> _listCellCanBeChecked = new List<CellGrid>();
    private EColorType _eColorTypeCache = EColorType.NONE;
    private bool _isSwithed = false;
    private Camera _camera;
    private List<ResourcePrefab> _listResouceCache = new List<ResourcePrefab>();
    private int _resourceCount = 0;
    private BlockColor _blockSuck;
    private DelayHandle _delayCreateResource;

    public float Width => _width;
    public bool IsHaveShutter => isHaveShutter;
    public bool IsOpen { get; set; } = true;
    public bool IsCanCheck => _isAlive && !IsFrezering && (isHaveShutter ? IsOpen : true);

    public override void Awake()
    {
        base.Awake();
        collection?.Add(this);
    }

    public override void Start()
    {
        base.Start();
        _positionOrigin = model.transform.position;
        _posDownInSucking = _positionOrigin + Vector3.down * downInSuckingHeight;
        var dir = directionConfig.GetDirection(eDirectionType);
        _direction = new Vector3(dir.x, 0, dir.y);
        _width = GetWidth(eDirectionType, Size);

        mask?.SetActive(false);
        _cellStartCheck = null;
    }

    public override void OnEnable()
    {
        base.OnEnable();
        if (isHaveShutter && shutter)
        {
            shutter.SetUp(this, isShutterOpen);
            onGateSuckComplete.OnRaised += OnSwitchShutter;
            shutter.Refresh();
        }

        if (isHaveSwither && swither)
        {
            swither.SetUp(Renderer, OnSwitcher);
            _eColorTypeCache = eColorType;
        }

        if(resourcePrefab) collisionComponent.ActionTriggerEnter += OnTriggerEnterEvent;
    }

    public override void OnDisable()
    {
        base.OnDisable();
        _tweenSuck.Kill();
        if (isHaveShutter && shutter)
        {
            onGateSuckComplete.OnRaised -= OnSwitchShutter;
        }

        if (resourcePrefab) collisionComponent.ActionTriggerEnter -= OnTriggerEnterEvent;
        _delayCreateResource?.Cancel();
    }

    void OnSwitchShutter()
    {
        shutter.Switch();
    }

    void OnSwitcher(bool isSwithed)
    {
        _isSwithed = isSwithed;
        var ecolorType = isSwithed ? eSwitherColorType : _eColorTypeCache;
        this.eColorType = ecolorType;
    }

    public override void FixedTick()
    {
        if (!IsCanCheck) return;
        base.FixedTick();

        if (_isSucking) return;
        var hits = Physics.BoxCastAll(GetCenterPosition(), size / 2 * girdSize.Value.x, -_direction, Quaternion.identity, distaneCheck, layerSuck);
        if (hits.Length > 0)
        {
            foreach (var hit in hits)
            {
                var block = hit.collider.GetComponentInParent<BlockColor>();
                if (block && IsCanSuck(block)) Suck(block);
            }
        }
    }

    bool IsCanSee(BlockColor block)
    {
        if (block == null) return false;
        int checkCount = 0;
        _listCellCanBeChecked.Clear();
        foreach (var cell in listCellLinker)
        {
            if (Physics.Raycast(cell.GetCenterPosition() + Vector3.up * GetHeight(eDirectionType, Size) / 2 + _direction, -_direction, out RaycastHit hit, 50,
                    layerSuck))
            {
                var blockCheck = hit.collider.GetComponentInParent<BlockColor>();
                if (blockCheck && blockCheck.Equals(block))
                {
                    if (_cellStartCheck == null || cell.GetPostion().x < _cellStartCheck.GetPostion().x || cell.GetPostion().z < _cellStartCheck.GetPostion().z)
                        _cellStartCheck = cell;

                    checkCount++;
                    _listCellCanBeChecked.Add(cell);
                }
            }
        }

        return checkCount >= GetWidth(eDirectionType, block.Size);
    }

    public bool IsCanSuck(BlockColor block) => (block.IsHaveStar ? IsHaveStar : true) && eColorType.Equals(block.EColorType)
                                                                                      && GetWidth(eDirectionType, block.Size) <= _width && IsCanSee(block) && block.IsSelected &&
                                                                                      block.IsCanMove;

    public void Suck(BlockColor block)
    {
        if (_isSucking) return;
        _isSucking = true;
        if (onGateSuckComplete) onGateSuckComplete.Raise();

        _blockSuck = block;
        _resourceCount = 0;
        if (soundSuck) playSfxEvent?.Raise(soundSuck);
        mask?.SetActive(true);
        _listResouceCache.Clear();
        if (fxSuckPrefab)
        {
            foreach (var cell in _listCellCanBeChecked)
            {
                var fx = fxSuckPrefab.Spawn(transform);
                fx.transform.localScale = Vector3.one * fxScale;
                fx.transform.localRotation = Quaternion.Euler(fxAngle);
                fx.transform.position = cell.GetCenterPosition() + offsetFx;
                var particleSystemRenderer = fx.GetComponent<ParticleSystemRenderer>();
                particleSystemRenderer.material = materialCurrent;
                fx.Play();
            }
        }

        var height = GetHeight(eDirectionType, block.Size) * girdSize.Value.x;
        model.transform.position = _posDownInSucking;
        block.DoSucked();

        var offset = (eDirectionType == EDirectionType.RIGHT || eDirectionType == EDirectionType.UP) ? (-_direction * height / 2) : Vector3.zero;
        block.SetPosition(_cellStartCheck.GetPostion() + offset);
        var posMove = block.Model.transform.position + _direction * (height + offsetSuck);
        var timeSuck = Mathf.Max(timeSuckMin, ((posMove - block.Model.transform.position).magnitude) / suckSpeed);
        _tweenSuck = block.Model.transform.DOMove(posMove, timeSuck).OnComplete(() =>
        {
            block.DoSuckComplete();
            OnSuckComplete(block);
        });
    }

    void OnSuckComplete(BlockColor block)
    {
        _cellStartCheck = null;
        model.transform.position = _positionOrigin;
        mask?.SetActive(false);

        if (isHaveSwither && swither)
        {
            var eSwitchColorType = _isSwithed ? eSwitherColorType : _eColorTypeCache;
            swither.Switch(blockCollection.IsHaveBlockColor(eSwitchColorType));
        }

        _blockSuck = null;
        _isSucking = false;
    }

    void OnTriggerEnterEvent(GameObject go)
    {
        if (_isSucking && (layerResource & (1 << go.gameObject.layer)) != 0)
        {
            var prefab = resourcePrefab.Spawn(go.transform.position, Quaternion.identity, transform.parent);
            prefab.transform.localScale = Vector3.one;
            var render = prefab.GetComponentInChildren<Renderer>();
            if (render) render.material = materialCurrent;
            prefab.transform.DOMove(go.transform.position + _direction * resourceMoveDistane, resourceMoveTime);

            _listResouceCache.Add(prefab);

            _resourceCount++;
            if (_resourceCount >= _blockSuck.StudReward)
            {
                _resourceCount = 0;
                if (_camera == null) _camera = GetComponentInParent<LevelMap>().CameraMain;
            }
        }
    }

    public void AddCells(List<CellGrid> cells)
    {
        listCellLinker.Clear();
        listCellLinker.AddRange(cells);
    }

    public bool IsCanUpdateLinker(CellGrid cellGridStart) => cellGridStart != null && (listCellLinker.Count == 0 || !listCellLinker[0] || !listCellLinker[0].Equals(cellGridStart));
    public Vector2Int GetLinkerVector()
    {
        switch (eDirectionType)
        {
            case EDirectionType.UP:
                return new Vector2Int(Mathf.FloorToInt(Size.x), -1);
            case EDirectionType.DOWN:
                return new Vector2Int(Mathf.FloorToInt(Size.x), 0);
            case EDirectionType.LEFT:
                return new Vector2Int(0, Mathf.FloorToInt(Size.y));
            case EDirectionType.RIGHT:
                return new Vector2Int(-1, Mathf.FloorToInt(Size.y));
            default:
                return Vector2Int.zero;
        }
    }

#if UNITY_EDITOR
    protected override void OnChangeInEditor()
    {
        base.OnChangeInEditor();
        if (isHaveShutter)
        {
            if (shutter == null && shutterPrefab) shutter = PrefabUtility.InstantiatePrefab(shutterPrefab, Renderer.transform) as Shutter;
            if (shutter) shutter.SetStatus(isShutterOpen);
        }
        else
        {
            if (shutter) DestroyImmediate(shutter.gameObject);
        }

        if (isHaveSwither)
        {
            if (swither == null && switherPrefab) swither = PrefabUtility.InstantiatePrefab(switherPrefab, model.transform) as GateSwitcher;
            if (swither) swither.SetMaterial(GetMaterial(colorConfig.GetData(eSwitherColorType)));
        }
        else
        {
            if (swither) DestroyImmediate(swither.gameObject);
        }
    }
#endif
}