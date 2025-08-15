using System;
using UnityEngine;
using VirtueSky.DataStorage;
[CreateAssetMenu(menuName = "Game/Level/Plane/Data", fileName = "plane_data", order = 0)]
public class PlaneData : ScriptableObject
{
    [SerializeField] private string id;
    [SerializeField] private bool isUseDefault = false;
    [SerializeField] private Sprite icon;
    [SerializeField] private Sprite Sprite;

    public Action<PlaneData> ActionUse;
    public string Id => id;
    public Sprite Icon => icon;
    public Sprite BG => Sprite;
    public bool IsUsed 
    {
        set => GameData.Set(id, value);
        get => GameData.Get(id, isUseDefault);
    }
    public void Use() 
    {
        IsUsed = true;
        ActionUse?.Invoke(this);
    }
    public void UnUse()
    {
        IsUsed = false;
    }
}