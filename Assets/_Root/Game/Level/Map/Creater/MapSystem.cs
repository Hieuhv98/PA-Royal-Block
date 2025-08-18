using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;
using VirtueSky.Core;

public class MapSystem : BaseMono
{
    [SerializeField] private Vector2Int sizeGrid;
    [SerializeField] private Vector2Int sizeActive;
    [SerializeField] private Vector2 gridOffset = new Vector2(.25f, .25f);
    [SerializeField] private GridType gridType;
    [SerializeField] private AxisType axisType;
    [SerializeField] private GridSetting setting;
    [SerializeField] private GridSystem gridSystem;
    [SerializeField] private Plane plane;
    [SerializeField] private string path = "Assets/_Root/Game/Level/Map/Creater/Meshs";

    public GridSystem GridSystem => gridSystem;
    public Vector2Int SizeActive => sizeActive;

    private Vector2 GetDistance(GridType gridType, GridSetting cellSetting)
    {
        switch (gridType)
        {
            case GridType.Rectangle:
                return cellSetting.rectangle.Size;
            case GridType.Hexagon:
                return cellSetting.hexagon.Size;
            default:
                return Vector2.zero;
        }
    }

    public CellGrid GetCell(Vector3 position)
    {
        if (gridSystem) 
        {
            var positionInCoordinate = position - gridSystem.CoordinateOrigin;
            var distane = GetDistance(gridType, setting);
            int xAxis = Mathf.RoundToInt(positionInCoordinate.x / distane.x);
            int yAxis = 0;
            switch (axisType)
            {
                case AxisType.XY:
                    yAxis = Mathf.RoundToInt(positionInCoordinate.y / distane.y);
                    break;
                case AxisType.XZ:
                    yAxis = Mathf.RoundToInt(positionInCoordinate.z / distane.y);
                    break;
            }

            Vector2Int coordinate = new Vector2Int(xAxis, yAxis);
            return GetCell(coordinate);
        }
        return null;
    }
    public CellGrid GetCell(Vector2Int coordinate)
    {
        return gridSystem.GetCell(coordinate);
    }

#if UNITY_EDITOR
    private GridCreator _creator = null;

    private void Create()
    {
        Clear();
        _creator = _creator ?? new GridCreator();
        gridSystem = _creator.Create(transform, gridType, axisType, setting, sizeGrid, true, sizeActive);
        gridSystem.transform.localPosition = gridOffset;
        if (plane) plane.SetSize(sizeGrid / plane.Size);
    }
#endif

#if UNITY_EDITOR
    public void Clear()
    {
        for (int i = transform.childCount - 1; i >= 0; i--)
        {
            var child = transform.GetChild(i).gameObject;
            if(child.GetComponent<GridSystem>()) DestroyImmediate(child, true);
        }

        if (gridSystem != null) DestroyImmediate(gridSystem, true);
        gridSystem = null;
    }

    public void CombineMeshes()
    {
        var listCell = gridSystem.cells;
        if (listCell.Count == 0)
        {
            Debug.Log("Not have mesh to combine");
            return;
        }

        List<MeshFilter> meshFilters = new List<MeshFilter>();
        foreach (var a in listCell)
        {
            if (a.gameObject.activeInHierarchy) 
            {
                var c = a.GetComponentInChildren<MeshFilter>();
                if (c != null) meshFilters.Add(c);
            }
        }

        if (meshFilters.Count == 0)
        {
            Debug.Log("Not have mesh to combine");
            return;
        }
        List<CombineInstance> combineInstances = new List<CombineInstance>();

        foreach (MeshFilter mf in meshFilters)
        {
            var mesh = mf.sharedMesh;
            if (mesh)
            {
                CombineInstance ci = new CombineInstance();
                ci.mesh = mesh;
                ci.transform = mf.transform.localToWorldMatrix;
                combineInstances.Add(ci);
                mf.gameObject.SetActive(false);
            }
        }

        if (combineInstances.Count == 0)
        {
            Debug.Log("Not combine mesh");
            return;
        }
        Mesh combinedMesh = new Mesh();
        combinedMesh.CombineMeshes(combineInstances.ToArray(), true, true);

        MeshFilter meshFilter = gridSystem.gameObject.AddComponent<MeshFilter>();
        meshFilter.mesh = combinedMesh;

        MeshRenderer meshRenderer = gridSystem.gameObject.AddComponent<MeshRenderer>();
        meshRenderer.sharedMaterial = meshFilters[0].GetComponent<MeshRenderer>().sharedMaterial;

        var assetName = $"{transform.parent.name}.asset";
        AssetDatabase.CreateAsset(combinedMesh, $"{path}/{assetName}");
        AssetDatabase.SaveAssets();
        Debug.Log("combine mesh complete");
    }
    void ReCombine() 
    {
        var meshFilter = gridSystem.GetComponent<MeshFilter>();
        if (meshFilter) DestroyImmediate(meshFilter);
        var meshRenderer = gridSystem.GetComponent<MeshRenderer>();
        if (meshRenderer) DestroyImmediate(meshRenderer);

        var listCell = gridSystem.cells;
        List<MeshFilter> meshFilters = new List<MeshFilter>();
        foreach (var a in listCell)
        {
            if (a.gameObject.activeInHierarchy)
            {
                var c = a.GetComponentInChildren<MeshFilter>(true);
                if (c != null) meshFilters.Add(c);
            }
        }

        foreach (MeshFilter mf in meshFilters)
        {
            var mesh = mf.sharedMesh;
            if (mesh) mf.gameObject.SetActive(true);
        }
    }
#endif
}