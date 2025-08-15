using UnityEngine;
using VirtueSky.Core;

public class ConnectionPrefab : BaseMono
{
    [SerializeField] private int renderQueue = 4050;
    [SerializeField] private Renderer render;

    public override void OnEnable()
    {
        base.OnEnable();
        render.material.renderQueue = renderQueue;
    }
    public void SetMaterial(Material material)
    {
        render.material = material;
    }
}