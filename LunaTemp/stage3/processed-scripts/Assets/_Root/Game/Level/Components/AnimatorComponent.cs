using UnityEngine;
using VirtueSky.Core;

public class AnimatorComponent : BaseMono
{
    [SerializeField] private Animator _animator;

    public void Play(string animationName, int layer = -1, float normalizedTime = 0f) 
    {
        _animator.Play(animationName, layer, normalizedTime);
    }
    public void Stop() { _animator.StopPlayback(); }
    public void SetSpeed(float speed) { _animator.speed = speed; }
}