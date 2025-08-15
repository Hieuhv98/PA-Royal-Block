using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Object Result",
        fileName = "gameobject_event_object_result")]
    public class GameObjectEventObjectResult : BaseEvent<GameObject, object>
    {
    }
}