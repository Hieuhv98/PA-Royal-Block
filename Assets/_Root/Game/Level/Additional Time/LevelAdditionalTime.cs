using System;
using UnityEngine;
using VirtueSky.DataStorage;
[CreateAssetMenu(menuName = "Game/Level/Additional Time", fileName = "level_additional_time", order = 0)]
public class LevelAdditionalTime : ScriptableObject
{
    private string id = "level_additional_time";

    public DateTime TimeCurrent => DateTime.Now;
    public DateTime TimeEnd
    {
        set => GameData.Set($"{id}_time_end", value);
        get => GameData.Get<DateTime>($"{id}_time_end", DateTime.MinValue);
    }

    public int Count 
    {
        set => GameData.Set($"{id}_count", value);
        get => GameData.Get<int>($"{id}_count", 0);
    }

    public bool IsAvailable => TimeCurrent < TimeEnd;

    public void Add(int count, int time) 
    {
        if (!IsAvailable) Count = 0;

        Count += count;
        var timeCurrent = IsAvailable ? TimeEnd : TimeCurrent;
        TimeEnd = timeCurrent.AddSeconds(time);
    }
}