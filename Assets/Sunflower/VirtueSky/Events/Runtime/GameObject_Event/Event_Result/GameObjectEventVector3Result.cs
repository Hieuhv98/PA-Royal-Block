using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Vector3 Result",
        fileName = "gameobject_event_vector3_result")]
    public class GameObjectEventVector3Result : BaseEvent<GameObject, Vector3>
    {
    }
}