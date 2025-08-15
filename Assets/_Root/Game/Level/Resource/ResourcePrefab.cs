using UnityEngine;
using VirtueSky.Component;

public class ResourcePrefab : MonoBehaviour
{
    [SerializeField] private bool isRotate;
    [SerializeField] private RotateComponent rotateComponent;

    public void OnEnable()
    {
        rotateComponent?.Pause();
        if (isRotate) ResetRotation();
    }

    public void Rotate() 
    {
        if(isRotate) rotateComponent.Resume();
    }

    public void ResetRotation()
    {
        rotateComponent.Pause();
        rotateComponent.transform.localRotation = Quaternion.Euler(Vector3.zero);
    }
}