using System;
using UnityEngine;
using UnityEngine.Serialization;
using VirtueSky.DataStorage;
using VirtueSky.Events;
using VirtueSky.Variables;

public class StarSystem : MonoBehaviour
{
    [FormerlySerializedAs("generateCoinEvent")] [SerializeField]
    private Vector3Event generateStarEvent;

    [FormerlySerializedAs("addCoinEvent")] [SerializeField]
    private EventNoParam addStarEvent;

    [FormerlySerializedAs("minusCoinEvent")] [SerializeField]
    private EventNoParam minusStarEvent;

    [SerializeField] private EventNoParam addStarCompleteEvent;

    [SerializeField] private IntegerVariable balanceAmount;

    private static event Action<int, Vector3, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement, bool> OnAddStarEvent;
    private static event Action<int, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement> OnMinusStarEvent;
    private static event Action<int, Vector3, TrackingEnum.EResourceType, TrackingEnum.EResourceName, TrackingEnum.EResourceReason, TrackingEnum.EPlacement> OnSetStarEvent;
    private const string CURRENT_STAR = "CURRENT_STAR";

    public static event Action ActionChangeValue;

    private static int CurrentStar
    {
        get => GameData.Get(CURRENT_STAR, 0);
        set
        {
            GameData.Set(CURRENT_STAR, value);
            GameData.Save();
        }
    }

    private void Awake()
    {
        OnAddStarEvent += InternalAddStar;
        OnMinusStarEvent += InternalMinusStar;
        OnSetStarEvent += InternalSetStar;
    }

    private void OnDestroy()
    {
        OnAddStarEvent -= InternalAddStar;
        OnMinusStarEvent -= InternalMinusStar;
        OnSetStarEvent -= InternalSetStar;
    }

    private void InternalSetStar(int value, Vector3 posGenerateCoin, TrackingEnum.EResourceType resourceType,
        TrackingEnum.EResourceName resourceName, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement)
    {
        if (value > CurrentStar)
        {
            var valueChange = value - CurrentStar;

            CurrentStar = value;
            OnChangeValue(CurrentStar);
            addStarEvent.Raise();

            if (posGenerateCoin != default)
            {
                generateStarEvent.Raise(posGenerateCoin);
            }
        }
        else if (value < CurrentStar)
        {
            var valueChange = CurrentStar - value;

            CurrentStar = value;
            OnChangeValue(CurrentStar);
            minusStarEvent.Raise();
        }
    }

    private void InternalAddStar(int value, Vector3 posGenerateCoin, TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceName resourceName,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement, bool isGenerate = true)
    {

        CurrentStar += value;
        OnChangeValue(CurrentStar);
        if (isGenerate) addStarEvent.Raise();
        else addStarCompleteEvent?.Raise();

        if (posGenerateCoin != default)
        {
            generateStarEvent.Raise(posGenerateCoin);
        }
    }

    private void InternalMinusStar(int value, TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceName resourceName,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement)
    {
        CurrentStar -= value;
        OnChangeValue(CurrentStar);
        minusStarEvent.Raise();
    }
    private void OnChangeValue(int value)
    {
        balanceAmount.Value = value;
        ActionChangeValue?.Invoke();
    }
    #region Api

    public static void AddStar(int value, Vector3 posGenerateCoin,
        TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement, bool isGenerate = true) =>
        OnAddStarEvent?.Invoke(value, posGenerateCoin, resourceType, TrackingEnum.EResourceName.star, resourceReason, placement, isGenerate);

    public static void MinusStar(int value, TrackingEnum.EResourceType resourceType,
        TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement) =>
        OnMinusStarEvent?.Invoke(value, resourceType, TrackingEnum.EResourceName.star, resourceReason, placement);

    public static void SetStar(int value, Vector3 posGenerateCoin,
        TrackingEnum.EResourceType resourceType, TrackingEnum.EResourceReason resourceReason, TrackingEnum.EPlacement placement) =>
        OnSetStarEvent?.Invoke(value, posGenerateCoin, resourceType, TrackingEnum.EResourceName.star, resourceReason, placement);

    public static int GetCurrentStar() => CurrentStar;

    #endregion
}