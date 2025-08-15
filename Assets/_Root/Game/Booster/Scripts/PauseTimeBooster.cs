using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Data/BoosterData/PauseTimeData", fileName = "booster_pause_time_data")]
public class PauseTimeBooster : BoosterData
{
    [Header("Properties")] [SerializeField]
    private BooleanVariable pauseTimeLevelVariable;

    [SerializeField] private EventNoParam startCountDownTimeEvent;
    [SerializeField] private IntegerVariable totalTimeAddWhenPlay;
    [SerializeField] private BooleanVariable isUsingTimerBooster;

    public override void SetBoosterUnlocked()
    {
        base.SetBoosterUnlocked();
        startCountDownTimeEvent.Raise();
    }

    protected override void OnActionBoosterStart()
    {
        base.OnActionBoosterStart();
        if (useBoosterMissionCount) useBoosterMissionCount.Add(1);
        pauseTimeLevelVariable.Value = true;
        isUsingTimerBooster.Value = true;
        totalTimeAddWhenPlay.Add((int)timeCoolDown);
    }

    protected override void OnActionBoosterComplete()
    {
        base.OnActionBoosterComplete();
        pauseTimeLevelVariable.Value = false;
        isUsingTimerBooster.Value = false;
    }
    public override void StopUse()
    {
        base.StopUse();
        pauseTimeLevelVariable.Value = false;
    }
}