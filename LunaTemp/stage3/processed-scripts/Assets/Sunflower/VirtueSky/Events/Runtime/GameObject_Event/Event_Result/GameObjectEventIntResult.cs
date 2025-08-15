using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Int Result",
        fileName = "gameobject_event_int_result")]
    public class GameObjectEventIntResult : BaseEvent<GameObject, int>
    {
    }
}