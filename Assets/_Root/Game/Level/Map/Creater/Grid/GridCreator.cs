using System;
using System.Collections.Generic;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;
using Object = UnityEngine.Object;

public enum GridType
{
    Rectangle,
    Hexagon
}

public enum AxisType
{
    XZ,
    XY
}

public enum Direction
{
    Up,
    Down,
    Right,
    Left,
    UpRight,
    UpLeft,
    DownRight,
    DownLeft
}

public class GridCreator
{
    public GridSystem Create(Transform parent, GridType gridType, AxisType axisType, GridSetting setting, Vector2 size, bool createAsPrefab, Vector2 sizeActive)
    {
        var prefab = GetPrefab(gridType, setting);

        //Create GridManager Object
        var gridSystem = new GameObject
        {
            transform =
            {
                name = $"Grid {gridType} [{sizeActive.x},{sizeActive.y}]"
            }
        }.AddComponent<GridSystem>();
        gridSystem.transform.SetParent(parent);

        //Bounds
        var delX = size.x - sizeActive.x;
        var delY = size.y - sizeActive.y;
        var hBoundMin = Mathf.FloorToInt(delX / 2);
        var hBoundMax = size.x - (delX - hBoundMin);

        var vBoundMin = Mathf.FloorToInt(delY / 2);
        var vBoundMax = size.y - (delY - vBoundMin);

        //Create cells
        var cells = new List<CellGrid>();
        var cellsActive = new List<CellGrid>();
        var cellPosition = Vector3.zero;

        for (int vertical = 0; vertical < size.y; vertical++)
        {
            cellPosition = GetcellPosition(cellPosition, vertical, axisType, gridType, setting);

            for (int horizontal = 0; horizontal < size.x; horizontal++)
            {
                var coordinate = new Vector2Int(horizontal, vertical);
                if (!CanSpawn(gridType, coordinate))
                    continue;

                cellPosition.x = horizontal * GetDistance(gridType, setting).x;

                CellGrid cell = null;
                if (createAsPrefab)
                {
#if UNITY_EDITOR
                    var prefabGameObject = prefab.gameObject;
                    var cellGameObject = PrefabUtility.InstantiatePrefab(prefabGameObject) as GameObject;
                    if (cellGameObject != null) cell = cellGameObject.GetComponent<CellGrid>();
                    if (cell != null) cell.transform.position = cellPosition;
#endif
                }
                else
                {
                    cell = Object.Instantiate(prefab, cellPosition, Quaternion.identity);
                }

                if (cell == null) continue;
                cell.transform.name = $"cell [{horizontal},{vertical}]";
                cell.coordinate = coordinate;
                cell.transform.SetParent(gridSystem.transform);
                if (!(horizontal >= hBoundMin && horizontal < hBoundMax && vertical >= vBoundMin && vertical < vBoundMax))
                    cellsActive.Add(cell);
                cells.Add(cell);
            }
        }

        gridSystem.SetCells(cells);
        SetNeighbor(gridSystem, gridType);
        SetCenter(gridSystem.gameObject);
        foreach (var cell in cellsActive) cell.gameObject.SetActive(false);

        return gridSystem;
    }

    private CellGrid GetPrefab(GridType gridType, GridSetting cellSetting)
    {
        switch (gridType)
        {
            case GridType.Rectangle:
                return cellSetting.rectangle.prefab;
            case GridType.Hexagon:
                return cellSetting.hexagon.prefab;
            default:
                return null;
        }
    }

    private Vector2 GetDistance(GridType gridType, GridSetting cellSetting)
    {
        switch (gridType)
        {
            case GridType.Rectangle:
                return cellSetting.rectangle.Size;
            case GridType.Hexagon:
                return cellSetting.hexagon.Size;
            default:
                return Vector2Int.zero;
        }
    }

    private Vector3 GetcellPosition(Vector3 position, int count, AxisType type, GridType gridType, GridSetting setting)
    {
        var axis = count * GetDistance(gridType, setting).y;
        switch (type)
        {
            case AxisType.XY:
                position.y = axis;
                break;
            case AxisType.XZ:
                position.z = axis;
                break;
            default:
                throw new ArgumentOutOfRangeException();
        }

        return position;
    }

    private bool CanSpawn(GridType type, Vector2Int coordinate)
    {
        var isPairHorizontal = coordinate.x % 2 == 0;
        var isPairVertical = coordinate.y % 2 == 0;

        switch (type)
        {
            case GridType.Rectangle:
                return true;
            case GridType.Hexagon:
                return isPairHorizontal == isPairVertical;
            default:
                throw new ArgumentOutOfRangeException(nameof(type), type, null);
        }
    }

    private static void SetCenter(GameObject parent)
    {
        var pivotHelper = parent.AddComponent<SetCenterPosition>();
        pivotHelper.SetCenter();
        parent.transform.position = Vector3.zero;
        Object.DestroyImmediate(pivotHelper);
    }

    private void SetNeighbor(GridSystem manager, GridType gridType)
    {
        var length = Enum.GetNames(typeof(Direction)).Length;
        foreach (var cell in manager.cells)
        {
            var data = new List<CellData>();
            for (int i = 0; i < length; i++)
            {
                var direction = (Direction)i;
                var coordinate = cell.coordinate.GetCoordinate(direction);

                //One step more if hexagon and vertical
                if (gridType == GridType.Hexagon)
                {
                    if (direction == Direction.Down || direction == Direction.Up)
                        coordinate = coordinate.GetCoordinate(direction);
                }

                var neighbour = manager.GetCell(coordinate);
                if (!neighbour) continue;
                data.Add(new CellData()
                {
                    cell = manager.GetCell(coordinate),
                    direction = direction
                });
            }

            cell.PrepareNeighbour(data);
        }
    }
}