using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Int Event/GameObject Result",
        fileName = "int_event_gameobject_result")]
    public class IntEventGameObjectResult : BaseEvent<int, GameObject>
    {
    }
}