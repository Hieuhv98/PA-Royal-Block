using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Core;

public class SelectBackGroundUI : BaseMono
{
    [SerializeField] private PlaneManagerData managerData;
    [SerializeField] private SelectBackGroundItemUI prefab;
    [SerializeField] private Transform content;

    List<SelectBackGroundItemUI> _listItemUI = new List<SelectBackGroundItemUI>();
    public void Start()
    {
        _listItemUI.Clear();
        content.Clear();

        foreach(var data in managerData.ListData) 
        {
            var itemPrefabUI = Instantiate(prefab, content);
            itemPrefabUI.SetUp(data);
            _listItemUI.Add(itemPrefabUI);
        }

        managerData.ActionChange += OnChangeData;
        Refresh();
    }
    void OnChangeData(PlaneData planeData) 
    {
        Refresh();
    }
    void Refresh() 
    {
        foreach(var item in _listItemUI) 
        {
            item.UpdateUI();
        }
    }

    public void OnDestroy()
    {
        managerData.ActionChange -= OnChangeData;
    }
}