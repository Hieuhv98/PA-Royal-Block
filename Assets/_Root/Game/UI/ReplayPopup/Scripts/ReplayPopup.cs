using System;
using TheBeginning.UI;
using UnityEngine;
using VirtueSky.Events;
using VirtueSky.Variables;

public class ReplayPopup : UIPopup
{
    [SerializeField] private HeartData heartData;
    [SerializeField] private EventNoParam replayEvent;
    [SerializeField] private EventNoParam returnHomeEvent;

    [SerializeField] private BooleanVariable isGlamRushFinished;
    [SerializeField] private BooleanVariable isGlamRushDone;
    [SerializeField] private StringVariable glamRushFinishedTime;
    [SerializeField] private IntegerVariable glamRushLosingTime;
    [SerializeField] private IntegerVariable glamRushLevelCurrentCache;

    [SerializeField] private BooleanVariable isStartingGlamRush;
    [SerializeField] private IntegerVariable currentLevel;
    [SerializeField] private IntegerVariable indexUnlockWinStreak;

    private DateTime _timeFinishGlamRush;

    public void OnReplay()
    {
        if (isActive)
        {
            _timeFinishGlamRush = DateTime.Now;
            DateTime.TryParse(glamRushFinishedTime.Value, out _timeFinishGlamRush);

            if (isStartingGlamRush.Value && !isGlamRushFinished.Value)
            {
                glamRushLevelCurrentCache.Add(1);
                glamRushFinishedTime.Value = System.DateTime.Now.ToString();
                isGlamRushFinished.Value = true;
            }

            if (!heartData.IsRunOutOfHeart)
            {
                heartData.Minus(1);
                OnReplayComplete(() =>
                {
                    replayEvent.Raise();
                    Hide();
                });
            }
            else
            {
                OnReplayComplete(() =>
                {
                    Transittion.Play(close: (() =>
                    {
                        Hide();
                        returnHomeEvent.Raise();
                    }));
                });
            }
        }
    }

    void OnReplayComplete(Action actionComplete)
    {
        actionComplete?.Invoke();
    }
}