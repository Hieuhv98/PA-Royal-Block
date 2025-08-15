using System;
using UnityEngine;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Game/Level/Create/GridSetting", fileName = "GridSetting", order = 0)]
public class GridSetting : ScriptableObject
{
    public GridSettingData rectangle;
    public GridSettingData hexagon;
}

[Serializable]
public struct GridSettingData
{
    public CellGrid prefab;
    public Vector3Variable size;
    public Vector2 Size => size.Value;
}