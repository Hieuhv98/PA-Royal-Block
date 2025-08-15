using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;
using VirtueSky.Audio;
using VirtueSky.Events;
using Button = UnityEngine.UI.Button;

namespace VirtueSky.UIButton
{
    public abstract class ButtonCustom : Button
    {
        public ClickButtonEvent clickButtonEvent;

        [SerializeField]
        private bool isMotion = true;

        [SerializeField] private Ease easingTypes = Ease.OutQuint;

        [SerializeField] private float scale = 0.9f;
        [SerializeField] private bool isShrugOver;
        [SerializeField] private float timeShrug = .2f;
        [SerializeField] private float strength = .2f;

        [SerializeField]
        private bool useSoundFx;

        [SerializeField] private PlaySfxEvent playSfxEvent;
        [SerializeField] private SoundData soundDataClickButton;

        Vector3 originScale = Vector3.one;
        private bool canShrug = true;
        private Tween _tween;

        protected override void OnEnable()
        {
            base.OnEnable();
            originScale = transform.localScale;
        }

        protected override void OnDisable()
        {
            base.OnDisable();
            ResetScale();
        }


        public override void OnPointerDown(PointerEventData eventData)
        {
            base.OnPointerDown(eventData);
            DoScale();
            if (useSoundFx)
            {
                soundDataClickButton.PlaySfx(playSfxEvent);
            }

            if (clickButtonEvent != null)
            {
                clickButtonEvent.Raise();
            }
            else
            {
                Debug.Log($"Click button event ({gameObject.name}) null");
            }
        }


        public override void OnPointerUp(PointerEventData eventData)
        {
            base.OnPointerUp(eventData);
            ResetScale();
        }

        public override void OnPointerExit(PointerEventData eventData)
        {
            base.OnPointerExit(eventData);
            Shrug();
        }

        void DoScale()
        {
            if (isMotion)
            {
                _tween = transform.DOScale(originScale * scale, .15f).SetEase(easingTypes);
            }
        }

        void Shrug()
        {
            if (isMotion && isShrugOver && canShrug)
            {
                canShrug = false;
                if (isMotion && isShrugOver)
                {
                }
            }
        }

        void ResetScale()
        {
            if (isMotion)
            {
                _tween.Kill();
                transform.localScale = originScale;
            }
        }
    }
}