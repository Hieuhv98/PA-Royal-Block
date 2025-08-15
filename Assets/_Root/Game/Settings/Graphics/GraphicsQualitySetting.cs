using UnityEngine;
using System.Collections.Generic;
using VirtueSky.DataStorage;
[CreateAssetMenu(fileName = "graphics_quality_setting", menuName = "Game/Settings/Graphics Quality")]
public class GraphicsQualitySetting : ScriptableObject
{
    [SerializeField] private string guid = "graphics_quality_setting";
    [SerializeField] private List<GraphicsQualityLevel> graphicSettings;
    [SerializeField] private int levelDefault = 3;

    public int QualityValue 
    {
        get => GameData.Get(guid, Mathf.Min(levelDefault, graphicSettings.Count));
        set => GameData.Set(guid, value);
    }
    public int SettingsCount => graphicSettings.Count;
    public List<GraphicsQualityLevel> GraphicSettings => graphicSettings;
    public void Refresh() => UpdateGraphicsQuality(QualityValue);

    public void SetGraphicsQuality(GraphicsQualityLevel setting)
    {
        //QualitySettings.SetQualityLevel(setting.qualityLevel, true);
        QualitySettings.antiAliasing = setting.antiAliasing;
        QualitySettings.shadows = setting.shadowQuality;
        QualitySettings.shadowResolution = setting.shadowResolution;
        QualitySettings.shadowProjection = setting.shadowProjection;
        QualitySettings.shadowDistance = setting.shadowDistance;
        QualitySettings.shadowNearPlaneOffset = setting.shadowNearPlaneOffset;
    }

    private void UpdateGraphicsQuality(int qualityIndex)
    {
        SetGraphicsQuality(graphicSettings[qualityIndex]);
    }

    [System.Serializable]
    public class GraphicsQualityLevel
    {
        public string qualityName;
        public int qualityLevel;
        public int antiAliasing;
        public ShadowQuality shadowQuality;
        public ShadowResolution shadowResolution;
        public ShadowProjection shadowProjection;
        public int shadowDistance;
        public int shadowNearPlaneOffset;
    }
}