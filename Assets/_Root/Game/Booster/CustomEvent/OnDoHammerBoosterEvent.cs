using System;
using UnityEngine;
using VirtueSky.Events;

[Serializable]
public struct HammerBoosterData
{
    public GameObject target;
    public Action onStart;
    public Action onComplete;
}

[CreateAssetMenu(menuName = "Event Custom/EventDoHammerBooster", fileName = "do_hammer_booster_event")]
public class OnDoHammerBoosterEvent : BaseEvent<HammerBoosterData>
{
}