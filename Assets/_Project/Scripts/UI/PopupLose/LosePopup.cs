using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;
using VirtueSky.Variables;

namespace TheBeginning.UI
{
    public class LosePopup : UIPopup
    {
        [SerializeField] private IntegerVariable currentLevel;
        [SerializeField] private Image headerText;
        [SerializeField] private string levelFormatText;
        [SerializeField] private LoseData loseData;
        [SerializeField] private HeartData heartData;
        [SerializeField] private Transform iconTransform;
        [SerializeField] private EventNoParam replayGameEvent;
        [SerializeField] private EventNoParam returnHomeEvent;

        protected override void OnBeforeShow()
        {
            base.OnBeforeShow();

            iconTransform.Clear();
            var data = loseData.GetData();
            Instantiate(data.prefab, iconTransform);
            headerText.sprite = data.loseName;
            if(headerText != null) headerText.SetNativeSize();

            heartData.Minus(1);
        }
        protected override void OnAfterShow()
        {
            base.OnAfterShow();
        }

        protected override void OnBeforeHide()
        {
            base.OnBeforeHide();
        }

        protected override void OnAfterHide()
        {
            base.OnAfterHide();
        }

        public void ClosePopup()
        {
            Transittion.Play(close: (() =>
            {
                Hide();
                returnHomeEvent.Raise();
            }));
        }

        public void OnClickReplay()
        {
            Hide();
            Transittion.Play(close: (() => { replayGameEvent.Raise(); }));
        }
    }
}