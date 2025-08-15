using System;
using UnityEngine;

public class TutorialUI : MonoBehaviour
{
    [SerializeField] protected GameObject broad;

    Action actionComplete;
    public virtual void Show(Action actionComplete = null) 
    {
        this.actionComplete = actionComplete;
        UpdateUI();
    }
    protected virtual void Awake()
    {
        broad.SetActive(false);
    }
    public virtual void UpdateUI() 
    {
        broad.SetActive(true);
    }
    public virtual void Complete() 
    {
        broad.SetActive(false);
        actionComplete?.Invoke();
    }
}