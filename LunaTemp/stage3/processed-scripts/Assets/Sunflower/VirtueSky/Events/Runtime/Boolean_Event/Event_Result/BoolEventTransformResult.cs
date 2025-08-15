using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Boolean Event/Transform Result",
        fileName = "bool_event_transform_result")]
    public class BoolEventTransformResult : BaseEvent<bool, Transform>
    {
    }
}