using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Vector3 Event/GameObject Result",
        fileName = "vector3_event_gameobject_result")]
    public class Vector3EventGameObjectResult : BaseEvent<Vector3, GameObject>
    {
    }
}