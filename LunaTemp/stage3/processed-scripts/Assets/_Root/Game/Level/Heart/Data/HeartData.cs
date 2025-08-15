using System;
using UnityEngine;
using VirtueSky.DataStorage;
using VirtueSky.Events;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Game/Level/Heart", fileName = "Heart", order = 0)]
public class HeartData : ScriptableObject
{
    [SerializeField] private ImmortalData immortalData;
    [SerializeField] private string id;
    [SerializeField] private int max = 5;
    [SerializeField] private IntegerEvent updateHeartEvent;
    [SerializeField] private IntegerVariable balanceAmount;
    [Header("Config")] [SerializeField] private int countIncrease = 1;
    [SerializeField] private int timeIncrease = 1800;

    [ContextMenu("ResetID")]
    void ResetID() => id = this.name;

    public DateTime TimeCurrent => DateTime.Now;
    public bool IsCanIncrease => Count < Max;
    public bool IsRunOutOfHeart => Count <= 0 && !immortalData.IsImmortalStatusVariable;

    public int Count
    {
        get => GameData.Get($"{id}_count", max);
        set => GameData.Set($"{id}_count", value);
    }

    public int Max
    {
        get => GameData.Get($"{id}_max", max);
        set => GameData.Set($"{id}_max", value);
    }

    public int TimeRemainingToIncrease => IsCanIncrease ? timeIncrease - (int)(TimeCurrent - StartTimeIncrease).TotalSeconds : timeIncrease;

    public DateTime StartTimeIncrease
    {
        get => GameData.Get($"{id}_count_start_time_increase", new DateTime());
        set => GameData.Set($"{id}_count_start_time_increase", value);
    }

    public bool IsInitialized
    {
        get => GameData.Get($"{id}_count_initialized", false);
        set => GameData.Set($"{id}_count_initialized", value);
    }

    public void Refesh()
    {
        if (!IsInitialized)
        {
            StartTimeIncrease = TimeCurrent;
            IsInitialized = true;
        }

        int countAdd = (int)(TimeCurrent - StartTimeIncrease).TotalSeconds / timeIncrease;
        if (countAdd > 0)
        {
            Add(countAdd);
            if (IsCanIncrease)
            {
                StartTimeIncrease = StartTimeIncrease.AddSeconds(countAdd * timeIncrease);
            }
            else ResetTimeIncrease();
        }
    }

    public void ResetTimeIncrease()
    {
        StartTimeIncrease = TimeCurrent;
    }

    public void Add(int count)
    {
        Count += count;
        OnUpate();
    }

    public void Minus(int count)
    {
        if (!immortalData.IsImmortalStatusVariable)
        {
            Count -= count;
            OnUpate();
        }
    }

    void OnUpate()
    {
        Count = Mathf.Clamp(Count, 0, Max);
        balanceAmount.Value = Count;
        updateHeartEvent?.Raise(Count);
    }

    [ContextMenu("AddDebug")]
    void AddDebug() => Add(1);

    [ContextMenu("MinusDebug")]
    void MinusDebug() => Minus(1);
}