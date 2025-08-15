using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Transform Result",
        fileName = "gameobject_event_transform_result")]
    public class GameObjectEventTransformResult : BaseEvent<GameObject, Transform>
    {
    }
}