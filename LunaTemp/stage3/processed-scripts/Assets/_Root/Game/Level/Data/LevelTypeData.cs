using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using VirtueSky.Audio;

[CreateAssetMenu(menuName = "Data/LevelTypeData", fileName = "level_type_data")]
public class LevelTypeData : ScriptableObject
{
    [SerializeField] private List<LevelTypeInfor> levelTypeInfors;

    public LevelTypeInfor GetLevelTypeInfor(ELevelMode getLevelMode)
    {
        return levelTypeInfors.FirstOrDefault(l => l.LevelMode == getLevelMode);
    }
}

[Serializable]
public class LevelTypeInfor
{
    public ELevelMode LevelMode;

    [Serializable]
    struct BoosterIconData
    {
        public EElementType elementType;
        public Sprite icon;
        public Sprite iconLock;
    }

    [SerializeField] private Material colorTextGameplay;
    [SerializeField] private Material colorTextHome;
    [SerializeField] private Sprite iconReplay;
    [SerializeField] private Sprite iconBoardLevel;
    [SerializeField] private Sprite iconSetting;
    [SerializeField] List<BoosterIconData> boosterIconDatas;
    public Sprite icon;
    public Sprite iconBoardGameplay;
    public string description;
    public SoundData soundStartGame;
    public int coinBonus;



    public Sprite GetIconSettingSprite() => iconSetting;

    public Sprite GetIconBoardLevelSprite() => iconBoardLevel;
    public Sprite GetIconReplayLevelSprite() => iconReplay;

    public Material GetColorTextLevelModeHome() => colorTextHome;

    public Material GetColorTextLevelModeGameplay() => colorTextGameplay;
}