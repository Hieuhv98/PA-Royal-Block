using System;
using UnityEngine;
using VirtueSky.Core;

public class CollisionComponent : BaseMono
{
    public Action<GameObject> ActionTriggerEnter;
    public Action<GameObject> ActionTriggerStay;
    public Action<GameObject> ActionTriggerExit;

    private void OnTriggerEnter(Collider other)
    {
        ActionTriggerEnter?.Invoke(other.gameObject);
    }
    private void OnTriggerStay(Collider other)
    {
        ActionTriggerStay?.Invoke(other.gameObject);
    }
    private void OnTriggerExit(Collider other)
    {
        ActionTriggerExit?.Invoke(other.gameObject);
    }
}