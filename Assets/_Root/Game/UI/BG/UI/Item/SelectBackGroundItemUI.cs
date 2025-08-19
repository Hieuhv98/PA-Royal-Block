using UnityEngine;
using UnityEngine.UI;
using VirtueSky.Core;

public class SelectBackGroundItemUI : BaseMono
{
    [SerializeField] private Image imgIcon;
    [SerializeField] private GameObject goSelect;

    PlaneData _data;
    public void SetUp(PlaneData planeData) 
    {
        _data = planeData;
        imgIcon.sprite = planeData.Icon;
        if (imgIcon != null) imgIcon.SetNativeSize();

        UpdateUI();
    }
    public void UpdateUI() 
    {
        if(_data) goSelect.SetActive(_data.IsUsed);
    }
    public void OnClick() 
    {
        if (_data) _data.Use();
    }
}