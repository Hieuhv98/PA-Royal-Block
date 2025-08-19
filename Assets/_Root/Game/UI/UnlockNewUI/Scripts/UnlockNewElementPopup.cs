using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;

public class UnlockNewElementPopup : UIPopup
{
    [Header("Event")] [SerializeField] private EventNoParam onClickContinueUnlockNewElementEvent;
    [Header("Data")] [SerializeField] private UnlockNewElementData unlockNewElementData;

    [Header("Properties")] [SerializeField]
    private Image titleIcon;

    [SerializeField] private Image unlockIcon;
    [SerializeField] private TextMeshProUGUI description;
    private UnlockNewElementInfor _currentUnlcokNewElementInfor;

    protected override void OnBeforeShow()
    {
        SetUp();
        base.OnBeforeShow();
    }

    void SetUp()
    {
        _currentUnlcokNewElementInfor = unlockNewElementData.GetUnlockNewElementInfor();
        titleIcon.sprite = _currentUnlcokNewElementInfor.titleIconUnlock;
        unlockIcon.sprite = _currentUnlcokNewElementInfor.mainIconUnlock;
        description.text = _currentUnlcokNewElementInfor.description;
        if(titleIcon != null) titleIcon.SetNativeSize();
        if (unlockIcon != null) unlockIcon.SetNativeSize();
    }

    public void OnClickContinue()
    {
        onClickContinueUnlockNewElementEvent.Raise();
        Hide();
    }
}