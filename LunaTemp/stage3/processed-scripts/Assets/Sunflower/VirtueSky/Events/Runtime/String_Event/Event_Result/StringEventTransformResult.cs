using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/String Event/Transform Result",
        fileName = "string_event_transform_result")]
    public class StringEventTransformResult : BaseEvent<string, Transform>
    {
    }
}