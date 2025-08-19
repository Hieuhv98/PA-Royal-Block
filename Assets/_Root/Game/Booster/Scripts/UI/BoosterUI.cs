using TMPro;
using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.UIButton;

public abstract class BoosterUI : BaseMono
{
    [Header("Data")] [SerializeField] protected BoosterData boosterData;
    [Header("Event")] [SerializeField] private EventNoParam callReplayEvent;
    [Header("UI")] [SerializeField] private string textUnlockFormat;
    [SerializeField] private TextMeshProUGUI textUnlockLevel;
    [SerializeField] private Image iconLock;
    [SerializeField] private GameObject groupLock;
    [SerializeField] private GameObject iconPlus;
    [SerializeField] private GameObject tutorialHand;
    [SerializeField] private Canvas canvas;
    [SerializeField] private RectTransform rect;
    [SerializeField] protected ButtonUI buttonBooster;
    [SerializeField] private Image icon;
    [SerializeField] private GameObject groupAmountText;
    [SerializeField] private string boosterAmountFormat;
    [SerializeField] private TextMeshProUGUI boosterAmountText;

    [SerializeField] private BoosterUsingUI boosterUsingUI;
    [Header("Tutorial")]
    [SerializeField] private ButtonTutorialUI tutorialUI;
    [SerializeField] private Vector3 positionHandTutorial;

    public void Init()
    {
        boosterData.OnValueChange += OnValueChange;
        callReplayEvent.OnRaised += OnReplayLevel;
        boosterData.OnBoosterUnlockedEvent += OnUnlockBooster;
        SetTutorial(false);
        UpdateUI();
    }


    void SetTutorial(bool isUse)
    {
        if (tutorialHand != null)
        {
            if(isUse) tutorialHand.transform.position = positionHandTutorial;
            tutorialHand.SetActive(isUse);
        }
    }

    public override void OnDisable()
    {
        base.OnDisable();
        boosterData.OnValueChange -= OnValueChange;
        callReplayEvent.OnRaised -= OnReplayLevel;
        boosterData.OnBoosterUnlockedEvent -= OnUnlockBooster;
        boosterData.StopUse();
    }

    void OnUnlockBooster()
    {
        boosterData.OnBoosterUnlockedEvent -= OnUnlockBooster;
    }
    protected virtual void OnShowTutorial()
    {
        App.Delay(0.15f, () => SetTutorial(true));
    }
    void OnReplayLevel()
    {
        boosterData.StopUse();
        UpdateStatus();
    }

    protected void OnValueChange(int value)
    {
        UpdateStatus();
    }

    private Vector3 GetWorldPos()
    {
        Vector3 screenPos = RectTransformUtility.WorldToScreenPoint(canvas.worldCamera, rect.position);
        Vector3 worldPos =
            Camera.main.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y,
                Mathf.Abs(Camera.main.transform.position.z)));
        return worldPos;
    }

    protected virtual void OnUseBooster()
    {
        boosterData.Use(GetWorldPos(), OnBoosterStart, OnBoosterComplete, OnBoosterProcessing, OnBoosterCancel);
    }

    void OnBoosterCancel()
    {
        SetTutorial(false);
    }


    public void OnClickBooster()
    {
        OnUseBooster();
    }

    protected virtual void OnBoosterStart()
    {
        SetTutorial(false);
        boosterUsingUI?.Show();
        buttonBooster.interactable = false;
    }

    protected virtual void OnBoosterProcessing(float value)
    {
    }

    protected virtual void OnBoosterComplete()
    {
        buttonBooster.interactable = boosterData.IsUnlocked && !boosterData.IsProcessing;
        boosterUsingUI?.Hide();
    }

    void UpdateUI()
    {
        iconLock.sprite = boosterData.GetLockIcon;
        if(iconLock != null) iconLock.SetNativeSize();
        groupLock.SetActive(!boosterData.IsUnlocked);
        if (!boosterData.IsUnlocked)
        {
            textUnlockLevel.text = string.Format(textUnlockFormat, boosterData.LevelUnlock);
        }

        groupAmountText.SetActive(boosterData.IsUnlocked);
        icon.sprite = boosterData.BoosterIcon;
        if(icon != null) icon.SetNativeSize();
        UpdateStatus();
    }

    void UpdateStatus()
    {
        iconPlus.SetActive(boosterData.IsRunOutOfAmount());
        boosterAmountText.gameObject.SetActive(boosterData.IsUnlocked);
        boosterAmountText.text = string.Format(boosterAmountFormat, boosterData.GetAmount());
        buttonBooster.interactable = boosterData.IsUnlocked && !boosterData.IsProcessing;
    }

    private void OnValidate()
    {
        if (buttonBooster != null && icon != null && boosterAmountText != null)
        {
            UpdateUI();
        }
    }
}