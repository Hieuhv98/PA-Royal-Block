using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Event Custom/EventDoSuckBooster", fileName = "do_suck_booster_event")]
public class OnDoSuckBoosterEvent : BaseEvent<(GameObject target, List<GameObject> targets, Action start, Action onUse, Action complete)>
{
}