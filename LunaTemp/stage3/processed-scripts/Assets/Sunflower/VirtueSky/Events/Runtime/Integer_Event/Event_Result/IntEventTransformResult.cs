using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Int Event/Transform Result",
        fileName = "int_event_transform_result")]
    public class IntEventTransformResult : BaseEvent<int, Transform>
    {
    }
}