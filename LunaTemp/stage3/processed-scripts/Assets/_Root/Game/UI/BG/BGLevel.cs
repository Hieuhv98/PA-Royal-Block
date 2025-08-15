using UnityEngine;
using VirtueSky.Core;

public class BGLevel : BaseMono
{
    [SerializeField] private PlaneManagerData managerData;
    [SerializeField] private SpriteRenderer bg;

    [Header("Config")]
    [SerializeField] private int fieldOfViewOriginal = 18;
    [SerializeField] private float sizeOriginal = 1f;

    public void Start()
    {
        if (managerData)
        {
            Refresh(managerData.GetDataCurrent());
            managerData.ActionChange += OnChange;
        }
    }
    public void ReNative(float fieldOfViewCurrent) 
    {
        bg.transform.localScale = Vector3.one * sizeOriginal * (fieldOfViewCurrent / fieldOfViewOriginal);
    }
    void OnChange(PlaneData data)
    {
        Refresh(data);
    }
    public void Refresh(PlaneData data)
    {
        bg.sprite = data.BG;
    }
    public void OnDestroy()
    {
        if (managerData) managerData.ActionChange -= OnChange;
    }
}