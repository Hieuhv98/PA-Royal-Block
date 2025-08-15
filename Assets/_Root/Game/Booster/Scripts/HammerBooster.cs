using System;
using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Data/BoosterData/HammerBooster", fileName = "hammer_booster_data")]
public class HammerBooster : BoosterData
{
    [SerializeField]
    private BooleanEvent onStartHammerBoosterEvent;

    [SerializeField] private OnDoHammerBoosterEvent onDoHammerBoosterEvent;
    [SerializeField] private Vector3 offsetBoosterAnimationSpawn;
    [SerializeField] private BoosterAnimation boosterAnimation;
    private BoosterAnimation _currentBooster;
    private GameObject _currentTarget;

    protected override void OnActionBoosterStart()
    {
        onDoHammerBoosterEvent.OnRaised += OnSelectBlockToBreak;
        onStartHammerBoosterEvent.Raise(true);
    }

    void OnSelectBlockToBreak((GameObject target, Action onStart, Action onComplete) infor)
    {
        onDoHammerBoosterEvent.OnRaised -= OnSelectBlockToBreak;
        onStartActionUse += infor.onStart;
        onCompleteActionUse += infor.onComplete;
        _currentTarget = infor.target;

        if (_currentBooster == null) _currentBooster = Instantiate(boosterAnimation);
        _currentBooster.OnStartProcess(_currentTarget.transform.position + offsetBoosterAnimationSpawn);
        _currentBooster.Play();

        StartCountDownTime();
        if (useBoosterMissionCount) useBoosterMissionCount.Add(1);
    }

    public override void StopUse()
    {
        base.StopUse();
        onStartHammerBoosterEvent.Raise(false);
        onDoHammerBoosterEvent.OnRaised -= OnSelectBlockToBreak;
        _currentTarget = null;
        if (_currentBooster) Destroy(_currentBooster.gameObject);
    }

    protected override void OnActionBoosterComplete()
    {
        base.OnActionBoosterComplete();
        onStartHammerBoosterEvent.Raise(false);
        _currentBooster.Stop();
    }
}