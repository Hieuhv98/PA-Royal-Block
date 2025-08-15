using System;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(menuName = "Game/Level/Config/Color", fileName = "Color Config", order = 0)]
public class ColorConfig : ScriptableObject
{
    [SerializeField] List<ColorData> colors = new List<ColorData>();

    public List<ColorData> Colors => colors;
    public ColorData GetData(EColorType type) => colors.Find(x => x.Type == type);
    public Color GetColor(EColorType type) => GetData(type).Color;
}

[Serializable]
public class ColorData 
{
    [SerializeField] EColorType type;
    [SerializeField] Color color;

    public Color Color => color;
    public EColorType Type => type;
}
public enum EColorType 
{
    NONE,
    RED,
    GREEN,
    YELLOW,
    BLUE,
    ORANGE,
    CYAN,
    TIFFANY_BLUE,
    DARK_GREEN,
    VIOLET,
    PINK,
}