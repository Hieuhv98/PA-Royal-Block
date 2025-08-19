using System;
using UnityEngine;
using VirtueSky.DataStorage;
using VirtueSky.Events;
using VirtueSky.Variables;

public class CoinSystem : MonoBehaviour
{
    [SerializeField] private Vector3Event generateCoinEvent;
    [SerializeField] private EventNoParam addCoinEvent;
    [SerializeField] private EventNoParam updateCoinEvent;
    [SerializeField] private EventNoParam minusCoinEvent;
    [SerializeField] private IntegerVariable balanceAmount;

    private static event Action<int, Vector3, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement, bool> OnAddCoinEvent;
    private static event Action<int, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement> OnMinusCoinEvent;
    private static event Action<int, Vector3, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement> OnSetCoinEvent;
    private const string CURRENT_COIN = "CURRENT_COIN";

    private static int _coin = 0;
    private static int CurrentCoin
    {
        get => _coin;
        set => _coin = value;
    }

    private void Awake()
    {
        OnAddCoinEvent += InternalAddCoin;
        OnMinusCoinEvent += InternalMinusCoin;
        OnSetCoinEvent += InternalSetCoin;
    }

    private void OnDestroy()
    {
        OnAddCoinEvent -= InternalAddCoin;
        OnMinusCoinEvent -= InternalMinusCoin;
        OnSetCoinEvent -= InternalSetCoin;
    }

    private void InternalSetCoin(int value, Vector3 posGenerateCoin, TrackingEnum.EResourceType resourceType,
        TrackingEnum.EResourceName resourceName, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement)
    {
        if (value > CurrentCoin)
        {
            var valueChange = value - CurrentCoin;

            CurrentCoin = value;
            OnChangeValue(CurrentCoin);
            addCoinEvent.Raise();

            if (posGenerateCoin != default)
            {
                generateCoinEvent.Raise(posGenerateCoin);
            }
        }
        else if (value < CurrentCoin)
        {
            var valueChange = CurrentCoin - value;
            CurrentCoin = value;
            OnChangeValue(CurrentCoin);
            minusCoinEvent.Raise();
        }
    }

    private void InternalAddCoin(int value, Vector3 posGenerateCoin, TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceName resourceName,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement, bool isGenerate = true)
    {
        CurrentCoin += value;
        OnChangeValue(CurrentCoin);
        if (!isGenerate)
        {
            updateCoinEvent?.Raise();
            return;
        }
        addCoinEvent.Raise();
        if (posGenerateCoin != default)
        {
            generateCoinEvent.Raise(posGenerateCoin);
        }
    }

    private void InternalMinusCoin(int value, TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceName resourceName,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement)
    {
        CurrentCoin -= value;
        OnChangeValue(CurrentCoin);
        minusCoinEvent.Raise();
    }

    private void OnChangeValue(int value)
    {
        balanceAmount.Value = value;
    }

    #region Api

    public static void AddCoin(int value, Vector3 posGenerateCoin,
        TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement, bool isGenerate = true) =>
        OnAddCoinEvent?.Invoke(value, posGenerateCoin, resourceType, TrackingEnum.EResourceName.gold, resourceReason, placement, isGenerate);

    public static void MinusCoin(int value, TrackingEnum.EResourceType resourceType,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement) =>
        OnMinusCoinEvent?.Invoke(value, resourceType, TrackingEnum.EResourceName.gold, resourceReason, placement);

    public static void SetCoin(int value, Vector3 posGenerateCoin,
        TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement) =>
        OnSetCoinEvent?.Invoke(value, posGenerateCoin, resourceType, TrackingEnum.EResourceName.gold, resourceReason, placement);

    public static int GetCurrentCoin() => CurrentCoin;

    #endregion
}