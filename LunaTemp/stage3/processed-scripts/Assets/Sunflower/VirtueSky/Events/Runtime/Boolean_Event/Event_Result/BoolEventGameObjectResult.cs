using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Boolean Event/GameObject Result",
        fileName = "bool_event_gameobject_result")]
    public class BoolEventGameObjectResult : BaseEvent<bool, GameObject>
    {
    }
}