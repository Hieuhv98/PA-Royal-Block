using Spine.Unity;
using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Misc;

public class AnimatorUIControl : MonoBehaviour
{
    [SerializeField] private float timeDelayPlay = 0f;
    [SerializeField] private SkeletonGraphic graphic;
    [SerializeField] private List<AnimationData> animations;
    [SerializeField] private bool isHideWhenPlay = false;
    [SerializeField] private float timeHide = 2f;

    [Header("Audio")]
    [SerializeField] private float timeDelayPlaySfx = 0.5f;
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData sound;

    private int _playAnimationCount = 0;
    
    public void Play()
    {
        graphic.gameObject.SetActive(false);
        App.Delay(timeDelayPlay, () =>
        {
            App.Delay(timeDelayPlaySfx, () => playSfxEvent?.Raise(sound));

            graphic.gameObject.SetActive(true);
            PlayAnimation(animations);

            if (isHideWhenPlay)
            {
                App.Delay(timeHide, () =>
                {
                    graphic.gameObject.SetActive(false);
                });
            }
        });
    }

    public void PlayAnimation(AnimationData animation, int trackIndex = 0, Action actionComplete = null)
    {
        graphic.PlayOnly(animation.Name, animation.IsLoop, trackIndex: trackIndex).OnComplete(() => actionComplete?.Invoke());
    }
    public void PlayAnimation(List<AnimationData> animationBases, Action actionStepComplete = null, Action actionComplete = null)
    {
        if (animationBases.Count == 0)
        {
            actionComplete?.Invoke();
            return;
        }
        _playAnimationCount = 0;
        Play();

        void Play()
        {
            PlayAnimation(animationBases[_playAnimationCount], actionComplete: () =>
            {
                _playAnimationCount++;
                if (_playAnimationCount >= animationBases.Count)
                {
                    actionComplete?.Invoke();
                }
                else
                {
                    actionStepComplete?.Invoke();
                    Play();
                }
            });
        }

    }
}

[Serializable]
public class AnimationData 
{
    [SerializeField, SpineAnimation] private string name;
    [SerializeField] private bool isLoop;

    public string Name => name;
    public bool IsLoop => isLoop;
}