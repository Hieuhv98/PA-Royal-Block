using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Data/BoosterManager", fileName = "booster_manager")]
public class BoosterManager : ScriptableObject
{
    [SerializeField] private List<BoosterData> boosterDatas;
    [SerializeField] private EventNoParam onClickContinueUnlockNewElementEvent;

    public BoosterData currentUsingBooster;
    public int GetBoosterAmount(EElementType eElementType) => GetBooster(eElementType).GetAmount();
    public BoosterData GetBooster(EElementType eElementType) => boosterDatas.FirstOrDefault(b => b.elementType == eElementType);

    public void CheckUnlockBooster()
    {
        var checkBooster = boosterDatas.FirstOrDefault(b => b.IsCurrentLevelToUnLock);
        if (checkBooster)
        {
            onClickContinueUnlockNewElementEvent.OnRaised -= OnClickBoosterUnlockContinue;
            onClickContinueUnlockNewElementEvent.OnRaised += OnClickBoosterUnlockContinue;
            currentUsingBooster = checkBooster;
            currentUsingBooster.OnShowPopupUnlockBooster();
        }
    }

    void OnClickBoosterUnlockContinue()
    {
        onClickContinueUnlockNewElementEvent.OnRaised -= OnClickBoosterUnlockContinue;
        currentUsingBooster.SetBoosterUnlocked();
    }

    public void OnAddBonusAllBooster(int aMount, TrackingEnum.EPlacement placement, TrackingEnum.EResourceReason reason = TrackingEnum.EResourceReason.purchase)
    {
        foreach (var booster in boosterDatas)
        {
            booster.AddAmount(aMount);
        }
    }

    public void OnDoUnlockBooster()
    {
        currentUsingBooster.SetBoosterUnlocked();
    }
}