using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Core;
using VirtueSky.Events;

public class BoosterTime : BaseMono
{
    [SerializeField] private GameObject group;
    [SerializeField] private Image process;
    [SerializeField] private float timeDelay = 0;
    [SerializeField] private EventNoParam replayEvent;

    private Tween _tweenTime;
    private DelayHandle _delayHandle;
    private BoosterData _data;
    public void SetUp(BoosterData data) 
    {
        _data = data;
        group.SetActive(false);
        OnRefresh();
    }
    void OnRefresh() 
    {
        process.fillAmount = 1f;
    }
    public void Play()
    {
        OnRefresh();
        group.SetActive(true);
        _delayHandle = App.Delay(timeDelay, () =>
        {
            process.fillAmount = 1f;
            _tweenTime = process.DOFillAmount(0f, _data.timeCoolDown);
        }); 
    }

    public void Complete()
    {
        group.SetActive(false);
    }
    public void Cancel()
    {
        group.SetActive(false);
        OnRefresh();
        _tweenTime.Kill(true);
        _delayHandle?.Cancel();
    }

    private void Start()
    {
        if(replayEvent) replayEvent.OnRaised += Cancel;
    }
    public void OnDestroy()
    {
        Cancel();
        if (replayEvent) replayEvent.OnRaised -= Cancel;
    }
}