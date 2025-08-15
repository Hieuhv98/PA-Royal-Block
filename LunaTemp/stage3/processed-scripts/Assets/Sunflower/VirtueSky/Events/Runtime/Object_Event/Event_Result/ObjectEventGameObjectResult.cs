using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Object Event/GameObject Result",
        fileName = "object_event_gameobject_result")]
    public class ObjectEventGameObjectResult : BaseEvent<object, GameObject>
    {
    }
}