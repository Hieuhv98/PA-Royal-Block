using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Events;

[Serializable]
public struct SuckBoosterData
{
    public GameObject target;
    public List<GameObject> targets;
    public Action onStart;
    public Action onUse;
    public Action onComplete;
}

[CreateAssetMenu(menuName = "Event Custom/EventDoSuckBooster", fileName = "do_suck_booster_event")]
public class OnDoSuckBoosterEvent : BaseEvent<SuckBoosterData>
{
}