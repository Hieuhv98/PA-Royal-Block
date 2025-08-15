using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;

public class Shutter : BaseMono
{
    [SerializeField] private AnimatorComponent animator;
    [SerializeField] private string openAnimName = "Close";
    [SerializeField] private string closeAnimName = "Open";

    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundOpen;
    [SerializeField] private SoundData soundClose;
    private bool _isOpen;
    private IShutter _shutter;
    public void SetUp(IShutter shutter, bool isOpenDefault = true)
    {
        _isOpen = isOpenDefault;
        _shutter = shutter;
        _shutter.IsOpen = _isOpen;
    }
    public void Switch() 
    {
        _isOpen = !_isOpen;
        _shutter.IsOpen = _isOpen;
        Refresh();
    }
    public void Refresh() 
    {
        SetStatus(_isOpen);
    }
    public void SetStatus(bool isOpen)
    {
        var animName = isOpen ? openAnimName : closeAnimName;
        animator.Play(animName);

        var sound = isOpen ? soundOpen : soundClose;
        playSfxEvent?.Raise(sound);
    }
}