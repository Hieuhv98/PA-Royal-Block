using System;
using System.Collections.Generic;
using TheBeginning.Data;
using TheBeginning.UI;
using UnityEngine;
using UnityEngine.Serialization;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Misc;
using VirtueSky.Variables;

public abstract class BoosterData : ScriptableObject
{
    [Header("Core")] public string iD;
    [SerializeField] private bool isShowGuid;
    [FormerlySerializedAs("boosterType")] public EElementType elementType;
    [SerializeField] private Sprite boosterNameSprite;
    public Sprite boosterIconBuy;
    public int priceBuyBooster;
    public Sprite boosterIconGuid;
    public string boosterBuyDescription;
    public string boosterDescription;
    public string boosterName;
    public int defaultValue;
    public float timeCoolDown;
    public IntegerVariable balanceAmount;
    [Header("Data")] [SerializeField] private LevelModeData levelModeData;
    [SerializeField] private BoosterManager boosterManager;
    [SerializeField] private List<BoosterData> boosterDataRelatives;
    [SerializeField] private UnlockNewElementData unlockNewElementData;
    [SerializeField] private IntegerVariable currentLevel;
    [SerializeField] private int levelUnlock;
    [SerializeField] private int amountBoosterCanBuy;
    [SerializeField] private int amountBoosterCanAddWatchAds;
    [Header("Sound")] [SerializeField] protected PlaySfxEvent playSfxEvent;
    [SerializeField] protected StopSfxEvent stopSfxEvent;
    [SerializeField] private SoundData soundStartUseBooster;
    [SerializeField] private SoundData soundBoosterComplete;
    [Header("Tracking")] public TrackingEnum.EResourceName resourceName;
    [Header("Mission")]
    [SerializeField] protected IntegerVariable useBoosterMissionCount;
    public Action OnBoosterUnlockedEvent;
    public bool IsProcessing => _isProcessing;
    public int LevelUnlock => levelUnlock;
    protected Action<int> onValueChange;
    protected Action onCompleteActionUse;
    protected Action onStartActionUse;
    protected Action<float> onProcessingActionUse;
    protected Action onStopActionUse;
    protected Vector3 uiWorldPosition;
    private bool _isProcessing;
    private DelayHandle _delayHandle;
    private SoundCache _soundStartUseBoosterCache;
    private SoundCache _soundBoosterCompleteCache;

    public int AmountBoosterCanBuy => amountBoosterCanBuy;
    public int AmountBoosterCanAddWatchAds => amountBoosterCanAddWatchAds;
    [ContextMenu("ResetID")]
    void UpdateID() => iD = this.name;

    protected virtual void OnDisable()
    {
        _isProcessing = false;
    }

    public event Action<int> OnValueChange
    {
        add { onValueChange += value; }
        remove { onValueChange -= value; }
    }

    public event Action OnStartActionUse
    {
        add { onStartActionUse += value; }
        remove { onStartActionUse -= value; }
    }

    public event Action OnCompleteActionUse
    {
        add { onCompleteActionUse += value; }
        remove { onCompleteActionUse -= value; }
    }

    public bool IsUnlocked => currentLevel.Value >= levelUnlock;

    public virtual void SetBoosterUnlocked()
    {
        balanceAmount.Add(defaultValue);
        UserData.SetBoosterUnlock(iD + "Unlock", true);
        OnBoosterUnlockedEvent?.Invoke();
    }

    public Sprite BoosterNameIcon() => boosterNameSprite;

    public Sprite BoosterIcon => levelModeData.GetLevelData().getLevelTypeInfor.GetBoosterSprite(elementType);

    public Sprite GetLockIcon => levelModeData.GetLevelData().getLevelTypeInfor.GetBoosterSpriteLock(elementType);

    public int GetAmount() => UserData.GetBoosterAmount(iD, defaultValue);

    public bool IsCanUse() => GetAmount() > 0 && !IsProcessing && IsUnlocked && !IsBoosterRelativeIsUsing();

    public bool IsRunOutOfAmount() => GetAmount() <= 0 && IsUnlocked;

    public bool IsCurrentLevelToUnLock => levelUnlock <= currentLevel.Value && !IsUnlocked;

    bool IsBoosterRelativeIsUsing()
    {
        foreach (var booster in boosterDataRelatives)
        {
            if (booster.IsProcessing)
            {
                return true;
            }
        }

        return false;
    }

    public virtual void OnShowPopupUnlockBooster()
    {
        unlockNewElementData.OnShowPopupUnlockNewElement(elementType, false);
    }

    void OnShowPopupBuyBooster()
    {
        PopupManager.Show<BuyBoosterPopup>(false);
    }

    public void Use(Vector3 worldPosition, Action onStart = null, Action complete = null,
        Action<float> onProcessing = null, Action onStop = null)
    {
        boosterManager.currentUsingBooster = this;
        if (IsCanUse())
        {
            if (isShowGuid)
            {
                PopupManager.Show<BoardBoosterGuidPopup>(false);
            }

            uiWorldPosition = worldPosition;
            onCompleteActionUse += complete;
            onStartActionUse += onStart;
            onProcessingActionUse += onProcessing;
            onStopActionUse += onStop;
            _isProcessing = true;
            OnActionBoosterStart();
        }
        else if (IsRunOutOfAmount())
        {
            OnShowPopupBuyBooster();
        }
    }

    protected void StartCountDownTime()
    {
        if (isShowGuid)
        {
            PopupManager.Hide<BoardBoosterGuidPopup>();
        }

        Common.CallActionAndClean(ref onStartActionUse);
        MinusAmount(1);
        _delayHandle = App.Delay(timeCoolDown, (OnActionBoosterComplete), OnActionBoosterProcessing);
    }

    public virtual void StopUse()
    {
        _delayHandle?.Cancel();
        onCompleteActionUse = null;
        onStartActionUse = null;
        onProcessingActionUse = null;
        _isProcessing = false;
        onStopActionUse?.Invoke();

        if (_soundStartUseBoosterCache != null) stopSfxEvent?.Raise(_soundStartUseBoosterCache);
        if (_soundBoosterCompleteCache != null) stopSfxEvent?.Raise(_soundBoosterCompleteCache);
    }

    protected virtual void OnActionBoosterStart()
    {
        if (soundStartUseBooster) _soundStartUseBoosterCache = playSfxEvent?.Raise(soundStartUseBooster);
        StartCountDownTime();
    }

    public void OnBuyBooster(bool isAds)
    {
        if (!isAds)
        {
        }

        AddAmount(isAds ? amountBoosterCanAddWatchAds : amountBoosterCanBuy);
    }

    protected virtual void OnActionBoosterComplete()
    {
        if (soundBoosterComplete) _soundStartUseBoosterCache = playSfxEvent?.Raise(soundBoosterComplete);
        onProcessingActionUse = null;
        _isProcessing = false;
        Common.CallActionAndClean(ref onCompleteActionUse);
    }

    protected virtual void OnActionBoosterProcessing(float value)
    {
        onProcessingActionUse?.Invoke(value);
    }


    public void MinusAmount(int value)
    {
        int currentValue = GetAmount();
        currentValue -= value;
        ChangeValue(currentValue);
    }

    void ChangeValue(int value)
    {
        UserData.SetBoosterAmount(iD, value);
        balanceAmount.Value = value;
        onValueChange?.Invoke(value);
    }

    public void AddAmount(int value)
    {
        int currentValue = GetAmount();
        currentValue += value;
        ChangeValue(currentValue);
    }
}

public enum EElementType
{
    PauseTimeBooster,
    HammerBooster,
    SuckBooster,
    LayerBlock,
    ArrowBlock,
    BombBlock,
    IceBlock,
    LockedChain,
    StarGate,
    StickBlock,
    ShutterGate,
    RopeBlock,
    ColorPath,
    IceGate,
}