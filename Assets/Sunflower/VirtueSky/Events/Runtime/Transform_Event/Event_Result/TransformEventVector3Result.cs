using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/Vector3 Result",
        fileName = "transform_event_vector3_result")]
    public class TransformEventVector3Result : BaseEvent<Transform, Vector3>
    {
    }
}