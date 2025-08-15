using DG.Tweening;
using Spine;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.ObjectPooling;
using VirtueSky.Variables;
using VirtueSky.Vibration;

public class BlockColor : ObjectBase
{
    [Header("Config")][SerializeField] private EFixedAxisType eFixedAxisType;
    [SerializeField] private GameObject horizontal;
    [SerializeField] private GameObject vertical;

    [Header("Collection")]
    [SerializeField]
    protected BlockCollection collection;

    [Header("Outline")][SerializeField] private Outline outline;
    [SerializeField] Color outlineColor = Color.white;
    [SerializeField] float outLineWidth = 10f;
    [Header("Bomb")][SerializeField] private bool isHaveBomb;
    [SerializeField] private Bomb bombPrefab;
    [SerializeField] private Bomb bomb;

    [Header("Rope")][SerializeField] private bool isHaveRope;
    [SerializeField] private RopeSystem ropeSystemPrefab;
    [SerializeField] private RopeSystem ropeSystem;
    [SerializeField] List<BlockColor> listBlockRopeLinks = new List<BlockColor>();

    [Header("Chain")][SerializeField] private bool isHaveChain;
    [SerializeField] private ChainSystem chainSytemPrefab;
    [SerializeField] private ChainSystem chainSytem;
    [SerializeField] List<BlockColor> listBlockLinks = new List<BlockColor>();

    [Header("Sticky")][SerializeField] protected bool isHaveSticky;
    [SerializeField] private ConnectionPrefab connectionPrefab;
    [SerializeField] private List<BlockColor> listBlockAttach = new List<BlockColor>();
    [SerializeField] private List<BlockAttachData> listBlockAttachData = new List<BlockAttachData>();

    [Header("Block")] [SerializeField] private EBlockState blockState;
    [SerializeField] private Rigidbody rb;
    [SerializeField] private bool isUpdatePhysics;
    [SerializeField] private int massOrigin = 100;
    [SerializeField] private int massWhenMove = 1;
    [SerializeField] private CollisionDetectionMode detectionModeOrigin = CollisionDetectionMode.Continuous;
    [SerializeField] private CollisionDetectionMode detectionModeWhenMove = CollisionDetectionMode.ContinuousDynamic;
    [SerializeField] private float posYUpWhenStartMin = 1.5f;
    [SerializeField] private float posYUpWhenStartMax = 2.5f;
    [SerializeField] private float posYUpWhenMove = .5f;
    [SerializeField] private float timeMoveUp = .2f;
    [SerializeField] private Ease easeMoveUp = Ease.InOutCubic;
    [SerializeField] private float timeMoveDownMin = .25f;
    [SerializeField] private float timeMoveDownMax = .5f;
    [SerializeField] private Ease easeMoveDown = Ease.OutBounce;
    [SerializeField] private float timeDelayDownWhenStart = 0.5f;
    [SerializeField] private float rotationSpeed = 100f;
    [SerializeField] private float rotationSpeedSmooth = 100f;
    [SerializeField] private float angleRotationHorizontalMax = 5f;
    [SerializeField] private float angleRotationVerticalMax = 5f;
    [SerializeField] private float resetSpeed = 5f;
    [SerializeField] private float smallDirectionThreshold = 5f;
    [SerializeField] private float directionMagnitudeThreshold = 10f;

    [SerializeField] private Vector3Int[] shapeOffsets = new Vector3Int[]
    {
        new Vector3Int(0, 0, 0),
        new Vector3Int(1, 0, 0),
        new Vector3Int(0, 0, 1)
    };

    [SerializeField] private float speed = 1250f;
    [SerializeField] private float speedSmooth = 10f;
    [SerializeField] private float speedMoveToPositionWhenEndSellect = 5f;
    [SerializeField] private Ease easeWhenEndSelect;
    [SerializeField] private int studReward = 1;
    [SerializeField] private EventNoParam preStartLevelEvent;

    [Header("Shake")]
    [SerializeField] private float timeShakeUp = 0.05f;
    [SerializeField] private float timeShakeDown = 0.15f;
    [SerializeField] private float shakeHeight = 0.1f;

    [Header("Audio")] [SerializeField] protected PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundClick;
    [SerializeField] private SoundData soundClickCancel;
    [SerializeField] private SoundData soundClickWhenNotMove;
    [SerializeField] private SoundData soundClickWhenChainClock;
    [SerializeField] private SoundData soundDoSuck;
    [SerializeField] private SoundData soundArrowDoSuck;

    [SerializeField] private int renderQueueWhenMoving = 4050;
    [SerializeField] private int renderQueueWhenSucking = 2050;
    [Header("Fx")] [SerializeField] private ParticleSystem fxBreakPrefabWhenHammerHit;

    [Header("Resources")] [SerializeField] private GameObject resource;
    [Header("Shadow")] [SerializeField] private GameObject shadow;

    [Header("Tutorial")]
    [SerializeField] private GameObject tutorial;

    private Vector3 _direction;
    private Vector3 _beginPosition;

    private Vector3 _offsetSelect;
    private Vector3 _offsetModel;
    protected CellGrid _cellOnGrid;
    protected bool _isChanning = false;
    protected bool _isRoping = false;
    protected bool _isSelected = false;
    protected float _posYOrigin, _posYModelOrigin;
    public Vector3 OffsetSelect => _offsetSelect;
    public bool IsSelected => _isSelected;
    public Rigidbody Rb => rb;
    public Vector3 ModelPositionOnGround => _cellOnGrid.GetPostion() + _offsetModel;

    public Action<BlockColor> ActionOnDead;
    public Action ActionOnBreak;
    public Action ActionOnDestroy;
    public Action<bool> ActionSelect;
    public bool IsMoving => blockState == EBlockState.MOVE;
    public override bool IsCanMove => base.IsCanMove && !_isChanning && !_isRoping;
    public bool IsChanning => _isChanning;
    public bool IsRoping => _isRoping;

    private Dictionary<BlockColor, Vector3> _dicBlockAttachData = new Dictionary<BlockColor, Vector3>();
    public bool IsHaveSticky => isHaveSticky;
    public int StudReward => studReward;
    public List<BlockColor> ListBlockAttach => listBlockAttach;
    private BlockColor _blockAttachMain = null;
    private List<BlockColor> _listBlockAttachGroup = new List<BlockColor>();
    private int _renderQueueOrigin = 2000;
    private Tween _tweenMoveToEndSelect;
    private Tween _tweenMoveUp, _tweenMoveDown, _tweenDelay;
    private bool _isReady = false;

    private Material _materialRender;
    protected float _posYUpToStart;
    protected float _timeDelayDownWhenStart;
    protected bool _isAttaching = false;

    public bool IsCanRotation => !_isAttaching;
    public override void Awake()
    {
        base.Awake();
        preStartLevelEvent.OnRaised += OnPreStartLevel;
        _posYOrigin = transform.position.y;
        _posYModelOrigin = model.transform.position.y;
        collection?.Add(this);
    }

    public override void Start()
    {
        base.Start();
        _offsetModel = model.transform.position / 2;
        _renderQueueOrigin = materialCurrent.renderQueue;
    }
    public virtual void OnPreStartLevel() 
    {
        _isReady = false;
        if(tutorial) tutorial.SetActive(false);
        if (IsCanMove)
        {
            MoveUp(_posYModelOrigin + _posYUpToStart, 0, target: model.transform);
            _tweenDelay = DOVirtual.DelayedCall(_timeDelayDownWhenStart, () =>
            {
                var timeMove = isHaveSticky ? timeMoveDownMin : UnityEngine.Random.Range(timeMoveDownMin, timeMoveDownMax);
                MoveDown(_posYModelOrigin, timeMove, () =>
                {
                    _isReady = true;
                    if (tutorial) tutorial.SetActive(true);
                }, target: model.transform);
                if (UnityEngine.Random.Range(0, 2) == 1) DOVirtual.DelayedCall(timeMove - 0.1f, () => playSfxEvent.Raise(soundClickCancel));
            });
        }
        else _isReady = true;
    }
    public override void Initialize()
    {
        base.Initialize();
        UpdateSimulator(false);
        outline.SetUp(Renderer, outlineColor, outLineWidth);
        ActiveOutline(false);
        blockState = EBlockState.STOP;
        switch (eRotationType)
        {
            case ERotationType.UP:
                UpdatePhysics();
                break;
        }

        if (isHaveSticky)
        {
            _dicBlockAttachData.Clear();
            _blockAttachMain = GetBlockAttachMain(this);
            _listBlockAttachGroup.Clear();
            _listBlockAttachGroup.AddRange(_blockAttachMain.ListBlockAttach);
            _listBlockAttachGroup.Add(_blockAttachMain);
            _listBlockAttachGroup.Remove(this);

            foreach (var blockAttach in _listBlockAttachGroup)
            {
                var offset = GetPostion() - blockAttach.GetPostion();
                _dicBlockAttachData.Add(blockAttach, offset);
                blockAttach.ActionOnDead += OnAttachDead;
            }
        }

        //rb.interpolation = RigidbodyInterpolation.Interpolate;
        ActiveShadow(true);

        resource?.SetActive(false);
        UpdateMass(massOrigin);
        UpdateCollisionDetectionMode(detectionModeOrigin);

        _materialRender = Renderer.material;
        _posYUpToStart = UnityEngine.Random.Range(posYUpWhenStartMin, posYUpWhenStartMax);
        _timeDelayDownWhenStart = timeDelayDownWhenStart;

        _isAttaching = isHaveSticky;
    }

    protected override void OnStarttingLevel(bool value)
    {
        base.OnStarttingLevel(value);
        if (_isAlive && value)
        {
            if (isHaveBomb)
            {
                bomb.SetUp(OnExplosion);
                bomb.Active();
            }
        }
    }

    public override void CleanUp()
    {
        base.CleanUp();
        ActiveOutline(false);
        foreach (var blockAttach in _listBlockAttachGroup)
        {
            blockAttach.ActionOnDead -= OnAttachDead;
        }
        preStartLevelEvent.OnRaised -= OnPreStartLevel;

        _tweenMoveUp.Kill();
        _tweenMoveDown.Kill();
        _tweenDelay.Kill();
    }

    private DelayHandle _delayHandleUnSelect;
    public void SetSelected(bool isSelected)
    {
        _isSelected = isSelected;
        ActionSelect?.Invoke(isSelected);
    }
    public void UnSelect() 
    {
        _delayHandleUnSelect = App.Delay(0.15f, () => SetSelected(false));
    }
    public void CancelUnSelect() { _delayHandleUnSelect?.Cancel(); _delayHandleUnSelect = null; }
    public void BeginSelect(Vector3 position)
    {
        if (!_isReady) return;
        CancelUnSelect();
        if (!_isSelected) SetSelected(true);

        _tweenMoveToEndSelect.Kill(true);
        Vector3 beginPos = new Vector3(position.x, transform.position.y, position.z);
        _offsetSelect = transform.position - beginPos;
        _beginPosition = beginPos;
        UpdateSimulator(true);
        ActiveOutline(true);
        SetState(EBlockState.MOVE);

        if (isHaveSticky) OnAttachBeginMove();

        var sound = IsCanMove ? soundClick : _isChanning ? soundClickWhenChainClock : soundClickWhenNotMove;
        playSfxEvent?.Raise(sound);

        UpdateMass(massWhenMove);
        UpdateCollisionDetectionMode(detectionModeWhenMove);

        if(tutorial) tutorial.SetActive(false);
        UpdateRenderQueue(renderQueueWhenMoving);
        MoveUp(_posYOrigin + posYUpWhenMove, timeMoveUp);
    }

    public void EndSellect(Vector3 position)
    {
        if (!_isReady) return;
        DoRotation(Vector2.zero);
        ActiveOutline(false);
        UpdateRenderQueue(_renderQueueOrigin);
        float timeMove = 1 / speedMoveToPositionWhenEndSellect;
        MoveDown(_posYOrigin, timeMove);
        if (isHaveSticky) OnPreAttachEndMove(timeMove);
        rb.velocity = Vector3.zero;
        _tweenMoveToEndSelect = _isAttaching
            ? rb.DOMove(position, timeMove).SetEase(easeWhenEndSelect)
            : transform.DOMove(position, timeMove).SetEase(easeWhenEndSelect);

        _tweenMoveToEndSelect.OnComplete(() =>
        {
            Stop();
            UpdateSimulator(false);
            SetPosition(position);
            if (isHaveSticky) OnAttachEndMove();
            playSfxEvent?.Raise(soundClickCancel);
            UnSelect();
            DoRotation(Vector2.zero, true);
            Shake(()=>
            {
#if UNITY_ANDROID
                Vibration.VibrateAndroid(10);
#elif UNITY_IOS
                Vibration.VibrateIOS(ImpactFeedbackStyle.Light);
#endif
            });
        });

    }

    public void UpdatePosition(Vector3 position)
    {
        rb.MovePosition(position);
    }

    private Vector3 _velocitySmoothRef;
    private Vector3 _prePosition;

    public void Move(Vector3 position)
    {
        if (!IsCanMove) return;
        if (blockState != EBlockState.MOVE) return;
        Vector3 movePos = new Vector3(position.x, transform.position.y, position.z);
        if (Vector3.Distance(movePos, _beginPosition) <= 0.01f) return;
        var direction = movePos - (transform.position - _offsetSelect);
        float remainingDistance = direction.magnitude,
            maxDistance = speed * Time.fixedDeltaTime;

        Vector3 desiredVelocity = direction.normalized * (remainingDistance <= maxDistance
            ? speed * Mathf.Clamp01(remainingDistance / maxDistance)
            : speed);

        //var velocity = movement.CanMoveTo(desiredVelocity) ? desiredVelocity : direction.normalized;
        var velocity = desiredVelocity;
        DoRotation(velocity);
        rb.velocity = Vector3.SmoothDamp(rb.velocity, velocity, ref _velocitySmoothRef, speedSmooth);
    }

    private Vector3 currentRotation = Vector3.zero;
    void DoRotation(Vector3 direction, bool forceReset = false)
    {
        if (!IsCanRotation) return;

        if (forceReset)
        {
            ResetRotationToDefault();
            return;
        }

        if (direction.magnitude < smallDirectionThreshold)
        {
            SmoothResetRotation();
            return;
        }

        ApplyDirectionalRotation(direction);
    }

    private void ResetRotationToDefault()
    {
        currentRotation = new Vector3(0, transform.eulerAngles.y, 0);
        transform.rotation = Quaternion.Euler(currentRotation);
    }

    private void SmoothResetRotation()
    {
        currentRotation.x = Mathf.LerpAngle(currentRotation.x, 0f, Time.deltaTime * resetSpeed);
        currentRotation.z = Mathf.LerpAngle(currentRotation.z, 0f, Time.deltaTime * resetSpeed);
        currentRotation.y = transform.eulerAngles.y;
        transform.rotation = Quaternion.Euler(currentRotation);
    }

    private void ApplyDirectionalRotation(Vector3 direction)
    {
        Vector3 normalizedDirection = direction.normalized;
        float targetRotationX = 0f;
        float targetRotationZ = 0f;

        if (Mathf.Abs(normalizedDirection.x) > Mathf.Abs(normalizedDirection.z))
            targetRotationZ = normalizedDirection.x > 0 ? -angleRotationHorizontalMax : angleRotationHorizontalMax;
        else
            targetRotationX = normalizedDirection.z > 0 ? angleRotationVerticalMax : -angleRotationVerticalMax;

        AdjustRotationForFixedAxis(ref targetRotationX, ref targetRotationZ);

        float smoothRotationSpeed = direction.magnitude < directionMagnitudeThreshold ? rotationSpeedSmooth : direction.magnitude;

        currentRotation.x = Mathf.LerpAngle(currentRotation.x, targetRotationX, Time.deltaTime * smoothRotationSpeed);
        currentRotation.z = Mathf.LerpAngle(currentRotation.z, targetRotationZ, Time.deltaTime * smoothRotationSpeed);
        currentRotation.y = transform.eulerAngles.y;

        transform.rotation = Quaternion.Euler(currentRotation);
    }

    private void AdjustRotationForFixedAxis(ref float targetRotationX, ref float targetRotationZ)
    {
        switch (eFixedAxisType)
        {
            case EFixedAxisType.HORIZONTAL:
                if (eRotationType == ERotationType.RIGHT || eRotationType == ERotationType.LEFT)
                    targetRotationX = 0f;
                else if (eRotationType == ERotationType.UP || eRotationType == ERotationType.DOWN)
                    targetRotationZ = 0f;
                break;

            case EFixedAxisType.VERTICAL:
                if (eRotationType == ERotationType.RIGHT || eRotationType == ERotationType.LEFT)
                    targetRotationZ = 0f;
                else if (eRotationType == ERotationType.UP || eRotationType == ERotationType.DOWN)
                    targetRotationX = 0f;
                break;
        }
    }


    void Stop()
    {
        SetState(EBlockState.STOP);
        rb.velocity = Vector3.zero;
        UpdateMass(massOrigin);
        UpdateCollisionDetectionMode(detectionModeOrigin);
        _velocitySmoothRef = Vector3.zero;
    }

    public void Shake(Action actionComplete = null) 
    {
        MoveUp(_posYOrigin + shakeHeight, timeShakeUp, () =>
        {
            MoveDown(_posYOrigin, timeShakeUp, () => 
            {
                actionComplete?.Invoke();
            });
        });
    }

    public void MoveUp(float position, float time, Action actionComplete = null, Transform target = null) 
    {
        if (!IsCanMove) return;
        if (target == null) target = transform;
        _tweenMoveUp.Kill();
        _tweenMoveDown.Kill();
        if (time <= 0) 
        {
            target.position = new Vector3(target.position.x, position, target.position.z);
            actionComplete?.Invoke();
            return;
        }

        _tweenMoveUp = target.DOMoveY(position, time).SetEase(easeMoveUp).OnComplete(() =>
        {
            target.position = new Vector3(target.position.x, position, target.position.z);
            actionComplete?.Invoke();
        });
    }
    public void MoveDown(float position, float time, Action actionComplete = null, Transform target = null) 
    {
        if (!IsCanMove) return;
        if(target == null) target = transform;
        _tweenMoveDown.Kill();
        _tweenMoveDown.Kill();
        _tweenMoveDown = target.DOMoveY(position, time).SetEase(easeMoveDown).OnComplete(() =>
        {
            target.position = new Vector3(target.position.x, position, target.position.z);
            actionComplete?.Invoke();
        });
    }
    public void SetState(EBlockState state) => blockState = state;
    void UpdateSimulator(bool isActive) => rb.isKinematic = !isActive;
    public void UpdateMass(int mass) => rb.mass = mass;
    public void UpdateCollisionDetectionMode(CollisionDetectionMode mode) => rb.collisionDetectionMode = mode;

    public void ActiveOutline(bool isActive)
    {
        outline.SetActive(isActive);
    }

    public void ActiveShadow(bool isActive)
    {
        if (shadow) shadow.SetActive(isActive);
    }

    public void SetCellOnGrid(CellGrid cell)
    {
        _cellOnGrid = cell;
    }

    public virtual void OnHammerBoosterHit()
    {
        if (IsFrezering)
        {
            return;
        }

        if (_isChanning)
        {
            RemoveBlockChainLink();
            return;
        }
        if (_isRoping) 
        {
            RemoveBlockRopeLink();
            return;
        }

        if (fxBreakPrefabWhenHammerHit)
        {
            var fx = fxBreakPrefabWhenHammerHit.Spawn();
            fx.transform.position = GetCenterPosition();
            var listParticleSystemRenderer = fx.GetComponentsInChildren<ParticleSystemRenderer>().ToList();
            foreach (var particleSystemRenderer in listParticleSystemRenderer)
            {
                particleSystemRenderer.material = materialCurrent;
            }

            fx.Play();
        }

        Dead();
        Break();
    }

    public virtual void OnPreSuckBoosterHit()
    {
    }

    public virtual void OnSuckBoosterHit()
    {
        Dead();
        Break();
    }

    public void RemoveBlockChainLink()
    {
        var blockTarget = listBlockLinks.FirstOrDefault(x => x.IsAlive);
        if (blockTarget)
        {
            listBlockLinks.Remove(blockTarget);
            chainSytem.OnRemoveBlock(blockTarget);
            return;
        }
    }

    public void RemoveBlockRopeLink()
    {
        var blockTarget = listBlockRopeLinks.FirstOrDefault(x => x.IsAlive);
        if (blockTarget)
        {
            listBlockRopeLinks.Remove(blockTarget);
            ropeSystem.OnRemoveBlock(blockTarget);
            return;
        }
    }

    List<Renderer> _listMesh = new List<Renderer>();

    public virtual void DoSucked()
    {
        if (isHaveSticky) 
        {
            foreach (var blockAttach in _listBlockAttachGroup)
            {
                blockAttach.SetSelected(false);
            }
        }
        MoveDown(_posYOrigin, 0);
        DoRotation(Vector2.zero, true);
        resource?.SetActive(true);
        var sound = eFixedAxisType == EFixedAxisType.NONE ? soundDoSuck : soundArrowDoSuck;
        if (sound != null && sound.GetAudioClip() != null)
        {
            playSfxEvent?.Raise(sound);
        }

        Dead();

        ActiveOutline(false);
        _listMesh = GetComponentsInChildren<Renderer>().ToList();
        foreach (var mesh in _listMesh)
        {
            foreach (var material in mesh.materials)
            {
                material.renderQueue = renderQueueWhenSucking;
            }
        }

        UpdateSimulator(false);
    }

    public virtual void DoSuckComplete()
    {
        foreach (var mesh in _listMesh)
        {
            if (mesh)
            {
                foreach (var material in mesh.materials)
                {
                    material.renderQueue = _renderQueueOrigin;
                }
            }
        }

        outline.Reset();
        Break();
    }

    public virtual void Break()
    {
        collection.Remove(this);
        model.gameObject.SetActive(false);
        ActionOnBreak?.Invoke();
    }

    public override void Dead()
    {
        base.Dead();
        if (isHaveSticky)
        {
            var levelMap = GetComponentInParent<LevelMap>();
            EndSellect(levelMap.GetGridPosition(rb.position));
            foreach (var blockAttach in listBlockAttach) 
            {
                blockAttach.Rb.velocity = Vector3.zero;
                blockAttach.RemoveAttach(this);
            }
            UnAttachAll();
        }

        if (isHaveBomb && bomb) bomb.DoDestroy();
        ActiveShadow(false);
        SetSelected(false);
        ActionOnDead?.Invoke(this);
    }

    public void UpdateRenderQueue(int renderQueue) { if(_materialRender) _materialRender.renderQueue = renderQueue; }
    public void UpdateChaning(bool isChaning)
    {
        _isChanning = isChaning;
    }
    public void UpdateRoping(bool isRoping)
    {
        _isRoping = isRoping;
    }

    public void UpdateAttach()
    {
        this.isHaveSticky = listBlockAttach.Count > 0;
    }

    BlockColor GetBlockAttachMain(BlockColor block)
    {
        if (_blockAttachMain == null)
        {
            int attachCount = block.ListBlockAttach.Count;
            BlockColor blockAttachMain = null;
            foreach (var blockAttach in listBlockAttach)
            {
                if (blockAttach.ListBlockAttach.Count > attachCount)
                {
                    attachCount = blockAttach.ListBlockAttach.Count;
                    blockAttachMain = blockAttach;
                }
            }

            if (blockAttachMain == null)
            {
                _blockAttachMain = block;
                return block;
            }

            var blockAttachMainNext = GetBlockAttachMain(blockAttachMain);
            if (blockAttachMainNext == null)
            {
                _blockAttachMain = blockAttachMain;
                return blockAttachMain;
            }

            _blockAttachMain = GetBlockAttachMain(blockAttachMainNext);
        }

        return _blockAttachMain;
    }

    public void OnAttachBeginMove()
    {
        foreach (var blockAttach in _listBlockAttachGroup)
        {
            blockAttach.UpdateMass(massWhenMove);
            blockAttach.UpdateCollisionDetectionMode(detectionModeWhenMove);
            blockAttach.UpdateSimulator(true);
            blockAttach.ActiveOutline(true);
            blockAttach.SetState(EBlockState.MOVE);
            blockAttach.CancelUnSelect();
            blockAttach.SetSelected(true);
            blockAttach.UpdateRenderQueue(renderQueueWhenMoving);
            blockAttach.MoveUp(_posYOrigin + posYUpWhenMove, timeMoveUp);
        }
    }

    public void OnPreAttachEndMove(float timeMoveDown) 
    {
        foreach (var blockAttach in _listBlockAttachGroup)
        {
            blockAttach.ActiveOutline(false);
            blockAttach.UpdateRenderQueue(_renderQueueOrigin);
            blockAttach.MoveDown(_posYOrigin, timeMoveDown);
        }
    }
    public void OnAttachEndMove()
    {
        foreach (var blockAttach in _listBlockAttachGroup)
        {
            blockAttach.UpdateSimulator(false);
            blockAttach.SetPosition(GetPostion() - _dicBlockAttachData[blockAttach]);
            blockAttach.SetState(EBlockState.STOP);
            blockAttach.UpdateMass(massOrigin);
            blockAttach.UpdateCollisionDetectionMode(detectionModeOrigin);
            blockAttach.SetSelected(false);
            blockAttach.Shake();
        }
    }

    protected void OnAttachDead(BlockColor block)
    {
        if (_isAlive)
        {
        }
    }

    public BlockAttachData GetBlockAttachData(BlockColor block) => listBlockAttachData.Find(x => x.Block == block);
    public bool ContainsBlockAttachData(BlockColor block) => GetBlockAttachData(block) != null;

    public void AddAttach(BlockColor block)
    {
        if (block == null) return;
        if (!listBlockAttach.Contains(block))
        {
            listBlockAttach.Add(block);
            SetAttach(block);
            UpdateAttach();
        }
    }

    public void RemoveAttach(BlockColor block)
    {
        if (block == null) return;
        if (listBlockAttach.Contains(block))
        {
            listBlockAttach.Remove(block);
            UnAttach(block);
            UpdateAttach();
            _isAttaching = listBlockAttach.Count > 0;
        }
    }

    void SetAttach(BlockColor block)
    {
        if (block == null) return;
        if (ContainsBlockAttachData(block)) return;

        var fixedJoint = gameObject.AddComponent<FixedJoint>();
        fixedJoint.connectedBody = block.Rb;

#if UNITY_EDITOR
        var connection = PrefabUtility.InstantiatePrefab(connectionPrefab, transform) as ConnectionPrefab;
#else
        var connection = Instantiate(connectionPrefab, transform);
#endif
        connection.SetMaterial(materialCurrent);

        listBlockAttachData.Add(new BlockAttachData(block, fixedJoint, connection));
    }

    void UnAttach(BlockColor blockAttach)
    {
        var blockAttachData = GetBlockAttachData(blockAttach);
        if (blockAttachData == null) return;
#if UNITY_EDITOR
        if (blockAttachData.FixedJont) DestroyImmediate(blockAttachData.FixedJont, true);
        if (blockAttachData.Connection) DestroyImmediate(blockAttachData.Connection.gameObject);
#else
        if (blockAttachData.FixedJont) Destroy(blockAttachData.FixedJont);
        if (blockAttachData.Connection) Destroy(blockAttachData.Connection.gameObject);
#endif
    }

    protected void UnAttachAll()
    {
        foreach (var blockAttach in listBlockAttach)
        {
            UnAttach(blockAttach);
        }

        listBlockAttach.Clear();
        listBlockAttachData.Clear();
    }
    void UpdatePhysics() 
    {
        RigidbodyConstraints constraintsHorizontal =
                RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezeRotation;
        RigidbodyConstraints constraintsVertical =
            RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezeRotation;
        switch (eRotationType)
        {
            case ERotationType.RIGHT:
                constraintsHorizontal = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ |
                                        RigidbodyConstraints.FreezeRotation;
                constraintsVertical = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionX |
                                      RigidbodyConstraints.FreezeRotation;
                break;
            case ERotationType.LEFT:
                constraintsHorizontal = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ |
                                        RigidbodyConstraints.FreezeRotation;
                constraintsVertical = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionX |
                                      RigidbodyConstraints.FreezeRotation;
                break;
            case ERotationType.UP:
                constraintsHorizontal = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionX |
                                        RigidbodyConstraints.FreezeRotation;
                constraintsVertical = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ |
                                      RigidbodyConstraints.FreezeRotation;
                break;
            case ERotationType.DOWN:
                constraintsHorizontal = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionX |
                                        RigidbodyConstraints.FreezeRotation;
                constraintsVertical = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ |
                                      RigidbodyConstraints.FreezeRotation;
                break;
        }

        switch (eFixedAxisType)
        {
            case EFixedAxisType.NONE:
                rb.constraints = RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezeRotation;
                break;
            case EFixedAxisType.HORIZONTAL:
                if (horizontal) horizontal.SetActive(true);
                rb.constraints = constraintsHorizontal;
                break;
            case EFixedAxisType.VERTICAL:
                if (vertical) vertical.SetActive(true);
                rb.constraints = constraintsVertical;
                break;
        }
    }
#if UNITY_EDITOR
    protected override void OnChangeInEditor()
    {
        base.OnChangeInEditor();

        if (Application.isPlaying) return;
        if (horizontal) horizontal.SetActive(false);
        if (vertical) vertical.SetActive(false);
        UpdatePhysics();

        if (isHaveChain)
        {
            if (chainSytem == null)
                chainSytem = PrefabUtility.InstantiatePrefab(chainSytemPrefab, Renderer.transform) as ChainSystem;
            chainSytem.transform.parent = Renderer.transform;
            chainSytem.SetBlock(this);
            chainSytem.UpdateUI(listBlockLinks.Count);

            if (listBlockLinks.Count > 0)
            {
                var listLinkerNull = new List<BlockColor>();
                for (int i = 0; i < listBlockLinks.Count; i++)
                {
                    if (listBlockLinks[i] == null)
                    {
                        listLinkerNull.Add(listBlockLinks[i]);
                    }
                }

                foreach (var linkerNull in listLinkerNull) listBlockLinks.Remove(linkerNull);

                foreach (var block in listBlockLinks)
                {
                    var listKey = block.GetComponentsInChildren<Key>();
                    if (listKey.Length > 1)
                    {
                        foreach (var key in listKey)
                        {
                            if (key != chainSytem.GetKeyPrefab(block)) DestroyImmediate(key.gameObject, true);
                        }
                    }
                }
            }

            if (listBlockLinks.Count != chainSytem.Count)
            {
                chainSytem.Clear();
            }

            foreach (var block in listBlockLinks) chainSytem.Add(block);
        }
        else
        {
            ChainSystem chainSytem = GetComponentInChildren<ChainSystem>();
            if (chainSytem)
            {
                chainSytem.Clear();
                DestroyImmediate(chainSytem.gameObject);
            }
        }

        if (isHaveSticky)
        {
            if (listBlockAttach.Count != listBlockAttachData.Count)
            {
                foreach (var blockAttach in listBlockAttach)
                {
                    if (blockAttach)
                    {
                        if (!ContainsBlockAttachData(blockAttach))
                        {
                            SetAttach(blockAttach);
                            blockAttach.AddAttach(this);
                        }
                    }
                }

                foreach (var blockAttachData in listBlockAttachData)
                {
                    if (!listBlockAttach.Contains(blockAttachData.Block))
                    {
                        blockAttachData.Block.RemoveAttach(this);
                        UnAttach(blockAttachData.Block);
                    }
                }
            }

            listBlockAttachData.RemoveAll(x => !listBlockAttach.Contains(x.Block));
        }
        else
        {
            foreach (var blockAttach in listBlockAttach)
            {
                if (blockAttach)
                {
                    blockAttach.RemoveAttach(this);
                }
            }

            UnAttachAll();
        }

        if (isHaveBomb)
        {
            if (bomb == null) bomb = PrefabUtility.InstantiatePrefab(bombPrefab, model.transform) as Bomb;
            bomb.transform.position = GetCenterPosition();
        }
        else
        {
            if (bomb) DestroyImmediate(bomb.gameObject);
        }

        if (isHaveRope)
        {
            if (ropeSystem == null)
                ropeSystem = PrefabUtility.InstantiatePrefab(ropeSystemPrefab, Renderer.transform) as RopeSystem;
            ropeSystem.transform.parent = Renderer.transform;
            ropeSystem.SetBlock(this);
            ropeSystem.OnUpdateUI(listBlockRopeLinks.Count);
            ropeSystem.UpdateColor();

            if (listBlockRopeLinks.Count > 0)
            {
                var listLinkerNull = new List<BlockColor>();
                for (int i = 0; i < listBlockRopeLinks.Count; i++)
                {
                    if (listBlockRopeLinks[i] == null)
                    {
                        listLinkerNull.Add(listBlockRopeLinks[i]);
                    }
                }

                foreach (var linkerNull in listLinkerNull) listBlockRopeLinks.Remove(linkerNull);

                foreach (var block in listBlockRopeLinks)
                {
                    var listScissor = block.GetComponentsInChildren<Scissor>();
                    if (listScissor.Length > 1)
                    {
                        foreach (var scissor in listScissor)
                        {
                            if (scissor != ropeSystem.GetScissorPrefab(block)) DestroyImmediate(scissor.gameObject, true);
                        }
                    }
                }
            }

            if (listBlockRopeLinks.Count != ropeSystem.Count)
            {
                ropeSystem.Clear();
            }

            foreach (var block in listBlockRopeLinks) ropeSystem.Add(block);
        }
        else
        {
            RopeSystem ropeSystem = GetComponentInChildren<RopeSystem>();
            if (ropeSystem)
            {
                ropeSystem.Clear();
                DestroyImmediate(ropeSystem.gameObject);
            }
        }
    }

#endif

    void OnExplosion()
    {
        Destroy();
    }

    public virtual void Destroy()
    {
        Break();
        ActionOnDestroy?.Invoke();
    }

    public Vector3Int[] GetShapeOpffsetsCurrent()
    {
        return GetRotatedOffsets(shapeOffsets, (int)model.transform.localEulerAngles.y, Size);
    }

    Vector3Int[] GetRotatedOffsets(Vector3Int[] original, int angle, Vector2 size)
    {
        Quaternion rot = Quaternion.Euler(0, angle, 0);
        Vector3Int[] rotated = new Vector3Int[original.Length];

        var xOffset = 0f;
        var zOffset = 0f;

        switch (angle)
        {
            case 90:
                zOffset = size.y - 1;
                break;
            case 180:
                xOffset = size.x - 1;
                zOffset = size.y - 1;
                break;
            case 270:
                xOffset = size.x - 1;
                break;
        }

        for (int i = 0; i < original.Length; i++)
        {
            Vector3 v = rot * original[i];
            rotated[i] = new Vector3Int(
                Mathf.RoundToInt(v.x + xOffset),
                0,
                Mathf.RoundToInt(v.z + zOffset)
            );
        }

        return rotated;
    }
}

[Serializable]
public class BlockAttachData
{
    [SerializeField] private BlockColor block;
    [SerializeField] private FixedJoint fixedJoint;
    [SerializeField] private ConnectionPrefab connection;

    public BlockColor Block => block;
    public FixedJoint FixedJont => fixedJoint;
    public ConnectionPrefab Connection => connection;

    public BlockAttachData(BlockColor block, FixedJoint fixedJoint, ConnectionPrefab connection)
    {
        this.block = block;
        this.fixedJoint = fixedJoint;
        this.connection = connection;
    }
}

public enum EBlockState
{
    STOP,
    MOVE
}

public enum EFixedAxisType
{
    NONE,
    HORIZONTAL,
    VERTICAL,
}