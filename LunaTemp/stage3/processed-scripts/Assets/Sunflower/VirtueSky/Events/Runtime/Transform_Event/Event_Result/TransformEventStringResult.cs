using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/String Result",
        fileName = "transform_event_string_result")]
    public class TransformEventStringResult : BaseEvent<Transform, string>
    {
    }
}