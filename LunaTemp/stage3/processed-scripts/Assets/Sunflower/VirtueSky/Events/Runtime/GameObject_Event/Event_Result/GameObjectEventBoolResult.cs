using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Bool Result",
        fileName = "gameobject_event_bool_result")]
    public class GameObjectEventBoolResult : BaseEvent<GameObject, bool>
    {
    }
}