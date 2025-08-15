using DG.Tweening;
using Spine.Unity;
using System;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.Misc;

[RequireComponent(typeof(CanvasGroup))]
public class BoosterUsingUI : BaseMono
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private bool isShowAnimation = true;
    [SerializeField] private EventNoParam replayEvent;
    [SerializeField] private float timeShowAnimation  = .5f;

    [SerializeField] private bool isHideAnimation = true;
    [SerializeField] private float timeHideAnimation = .5f;

    [SerializeField] private bool isHaveSpine = true;
    [SerializeField] private SkeletonGraphic graphic;
    [SerializeField, SpineAnimation] private string openAnim;
    [SerializeField, SpineAnimation] private string actionAnim;
    [SerializeField, SpineAnimation] private string closeAnim;

    [Header("Sound")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundStart;
    [SerializeField] private SoundData soundConplete;

    [Header("Fx")]
    [SerializeField] private ParticleSystem fx;

    private float _timeShowAnimation;
    private float _timeHideAnimation;

    private Tween _tweenShow;
    private Tween _tweenHide;

    private bool _isShowing = false;
    public override void OnEnable()
    {
        base.OnEnable();
        if(canvasGroup == null) canvasGroup = GetComponent<CanvasGroup>();
        canvasGroup.alpha = 0;

        _timeHideAnimation = isShowAnimation ? timeShowAnimation : 0;
        _timeHideAnimation = isHideAnimation ? timeHideAnimation : 0;

        _isShowing = false;
    }

    public void Show() 
    {
        _isShowing = true;
        if (fx)
        {
            fx.Clear();
            fx.Play();
        }
        playSfxEvent?.Raise(soundStart);
        _tweenHide.Kill();
        _tweenShow = canvasGroup.DOFade(1, timeShowAnimation).OnComplete(() =>
        {
            if (isHaveSpine)
            {
                graphic.PlayOnly(openAnim).OnComplete(() => { graphic.PlayOnly(actionAnim); });
            }
        });
    }
    public void Hide() 
    {
        _isShowing = false;
        playSfxEvent?.Raise(soundConplete);
        PlayHideSpine(() =>
        {
            if(!_isShowing) _tweenHide = canvasGroup.DOFade(0, timeHideAnimation);
        });
    }
    void PlayHideSpine(Action actionComplete = null) 
    {
        if (isHaveSpine) graphic.PlayOnly(closeAnim).OnComplete(() => actionComplete?.Invoke());
        else actionComplete?.Invoke();
    }
    void ForeHide() 
    {
        _isShowing = false;
        canvasGroup.alpha = 0;
    }
    private void Start()
    {
        if (replayEvent) replayEvent.OnRaised += ForeHide;
    }
    public void OnDestroy()
    {
        if (replayEvent) replayEvent.OnRaised -= ForeHide;
    }
}