using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/Object Result",
        fileName = "transform_event_object_result")]
    public class TransformEventObjectResult : BaseEvent<Transform, object>
    {
    }
}