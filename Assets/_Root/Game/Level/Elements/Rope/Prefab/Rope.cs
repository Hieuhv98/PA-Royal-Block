using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Core;

public class Rope : BaseMono
{
    [SerializeField] private ERopeType type;
    [SerializeField] private List<RopeConfig> configs;
    [SerializeField] private GameObject model;
    [SerializeField] private List<Renderer> listRenderer = new List<Renderer>();
    public void SetMaterial(Material material) 
    {
        foreach(var renderer in listRenderer) 
        {
            renderer.material = material; 
        }
    }
    public void Destroy() { model.SetActive(false); }

    public void UpdateModel() 
    {
        List<Mesh> listMesh = new List<Mesh>();
        foreach(var config in configs) 
        {
            if(type == config.type) 
            {
                listMesh = config.listMesh;
                break;
            }
        }

        if (listMesh.Count == listRenderer.Count)
        {
            for (int i = 0; i < listRenderer.Count; i++)
            {
                listRenderer[i].GetComponent<MeshFilter>().mesh = listMesh[i];
            }
        }
    }
}
[Serializable]
public class RopeConfig 
{
    public ERopeType type;
    public List<Mesh> listMesh = new List<Mesh>();
}
public enum ERopeType 
{
    x1,
    x2,
}