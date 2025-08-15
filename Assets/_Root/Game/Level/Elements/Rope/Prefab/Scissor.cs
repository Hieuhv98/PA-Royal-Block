using DG.Tweening;
using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;

public class Scissor : BaseMono
{
    [SerializeField] private GameObject model;
    [SerializeField] private List<Renderer> listRenderer = new List<Renderer>();
    [SerializeField] private float timeMove = 0.75f;
    [SerializeField] private Vector3 eulerAngleWhenMoveToTarget = new Vector3(0, -90, 90);
    [SerializeField] private float moveUpDistance = 2f;
    [SerializeField] private float moveDownDistance = 3f;
    [SerializeField] private float timeMoveDown = 0.25f;

    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundOpen;

    [Header("Animator")]
    [SerializeField] private AnimatorComponent animatorComponent;
    [SerializeField] private AnimationClip idle;
    [SerializeField] private AnimationClip action;
    [SerializeField] private float timeCut = 0.75f;
    Tween _tweenMove;
    Tween _tweenRotation;
    Action _actionComplete;
    DelayHandle _delayCut;

    public void Start()
    {
        animatorComponent.Play(idle.name);

        var block = transform.parent.GetComponent<BlockColor>();
        if (block != null)
        {
            transform.SetParent(block.Model.transform);
        }
    }
    public void SetPosition(Vector3 position) { transform.position = position; }
    public void SetParent(Transform parent) { transform.SetParent(parent); }
    public void SetMaterial(Material material)
    {
        foreach (var renderer in listRenderer)
        {
            renderer.material = material;
        }
    }

    public void Move(Vector3 position, Action actionComplete = null)
    {
        _actionComplete = actionComplete;
        _tweenRotation = model.transform.DORotate(eulerAngleWhenMoveToTarget, timeMove);
        _tweenMove = model.transform.DOMove(position + Vector3.up * moveUpDistance, timeMove).OnComplete(() =>
        {
            animatorComponent.Play(action.name);
            _tweenMove = model.transform.DOMove(position - Vector3.up * moveDownDistance, timeMoveDown).OnComplete(OnMoveComplete);
        });
    }
    void OnMoveComplete()
    {
        _delayCut = App.Delay(timeCut - timeMove, () =>
        {
            playSfxEvent?.Raise(soundOpen);
            _actionComplete?.Invoke();
            model.SetActive(false);

        });

    }
    public void Clear()
    {
        _tweenMove.Kill();
        _tweenRotation.Kill();
        _actionComplete = null;
        _delayCut?.Cancel();
    }
}