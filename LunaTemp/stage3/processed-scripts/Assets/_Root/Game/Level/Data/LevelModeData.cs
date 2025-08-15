using System;
using System.Collections.Generic;
using TheBeginning.LevelSystem;
using UnityEngine;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Data/LevelModeData", fileName = "level_mode_data")]
public class LevelModeData : ScriptableObject
{
    [SerializeField] private LevelSettings levelSettings;
    [SerializeField] private LevelTypeData levelTypeData;
    [SerializeField] private List<LevelModeInfor> levelModeInfors;
    [SerializeField] private IntegerVariable currentLevel;

    public (LevelModeInfor getLevelModeInfor, LevelTypeInfor getLevelTypeInfor) GetLevelData()
    {
        return (levelModeInfors[currentLevel.Value - 1], levelTypeData.GetLevelTypeInfor(levelModeInfors[currentLevel.Value - 1].levelMode));
    }
}

[Serializable]
public class LevelModeInfor
{
    public int levelIndex;
    public int star = 1;
    public ELevelMode levelMode;
}

public enum ELevelMode
{
    Normal,
    Hard,
    VeryHard,
}