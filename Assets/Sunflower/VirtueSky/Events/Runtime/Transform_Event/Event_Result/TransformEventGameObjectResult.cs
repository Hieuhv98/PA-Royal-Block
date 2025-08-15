using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Transform Event/GameObject Result",
        fileName = "transform_event_gameobject_result")]
    public class TransformEventGameObjectResult : BaseEvent<Transform, GameObject>
    {
    }
}