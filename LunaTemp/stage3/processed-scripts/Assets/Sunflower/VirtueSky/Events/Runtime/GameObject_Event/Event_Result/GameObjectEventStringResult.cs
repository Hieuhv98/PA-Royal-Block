using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/String Result",
        fileName = "gameobject_event_string_result")]
    public class GameObjectEventStringResult : BaseEvent<GameObject, string>
    {
    }
}