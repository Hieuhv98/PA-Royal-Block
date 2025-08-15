using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Object Event/Transform Result",
        fileName = "object_event_transform_result")]
    public class ObjectEventTransformResult : BaseEvent<object, Transform>
    {
    }
}