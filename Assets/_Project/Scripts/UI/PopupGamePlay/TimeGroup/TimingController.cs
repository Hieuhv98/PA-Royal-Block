using DG.Tweening;
using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.Misc;
using VirtueSky.Variables;

public class TimingController : BaseMono
{
    [Header("Properties")] [SerializeField]
    private float fadeWarnDuration;

    [SerializeField] private BooleanVariable pauseTimeLevelVariable;
    [SerializeField] private LoseData loseData;
    [SerializeField] private string stringFormat;
    [SerializeField] private TextMeshProUGUI timeText;
    [Header("Event")] [SerializeField] private IntegerEvent addTimePlayEvent;
    [SerializeField] private IntegerEvent countDownTimeSetupEvent;
    [SerializeField] private EventNoParam startCountDownTimeEvent;
    [SerializeField] private EventNoParam onTimeUpEvent;
    [SerializeField] private FloatVariable playDuration;
    [SerializeField] private IntegerVariable totalTimeAddWhenPlay;

    [SerializeField] private BooleanVariable isUsingTimerBooster;
    [SerializeField] private EventNoParam onWarringTimeEvent;
    [SerializeField] private BooleanVariable isPlayAgainMore;

    [Header("Warring")]
    [SerializeField] private Image warningFrame;
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private StopSfxEvent stopSfxEvent;
    [SerializeField] private SoundData soundWarring;
 
    private float _currentTime;
    private bool _isCanCountTime;
    private bool _isWarned;
    protected bool _isShowWarnBoard;
    protected bool _isShowWaringSoundPlay;
    private SoundCache _soundWaringCache;

    public override void OnEnable()
    {
        base.OnEnable();
        addTimePlayEvent.OnRaised += AddTimePlayEvent;
        startCountDownTimeEvent.OnRaised += OnStartCountDownTime;
        countDownTimeSetupEvent.OnRaised += OnCountDownTimeSetup;
        isUsingTimerBooster.Value = false;
        _isShowWarnBoard = false;
        warningFrame.SetAlpha(0);
        _isShowWaringSoundPlay = false;
    }

    public override void OnDisable()
    {
        base.OnDisable();
        addTimePlayEvent.OnRaised -= AddTimePlayEvent;
        startCountDownTimeEvent.OnRaised -= OnStartCountDownTime;
        countDownTimeSetupEvent.OnRaised -= OnCountDownTimeSetup;
    }

    private void Update()
    {
        if (_isCanCountTime)
        {
            if (pauseTimeLevelVariable.Value && warningFrame.color.a != 0)
            {
                warningFrame.SetAlpha(0);
            }

            if (!pauseTimeLevelVariable.Value)
            {
                playDuration.Value += Time.deltaTime;
                _currentTime -= Time.deltaTime;
                if (_currentTime <= loseData.GetTimeStartWarning() + .5f && !_isShowWarnBoard)
                {
                    if(!_isShowWaringSoundPlay) 
                    {
                        _soundWaringCache = playSfxEvent?.Raise(soundWarring);
                        _isShowWaringSoundPlay = true;
                    }
                    onWarringTimeEvent?.Raise();
                    _isShowWarnBoard = true;
                    warningFrame.DOFade(1, fadeWarnDuration).OnComplete(() =>
                    {
                        DOVirtual.DelayedCall(1 - fadeWarnDuration * 2, () =>
                        {
                            warningFrame.DOFade(0, fadeWarnDuration).OnComplete(() =>
                            {
                                _isShowWarnBoard = false;
                            });
                        });
                    });
                }

                if (_currentTime <= loseData.GetTimeWarning())
                {
                    if (!_isWarned) 
                    {
                        _isWarned = true;
                    }
                    onTimeUpEvent.Raise();
                    _isCanCountTime = false;
                    _currentTime = 0;
                }
                DisplayTime();
            }
            else if (isUsingTimerBooster.Value)
            {
                playDuration.Value += Time.deltaTime;
            }
        }
    }

    void AddTimePlayEvent(int value)
    {
        totalTimeAddWhenPlay.Add(value);
        _currentTime += value;
        if(_isShowWaringSoundPlay) _isShowWaringSoundPlay = false;
        DisplayTime();
    }

    public void OnStartCountDownTime()
    {
        _isCanCountTime = true;
        _isWarned = false;
        _isShowWarnBoard = false;
        _isShowWaringSoundPlay = false;
        warningFrame.SetAlpha(0);
    }

    void OnCountDownTimeSetup(int time)
    {
        if (_soundWaringCache != null)
        {
            stopSfxEvent?.Raise(_soundWaringCache);
            _soundWaringCache = null;
        }
        SetTime(time);
        isPlayAgainMore.Value = false;
    }

    public void SetTime(int time, Action onTimeUpEvent = null)
    {
        _isCanCountTime = false;
        _currentTime = time;
        DisplayTime();
    }

    private void OnValidate()
    {
        DisplayTime();
    }

    void DisplayTime()
    {
        //var hours = (int)_currentTime / 3600;
        var minutes = (int)_currentTime % 3600 / 60;
        var seconds = (int)_currentTime % 3600 % 60;
        timeText.text = string.Format(stringFormat, minutes, seconds);
    }
}