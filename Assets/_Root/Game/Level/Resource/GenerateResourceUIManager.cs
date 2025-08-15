using System.Collections.Generic;
using System;
using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Variables;
using VirtueSky.Audio;
using VirtueSky.ObjectPooling;
using DG.Tweening;
using TMPro;
using VirtueSky.Vibration;
using VirtueSky.Events;

public class GenerateResourceUIManager : BaseMono
{
    [SerializeField] private Canvas canvas;
    [SerializeField] private RectTransform group;
    [SerializeField] private RectTransform to;
    [SerializeField] private TextMeshProUGUI txtCount;
    [SerializeField] private string stringFormatTextCount = "{0}";
    [SerializeField] private GameObject resourcePrefab;
    [SerializeField] private IntegerVariable resourceValue;
    [SerializeField] private CreateResourcesEvent createResourcesEvent;
    [SerializeField] private EventNoParam replayLevelEvent;

    [Header("Config")][SerializeField] private float timeMoveDelay = 0f;
    [SerializeField] private float timeMove = 1f;
    [SerializeField] private float timeMoveWait = .15f;
    [SerializeField] private Ease easeMove;
    [SerializeField] private float scaleTo = 1.15f;
    [SerializeField] private float scaleUpTime = 0.1f;
    [SerializeField] private float scaleDownTime = 0.05f;
    [SerializeField] private Vector3 offsetMoveTo;
    [SerializeField] private float preCompleteOffsetTime = 0.25f;

    [Header("Audio")][SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundMoveComplete;

    [Header("Fx")][SerializeField] private ParticleSystem fxCollect;

    Tween _delayHandleRunning;
    List<Tween> _listDelayHandlePreComplete, _listDelayHandle, _listDelayHandleComplete;
    Canvas _canvas;
    List<Tween> _listTween = new List<Tween>();
    List<ResourcePrefab> _listObjectCache = new List<ResourcePrefab>();

    protected void Awake()
    {
        createResourcesEvent.OnRaised += OnCreateResourcesEvent;
        replayLevelEvent.OnRaised += OnReplayLevel;

        if (_canvas == null) _canvas = to.GetComponentInParent<Canvas>();
        if (fxCollect) fxCollect.transform.position = to.transform.position;

        transform.parent = transform.parent.parent;
    }
    public override void OnEnable()
    {
        base.OnEnable();
        Refresh();
    }
    void Refresh()
    {
        resourceValue.ResetValue();
        UpdateText();
        _listDelayHandlePreComplete = new List<Tween>();
        _listDelayHandle = new List<Tween>();
        _listDelayHandleComplete = new List<Tween>();
    }

    void OnReplayLevel()
    {
        OnStopGenerating();
        Refresh();
    }

    int count = 0;
    void OnCreateResourcesEvent((Camera camera, List<ResourcePrefab> listGameObject, Action actionStart, Action actionComplete) info)
    {
        _delayHandleRunning.Kill();
        var listGameObject = new List<ResourcePrefab>(info.listGameObject);
        _listObjectCache.AddRange(listGameObject);
        count++;
        var delayHandle = DOVirtual.DelayedCall(timeMoveDelay, () =>
        {
            var count = listGameObject.Count;
            info.actionStart?.Invoke();
            float timeMoveOneWay = (timeMove - (count - 1) * timeMoveWait) / count;

            int i = 0;
            var timeMoveFirstComplete = -1f;
            foreach (var obj in listGameObject)
            {
                var time = timeMoveOneWay + (i + 1) * timeMoveWait;
                if (timeMoveFirstComplete < 0) timeMoveFirstComplete = time;
                var pos = Extension.CanvasToWorldPosition(info.camera, canvas, to) + offsetMoveTo;
                obj.transform.DOKill(true);

                obj.Rotate();
                var tweenMove = obj.transform.DOMove(pos, time).SetEase(easeMove).OnComplete(() =>
                {
                    obj.DeSpawn();
                    _listObjectCache.Remove(obj);
                });

                var timeToScale = Mathf.Max(time - 0.15f, 0.05f);
                var tweenDelay = DOVirtual.DelayedCall(timeToScale, () =>
                {
                    group.DOScale(scaleTo, scaleUpTime).OnComplete(() => group.DOScale(1f, scaleUpTime));
                    OnCollect();
                });

                var tweenScale = obj.transform.DOScale(.3f, time).SetEase(easeMove);

                _listTween.Add(tweenMove);
                _listTween.Add(tweenDelay);
                _listTween.Add(tweenScale);
                i++;
            }

            var timeMoveFirst = Mathf.Max(timeMoveFirstComplete - preCompleteOffsetTime, 0.25f);
            var delayHandlePreComplete = DOVirtual.DelayedCall(timeMoveFirst, () =>
            {
                playSfxEvent?.Raise(soundMoveComplete);
            });
            _listDelayHandlePreComplete.Add(delayHandlePreComplete);

            var delayHandleComplete = DOVirtual.DelayedCall(timeMove, () => { info.actionComplete?.Invoke(); });
            _listDelayHandleComplete.Add(delayHandleComplete);
        });

        _listDelayHandle.Add(delayHandle);

        _delayHandleRunning = DOVirtual.DelayedCall(timeMove + timeMoveDelay, () =>
        {
            _listDelayHandle.Clear();
            _listDelayHandlePreComplete.Clear();
            _listDelayHandleComplete.Clear();
            _listTween.Clear();
        });
    }

    public void UpdateText()
    {
        if (txtCount) txtCount.text = string.Format(stringFormatTextCount, resourceValue.Value);
    }

    void OnCollect()
    {
        if (fxCollect)
        {
            fxCollect.Stop();
            fxCollect.Clear();
            fxCollect.Play(true);
        }

        Vibration.VibratePop();
        resourceValue.Add(1);
        UpdateText();
    }

    public void OnDestroy()
    {
        createResourcesEvent.OnRaised -= OnCreateResourcesEvent;
        replayLevelEvent.OnRaised -= OnReplayLevel;
        OnStopGenerating();
    }

    void OnStopGenerating()
    {
        foreach (var delayHandle in _listDelayHandle) delayHandle.Kill();
        foreach (var delayHandle in _listDelayHandlePreComplete) delayHandle.Kill();
        foreach (var delayHandle in _listDelayHandleComplete) delayHandle.Kill();
        foreach (var tween in _listTween) tween.Kill();
        foreach (var obj in _listObjectCache) if (obj != null) obj.DeSpawn();
        _delayHandleRunning.Kill();
    }
}