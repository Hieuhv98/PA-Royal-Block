using System;
using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Core;
using VirtueSky.Events;

public class HeartUI : BaseMono
{
    [Header("Event")] [SerializeField] private IntegerEvent updateHeartEvent;
    [SerializeField] private IntegerEvent updatingTimeIncreaseHeartEvent;

    [Header("Data")] [SerializeField] private ImmortalData immortalData;
    [SerializeField] private HeartData heartData;

    [Header("Properties")] [SerializeField]
    private GameObject plusIcon;

    [SerializeField] private Image iconHeart;
    [SerializeField] private Sprite iconHeartNormal;
    [SerializeField] private Sprite iconHeartImmortal;
    [SerializeField] private TextMeshProUGUI txtCount;
    [SerializeField] private GameObject txtFull;
    [SerializeField] private string stringFormatCount = "{0}";
    [SerializeField] private TextMeshProUGUI txtTime;
    [SerializeField] private string stringFormatTime = "{0}:{1}";
    [SerializeField] private string stringFormatImmortalTimeWithDay = "{0}:{1}";
    [SerializeField] private string stringFormatImmortalTimeWithHour = "{0}:{1}";
    [SerializeField] private string stringFormatImmortalTimeWithMinute = "{0}:{1}";


    public override void OnEnable()
    {
        base.OnEnable();
        updateHeartEvent.OnRaised += OnUpdateHeart;
        updatingTimeIncreaseHeartEvent.OnRaised += OnUpdatingTimeIncreaseHeart;
        immortalData.OnUpdateTimeImmortalAction += OnUpdatingTimeImmortal;
        immortalData.OnInStatusImmortalAction += OnInStatusImmortal;
        immortalData.OnEndStatusImmortalAction += OnEndStatusImmortal;
        OnUpdateHeart(heartData.Count);
        UpdateIcon();
    }

    public override void OnDisable()
    {
        base.OnDisable();
        updateHeartEvent.OnRaised -= OnUpdateHeart;
        updatingTimeIncreaseHeartEvent.OnRaised -= OnUpdatingTimeIncreaseHeart;
        immortalData.OnUpdateTimeImmortalAction -= OnUpdatingTimeImmortal;
        immortalData.OnInStatusImmortalAction -= OnInStatusImmortal;
        immortalData.OnEndStatusImmortalAction -= OnEndStatusImmortal;
    }
    void UpdateIcon() 
    {
        var sprite = immortalData.IsImmortalStatusVariable
            ? iconHeartImmortal
            : iconHeartNormal;
        iconHeart.sprite = sprite;
        if(iconHeart != null) iconHeart.SetNativeSize();
    }
    void OnUpdateHeart(int heart)
    {
        if (!immortalData.IsImmortalStatusVariable)
        {
            txtCount.gameObject.SetActive(true);
            txtFull.SetActive(false);
            if (plusIcon != null) plusIcon.SetActive(true);
            txtCount.text = string.Format(stringFormatCount, heart);
        }
        else
        {
            OnInStatusImmortal();
        }
    }

    void OnUpdatingTimeIncreaseHeart(int time)
    {
        if (!immortalData.IsImmortalStatusVariable)
        {
            txtTime.gameObject.SetActive(time > 0);
            txtFull.SetActive(time <= 0);
            if (plusIcon != null) plusIcon.SetActive(time > 0);
            if (time > 0)
            {
                var timeSpan = ConvertSecondToTime(time);
                txtTime.text = string.Format(stringFormatTime, timeSpan.Minutes, timeSpan.Seconds);
            }
        }
    }

    void OnInStatusImmortal()
    {
        txtCount.gameObject.SetActive(false);
        iconHeart.sprite = iconHeartImmortal;
        if(iconHeart != null) iconHeart.SetNativeSize();
        txtFull.SetActive(false);
        if (plusIcon != null) plusIcon.SetActive(false);
    }

    void OnEndStatusImmortal()
    {
        iconHeart.sprite = iconHeartNormal;
        if (iconHeart != null) iconHeart.SetNativeSize();
        OnUpdateHeart(heartData.Count);
    }

    void OnUpdatingTimeImmortal(int time)
    {
        txtTime.gameObject.SetActive(time > 0);
        if (time > 0)
        {
            var timeSpan = ConvertSecondToTime(time);
            if (timeSpan.Days > 0)
            {
                txtTime.text = string.Format(stringFormatImmortalTimeWithDay, timeSpan.Days, timeSpan.Hours,
                    timeSpan.Minutes,
                    timeSpan.Seconds);
            }
            else if (timeSpan.Hours > 0)
            {
                txtTime.text = string.Format(stringFormatImmortalTimeWithHour, timeSpan.Hours, timeSpan.Minutes,
                    timeSpan.Seconds);
            }
            else
            {
                txtTime.text = string.Format(stringFormatImmortalTimeWithMinute, timeSpan.Minutes,
                    timeSpan.Seconds);
            }
        }
    }

    TimeSpan ConvertSecondToTime(int second)
    {
        return TimeSpan.FromSeconds(second);
    }

    public void OnClickPlus()
    {
    }
}