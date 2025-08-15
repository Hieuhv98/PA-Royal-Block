using DG.Tweening;
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProcessItemGroup : MonoBehaviour
{
    [Header("Data")] [SerializeField] private UnlockNewElementData unlockNewElementData;

    [Header("Properties")] [SerializeField]
    private Image processFill;

    [SerializeField] private bool isShowComplete;
    [SerializeField] private bool isFillAnimation;

    [SerializeField]
    private float durationFill;

    [SerializeField] private string formatProcess;
    [SerializeField] private TextMeshProUGUI processValueText;

    [SerializeField] private Image nextElementItem;

    private void OnEnable()
    {
        UpdateStatus();
    }

    void UpdateStatus()
    {
        var data = unlockNewElementData.GetProcessNextIconData(isShowComplete);
        if ((int)data.processValue > 1)
        {
            gameObject.SetActive(false);
            return;
        }

        nextElementItem.sprite = data.nextIconElement;
        nextElementItem.SetNativeSize();
        if (isFillAnimation)
        {
            DOTween.To(() => data.prevProcessValue, x => data.prevProcessValue = x, data.processValue, durationFill)
                .OnUpdate(() =>
                {
                    processValueText.text = string.Format(formatProcess, MathF.Round(data.prevProcessValue * 100, 1));
                    processFill.fillAmount = data.prevProcessValue;
                });
        }
        else
        {
            processFill.fillAmount = data.processValue;
            processValueText.text = string.Format(formatProcess, MathF.Round(data.processValue * 100, 1));
        }
    }
}