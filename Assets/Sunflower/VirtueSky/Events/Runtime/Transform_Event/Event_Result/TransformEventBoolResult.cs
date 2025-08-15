using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/Bool Result",
        fileName = "transform_event_bool_result")]
    public class TransformEventBoolResult : BaseEvent<Transform, bool>
    {
    }
}