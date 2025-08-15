using System;
using UnityEngine;
using UnityEngine.UI;

public class ButtonTutorialUI : TutorialUI
{
    [SerializeField] bool isCreateButtonCache = false;
    [SerializeField] GameObject btnTutorial;
    [SerializeField] GameObject handPrefab;

    GameObject button;
    GameObject buttonCache;
    GameObject hand;
    Transform btnParentDefault;
    Vector3 posDefault = Vector3.zero;
    int siblingIndexDefault = 0;
    public Action ActionShow;
    public Action ActionComplete;

    private bool _isShowing;
    Button _buttonUI;
    protected override void Awake()
    {
        base.Awake();
        _isShowing = false;
    }
    public void SetButton(GameObject button) 
    {
        if (_isShowing) return;
        this.button = button;
        btnParentDefault = button.transform.parent;
        posDefault = button.transform.position;
        siblingIndexDefault = button.transform.GetSiblingIndex();
    }
    public override void Show(Action actionComplete = null)
    {
        if (_isShowing) return;
        _isShowing = true;

        ActionShow?.Invoke();
        base.Show(actionComplete);
        if (button == null) SetButton(btnTutorial);
        _buttonUI = button.GetComponentInChildren<Button>();
        _buttonUI.onClick.AddListener(Complete);

        if (isCreateButtonCache) 
        {
            if (buttonCache != null) Destroy(buttonCache);
            buttonCache = Instantiate(button, btnParentDefault, true);
            var scripts = buttonCache.GetComponentsInChildren<MonoBehaviour>(true);
            foreach(var script in scripts) if (script != null) script.enabled = false;
            buttonCache.transform.position = posDefault;
            buttonCache.transform.SetSiblingIndex(siblingIndexDefault);
        }

        button.transform.SetParent(broad.transform, true);
        button.transform.position = posDefault;
        if (handPrefab != null)
        {
            if(hand == null) hand = Instantiate(handPrefab, broad.transform);
            hand.transform.position = _buttonUI.transform.position;
            hand.SetActive(true);
        }
    }
    public override void Complete()
    {
        if (buttonCache != null) Destroy(buttonCache);
        button.transform.SetParent(btnParentDefault, true);
        button.transform.position = posDefault;
        button.transform.SetSiblingIndex(siblingIndexDefault);
        if (hand != null) Destroy(hand);
        _buttonUI.onClick.RemoveListener(Complete);
        base.Complete();
        ActionComplete?.Invoke();
        _isShowing = false;
    }
}
