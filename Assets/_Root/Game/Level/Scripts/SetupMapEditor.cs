using UnityEngine;

public class SetupMapEditor : MonoBehaviour
{
#if UNITY_EDITOR
    [Header("Config")]
    [SerializeField] private float cameraPosXOddConfig = -.25f;
    [SerializeField] private float cameraPosXEvenConfig = .25f;
    [SerializeField] private float cameraPosZOddConfig = -.5f;
    [SerializeField] private float cameraPosZEvenConfig = 0f;
    [SerializeField] private float cameraPosZOffsetPerFileOfView = -0.05f;
    [SerializeField] private bool isAutoCombineMeshes = true;

    [Header("Origin")]
    [SerializeField] private float posXOrigin = 0f;
    [SerializeField] private float posZOrigin = -3f;
    [SerializeField] private float fieldOfViewOrigin = 65f;
    [SerializeField] private int mapSizeXOrigin = 6;
    [SerializeField] private int mapSizeZOrigin = 7;
    [SerializeField] private int filedOfViewOffsetByZPerUnit = 5;
    [SerializeField] private int filedOfViewOffsetByXPerUnit = 5;

    [Header("Camera")]
    [SerializeField] private float cameraRotationXOrigin = 75f;
    [SerializeField] private float cameraRotationXMax= 82f;
    [SerializeField] private int mapSizeZToRotation = 7;
    [SerializeField] private float cameraRotationXPerUnit = 1.5f;
    [SerializeField] private float cameraPosZPerRotationXUnit = .325f;
    public void Setup() 
    {
        LevelMap levelMap = GetComponent<LevelMap>();
        if (levelMap == null) return;
        levelMap.transform.localPosition = Vector3.zero;
        var camera = levelMap.GetComponentInChildren<Camera>();
        var map = levelMap.MapSystem;
        if(isAutoCombineMeshes) map.CombineMeshes();

        var fieldOfView = fieldOfViewOrigin;
        if(map.SizeActive.x <= mapSizeXOrigin && map.SizeActive.y <= mapSizeZOrigin) 
        {
            if (Mathf.Abs(map.SizeActive.x - mapSizeXOrigin) <= Mathf.Abs(map.SizeActive.y - mapSizeZOrigin)) fieldOfView = fieldOfViewOrigin + (map.SizeActive.x - mapSizeXOrigin) * filedOfViewOffsetByXPerUnit; 
            else fieldOfView = fieldOfViewOrigin + (map.SizeActive.y - mapSizeZOrigin) * filedOfViewOffsetByZPerUnit;
        }
        if (map.SizeActive.x >= mapSizeXOrigin && map.SizeActive.y <= mapSizeXOrigin) fieldOfView = fieldOfViewOrigin + (map.SizeActive.x - mapSizeXOrigin) * filedOfViewOffsetByXPerUnit;
        if (map.SizeActive.x <= mapSizeXOrigin && map.SizeActive.y >= mapSizeZOrigin) fieldOfView = fieldOfViewOrigin + (map.SizeActive.y - mapSizeZOrigin) * filedOfViewOffsetByZPerUnit;
        if (map.SizeActive.x >= mapSizeXOrigin && map.SizeActive.y >= mapSizeZOrigin)
        {
            if (Mathf.Abs(map.SizeActive.x - mapSizeXOrigin) <= Mathf.Abs(map.SizeActive.y - mapSizeZOrigin)) fieldOfView = fieldOfViewOrigin + (map.SizeActive.y - mapSizeZOrigin) * filedOfViewOffsetByZPerUnit;
            else fieldOfView = fieldOfViewOrigin + (map.SizeActive.x - mapSizeXOrigin) * filedOfViewOffsetByXPerUnit;
        }

        camera.fieldOfView = fieldOfView;

        var posXOffset = map.SizeActive.x % 2 == 0 ? cameraPosXEvenConfig : cameraPosXOddConfig;
        var posYOffset = (map.SizeActive.y % 2 == 0 ? cameraPosZEvenConfig : cameraPosZOddConfig) + fieldOfView > fieldOfViewOrigin ? (fieldOfView - fieldOfViewOrigin) * cameraPosZOffsetPerFileOfView : 0;
        camera.transform.position = new Vector3(posXOrigin + posXOffset, camera.transform.position.y, posZOrigin + posYOffset);

        SetUpOnlyCamera();
    }

    public void SetUpOnlyCamera() 
    {
        LevelMap levelMap = GetComponent<LevelMap>();
        if (levelMap == null) return;
        var camera = levelMap.GetComponentInChildren<Camera>();
        var map = levelMap.MapSystem;
        if (map.SizeActive.y > mapSizeZToRotation)
        {
            var angle = Mathf.Min(cameraRotationXOrigin + (map.SizeActive.y - mapSizeZToRotation) * cameraRotationXPerUnit, cameraRotationXMax);
            var offset = angle - camera.transform.eulerAngles.x;
            if (offset > 0)
            {
                camera.transform.position = new Vector3(camera.transform.position.x, camera.transform.position.y, camera.transform.position.z + offset * cameraPosZPerRotationXUnit);
            }
            camera.transform.rotation = Quaternion.Euler(angle, camera.transform.eulerAngles.y, camera.transform.eulerAngles.z);
        }
    }
#endif
}