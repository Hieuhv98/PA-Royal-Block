using System.Linq;
using UnityEngine;
using VirtueSky.Core;

public class Outline : BaseMono
{
    [SerializeField] private Material material;
    [SerializeField] private string colorProperty = "_OutlineColor";
    [SerializeField] private string widthProperty = "_OutlineWidth";

    private Material _outlineMaterial, _materialAdd;
    private Renderer _renderer;
    private int _renderQueueOrigin = 2000;
    private Color _color;
    public void SetUp(Renderer renderer, [Bridge.Ref] Color color, float width = 1f) 
    {
        if(_outlineMaterial == null) _outlineMaterial = new Material(material);

        _renderer = renderer;
        SetColor(color);
        SetWidth(width);

        _color = color;
        _renderQueueOrigin = _outlineMaterial.renderQueue;
    }

    public void SetColor([Bridge.Ref] Color color) 
    {
        if(_outlineMaterial) _outlineMaterial.SetColor(colorProperty, color);
    }
    public void SetWidth(float size) 
    {
        if (_outlineMaterial) _outlineMaterial.SetFloat(widthProperty, size);
    }

    public void Active() 
    {
        AddMaterial(_outlineMaterial);
    }
    public void Deactive()
    {
        RemoveMaterial(_materialAdd);
    }
    void AddMaterial(Material material) 
    {
        if (_renderer)
        {
            var materials = _renderer.materials;
            System.Array.Resize(ref materials, materials.Length + 1);
            materials[materials.Length - 1] = material;
            _renderer.materials = materials;
            _materialAdd = _renderer.materials[materials.Length - 1];
        }
    }
    void RemoveMaterial(Material material) 
    {
        var materials = _renderer.materials.ToList();
        if (materials.Contains(material))
        {
            materials.Remove(material);
            _renderer.materials = materials.ToArray();
        }
    }

    public void SetActive(bool isActive) 
    {
        if (isActive) Active();
        else Deactive();
    }
    public void SetRenderQueue(int renderQueue) { material.renderQueue = renderQueue; }
    public void Reset()
    {
        material.renderQueue = _renderQueueOrigin;
    }
    public void ChangeShader(Shader shader) 
    {
        _materialAdd.shader = shader;
        SetColor(_color);
    }
}