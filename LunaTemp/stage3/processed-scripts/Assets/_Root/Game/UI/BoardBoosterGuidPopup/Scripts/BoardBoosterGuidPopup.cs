using TheBeginning.UI;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;

public class BoardBoosterGuidPopup : UIPopup
{
    [SerializeField] private Image iconBooster;
    [SerializeField] private TextMeshProUGUI descriptionText;
    [SerializeField] private BooleanEvent onShowing;

    protected override void OnBeforeShow()
    {

        iconBooster.SetNativeSize();
        base.OnBeforeShow();
        onShowing?.Raise(true);
    }

    public void StopUseBooster()
    {
        Hide();
    }
    protected override void OnAfterHide()
    {
        base.OnAfterHide();
        onShowing?.Raise(false);
    }
}