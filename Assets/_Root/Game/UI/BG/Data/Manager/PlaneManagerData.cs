using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using VirtueSky.Variables;
[CreateAssetMenu(menuName = "Game/Level/Plane/Manager", fileName = "plane_manager_data", order = 0)]
public class PlaneManagerData : ScriptableObject
{
    [SerializeField] private string id;
    [SerializeField] private List<PlaneData> listData = new List<PlaneData>();
    [SerializeField] private StringVariable remoteConfigBgID;


    public int Count => listData.Count;
    public List<PlaneData> ListData => listData;
    public PlaneData GetDataCurrent()
    {
        var data = listData.FirstOrDefault(x => x.IsUsed); 
        if(data == null) 
        {
            data = listData.FirstOrDefault(x => x.Id == remoteConfigBgID.Value);
            if(data == null) data = listData[0];
            data.Use();
        }
        return data;
    }
    public PlaneData GetData(string id) => listData.FirstOrDefault(x => x.Id == id);

    public Action<PlaneData> ActionChange;
    private void OnUse(PlaneData data) 
    {
        foreach (var item in listData)
        {
            if (item != data)
            {
                item.UnUse();
            }
        }
        ActionChange?.Invoke(data);
    }

    public void OnEnable()
    {
        foreach(var data in listData) 
        {
            data.ActionUse += OnUse;
        }
    }
    public void OnDisable()
    {
        foreach (var data in listData)
        {
            data.ActionUse -= OnUse;
        }
    }
}