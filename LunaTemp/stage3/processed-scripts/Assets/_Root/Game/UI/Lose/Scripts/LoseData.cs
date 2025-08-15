using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Data/LoseData", fileName = "lose_data")]
public class LoseData : ScriptableObject
{
    [SerializeField] private int timeStartWarn;
    [SerializeField] private int warningTime;
    [SerializeField] private StringVariable loseBy;
    [SerializeField] private List<LoseDataInfor> loseDataInfors = new List<LoseDataInfor>();

    public int GetTimeWarning() => warningTime;
    public int GetTimeStartWarning() => timeStartWarn;
    public LoseDataInfor GetData() => loseDataInfors.FirstOrDefault(l => l.loseType.ToString() == loseBy.Value);
}


[Serializable]
public class LoseDataInfor
{
    public TrackingEnum.ELevelLoseBy loseType;
    public Sprite loseName;
    public GameObject prefab;
    public string loseDescription;
}