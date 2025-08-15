using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;
using VirtueSky.Audio;
using VirtueSky.Events;

public class BuyBoosterPopup : UIPopup
{
    [Header("Properties")]

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

        icon.SetNativeSize();
        boosterNameIcon.SetNativeSize();
    }

    void UpdateStatus()
    {

    }

    public void OnCLickBuyBooster()
    {
        if (_isBuyed) return;
        if (_isCanBuy)
        {
        }
    }


}