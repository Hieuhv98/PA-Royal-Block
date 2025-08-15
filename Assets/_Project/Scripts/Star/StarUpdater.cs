using DG.Tweening;
using TMPro;
using UnityEngine;
using VirtueSky.Events;

public class StarUpdater : MonoBehaviour
{
    public TextMeshProUGUI CurrencyAmountText;
    [SerializeField] private GameObject iconStar;
    [SerializeField] private EventNoParam moveOneStarDone;
    [SerializeField] private EventNoParam moveAllStarDone;
    [SerializeField] private EventNoParam decreaseStarEvent;
    [SerializeField] private EventNoParam updateStartTextEvent;
    [SerializeField] private GameObjectEvent addTargetToStarGenerateEvent;
    [SerializeField] private GameObjectEvent removeTargetToStarGenerateEvent;
    private bool _isProcessingBuilding;
    bool _isFirstCoinMoveDone = false;

    private void OnEnable()
    {
        _isProcessingBuilding = false;
        moveOneStarDone.AddListener(MoveOneCoinDone);
        decreaseStarEvent.AddListener(DecreaseCoin);
        moveAllStarDone.AddListener(MoveAllCoinDone);
        addTargetToStarGenerateEvent.Raise(iconStar);
        updateStartTextEvent.AddListener(UpdateTextCoin);
        CurrencyAmountText.text = StarSystem.GetCurrentStar().ToString();
    }

    private void OnDisable()
    {
        moveOneStarDone.RemoveListener(MoveOneCoinDone);
        moveAllStarDone.RemoveListener(MoveAllCoinDone);
        decreaseStarEvent.RemoveListener(DecreaseCoin);
        updateStartTextEvent.RemoveListener(UpdateTextCoin);
        removeTargetToStarGenerateEvent.Raise(iconStar);
    }

    void OnBuildingProcessing(bool isProcessing)
    {
        _isProcessingBuilding = isProcessing;
    }


    void MoveOneCoinDone()
    {
        if (!_isFirstCoinMoveDone)
        {
            _isFirstCoinMoveDone = true;
            UpdateTextCoin();
        }
    }

    void MoveAllCoinDone()
    {
        _isFirstCoinMoveDone = false;
    }

    private void DecreaseCoin()
    {
        UpdateTextCoin();
    }

    void UpdateTextCoin()
    {
        int starCoin = int.Parse(CurrencyAmountText.text);
        int coinChange = starCoin;
        DOTween.To(() => starCoin, x => starCoin = x, StarSystem.GetCurrentStar(), 0.5f)
            .OnUpdate(() => { coinChange = (int)starCoin; CurrencyAmountText.text = coinChange.ToString(); });
    }

    public void OnClickPlus()
    {
        if (_isProcessingBuilding) return;
    }
}