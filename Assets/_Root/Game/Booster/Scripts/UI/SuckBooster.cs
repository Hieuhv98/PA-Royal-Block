using DG.Tweening;
using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Data/BoosterData/SuckBooster", fileName = "suck_booster_data")]
public class SuckBooster : BoosterData
{
    [Header("Properties")] [SerializeField]
    private BooleanEvent onStartSuckBoosterEvent;

    [SerializeField] private OnDoSuckBoosterEvent onDoSuckBoosterEvent;
    [SerializeField] private float timeMoveEachObject;
    [SerializeField] private float timeDelayEachObject;
    [SerializeField] private BoosterAnimation boosterAnimation;
    [SerializeField] private float timeDelayUse = 0f;
    [SerializeField] private Vector3 offsetBoosterAnimationSpawn;
    [SerializeField] private Vector3 headOffset;
    [SerializeField] private SoundData soundUsing;
    private BoosterAnimation _currentBooster;
    private List<GameObject> _currentTargets;
    private int _index;
    private DelayHandle _delayHandleSuckBooster;
    private DelayHandle _delayUse;
    private Vector3 _currentBoosterPos;
    private SoundCache _soundUsingCache;

    protected override void OnActionBoosterStart()
    {
        onDoSuckBoosterEvent.OnRaised += OnSelectBlockToBreak;
        onStartSuckBoosterEvent.Raise(true);
    }

    void OnSelectBlockToBreak(SuckBoosterData info)
    {
        onDoSuckBoosterEvent.OnRaised -= OnSelectBlockToBreak;
        onStartActionUse += info.onStart;
        onCompleteActionUse += info.onComplete;
        _currentTargets = info.targets;

        if (_currentBooster == null) _currentBooster = Instantiate(boosterAnimation);
        _currentBoosterPos = info.target.transform.position + offsetBoosterAnimationSpawn;
        _currentBooster.OnStartProcess(_currentBoosterPos);
        _currentBooster.Play();
        _index = 0;
        StartCountDownTime();
        _delayUse = App.Delay(timeDelayUse, () =>
        {
            info.onUse?.Invoke();
            if (soundUsing) _soundUsingCache = playSfxEvent?.Raise(soundUsing);
            OnSuckAllTargets();
        });

        if (useBoosterMissionCount) useBoosterMissionCount.Add(1);
    }

    void OnSuckAllTargets()
    {
        if (_index >= _currentTargets.Count)
        {
            _delayHandleSuckBooster?.Cancel();
            return;
        }

        _currentTargets[_index].transform.DOMove(_currentBoosterPos + headOffset, timeMoveEachObject);
        _delayHandleSuckBooster = App.Delay(timeDelayEachObject, (() =>
        {
            _index++;
            OnSuckAllTargets();
        }));
    }

    public override void StopUse()
    {
        base.StopUse();
        onStartSuckBoosterEvent.Raise(false);
        onDoSuckBoosterEvent.OnRaised -= OnSelectBlockToBreak;
        _delayHandleSuckBooster?.Cancel();
        _delayUse?.Cancel();
        _currentTargets = null;
        if (_currentBooster) Destroy(_currentBooster.gameObject);
        if (_soundUsingCache != null) stopSfxEvent?.Raise(_soundUsingCache);
    }

    protected override void OnActionBoosterComplete()
    {
        base.OnActionBoosterComplete();
        onStartSuckBoosterEvent.Raise(false);
        _currentBooster.Stop();
    }
}