using System.Collections.Generic;
using System.Linq;

#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Variables;

public abstract class ObjectBase : BaseMono, IObject, IFreezer
{
    [SerializeField] protected string objectName;
    [SerializeField] protected Vector3Variable girdSize;
    [SerializeField] protected float heightOrigin = 1f;
    [SerializeField] protected Vector3 size;
    [SerializeField] protected ERotationType eRotationType = ERotationType.RIGHT;
    [SerializeField] protected Material materialCurrent;
    [SerializeField] GameObject centerModel;
    [SerializeField] private BooleanVariable isStarttingLevel;
    [SerializeField] private List<Collider> listColliders = new List<Collider>();

    [Header("Color")] [SerializeField] protected EColorType eColorType;
    [SerializeField] protected ColorConfig colorConfig;
    [SerializeField] string path = "Assets/_Root/Game/Level/Elements/Renders";
    [SerializeField] protected string colorMaterialName = "_Color";

    [Header("Pivot")] [SerializeField] private EPivotType pivotType;
    [SerializeField] protected GameObject model;
    [SerializeField] protected float yAxis = 0;

    [Header("Texture")] [SerializeField] private bool isHaveStar;
    [SerializeField] private ObjectStar objectStarPrefab;
    [SerializeField] private ObjectStar objectStar;

    [Header("Freeze")] [SerializeField] protected bool isFreeze;

    [SerializeField]
    private int freezeCount = 5;
    [SerializeField]
    private float textSize = 10f;

    [SerializeField]
    private Material materialFreezeOverride;

    protected bool _isAlive = true;
    public bool IsAlive => _isAlive;
    public virtual bool IsCanMove => IsAlive && !IsFrezering;
    public bool IsHaveStar => isHaveStar;
    public Vector2 Size => GetSize();
    public List<Collider> ListColliders 
    {
        get 
        {
            if(listColliders.Count == 0) listColliders = model.GetComponentsInChildren<Collider>().ToList();
            return listColliders;
        }
    }

    public float YAxis => yAxis;
    public EColorType EColorType => eColorType;
    public Color Color => colorConfig.GetColor(eColorType);
    public Vector3 GetCenterPosition() => centerModel != null ? centerModel.transform.position : (model ? model.transform.position : GetPostion());
    public GameObject Model => model;

    private Renderer _renderer;
    public Renderer Renderer => _renderer ??= model.GetComponentInChildren<Renderer>();

    private MeshFilter _meshFilter;
    public MeshFilter MeshFilter => _meshFilter ?? model.GetComponentInChildren<MeshFilter>();

    protected Vector2 GetSize()
    {
        return eRotationType switch
        {
            ERotationType.RIGHT => new Vector2(size.x, size.z),
            ERotationType.LEFT => new Vector2(size.x, size.z),
            ERotationType.UP => new Vector2(size.z, size.x),
            ERotationType.DOWN => new Vector2(size.z, size.x),
            _ => new Vector2(size.x, size.z)
        };
    }

    public virtual void Awake()
    {
        IsFrezering = isFreeze;
    }

    public virtual void Start()
    {
        _isAlive = true;
    }

    public override void OnEnable()
    {
        base.OnEnable();
        Initialize();
        if (isStarttingLevel) isStarttingLevel.OnRaised += OnStarttingLevel;
    }

    public override void OnDisable()
    {
        base.OnDisable();
        CleanUp();
        if (isStarttingLevel) isStarttingLevel.OnRaised -= OnStarttingLevel;
    }

    protected virtual void OnStarttingLevel(bool value)
    {
    }

    public virtual void Dead()
    {
        _isAlive = false;
    }

    public float GetWidth(EDirectionType eDirection, Vector2 size)
    {
        return eDirection switch
        {
            EDirectionType.UP => size.x,
            EDirectionType.DOWN => size.x,
            EDirectionType.LEFT => size.y,
            EDirectionType.RIGHT => size.y,
            _ => 0
        };
    }

    public float GetHeight(EDirectionType eDirection, Vector2 size)
    {
        return eDirection switch
        {
            EDirectionType.UP => size.y,
            EDirectionType.DOWN => size.y,
            EDirectionType.LEFT => size.x,
            EDirectionType.RIGHT => size.x,
            _ => 0
        };
    }

    public void ChangeColorType(EColorType eColorTypeChange, Material materialChange)
    {
        eColorType = eColorTypeChange;
        materialCurrent = materialChange;
        Renderer.material = materialCurrent;
        //Renderer.material.color = colorConfig.GetColor(eColorTypeChange);
    }

    public void ChangeMesh(Mesh mesh)
    {
        if (MeshFilter) MeshFilter.mesh = mesh;
    }


#if UNITY_EDITOR
    protected virtual void OnEnableInEditor()
    {
        OnChangeInEditor();
    }

    protected virtual void OnChangeInEditor()
    {
        UpdateRotation();

        Vector3 localPosition = Vector3.zero;
        var sizeX = Size.x * girdSize.Value.x;
        var sizeZ = Size.y * girdSize.Value.y;
        var sizeY = -heightOrigin / 2 + size.y * girdSize.Value.x;
        switch (pivotType)
        {
            case EPivotType.NONE:
                localPosition = Vector3.zero;
                break;
            case EPivotType.LEFT_TOP:
                localPosition = new Vector3(sizeX / 2, sizeY, -sizeZ / 2);
                break;
            case EPivotType.LEFT_BOTTOM:
                localPosition = new Vector3(sizeX / 2, sizeY, sizeZ / 2);
                break;
            case EPivotType.RIGHT_TOP:
                localPosition = new Vector3(-sizeX / 2, sizeY, -sizeZ / 2);
                break;
            case EPivotType.RIGHT_BOTTOM:
                localPosition = new Vector3(-sizeX / 2, sizeY, sizeZ / 2);
                break;
            default:
                localPosition = Vector3.zero;
                break;
        }

        if (model) model.transform.localPosition = localPosition;
        LoadMaterial();

        if (isHaveStar)
        {
            if (objectStar == null) objectStar = PrefabUtility.InstantiatePrefab(objectStarPrefab, Renderer.transform) as ObjectStar;
            if (objectStar.transform.parent != Renderer.transform)
            {
                DestroyImmediate(objectStar.gameObject);
                objectStar = PrefabUtility.InstantiatePrefab(objectStarPrefab, Renderer.transform) as ObjectStar;
            }

            objectStar.transform.parent = Renderer.transform;
            objectStar.transform.localPosition = Vector3.zero;
        }
        else
        {
            if (objectStar) DestroyImmediate(objectStar.gameObject);
        }
    }
#endif


    protected void UpdateRotation()
    {
        if (model) model.transform.localEulerAngles = new Vector3(model.transform.localEulerAngles.x, GetYAngle(), model.transform.localEulerAngles.z);
    }

    float GetYAngle()
    {
        return eRotationType switch
        {
            ERotationType.RIGHT => 0,
            ERotationType.UP => 90,
            ERotationType.LEFT => 180,
            ERotationType.DOWN => 270,
            _ => 0,
        };
    }

    public void SetPosition(Vector3 position)
    {
        transform.position = new Vector3(position.x, yAxis, position.z);
    }

    public Vector3 GetPostion() => transform.position;
#if UNITY_EDITOR
    [ContextMenu("Create All Material")]
    public void CreateAllMaterial()
    {
        foreach (var colorData in colorConfig.Colors)
        {
            CreateMaterial(colorData.Type);
        }
    }

    public void CreateMaterial(EColorType eColorType)
    {
        if (model)
        {
            var renderer = model.GetComponentInChildren<Renderer>();

            if (renderer)
            {
                if (renderer.material != null)
                {
                    var dataColor = colorConfig.GetData(eColorType);
                    var materialAssetName = $"Material-{objectName}-{dataColor.Type}.asset";
                    var assetPath = $"{path}/{materialAssetName}";
                    var newMaterial = new Material(renderer.material);
                    newMaterial = renderer.material;
                    //newMaterial.SetColor(colorMaterialName, dataColor.Color);
                    AssetDatabase.CreateAsset(newMaterial, assetPath);
                    renderer.material = newMaterial;
                    materialCurrent = newMaterial;
                }
            }
        }
    }

    protected Material GetMaterial(ColorData colorData)
    {
        var materialAssetName = $"Material-{objectName}-{colorData.Type}.asset";
        var assetPath = $"{path}/{materialAssetName}";

        if (AssetDatabase.LoadAssetAtPath<Material>(assetPath) == null)
        {
            CreateMaterial(eColorType);
        }

        var newMaterial = AssetDatabase.LoadAssetAtPath<Material>(assetPath);
        //newMaterial.SetColor(colorMaterialName, colorData.Color);
        return newMaterial;
    }

    [ContextMenu("Load Material")]
    void LoadMaterial()
    {
        if (eColorType != EColorType.NONE && colorConfig)
        {
            var colorData = colorConfig.GetData(eColorType);
            var renderer = model.GetComponentInChildren<Renderer>();
            if (renderer && colorData != null)
            {
                var newMaterial = GetMaterial(colorData);
                if (newMaterial)
                {
                    if (!isFreeze) renderer.material = newMaterial;
                }
            }

            materialCurrent = GetMaterial(colorConfig.GetData(eColorType));
        }
    }
#endif

    #region freezer

    public bool IsFrezering { get; set; }

    public GameObject GameObject => gameObject;

    public Vector3 FreezeCenterPosition => GetCenterPosition();

    public int FreezeCount => freezeCount;

    public int FreezeCurrentCount { get; set; }

    public float TextSize => textSize;

    public virtual void OnFreezerSetup(Material material)
    {
        var mat = materialFreezeOverride != null ? materialFreezeOverride : material;
        if (Renderer) Renderer.material = mat;
    }

    public void OnFreezerChanged()
    {
    }

    public virtual void OnFreezerBreak()
    {
        if (!_isAlive) return;
        if (Renderer) Renderer.material = materialCurrent;
    }

    #endregion

#if UNITY_EDITOR
    [CustomEditor(typeof(ObjectBase), true)]
    [CanEditMultipleObjects]
    public class ObjectBaseEditor : Editor
    {
        ObjectBase objectBase;
        LevelMap levelMap;
        bool _isFreeze;

        void OnEnable()
        {
            objectBase = target as ObjectBase;
            objectBase.OnEnableInEditor();
            levelMap = objectBase.GetComponentInParent<LevelMap>();
            OnCheckGate();
            if (levelMap)
            {
                EditorUtility.SetDirty(levelMap.gameObject);
            }

            _isFreeze = objectBase.isFreeze;
        }

        public override void OnInspectorGUI()
        {
            base.OnInspectorGUI();

            if (Application.isPlaying) return;
            objectBase.OnChangeInEditor();
            serializedObject.Update();
            if (levelMap)
            {
                var newPosition = levelMap.GetGridPosition(objectBase.GetPostion());
                objectBase.SetPosition(newPosition);

                OnCheckGate();
                UpdateFreeze();
            }

            serializedObject.ApplyModifiedProperties();
        }

        void UpdateFreeze()
        {
            levelMap.FreezeSystem?.CheckNull();
            if (_isFreeze != objectBase.isFreeze)
            {
                _isFreeze = objectBase.isFreeze;
                if (_isFreeze)
                {
                    levelMap.FreezeSystem.Add(objectBase);
                }
                else
                {
                    levelMap.FreezeSystem.Remove(objectBase);
                }
            }
        }

        void OnCheckGate()
        {
            if (levelMap)
            {
                var gate = objectBase as Gate;
                if (gate != null)
                {
                    var cellSellect = levelMap.GetCell(objectBase.GetPostion());
                    if (gate.IsCanUpdateLinker(cellSellect))
                    {
                        var linkerVector = gate.GetLinkerVector();
                        var originAxis = linkerVector + cellSellect.coordinate;
                        var cellsLinker = new List<CellGrid>();
                        for (int i = 0; i < linkerVector.x; i++)
                        {
                            cellsLinker.Add(levelMap.GetCell(new Vector2Int(cellSellect.coordinate.x + i, originAxis.y)));
                        }

                        for (int j = 0; j < linkerVector.y; j++)
                        {
                            cellsLinker.Add(levelMap.GetCell(new Vector2Int(originAxis.x, cellSellect.coordinate.y + j)));
                        }

                        gate.AddCells(cellsLinker);
                    }

                    EditorUtility.SetDirty(levelMap.gameObject);
                }
            }
        }
    }
#endif
}

public enum EPivotType
{
    NONE,
    LEFT_TOP,
    LEFT_BOTTOM,
    RIGHT_TOP,
    RIGHT_BOTTOM,
}

public enum ERotationType
{
    RIGHT,
    UP,
    LEFT,
    DOWN
}