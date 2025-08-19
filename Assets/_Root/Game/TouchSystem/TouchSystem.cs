using System;
using UnityEngine;
using UnityEngine.EventSystems;
using VirtueSky.Core;
using VirtueSky.TouchInput;

public class TouchSystem : BaseMono
{
    [SerializeField] Camera sceneCamera;
    [SerializeField] LayerMask includeLayer;
    [SerializeField] float distance;

    [SerializeField] InputEventTouchBegin inputEventTouchBegin;
    [SerializeField] InputEventTouchEnd inputEventTouchEnd;

    private Vector3 _lastPosition = Vector3.one;

    public Vector3 LastPosition => _lastPosition;
    public Action<Vector3> ActionBegin, ActionEnd;

    public override void OnEnable()
    {
        base.OnEnable();
        Initialize();
    }

    public override void OnDisable()
    {
        base.OnDisable();
        CleanUp();
    }

    public override void Initialize()
    {
        base.Initialize();
        inputEventTouchBegin.OnRaised += OnTouchBegin;
        inputEventTouchEnd.OnRaised += OnTouchEnd;
    }

    void OnTouchBegin(Vector3 touchPosition)
    {
        if(!IsPointerOverUI()) ActionBegin?.Invoke(GetPointPosition());
    }

    void OnTouchEnd(Vector3 touchPosition)
    {
        ActionEnd?.Invoke(GetPointPosition());
    }

    public bool IsPointerOverUI() => EventSystem.current.IsPointerOverGameObject();

    public Vector3 GetPointPosition()
    {
        Vector3 mousePos = Input.mousePosition;
        return sceneCamera.ScreenToWorldPoint(new Vector3(mousePos.x, mousePos.y, Mathf.Abs(sceneCamera.transform.position.y)));
    }

    public GameObject GetToucher()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = sceneCamera.nearClipPlane;
        Ray ray = sceneCamera.ScreenPointToRay(mousePos);
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit, distance, includeLayer))
        {
            return hit.collider.gameObject;
        }

        return null;
    }

    public override void CleanUp()
    {
        base.CleanUp();
        inputEventTouchBegin.OnRaised -= OnTouchBegin;
        inputEventTouchEnd.OnRaised -= OnTouchEnd;
    }
}