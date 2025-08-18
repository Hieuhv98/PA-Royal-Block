using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;
using VirtueSky.Audio;
using VirtueSky.Events;

public class BuyBoosterPopup : UIPopup
{
    [Header("Properties")] [SerializeField]
    private BoosterManager boosterManager;

    [SerializeField] private Image buttonBuy;
    [SerializeField] private Image icon;
    [SerializeField] private TextMeshProUGUI priceText;
    [SerializeField] private Image boosterNameIcon;

    [FormerlySerializedAs("titleText")] [SerializeField]
    private TextMeshProUGUI descriptionText;

    [SerializeField] private TextMeshProUGUI nameBoosterText;
    [SerializeField] private Sprite colorCanBuy;
    [SerializeField] private Sprite colorCanNotBuy;
    [Header("Event")] [SerializeField] private EventNoParam addCoinEvent;
    [SerializeField] private EventNoParam minusCoinEvent;

    [Header("Sound")] [SerializeField] private SoundData soundBuyBoosterComplete;

    private bool _isCanBuy;
    private BoosterData _currentBoosterData;
    private bool _isBuyed;

    protected override void OnBeforeShow()
    {
        base.OnBeforeShow();
        _isBuyed = false;
        addCoinEvent.OnRaised += UpdateStatus;
        minusCoinEvent.OnRaised += UpdateStatus;
        Init();
    }

    protected override void OnBeforeHide()
    {
        base.OnBeforeHide();
        addCoinEvent.OnRaised -= UpdateStatus;
        minusCoinEvent.OnRaised -= UpdateStatus;
    }

    void Init()
    {
        _currentBoosterData = boosterManager.currentUsingBooster;
        UpdateStatus();
        icon.sprite = _currentBoosterData.boosterIconBuy;
        descriptionText.text = _currentBoosterData.boosterBuyDescription;
        nameBoosterText.text = _currentBoosterData.boosterName;
        priceText.text = _currentBoosterData.priceBuyBooster.ToString();
        boosterNameIcon.sprite = _currentBoosterData.BoosterNameIcon();
        icon.SetNativeSize();
        boosterNameIcon.SetNativeSize();
    }

    void UpdateStatus()
    {
        _isCanBuy = CoinSystem.GetCurrentCoin() >= _currentBoosterData.priceBuyBooster;
        buttonBuy.sprite = _isCanBuy ? colorCanBuy : colorCanNotBuy;
    }

    public void OnCLickBuyBooster()
    {
        if (_isBuyed) return;
        if (_isCanBuy)
        {
            BuyBooster(false);
        }
    }

    TrackingEnum.EPlacement placementType
    {
        get
        {
            switch (_currentBoosterData.elementType)
            {
                case EElementType.PauseTimeBooster:
                    return TrackingEnum.EPlacement.buy_freeze_time;
                case EElementType.HammerBooster:
                    return TrackingEnum.EPlacement.buy_hammer;
                case EElementType.SuckBooster:
                    return TrackingEnum.EPlacement.buy_magnet;
                default:
                    return TrackingEnum.EPlacement.buy_booster_in_game;
            }
        }
    }

    void BuyBooster(bool isAds)
    {
        _isBuyed = true;
        if (soundBuyBoosterComplete) playSfxEvent?.Raise(soundBuyBoosterComplete);
        _currentBoosterData.OnBuyBooster(isAds);

        if (!isAds) CoinSystem.MinusCoin(_currentBoosterData.priceBuyBooster, TrackingEnum.EResourceType.currency, TrackingEnum.EResourceReason.exchange, placementType);
        UpdateStatus();
        Hide();
    }
}