using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/String Event/GameObject Result",
        fileName = "string_event_gameobject_result")]
    public class StringEventGameObjectResult : BaseEvent<string, GameObject>
    {
    }
}