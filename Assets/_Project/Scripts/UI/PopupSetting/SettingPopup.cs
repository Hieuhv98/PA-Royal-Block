using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Events;
using VirtueSky.UIButton;
using VirtueSky.Variables;
using VirtueSky.Vibration;

#if VIRTUESKY_ADMOB
using GoogleMobileAds.Ump.Api;
#endif

namespace TheBeginning.UI
{
    public class SettingPopup : UIPopup
    {
        [Header("Variable")] [SerializeField]
        private IntegerVariable unlockWinStreakLevel;

        [SerializeField] private IntegerVariable indexLevelVariable;
        [Header("Sound")] [SerializeField] private FloatVariable soundVolume;
        [SerializeField] private Image buttonSound;
        [SerializeField] private Sprite soundOn;
        [SerializeField] private Sprite soundOff;
        [Header("Music")] [SerializeField] private FloatVariable musicVolume;
        [SerializeField] private Image buttonMusic;
        [SerializeField] private Sprite musicOn;
        [SerializeField] private Sprite musicOff;

        [Header("Vibrate")] [SerializeField]
        private Image buttonVibrate;

        [SerializeField] private Sprite vibrateOn;
        [SerializeField] private Sprite vibrateOff;
        [Header("Home")] [SerializeField] private GameObject buttonHome;

        [Header("Restore")] [SerializeField]
        private ButtonUI btnRestorePurchase;

        [Header("Properties")] [SerializeField]
        private BooleanVariable isPlayingLevel;

        [SerializeField] private BooleanVariable isPauseGame;

        [SerializeField] private BooleanVariable isStartingLevel;
        [SerializeField] private BooleanVariable pauseTimeLevelVariable;
        [SerializeField] private EventNoParam callReturnHome;

        [Header("Tutorial")] [SerializeField] private BooleanVariable isBackToBuildTutorialPlaying;
        [SerializeField] private ButtonTutorialUI tutorialUI;
        [Header("Config")]
        [SerializeField] private BooleanVariable isStartingGlamRush;
        [SerializeField] private BooleanVariable isGlamRushFinished;

        //[SerializeField] private EventNoParam callShowAgainGDPREvent;

        protected override void OnBeforeShow()
        {
            base.OnBeforeShow();
            pauseTimeLevelVariable.Value = true;
            btnRestorePurchase.onClick.AddListener(OnClickRestorePurchase);
            Init();
#if UNITY_IOS
            btnRestorePurchase.gameObject.SetActive(!isPlayingLevel || !isBackToBuildTutorialPlaying.Value);
#endif
            // #if VIRTUESKY_ADMOB
            //             btnShowPrivacyConsent.gameObject.SetActive(ConsentInformation.PrivacyOptionsRequirementStatus ==
            //                                                        PrivacyOptionsRequirementStatus.Required);
            // #endif
            // InitBtnLanguage();
        }

        protected override void OnAfterShow()
        {
            base.OnAfterShow();
            if (isPlayingLevel.Value) isPauseGame.Value = true;
        }

        protected override void OnBeforeHide()
        {
            base.OnBeforeHide();
            pauseTimeLevelVariable.Value = false;
            btnRestorePurchase.onClick.RemoveListener(OnClickRestorePurchase);
            // btnShowPrivacyConsent.onClick.RemoveListener(OnClickShowPrivacyConsent);'

            if (isPlayingLevel.Value) isPauseGame.Value = false;
        }

        void InitBtnLanguage()
        {
            // btnLanguageEnglish.toneIntensity = 1;
            // btnLanguageVietNam.toneIntensity = 1;
            // if (Locale.CurrentLanguage == Language.English) btnLanguageEnglish.toneIntensity = 0;
            // if (Locale.CurrentLanguage == Language.Vietnamese) btnLanguageVietNam.toneIntensity = 0;
        }

        void Init()
        {
            btnRestorePurchase.gameObject.SetActive(false);
            UpdateStatus();
        }

        public void OnClickRestorePurchase()
        {
#if VIRTUESKY_IAP && UNITY_IOS
        IapManager.Restore();
#endif
        }

        public void OnClickSettingSound()
        {
            soundVolume.Value = soundVolume.Value == 0 ? 1 : 0;
            UpdateStatus();
        }

        public void OnClickSettingMusic()
        {
            musicVolume.Value = musicVolume.Value == 0 ? 1 : 0;
            UpdateStatus();
        }

        public void OnClickSettingVibration()
        {
            Vibration.EnableVibration = !Vibration.EnableVibration;
            UpdateStatus();
        }

        void UpdateStatus()
        {
            buttonSound.sprite = soundVolume.Value == 1 ? soundOn : soundOff;
            buttonMusic.sprite = musicVolume.Value == 1 ? musicOn : musicOff;
            buttonVibrate.sprite = Vibration.EnableVibration ? vibrateOn : vibrateOff;
        }

        public void OnClickHome()
        {
        }

        public void OnClickShowPrivacyConsent()
        {
            //callShowAgainGDPREvent.Raise();
        }

        // public void OnClickLanguageEn()
        // {
        //     Locale.CurrentLanguage = Language.English;
        //     InitBtnLanguage();
        // }

        // public void OnClickLanguageVi()
        // {
        //     Locale.CurrentLanguage = Language.Vietnamese;
        //     InitBtnLanguage();
        // }
    }
}