using UnityEngine;
public class HammerBoosterUI : BoosterUI
{
    [SerializeField] private BoosterTime boosterTime;

    private void Awake()
    {
        boosterTime.SetUp(boosterData);
    
    }
    protected override void OnBoosterStart()
    {
        base.OnBoosterStart();
        boosterTime.Play();
    }
    protected override void OnBoosterComplete()
    {
        base.OnBoosterComplete();
        boosterTime.Complete();
    }
    public override void OnDisable()
    {
        base.OnDisable();
        boosterTime.Cancel();
    }
}