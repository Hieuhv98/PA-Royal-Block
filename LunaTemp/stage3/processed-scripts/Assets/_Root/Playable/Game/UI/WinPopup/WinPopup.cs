using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;
using VirtueSky.Variables;
using VirtueSky.Core;
using System.Collections.Generic;
using VirtueSky.Audio;
using System.Threading.Tasks;
using DG.Tweening;

namespace TheBeginning.UI
{
    public class WinPopup : UIPopup
    {
        [SerializeField]
        private GameSettings gameSettings;

        [SerializeField] private int moneyWin = 50;
        [SerializeField] private float ratioScaleContinueButton;
        [SerializeField] private IntegerVariable currentLevel;
        [SerializeField] private Button btnTapToContinue;
        [SerializeField] private string textValueFormat;
        [SerializeField] private TextMeshProUGUI textButtonComplete;
        [SerializeField] private float timeDelayShowContinue;
        [SerializeField] private float timeScaleContinue;
        [SerializeField] private SoundData soundFx;
        [SerializeField] private float timeDelayPlayFx = 0.5f;
        [SerializeField] private GameObject starPosition;

        [SerializeField]
        private EventNoParam playCurrentLevelEvent;

        [SerializeField] private EventNoParam moveAllCoinDone;
        [Header("Animation")]
        [SerializeField] private float timeShowAnimation = 3f;
        [SerializeField] private List<AnimatorUIControl> listAnimatorUI = new List<AnimatorUIControl>();
        [SerializeField] private GameObject group;

        private float percent = 0;
        private bool waitMoveAllCoinDone;
        private bool _isCanClickContinue;
        private DelayHandle _delayShowBtnContinue;
        private Tween _tweenScaleBtnContinue;

        private int _moneyWin = 0;
        protected override void OnBeforeShow()
        {
            base.OnBeforeShow();

            currentLevel.Value++;
            waitMoveAllCoinDone = false;
            _moneyWin = moneyWin;
            moveAllCoinDone.AddListener(OnMoveAllCoinDone);
            Setup();

            foreach (var animator in listAnimatorUI)
            {
                animator.Play();
            }

            App.Delay(timeDelayPlayFx, () =>
            {
                playSfxEvent?.Raise(soundFx);
            });
            group.SetActive(false);

            App.Delay(timeShowAnimation, () =>
            {
                group.SetActive(true);
                btnTapToContinue.gameObject.SetActive(false);
                _isCanClickContinue = false;
                _delayShowBtnContinue = App.Delay(this, timeDelayShowContinue, (() =>
                {
                    btnTapToContinue.gameObject.SetActive(true);
                    btnTapToContinue.interactable = false;
                    btnTapToContinue.transform.localScale = Vector3.zero;
                    _tweenScaleBtnContinue = btnTapToContinue.transform.DOScale(Vector3.one, timeScaleContinue)
                        .SetUpdate(true)
                        .OnComplete(() =>
                        {
                            _isCanClickContinue = true;
                            btnTapToContinue.interactable = true;
                        });
                }));
            });
        }

        protected override void OnBeforeHide()
        {
            base.OnBeforeHide();
            moveAllCoinDone.RemoveListener(OnMoveAllCoinDone);
        }

        private void Setup()
        {
            textButtonComplete.text = string.Format(textValueFormat, _moneyWin);
        }

        public void OnClickContinue()
        {
            if (!_isCanClickContinue && isActive) return;
            OnClaimCoinWin(false);
        }

        void OnClaimCoinWin(bool isWatchAds)
        {
            btnTapToContinue.gameObject.SetActive(false);
            _delayShowBtnContinue?.Cancel();
            _tweenScaleBtnContinue.Kill();

            var reason = isWatchAds ? TrackingEnum.EResourceReason.watch_ads : TrackingEnum.EResourceReason.reward;
            StarSystem.AddStar(1, starPosition.transform.position, TrackingEnum.EResourceType.currency, reason,
                TrackingEnum.EPlacement.win_popup);
            CoinSystem.AddCoin(_moneyWin, btnTapToContinue.transform.position,
                TrackingEnum.EResourceType.currency, reason, TrackingEnum.EPlacement.win_popup);
            App.Delay(1.25f, () => Hide());
        }

        protected override void OnAfterHide()
        {
            base.OnAfterHide();
            Transittion.Play(close: (() => { playCurrentLevelEvent.Raise(); }));
        }

        void OnMoveAllCoinDone()
        {
            waitMoveAllCoinDone = true;
        }
    }
}