using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/Float Result",
        fileName = "transform_event_float_result")]
    public class TransformEventFloatResult : BaseEvent<Transform, float>
    {
    }
}