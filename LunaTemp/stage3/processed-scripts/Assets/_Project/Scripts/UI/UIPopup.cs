using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Variables;
using DG.Tweening;

namespace TheBeginning.UI
{
    [RequireComponent(typeof(Canvas), typeof(GraphicRaycaster), typeof(CanvasGroup))]
    public class UIPopup : BaseMono
    {
        public CanvasGroup canvasGroup;

        public Canvas canvas;
        public bool useAnimation;
        public bool isAutoShow;
        public bool isNotSortingLayer;

        [SerializeField]
        protected GameObject background;

        [SerializeField]
        protected GameObject container;

        public bool useShowAnimation;

        public ShowAnimationType showAnimationType;
        public float durationShowPopup = .5f;

        [SerializeField]
        private MovePopupType showMovePopup;

        [SerializeField]
        private float offsetShowMove;

        [SerializeField]
        private Vector3 scaleFromShow = new Vector3(.5f, .5f, .5f);

        [SerializeField]
        private Vector3 eulerAngleShowFrom = new Vector3(0, 180, 0);

        [SerializeField]
        private Vector3Variable pointShowPos;

        public bool useHideAnimation;

        public HideAnimationType hideAnimationType;
        public float durationHidePopup = .5f;

        [SerializeField]
        private MovePopupType hideMovePopup;

        [SerializeField]
        private float offsetHideMove;

        [SerializeField]
        private Vector3 scaleFromHide = new Vector3(0, 0, 0);

        [SerializeField]
        private Vector3Variable pointHidePos;

        [Header("Audio")][SerializeField] protected PlaySfxEvent playSfxEvent;
        [SerializeField] private SoundData soundOpen;
        [SerializeField] private SoundData soundClose;

        private Tween tween;
        public System.Action ActionHide;

        private bool ConditionShowMove =>
            useAnimation && useShowAnimation && showAnimationType == ShowAnimationType.Move;

        private bool ConditionHideMove =>
            useAnimation && useHideAnimation && hideAnimationType == HideAnimationType.Move;

        private bool ConditionShowOutBack =>
            useAnimation && useShowAnimation && showAnimationType == ShowAnimationType.OutBack;

        private bool ConditionHideInBack =>
            useAnimation && useHideAnimation && hideAnimationType == HideAnimationType.InBack;

        private bool ConditionShowFlip =>
            useAnimation && useShowAnimation && showAnimationType == ShowAnimationType.Flip;

        protected bool isActive = false;

        public override void OnEnable()
        {
            base.OnEnable();
            isActive = false;
            if (isAutoShow)
            {
                Show();
            }
        }

        public virtual void Show()
        {
            if (soundOpen) playSfxEvent?.Raise(soundOpen);
            OnBeforeShow();
            if (useShowAnimation)
            {
                Vector3 currentPos = container.transform.position;
                Vector3 currentScale = container.transform.localScale;
                Vector3 currentAngle = container.transform.localEulerAngles;
                switch (showAnimationType)
                {
                    case ShowAnimationType.OutBack:
                        container.transform.localScale = scaleFromShow;
                        gameObject.SetActive(true);
                        tween = container.transform.DOScale(currentScale, durationShowPopup).SetEase(Ease.OutBack)
                            .OnComplete(OnAfterShow);
                        break;
                    case ShowAnimationType.Flip:
                        container.transform.eulerAngles = eulerAngleShowFrom;
                        gameObject.SetActive(true);
                        tween = container.transform.DORotate(currentAngle, durationShowPopup).SetEase(Ease.OutBack)
                            .OnComplete(OnAfterShow);
                        break;
                    case ShowAnimationType.Fade:
                        canvasGroup.alpha = 0;
                        gameObject.SetActive(true);
                        tween = canvasGroup.DOFade(1, durationShowPopup).SetEase(Ease.OutBack).OnComplete(() =>
                        {
                            canvasGroup.alpha = 1;
                            OnAfterShow();
                        });
                        break;
                    case ShowAnimationType.Move:
                        switch (showMovePopup)
                        {
                            case MovePopupType.Left:
                                container.transform.position = new Vector3(
                                    container.transform.position.x - offsetShowMove,
                                    container.transform.position.y,
                                    container.transform.position.z);
                                gameObject.SetActive(true);
                                tween = container.transform.DOMove(currentPos, durationShowPopup).SetEase(Ease.Linear)
                                    .OnComplete(OnAfterShow);
                                break;
                            case MovePopupType.Right:
                                container.transform.position = new Vector3(
                                    container.transform.position.x + offsetShowMove,
                                    container.transform.position.y,
                                    container.transform.position.z);
                                gameObject.SetActive(true);
                                tween = container.transform.DOMove(currentPos, durationShowPopup).SetEase(Ease.Linear)
                                    .OnComplete(OnAfterShow);
                                break;
                            case MovePopupType.Up:
                                container.transform.position = new Vector3(container.transform.position.x,
                                    container.transform.position.y + offsetShowMove,
                                    container.transform.position.z);
                                gameObject.SetActive(true);
                                tween = container.transform.DOMove(currentPos, durationShowPopup).SetEase(Ease.Linear)
                                    .OnComplete(OnAfterShow);
                                break;
                            case MovePopupType.Down:
                                container.transform.position = new Vector3(container.transform.position.x,
                                    container.transform.position.y - offsetShowMove,
                                    container.transform.position.z);
                                gameObject.SetActive(true);
                                tween = container.transform.DOMove(currentPos, durationShowPopup).SetEase(Ease.Linear)
                                    .OnComplete(OnAfterShow);
                                break;
                        }

                        break;
                    case ShowAnimationType.OutBackFromPoint:
                        container.transform.position = pointShowPos.Value;
                        container.transform.localScale = Vector3.zero;
                        gameObject.SetActive(true);
                        container.transform.DOMove(currentPos, durationShowPopup).SetEase(Ease.OutSine);
                        container.transform.DOScale(currentScale, durationShowPopup).SetEase(Ease.OutSine)
                            .OnComplete(OnAfterShow);
                        break;
                }
            }
            else
            {
                gameObject.SetActive(true);
                OnAfterShow();
            }
        }

        public virtual void Hide()
        {
            isActive = false;
            if (soundClose) playSfxEvent?.Raise(soundClose);
            OnBeforeHide();
            if (useHideAnimation)
            {
                Vector3 currentPos = container.transform.position;
                Vector3 currentScale = container.transform.localScale;
                switch (hideAnimationType)
                {
                    case HideAnimationType.Fade:
                        tween = canvasGroup.DOFade(0, durationHidePopup).SetEase(Ease.InBack).OnComplete(() =>
                        {
                            gameObject.SetActive(false);
                            canvasGroup.alpha = 1;
                            OnAfterHide();
                        });
                        break;
                    case HideAnimationType.InBack:
                        tween = container.transform.DOScale(scaleFromHide, durationHidePopup).SetEase(Ease.InBack)
                            .OnComplete(() =>
                            {
                                gameObject.SetActive(false);
                                container.transform.localScale = currentScale;
                                OnAfterHide();
                            });
                        break;
                    case HideAnimationType.Move:
                        switch (hideMovePopup)
                        {
                            case MovePopupType.Left:
                                Vector3 targetPosL = new Vector3(container.transform.position.x - offsetHideMove,
                                    container.transform.position.y,
                                    container.transform.position.z);
                                tween = container.transform.DOMove(targetPosL, durationHidePopup).SetEase(Ease.Linear)
                                    .OnComplete(() =>
                                    {
                                        gameObject.SetActive(false);
                                        container.transform.position = currentPos;
                                        OnAfterHide();
                                    });
                                break;
                            case MovePopupType.Right:
                                Vector3 targetPosR = new Vector3(container.transform.position.x + offsetHideMove,
                                    container.transform.position.y,
                                    container.transform.position.z);
                                tween = container.transform.DOMove(targetPosR, durationHidePopup).SetEase(Ease.Linear)
                                    .OnComplete(() =>
                                    {
                                        gameObject.SetActive(false);
                                        container.transform.position = currentPos;
                                        OnAfterHide();
                                    });
                                break;
                            case MovePopupType.Up:
                                Vector3 targetPosU = new Vector3(container.transform.position.x,
                                    container.transform.position.y + offsetHideMove,
                                    container.transform.position.z);
                                tween = container.transform.DOMove(targetPosU, durationHidePopup).SetEase(Ease.Linear)
                                    .OnComplete(() =>
                                    {
                                        gameObject.SetActive(false);
                                        container.transform.position = currentPos;
                                        OnAfterHide();
                                    });
                                break;
                            case MovePopupType.Down:
                                Vector3 targetPosD = new Vector3(container.transform.position.x,
                                    container.transform.position.y - offsetHideMove,
                                    container.transform.position.z);
                                tween = container.transform.DOMove(targetPosD, durationHidePopup).SetEase(Ease.Linear)
                                    .OnComplete(() =>
                                    {
                                        gameObject.SetActive(false);
                                        container.transform.position = currentPos;
                                        OnAfterHide();
                                    });
                                break;
                        }

                        break;
                    case HideAnimationType.InBackToPoint:
                        container.transform.DOMove(pointHidePos.Value, durationHidePopup).SetEase(Ease.InSine);
                        container.transform.DOScale(Vector3.zero, durationHidePopup).SetEase(Ease.InSine).OnComplete(() =>
                        {
                            gameObject.SetActive(false);
                            container.transform.position = currentPos;
                            container.transform.localScale = currentScale;
                            OnAfterHide();
                        });
                        break;
                }
            }
            else
            {
                gameObject.SetActive(false);
                OnAfterHide();
            }
        }

        protected virtual void OnBeforeShow()
        {
        }

        protected virtual void OnAfterShow()
        {
            isActive = true;
            tween.Kill();
        }

        protected virtual void OnBeforeHide()
        {
        }

        protected virtual void OnAfterHide()
        {
            tween.Kill();
            ActionHide?.Invoke();
            ActionHide = null;
        }

#if UNITY_EDITOR
        private void Reset()
        {
            if (canvasGroup == null)
            {
                canvasGroup = GetComponent<CanvasGroup>();
            }

            if (canvas == null)
            {
                canvas = GetComponent<Canvas>();
            }
        }
#endif
    }

    public enum ShowAnimationType
    {
        OutBack,
        Flip,
        Move,
        Fade,
        OutBackFromPoint,
    }

    public enum HideAnimationType
    {
        InBack,
        Fade,
        Move,
        InBackToPoint,
    }

    public enum MovePopupType
    {
        Left,
        Right,
        Up,
        Down
    }
}