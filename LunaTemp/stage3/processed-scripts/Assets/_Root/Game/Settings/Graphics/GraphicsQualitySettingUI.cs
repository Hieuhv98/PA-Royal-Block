using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GraphicsQualitySettingUI : MonoBehaviour
{
    [SerializeField] private Slider qualitySlider;
    [SerializeField] private TextMeshProUGUI txtQuality;
    [SerializeField] private GraphicsQualitySetting graphicsQualitySetting;
    [SerializeField] private bool isRefreshOnStart = true;

    private void Start()
    {
        if(isRefreshOnStart) graphicsQualitySetting.Refresh();

        if (qualitySlider != null)
        {
            qualitySlider.minValue = 0;
            qualitySlider.maxValue = graphicsQualitySetting.SettingsCount - 1;
            qualitySlider.value = graphicsQualitySetting.QualityValue;
            qualitySlider.onValueChanged.AddListener(OnSliderValueChanged);
        }
    }

    public void OnSliderValueChanged(float value)
    {
        int qualityIndex = Mathf.RoundToInt(value);
        qualitySlider.value = qualityIndex;
        graphicsQualitySetting.QualityValue = qualityIndex;
        graphicsQualitySetting.Refresh();
        var settings = graphicsQualitySetting.GraphicSettings[qualityIndex];
        if (txtQuality != null) txtQuality.text = settings.qualityName;
    }

    private void OnDestroy()
    {
        if (qualitySlider != null) qualitySlider.onValueChanged.RemoveListener(OnSliderValueChanged);
    }
}