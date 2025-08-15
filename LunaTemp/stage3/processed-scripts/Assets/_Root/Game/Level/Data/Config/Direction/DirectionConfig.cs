using System;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(menuName = "Game/Level/Config/Direction", fileName = "Direction Config", order = 0)]
public class DirectionConfig : ScriptableObject 
{
    [SerializeField] List<DirectionData> datas = new List<DirectionData>();

    public List<DirectionData> Datas => datas;
    public DirectionData GetData(EDirectionType type) => datas.Find(x => x.EDirectionType == type);
    public Vector2 GetDirection(EDirectionType type) => GetData(type).Direction;
}

[Serializable]
public class DirectionData
{
    [SerializeField] private EDirectionType eDirectionType;
    [SerializeField] private Vector2 direction;

    public EDirectionType EDirectionType => eDirectionType;
    public Vector2 Direction => direction;
}
public enum EDirectionType 
{ 
    NONE,
    UP,
    DOWN,
    LEFT,
    RIGHT,
}