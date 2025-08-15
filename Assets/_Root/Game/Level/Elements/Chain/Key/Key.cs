using DG.Tweening;
using System;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;

public class Key : BaseMono
{
    [SerializeField] private GameObject model;
    [SerializeField] private float timeMove = 0.75f;
    [SerializeField] private Vector3 eulerAngleWhenMoveToTarget = new Vector3(0, -90, 90);
    [SerializeField] private float moveUpDistance = 2f;
    [SerializeField] private float moveDownDistance = 3f;
    [SerializeField] private float timeMoveDown = 0.25f;

    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundOpen;
    Tween _tweenMove;
    Tween _tweenRotation;
    Action _actionComplete;
    public void SetPosition(Vector3 position) { transform.position = position;}
    public void SetParent(Transform parent) { transform.SetParent(parent); }
    private void Awake()
    {
        var block = transform.parent.GetComponent<BlockColor>();
        if(block != null) 
        {
            transform.SetParent(block.Model.transform);
        }
    }
    public void Move(Vector3 position, Action actionComplete = null) 
    {
        _actionComplete = actionComplete;
        _tweenRotation = model.transform.DORotate(eulerAngleWhenMoveToTarget, timeMove);
        _tweenMove = model.transform.DOMove(position + Vector3.up * moveUpDistance, timeMove).OnComplete(() =>
        {
            _tweenMove = model.transform.DOMove(position - Vector3.up * moveDownDistance, timeMoveDown).OnComplete(OnMoveComplete);
        });
    }
    void OnMoveComplete() 
    {
        playSfxEvent?.Raise(soundOpen);
        _actionComplete?.Invoke();
        model.SetActive(false);
    }
    public void Clear() 
    {
        _tweenMove.Kill();
        _tweenRotation.Kill();
        _actionComplete = null;
    }
}