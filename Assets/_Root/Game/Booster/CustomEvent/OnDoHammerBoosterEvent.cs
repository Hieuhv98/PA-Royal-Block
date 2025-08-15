using System;
using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Event Custom/EventDoHammerBooster", fileName = "do_hammer_booster_event")]
public class OnDoHammerBoosterEvent : BaseEvent<(GameObject target, Action onStart, Action onComplete)>
{
}