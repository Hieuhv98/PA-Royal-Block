using Spine.Unity;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Events;
using VirtueSky.Misc;

public class KingUI : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic model;
    [SerializeField, SpineAnimation] private List<string> idleAnimations = new List<string>();
    [SerializeField, SpineAnimation] private string loseAnimation;
    [SerializeField, SpineAnimation] private string winAnimation;
    [SerializeField, SpineAnimation] private string worryAnimation;
    [SerializeField, SpineAnimation] private string happyAnimation;
    [SerializeField] private int gateSuckTimeToHappy = 1;
    [SerializeField] private int gateSuckTimeToPlaySound = 5;

    [Header("Events")]
    [SerializeField] private FloatEvent onWinLevelEvent;
    [SerializeField] private EventNoParam onLevelLoadCompleteEvent;
    [SerializeField] private FloatEvent onLoseLevelEvent;
    [SerializeField] private EventNoParam onWarringTimeEvent;
    [SerializeField] private EventNoParam onGateSuckComplete;
    [SerializeField] private IntegerEvent onAddTime;

    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundFirstBlockBreak;

    private bool _isIdleLooping = false;
    private int _gateSuckTimeCounter = 0;
    private int _happyTime = 0;

    void Refresh() 
    {
        _isIdleLooping = true;
        _gateSuckTimeCounter = 0;
        Idle();
    }

    private void Awake()
    {
        if(onWinLevelEvent) onWinLevelEvent.OnRaised += OnWinLevel;
        if (onLoseLevelEvent) onLoseLevelEvent.OnRaised += OnLoseLevel;
        if (onWarringTimeEvent) onWarringTimeEvent.OnRaised += OnWarringTime;
        if (onGateSuckComplete) onGateSuckComplete.OnRaised += OnGateSuckComplete;
        if (onLevelLoadCompleteEvent) onLevelLoadCompleteEvent.OnRaised += Refresh;
        if (onAddTime) onAddTime.OnRaised += OnAddTime;
    }

    private void OnDestroy()
    {
        if (onWinLevelEvent) onWinLevelEvent.OnRaised -= OnWinLevel;
        if (onLoseLevelEvent) onLoseLevelEvent.OnRaised -= OnLoseLevel;
        if (onWarringTimeEvent) onWarringTimeEvent.OnRaised -= OnWarringTime;
        if (onGateSuckComplete) onGateSuckComplete.OnRaised -= OnGateSuckComplete;
        if (onLevelLoadCompleteEvent) onLevelLoadCompleteEvent.OnRaised -= Refresh;
        if (onAddTime) onAddTime.OnRaised -= OnAddTime;
    }

    private void OnWinLevel(float time)
    {
        Win();
    }

    private void OnLoseLevel(float time)
    {
        Lose();
    }

    private void OnWarringTime() 
    {
        Worry();
    }

    private void OnGateSuckComplete() 
    {
        _gateSuckTimeCounter++;
        if(_gateSuckTimeCounter % gateSuckTimeToHappy == 0) Happy();
        if(_gateSuckTimeCounter % gateSuckTimeToPlaySound == 1) playSfxEvent.Raise(soundFirstBlockBreak);
    }

    void OnAddTime(int time) 
    {
        if (!_isIdleLooping) 
        {
            _isIdleLooping = true;
            Idle();
        }
    }

    public void Idle() 
    {
        if (idleAnimations.Count == 0) return;
        var randomIndex = Random.Range(0, idleAnimations.Count);
        model.PlayOnly(idleAnimations[randomIndex]).OnComplete(() => 
        {
            if(_isIdleLooping) Idle();
        });
    }

    public void Lose()
    {
        _isIdleLooping = false;
        model.PlayOnly(loseAnimation, loop: true);
    }

    public void Win() 
    {
        _isIdleLooping = false;
        model.PlayOnly(winAnimation, loop: true);
    }

    public void Worry() 
    {
        _isIdleLooping = false;
        model.PlayOnly(worryAnimation, loop: true);
    }

    public void Happy() 
    {
        _happyTime++;
        model.PlayOnly(happyAnimation, loop: false).OnComplete(() => 
        {
            _happyTime--;
            if(_happyTime <=0) if (_isIdleLooping) Idle();
        });
    }
}