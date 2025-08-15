using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/GameObject Event/Float Result",
        fileName = "gameobject_event_float_result")]
    public class GameObjectEventFloatResult : BaseEvent<GameObject, float>
    {
    }
}