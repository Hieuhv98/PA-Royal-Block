using UnityEngine;
using VirtueSky.Events;
[CreateAssetMenu(menuName = "Game/Tracking/Event", fileName = "tracking_event", order = 0)]
public class TrackingEvent : BaseEvent<(string, TrackingParameter[])>
{
}