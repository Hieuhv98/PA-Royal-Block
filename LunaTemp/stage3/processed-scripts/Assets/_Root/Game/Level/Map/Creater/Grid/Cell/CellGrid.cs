using System;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public struct CellData
{
    public CellGrid cell;
    public Direction direction;
}

public class CellGrid : ObjectBase
{
    [SerializeField] private List<CellData> neighbours;

    public Vector2Int coordinate;

    public CellGrid GetNeighbour(Direction direction)
    {
        var data = neighbours.Find(x => x.direction == direction);
        return data.cell;
    }

    public List<CellGrid> GetAllNeighbours()
    {
        var result = new List<CellGrid>();
        foreach (var neighbour in neighbours)
            result.Add(neighbour.cell);

        return result;
    }
    public void PrepareNeighbour(List<CellData> data)
    {
        neighbours = new List<CellData>(data);
    }
}