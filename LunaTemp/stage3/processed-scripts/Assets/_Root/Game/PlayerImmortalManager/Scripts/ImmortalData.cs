using System;
using TheBeginning.Data;
using UnityEngine;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Data/ImmortalData", fileName = "immortal_data")]
public class ImmortalData : ScriptableObject
{
    [SerializeField] private IntegerVariable totalTimeCountDownImmortalVariable;
    [SerializeField] private bool isImmortalStatusVariable;
    [SerializeField] private BooleanVariable isFirstTimePlayGame;
    private bool _isStartCountDownTimeImmortal;
    public Action<int> OnUpdateTimeImmortalAction;
    public Action OnInStatusImmortalAction;
    public Action OnEndStatusImmortalAction;

    public bool IsImmortalStatusVariable => isImmortalStatusVariable;

    public void Init()
    {
        if (isFirstTimePlayGame.Value)
        {
            SetTimeImmortal(0);
        }

        OnCheckImmortalStatus();
    }

    public void SetTimeImmortal(int timeSet)
    {
        if (!isImmortalStatusVariable)
        {
            UserData.LastDailyInfinity = DateTime.Now.ToString();
            totalTimeCountDownImmortalVariable.Value = 0;
        }

        totalTimeCountDownImmortalVariable.Value += timeSet;
        OnCheckImmortalStatus();
    }

    void OnCheckImmortalStatus()
    {
        var _currentTimeLeft = (float)(DateTime.Now - DateTime.Parse(UserData.LastDailyInfinity)).TotalSeconds;
        double totalDays = (DateTime.Parse(UserData.LastDailyInfinity).Date - DateTime.Now.Date).TotalDays;
        _isStartCountDownTimeImmortal = totalDays <= 0 && _currentTimeLeft < totalTimeCountDownImmortalVariable.Value;
        isImmortalStatusVariable = _isStartCountDownTimeImmortal;
        if (isImmortalStatusVariable)
        {
            OnInStatusImmortalAction?.Invoke();
        }

        if (totalDays > 0)
        {
            SetTimeImmortal(0);
        }
    }


    public void OnUpdateImmortalStatus()
    {
        if (_isStartCountDownTimeImmortal)
        {
            var _currentTimeLeft = (int)(DateTime.Now - DateTime.Parse(UserData.LastDailyInfinity)).TotalSeconds;
            var calculateTime = totalTimeCountDownImmortalVariable.Value - _currentTimeLeft;
            OnUpdateTimeImmortalAction?.Invoke(calculateTime);
            if (calculateTime <= 0)
            {
                _isStartCountDownTimeImmortal = false;
                isImmortalStatusVariable = false;
                OnEndStatusImmortalAction?.Invoke();
            }
        }
    }
}