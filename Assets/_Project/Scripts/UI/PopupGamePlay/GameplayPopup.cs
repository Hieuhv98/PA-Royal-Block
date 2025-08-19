using System.Collections.Generic;
using DG.Tweening;
using Spine.Unity;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.Misc;
using VirtueSky.Variables;

namespace TheBeginning.UI
{
    public class GameplayPopup : UIPopup
    {
        public TextMeshProUGUI levelText;

        [SerializeField] private TextMeshProUGUI levelTextNumber;

        public string stringFormatLevel = "{0}";

        public TextMeshProUGUI levelTypeText;
        [SerializeField] private List<BoosterUI> boosterUIs = new List<BoosterUI>();
        [FormerlySerializedAs("boardLevelText")] [SerializeField]
        private Image boardLevel;

        [SerializeField] private Image boardLevelText;
        [SerializeField] private Image replayIcon;
        [SerializeField] private Image settingIcon;
        [SerializeField] private LevelModeData levelModeData;

        [SerializeField]
        private EventNoParam replayEvent;

        [SerializeField] private EventNoParam callReturnHomeEvent;
        [SerializeField] private EventNoParam callReplayLevelEvent;
        [SerializeField] private EventNoParam nextLevelEvent;
        [SerializeField] private EventNoParam backLevelEvent;
        [SerializeField] private FloatEvent winLevelEvent;
        [SerializeField] private FloatEvent loseLevelEvent;
        [SerializeField] private BooleanVariable isStartingLevel;

        [SerializeField]
        private IntegerVariable indexLevelVariable;

        [SerializeField] private IntegerVariable unlockWinStreakLevel;
        [SerializeField] private BooleanVariable isPlayingLevel;

        [Header("Audio")] [SerializeField] private PlayMusicEvent playMusicEvent;

        [SerializeField] private SoundData soundHardLevel;

        [SerializeField] private SoundData musicInGame;

        [Header("Animation")] [SerializeField]
        private SkeletonGraphic transHardLevel;

        [SerializeField] private string transHardLevelAnim;

        [Header("Tutorial")] [SerializeField] private BooleanVariable isBackToBuildTutorialPlaying;
        [SerializeField] private ButtonTutorialUI tutorialUI;
        [SerializeField] private GameObject btnBackHome;

        [Header("Booster Guid")] [SerializeField]
        private BooleanEvent onShowBoosterGuild;

        [SerializeField] private GameObject groupUI;

        [Header("CTA Button")]
        [SerializeField] private BooleanEvent showCTAButtonEvent;
        [SerializeField] private GameObject ctaButton;

        [Header("Additional Time")]
        [SerializeField] private LevelAdditionalTime levelAdditionalTime;
        [SerializeField] private GameObject addTimeIcon;
        [SerializeField] private RectTransform addTimeModel;
        [SerializeField] private RectTransform addTimeModelDefaultPos;
        [SerializeField] private RectTransform addTimeModelToPos;
        [SerializeField] private TextMeshProUGUI addTimeText;
        [SerializeField] private string stringFormatAddTimeText = "{0}s";
        [SerializeField] private float timeDelayMove = 0.5f;
        [SerializeField] private float timeMove = 1f;
        [SerializeField] private float scaleDefault = 1f;
        [SerializeField] private float scaleToEnd = .7f;
        [SerializeField] private Ease easeMove;
        [SerializeField] private EventNoParam preStartLevelEvent;
        [SerializeField] private IntegerEvent addTimePlayEvent;

        protected override void OnBeforeShow()
        {
            base.OnBeforeShow();
            isPlayingLevel.Value = true;
            Setup(indexLevelVariable.Value);
            indexLevelVariable.AddListener(Setup);
            playMusicEvent.Raise(musicInGame);
            UpdateBoardLevelMode();

            callReplayLevelEvent.OnRaised += Refresh;
            isBackToBuildTutorialPlaying.OnRaised += OnBackToBuildTutorialPlaying;
            onShowBoosterGuild.OnRaised += OnShowBoosterGuildEvent;
            preStartLevelEvent.OnRaised += OnPreStartLevel;
            showCTAButtonEvent.OnRaised += OnShowCTAButton;
            groupUI.SetActive(true);
        }

        void UpdateBoardLevelMode()
        {
            transHardLevel.gameObject.SetActive(false);
            var data = levelModeData.GetLevelData();
            replayIcon.sprite = data.getLevelTypeInfor.GetIconReplayLevelSprite();
            boardLevelText.sprite = data.getLevelTypeInfor.GetIconBoardLevelSprite();
            boardLevel.sprite = data.getLevelTypeInfor.iconBoardGameplay;
            settingIcon.sprite = data.getLevelTypeInfor.GetIconSettingSprite();
            boardLevelText.SetNativeSize();
            levelText.fontMaterial = data.getLevelTypeInfor.GetColorTextLevelModeGameplay();
            levelTextNumber.fontMaterial = data.getLevelTypeInfor.GetColorTextLevelModeGameplay();
            boardLevel.SetNativeSize();
            replayIcon.SetNativeSize();
            settingIcon.SetNativeSize();

            Refresh();
        }

        void Refresh()
        {
            if (levelModeData.GetLevelData().getLevelModeInfor.levelMode == ELevelMode.VeryHard)
            {
                transHardLevel.gameObject.SetActive(true);
                playSfxEvent.Raise(soundHardLevel);

                App.Delay(1f, () => { transHardLevel.PlayOnly(transHardLevelAnim).OnComplete((() => { transHardLevel.gameObject.SetActive((false)); })); });
            }
        }

        protected override void OnAfterShow()
        {
            base.OnAfterShow();
            foreach (var boosterUI in boosterUIs)
            {
                boosterUI.Init();
            }
        }

        protected override void OnBeforeHide()
        {
            base.OnBeforeHide();
            indexLevelVariable.RemoveListener(Setup);
            callReplayLevelEvent.OnRaised -= Refresh;
            isBackToBuildTutorialPlaying.OnRaised -= OnBackToBuildTutorialPlaying;
            preStartLevelEvent.OnRaised -= OnPreStartLevel;
            onShowBoosterGuild.OnRaised -= OnShowBoosterGuildEvent;
            showCTAButtonEvent.OnRaised -= OnShowCTAButton;
            foreach (var tween in _tweenAddTime) tween.Kill();
            _tweenAddTime.Clear();
        }

        void OnBackToBuildTutorialPlaying(bool isPlaying)
        {
            if (isPlaying)
            {
                App.Delay(.25f, () =>
                {
                    tutorialUI.SetButton(btnBackHome);
                    tutorialUI.Show();
                });
            }
        }

        public void Setup(int currentLevel)
        {
            levelTextNumber.text = string.Format(stringFormatLevel, currentLevel);
            // LevelTypeText.text = $"Level ";
        }

        void OnShowBoosterGuildEvent(bool isShowing)
        {
            groupUI.SetActive(!isShowing);
        }

        public void OnClickHome()
        {
        }

        public void OnClickReplay()
        {
            Transittion.Play(close: () => { replayEvent.Raise(); });
        }

        List<Tween> _tweenAddTime = new List<Tween>();
        private void OnPreStartLevel() 
        {
            if(addTimeIcon) addTimeIcon.SetActive(levelAdditionalTime.IsAvailable);
            addTimeModel.gameObject.SetActive(levelAdditionalTime.IsAvailable);
            addTimeModel.localScale = Vector3.one * scaleDefault;
            if (levelAdditionalTime.IsAvailable) 
            {
                foreach (var tween in _tweenAddTime) tween.Kill();
                _tweenAddTime.Clear();

                addTimeText.text = string.Format(stringFormatAddTimeText, levelAdditionalTime.Count);
                var pos = addTimeModelDefaultPos == null ? Vector3.zero : addTimeModelDefaultPos.position;
                addTimeModel.transform.position = pos;
                var tweenDelay = DOVirtual.DelayedCall(timeDelayMove, () =>
                {
                    var tweenScale = addTimeModel.transform.DOScale(Vector3.one * scaleToEnd, timeMove).SetEase(easeMove);
                    var tweenMove = addTimeModel.transform.DOMove(addTimeModelToPos.position, timeMove).SetEase(easeMove)
                        .OnComplete(() =>
                        {
                            addTimeModel.gameObject.SetActive(false);
                            addTimePlayEvent?.Raise(levelAdditionalTime.Count);
                            _tweenAddTime.Clear();
                        });

                    _tweenAddTime.Add(tweenScale);
                    _tweenAddTime.Add(tweenMove);
                });
                _tweenAddTime.Add(tweenDelay);
            }
        }

        public void OnClickPrevious()
        {
            backLevelEvent.Raise();
        }

        public void OnClickSkip()
        {
            nextLevelEvent.Raise();
        }

        public void OnClickLose()
        {
            loseLevelEvent.Raise(1);
        }

        public void OnClickWin()
        {
            winLevelEvent.Raise(1);
        }

        public void OnClickSetting()
        {
            PopupManager.Show<SettingPopupInGame>(false);
        }

        void OnShowCTAButton(bool isShow)
        {
            ctaButton.SetActive(isShow);
        }
    }
}