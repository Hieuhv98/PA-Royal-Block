using UnityEngine;
using VirtueSky.Core;

[RequireComponent(typeof(Camera))]
public class CameraSystem : BaseMono
{
    [SerializeField] private Vector2 screenSizeOrigin = new Vector2(1080, 1920);
    [SerializeField] private Camera cameraTarget;

    [SerializeField] private BGLevel bg;

    float _fieldOfView;
    float _aspectOrigin;
    float _aspect;
    float _reNativeValue;

    private void Awake()
    {
        _fieldOfView = cameraTarget.fieldOfView;
        _aspectOrigin = screenSizeOrigin.x / screenSizeOrigin.y;
        _aspect = cameraTarget.aspect;

        ReNative();
    }

    private void ReNative()
    {
        _reNativeValue = _aspectOrigin / _aspect;
        cameraTarget.fieldOfView = _fieldOfView * _reNativeValue;
        CheckDeviceResolution();

        if(bg) bg.ReNative(cameraTarget.fieldOfView);
    }

    private void CheckDeviceResolution()
    {
        if (_aspect > 1.5f)
        {
            cameraTarget.fieldOfView *= 1.65f;
        }
        else if (_aspect > 1.0f)
        {
            cameraTarget.fieldOfView *= 1.5f;
        }
        else if (_aspect > 0.6f)
        {
            cameraTarget.fieldOfView *= 1.4f;
        }
        else if (_aspect < 0.5f)
        {
            cameraTarget.fieldOfView *= .875f;
        }
    }

#if UNITY_EDITOR
    private void Update()
    {
        if (_aspect != cameraTarget.aspect)
        {
            _aspect = cameraTarget.aspect;
            ReNative();
        }
    }
#endif
}