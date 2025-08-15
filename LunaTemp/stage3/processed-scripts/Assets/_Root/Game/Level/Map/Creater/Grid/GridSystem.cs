using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Core;

public class GridSystem : BaseMono
{
    [SerializeField] private List<CellGrid> listCell = new List<CellGrid>();

    public Vector3 CoordinateOrigin => GetCell(Vector2Int.zero).GetPostion();
    public List<CellGrid> cells => listCell;
    public CellGrid GetCell([Bridge.Ref] Vector2Int coordinate)
    {
        return listCell.Find(item => item.coordinate == coordinate);
    }

    public void SetCells(List<CellGrid> cells)
    {
        listCell = cells;
    }
}