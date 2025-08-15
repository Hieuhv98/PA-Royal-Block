using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;

public class BoardBoosterGuidPopup : UIPopup
{
    [SerializeField] private BoosterManager boosterManager;
    [SerializeField] private Image iconBooster;
    [SerializeField] private TextMeshProUGUI descriptionText;
    [SerializeField] private BooleanEvent onShowing;

    protected override void OnBeforeShow()
    {
        iconBooster.sprite = boosterManager.currentUsingBooster.boosterIconGuid;
        descriptionText.text = boosterManager.currentUsingBooster.boosterDescription;
        iconBooster.SetNativeSize();
        base.OnBeforeShow();
        onShowing?.Raise(true);
    }

    public void StopUseBooster()
    {
        boosterManager.currentUsingBooster.StopUse();
        Hide();
    }
    protected override void OnAfterHide()
    {
        base.OnAfterHide();
        onShowing?.Raise(false);
    }
}