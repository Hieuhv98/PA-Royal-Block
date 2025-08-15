using UnityEngine;

public interface IFreezer
{
    bool IsFrezering { set; get; }
    GameObject GameObject { get; }
    Vector3 FreezeCenterPosition { get; }
    int FreezeCount { get; }
    int FreezeCurrentCount { set; get; }
    void OnFreezerSetup(Material material);
    void OnFreezerChanged();
    void OnFreezerBreak();
    float TextSize { get; }
}