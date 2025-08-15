using UnityEngine;

public class Mask : MonoBehaviour
{
    [SerializeField] private LayerMask layerMask;

    private Renderer _renderer;

    void Start()
    {
        if(_renderer == null) _renderer = GetComponent<Renderer>();

        if (_renderer.material.HasProperty("_LayerMask"))
        {
            _renderer.material.SetInt("_LayerMask", layerMask.value);
        }
    }
    private void OnValidate()
    {
        if (_renderer)
        {
            if (_renderer.material.HasProperty("_LayerMask"))
            {
                _renderer.material.SetInt("_LayerMask", layerMask.value);
            }
        }
    }
}