using DG.Tweening;
using TMPro;
using UnityEngine;
using VirtueSky.Events;

public class CoinUpdater : MonoBehaviour
{
    public TextMeshProUGUI CurrencyAmountText;
    [SerializeField] private GameObject iconCoin;
    [SerializeField] private EventNoParam updateCoinEvent;
    [SerializeField] private EventNoParam moveOneCoinDone;
    [SerializeField] private EventNoParam moveAllCoinDone;
    [SerializeField] private EventNoParam decreaseCoinEvent;
    [SerializeField] private GameObjectEvent addTargetToCoinGenerateEvent;
    [SerializeField] private GameObjectEvent removeTargetToCoinGenerateEvent;

    private bool _isProcessingBuilding;

    bool isFirsCoinMoveDone = false;

    private void OnEnable()
    {
        _isProcessingBuilding = false;
        moveOneCoinDone.AddListener(MoveOneCoinDone);
        decreaseCoinEvent.AddListener(DecreaseCoin);
        moveAllCoinDone.AddListener(MoveAllCoinDone);
        if (updateCoinEvent) updateCoinEvent.AddListener(UpdateTextCoin);
        addTargetToCoinGenerateEvent.Raise(iconCoin);
        UpdateDisplayValue(CoinSystem.GetCurrentCoin());
    }

    private void OnDisable()
    {
        moveOneCoinDone.RemoveListener(MoveOneCoinDone);
        moveAllCoinDone.RemoveListener(MoveAllCoinDone);
        decreaseCoinEvent.RemoveListener(DecreaseCoin);
        removeTargetToCoinGenerateEvent.Raise(iconCoin);
        if(updateCoinEvent) updateCoinEvent.RemoveListener(UpdateTextCoin);
    }

    void OnBuildingProcessing(bool isProcessing)
    {
        _isProcessingBuilding = isProcessing;
    }

    void MoveOneCoinDone()
    {
        if (!isFirsCoinMoveDone)
        {
            isFirsCoinMoveDone = true;
            UpdateTextCoin();
        }
    }

    void MoveAllCoinDone()
    {
        isFirsCoinMoveDone = false;
    }

    private void DecreaseCoin()
    {
        UpdateTextCoin();
    }

    void UpdateDisplayValue(int value)
    {
        CurrencyAmountText.text = value.GetTextValueFromNumber();
    }

    void UpdateTextCoin()
    {
        int starCoin = CurrencyAmountText.text.GetNumberFromText();
        int coinChange = starCoin;
        DOTween.To(() => starCoin, x => starCoin = x, CoinSystem.GetCurrentCoin(), 0.5f)
            .OnUpdate(() => { coinChange = (int)starCoin; UpdateDisplayValue(coinChange); });
    }

    public void OnClickPlus()
    {
        if (_isProcessingBuilding) return;
    }
}