using System;
using UnityEngine;

public static partial class Extension
{
    public static Vector2Int GetCoordinate(this Vector2Int coordinate, Direction direction)
    {
        switch (direction)
        {
            case Direction.Up:
                return new Vector2Int(coordinate.x, coordinate.y + 1);
            case Direction.Down:
                return new Vector2Int(coordinate.x, coordinate.y - 1);
            case Direction.Right:
                return new Vector2Int(coordinate.x + 1, coordinate.y);
            case Direction.Left:
                return new Vector2Int(coordinate.x - 1, coordinate.y);
            case Direction.UpRight:
                return new Vector2Int(coordinate.x + 1, coordinate.y + 1);
            case Direction.UpLeft:
                return new Vector2Int(coordinate.x - 1, coordinate.y + 1);
            case Direction.DownRight:
                return new Vector2Int(coordinate.x + 1, coordinate.y - 1);
            case Direction.DownLeft:
                return new Vector2Int(coordinate.x - 1, coordinate.y - 1);
            default:
                throw new ArgumentOutOfRangeException(nameof(direction), direction, null);
        }
    }
}