using System.Collections.Generic;
using TheBeginning.LevelSystem;
using TheBeginning.UI;
using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.Variables;

public class LevelMap : Level
{
    [Header("Config")] [SerializeField] private IntegerEvent timeSetupEvent;
    [SerializeField] private EventNoParam startTimeEvent;
    [SerializeField] private EventNoParam timeUpEvent;
    [SerializeField] private BooleanVariable timePasueEvent;
    [SerializeField] private int timePlay = 100;
    [SerializeField] private EventNoParam preStartEvent;
    [SerializeField] private BooleanVariable isStarttingLevel;
    [SerializeField] private Camera cameraMain;
    [SerializeField] private bool isNewElements;
    [SerializeField] private IntegerEvent destroyBlockEvent;

    [SerializeField]
    private UnlockNewElementData unlockNewElementData;

    [SerializeField]
    private EElementType elementType;

    [Header("Win-Lose")] [SerializeField] FloatEvent winLevelEvent;
    [SerializeField] FloatEvent loseLevelEvent;
    [SerializeField] StringVariable loseBy;

    [Header("In Level")] [SerializeField] private TouchSystem touchPlacement;
    [SerializeField] private TouchSystem touchBlock;
    [SerializeField] private MapSystem mapSystem;

    [Header("Collection")] [SerializeField]
    private BlockCollection blockCollection;

    [SerializeField] private GateCollection gateCollection;

    [Header("Freeze")] [SerializeField] private FreezeSystem freezeSystem;

    [Header("Booster")] [SerializeField] private BooleanEvent onStartHammerBoosterEvent;
    [SerializeField] private OnDoHammerBoosterEvent onDoHammerBoosterEvent;

    [SerializeField] private BooleanEvent onStartSuckBoosterEvent;
    [SerializeField] private OnDoSuckBoosterEvent onDoSuckBoosterEvent;

    [SerializeField] private bool isShowCTAButton = false;
    [SerializeField] private BooleanEvent showCTAButtonEvent;

    private BlockColor _blockSellect = null;
    private Vector3 _lastPosition = Vector3.zero;

    private int _blockBreakCount = 10;

    private bool _isStartHammerBooster = false;
    private bool _isDoingHammer = false;

    private bool _isStartSuckBooster = false;
    private bool _isDoingSuck = false;

    private bool _isPlaying = false;
    public FreezeSystem FreezeSystem => freezeSystem;
    public Camera CameraMain => cameraMain;
    public int TimePlay => timePlay;
    public int TotalBlock => _totalBlock;
    public int TotalBlockClear => _blockBreakCount;
    public MapSystem MapSystem => mapSystem;

    private int _totalBlock = 0;
    private List<Gate> _listGateShutter = new List<Gate>(); 
    private List<BlockColor> _listBlockCheck = new List<BlockColor>(); 
    public override void OnEnable()
    {
        base.OnEnable();
        Initialize();
    }

    public override void OnDisable()
    {
        base.OnDisable();
        CleanUp();
    }

    public override void Initialize()
    {
        base.Initialize();
        _isPlaying = true;
        touchBlock.ActionBegin += OnTouchBlockBegin;
        touchPlacement.ActionEnd += OnTouchPlacementEnd;
        if (onStartHammerBoosterEvent) onStartHammerBoosterEvent.OnRaised += OnStartHammerBooster;
        if (onStartSuckBoosterEvent) onStartSuckBoosterEvent.OnRaised += OnStartSuckBooster;

        _blockSellect = null;
        if (timeSetupEvent) timeSetupEvent.Raise(timePlay);
        if (destroyBlockEvent) destroyBlockEvent.OnRaised += OnDestroyBlock;
        if (timeUpEvent) timeUpEvent.OnRaised += OnTimeUp;
        if (isStarttingLevel) isStarttingLevel.Value = false;

        _isStartHammerBooster = false;
        _isDoingHammer = false;
        _isStartSuckBooster = false;
        _isDoingSuck = false;

        freezeSystem?.CheckNull();

        showCTAButtonEvent?.Raise(isShowCTAButton);
    }

    private void Start()
    {
        if (blockCollection)
        {
            App.Delay(0.5f, () =>
            {
                if (isNewElements && unlockNewElementData)
                {
                    unlockNewElementData.OnShowPopupUnlockNewElement(elementType, false);
                }
                if (preStartEvent)
                {
                    var popupUnlockNewElement = PopupManager.Get<UnlockNewElementPopup>();
                    if (popupUnlockNewElement != null && popupUnlockNewElement.isActiveAndEnabled) popupUnlockNewElement.ActionHide += () => preStartEvent?.Raise();
                    else preStartEvent?.Raise();
                }
            });

            _totalBlock = 0;
            blockCollection.OnAdd += OnAddBlock;
            _blockBreakCount = 0;
            foreach (var block in blockCollection.List)
            {
                block.ActionOnDead += OnBlockBreak;
                block.ActionOnDestroy += OnBlockDestroy;

                if (block is BlockLayer) _totalBlock += 2;
                else _totalBlock++;
            }
        }

        _listGateShutter.Clear();
        if (gateCollection) 
        {
            foreach(var gate in gateCollection.List) 
            {
                if (gate.IsHaveShutter)
                {
                    foreach(var block in blockCollection.GetBlock(gate.EColorType))
                    {
                        if (!block.IsHaveStar) _listBlockCheck.Add(block);
                        else if(gate.IsHaveStar) _listBlockCheck.Add(block);
                    }
                    _listGateShutter.Add(gate);
                }
            }
        }
    }

    public override void FixedTick()
    {
        base.FixedTick();
        if (_blockSellect && _blockSellect.IsAlive)
        {
            var pos = _isMovingEnd ? _positionEnd : touchPlacement.GetPointPosition();
            _blockSellect.Move(pos);

            var cell = GetCell(_blockSellect.Rb.position);
            if (cell) _blockSellect.SetCellOnGrid(cell);
        }
    }

    public void OnTouchBlockBegin(Vector3 position)
    {
        if (_isDoingHammer || _isDoingSuck) return;
        var blockSellect = touchBlock.GetToucher();
        if (blockSellect)
        {
            _blockSellect = touchBlock.GetToucher().GetComponentInParent<BlockColor>();
            if (_isMovingEnd && _blockMovingEnd == _blockSellect) return;
            if (_blockSellect && _blockSellect.IsAlive)
            {
                if (_isStartHammerBooster && !_isDoingHammer)
                {
                    _isDoingHammer = true;
                    var _blockTartget = _blockSellect;
                    _blockTartget.ActiveOutline(true);
                    _blockSellect = null;

                    onDoHammerBoosterEvent?.Raise((_blockTartget.Model, null, () =>
                    {
                        if (_blockTartget.IsAlive)
                        {
                            _blockTartget.ActiveOutline(false);
                            if (!_blockTartget.IsFrezering) _blockTartget.OnHammerBoosterHit();
                            else
                            {
                                freezeSystem.OnFreezerCrack(_blockTartget);
                            }
                        }

                        _isStartHammerBooster = false;
                        _isDoingHammer = false;
                        _blockTartget = null;
                    }));
                    return;
                }

                if (_isStartSuckBooster && !_isDoingSuck)
                {
                    _isDoingSuck = true;
                    var _blockTartget = _blockSellect;
                    _blockSellect = null;

                    var listBlockTarget = new List<BlockColor>();
                    var listTarget = new List<GameObject>();

                    if (_blockTartget.IsCanMove)
                    {
                        var listBlockColor = blockCollection.GetBlock(_blockTartget.EColorType);
                        foreach (var block in listBlockColor)
                            if (block.IsCanMove)
                                listBlockTarget.Add(block);
                    }
                    else
                    {
                        if (_blockTartget.IsFrezering)
                        {
                            listBlockTarget.Add(_blockTartget);
                        }
                        else
                        {
                            listBlockTarget = blockCollection.GetBlock(_blockTartget.EColorType);
                        }
                    }

                    foreach (var block in listBlockTarget)
                    {
                        if (block.IsAlive)
                        {
                            block.ActiveOutline(true);
                            if (block.IsCanMove) listTarget.Add(block.Model);
                        }
                    }

                    onDoSuckBoosterEvent?.Raise((_blockTartget.Model, listTarget, null,
                        () =>
                        {
                            var listBlockIgnore = new List<BlockColor>();
                            foreach (var block in listBlockTarget)
                            {
                                if (block.IsCanMove) block.OnPreSuckBoosterHit();
                                else
                                {
                                    listBlockIgnore.Add(block);
                                    if (block.IsFrezering)
                                    {
                                        freezeSystem.OnFreezerCrack(block);
                                    }
                                    else if (block.IsChanning)
                                    {
                                        block.RemoveBlockChainLink();
                                    }
                                    else if (block.IsRoping) { block.RemoveBlockRopeLink(); }

                                    block.ActiveOutline(false);
                                }
                            }

                            if (listBlockIgnore.Count > 0)
                            {
                                foreach (var blockIgnore in listBlockIgnore)
                                {
                                    listBlockTarget.Remove(blockIgnore);
                                }

                                listBlockIgnore.Clear();
                            }
                        },
                        () =>
                        {
                            foreach (var block in listBlockTarget) block.OnSuckBoosterHit();

                            _isStartSuckBooster = false;
                            _isDoingSuck = false;
                            listBlockTarget.Clear();
                            listTarget.Clear();
                            _blockTartget = null;
                        }));
                    return;
                }

                _blockSellect.BeginSelect(position);
                if (isStarttingLevel && !isStarttingLevel.Value)
                {
                    isStarttingLevel.Value = true;
                    if (startTimeEvent) startTimeEvent?.Raise();
                }
            }

            _lastPosition = position;
        }
    }

    private bool _isMovingEnd;
    private Vector3 _positionEnd;
    private BlockColor _blockMovingEnd;
    
    public void OnTouchPlacementEnd(Vector3 position)
    {
        if (_blockSellect && _blockSellect.IsAlive)
        {
            _isMovingEnd = true;
            _positionEnd = position;
            _blockMovingEnd = _blockSellect;
            var time = _blockSellect.Rb.velocity.magnitude > 2f ? (position - _blockSellect.Rb.position).magnitude / 20f : 0;
            App.Delay(time, () =>
            {
                if (_blockMovingEnd && _blockMovingEnd.IsAlive) _blockMovingEnd.EndSellect(GetGridPosition(_blockMovingEnd.Rb.position));
                _isMovingEnd = false;
                if(_blockSellect == _blockMovingEnd) _blockSellect = null;
                _blockMovingEnd = null;
            });
        }
    }

    public Vector3 GetGridPosition(Vector3 position)
    {
        if (mapSystem)
        {
            var cell = mapSystem.GetCell(position);
            if (cell)
            {
                return cell.GetPostion();
            }
        }

        return touchPlacement.LastPosition;
    }

    public CellGrid GetCell(Vector3 position)
    {
        if (mapSystem) return mapSystem.GetCell(position);
        return null;
    }

    public CellGrid GetCell(Vector2Int coordinate)
    {
        return mapSystem.GetCell(coordinate);
    }

    void OnBlockBreak(BlockColor blockColor)
    {
        _blockBreakCount++;
        freezeSystem?.OnChange();
        var blockAlive = blockCollection.Count - _blockBreakCount;
        if (blockAlive <= 0)
        {
            Win();
            return;
        }

        if (_listGateShutter.Count > 0 && blockAlive <= _listBlockCheck.Count)
        {
            bool isCheck = true;
            foreach (var block in blockCollection.GetBlockAlive())
            {
                if (block.IsCanMove && !_listBlockCheck.Contains(block)) 
                {
                    isCheck = false;
                    break;
                }
            }

            if (isCheck && _isPlaying)
            {
                var listGateOpen = _listGateShutter.FindAll(x => x.IsOpen);
                if(listGateOpen.Count == 0) 
                {
                    LoseGate();
                    return;
                }

                bool isCanAction = false;
                foreach(var block in _listBlockCheck) 
                {
                    if (block.IsCanMove && listGateOpen.FindAll(x=> x.Color == block.Color).Count > 0) 
                    {
                        isCanAction = true;
                        break;
                    }
                }
                if (!isCanAction) LoseGate();
                
                void LoseGate() 
                {
                    loseBy.Value = TrackingEnum.ELevelLoseBy.shutter_gate_closed.ToString();
                    Lose(2f);
                }
            }
        }
    }

    void OnBlockDestroy()
    {
        loseBy.Value = TrackingEnum.ELevelLoseBy.bomb_explode.ToString();
        Lose();
    }

    void OnAddBlock(BlockColor block)
    {
        block.ActionOnDead += OnBlockBreak;

        App.Delay(0.15f, () =>
        {
            foreach (var gate in gateCollection.List)
            {
                if (gate.IsHaveShutter)
                {
                    if (block.EColorType == gate.EColorType)
                    {
                        if (!block.IsHaveStar) _listBlockCheck.Add(block);
                        else if (gate.IsHaveStar) _listBlockCheck.Add(block);
                    }
                }
            }
        });
    }
    void OnTimeUp()
    {
        loseBy.Value = TrackingEnum.ELevelLoseBy.out_of_time.ToString();
        Lose();
    }

    void OnDestroyBlock(int count) 
    {
        App.Delay(1f, () =>
        {
            var listBlockAlive = blockCollection.GetBlockAlive();
            var blockActiveCount = listBlockAlive.Count;
            int currentCount = count > blockActiveCount ? blockActiveCount : count;
            for (int i = 0; i < count; i++)
            {
                listBlockAlive[i].OnHammerBoosterHit();
            }
        });
    }

    public void Win()
    {
        if (!_isPlaying) return;
        _isPlaying = false;
        timePasueEvent?.Raise(true);
        winLevelEvent?.Raise(1.5f);
    }

    public void Lose(float time = 1f)
    {
        if (!_isPlaying) return;
        _isPlaying = false;
        loseLevelEvent?.Raise(time);
    }

    public override void CleanUp()
    {
        base.CleanUp();
        touchBlock.ActionBegin -= OnTouchBlockBegin;
        touchPlacement.ActionEnd -= OnTouchPlacementEnd;
        if (blockCollection)
        {
            foreach (var block in blockCollection.List)
            {
                block.ActionOnDead -= OnBlockBreak;
                block.ActionOnDestroy -= OnBlockDestroy;
            }

            blockCollection.Clear();
            blockCollection.OnAdd -= OnAddBlock;
        }

        if (gateCollection) gateCollection.Clear();
        if (timeUpEvent) timeUpEvent.OnRaised -= OnTimeUp;
        if (onStartHammerBoosterEvent) onStartHammerBoosterEvent.OnRaised -= OnStartHammerBooster;
        if (onStartSuckBoosterEvent) onStartSuckBoosterEvent.OnRaised -= OnStartSuckBooster;
        if (destroyBlockEvent) destroyBlockEvent.OnRaised -= OnDestroyBlock;
    }

    #region booster
    void OnStartHammerBooster(bool isStart)
    {
        _isStartHammerBooster = isStart;
    }

    void OnStartSuckBooster(bool isStart)
    {
        _isStartSuckBooster = isStart;
    }
    #endregion

#if UNITY_EDITOR
    protected override void StartLevelInEditor()
    {
        base.StartLevelInEditor();
        freezeSystem?.CheckNull();
    }
#endif
}