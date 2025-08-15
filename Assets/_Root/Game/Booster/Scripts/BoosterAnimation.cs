using System.Collections;
using UnityEngine;

public class BoosterAnimation : MonoBehaviour
{
    [SerializeField] private GameObject model;
    [SerializeField] private AnimatorComponent _animator;
    [SerializeField] private AnimationClip actionAnim;
    [SerializeField] private AnimationClip idleAnim;
    [SerializeField] private float timeDelayDestroy = .5f;

    public Vector3 CurrentPosition => transform.position;

    Coroutine _coroutineDelay;
    public void Play()
    {
        model.SetActive(true);
        Action();
    }
    public void Action() { _animator?.Play(actionAnim.name); }
    public void Idle() { _animator?.Play(idleAnim.name); }
    public void Stop()
    {
        _coroutineDelay = StartCoroutine(DelayDestroy());
    }
    IEnumerator DelayDestroy()
    {
        yield return new WaitForSeconds(timeDelayDestroy);
        Idle();
        model.SetActive(false);
    }
    public void OnStartProcess(Vector3 blockPos)
    {
        transform.position = blockPos;
    }
    private void OnDisable()
    {
        if (_coroutineDelay != null) StopCoroutine(_coroutineDelay);
    }
}