using UnityEngine;

namespace VirtueSky.Events
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Event-Result/Float Event/GameObject Result",
        fileName = "float_event_gameobject_result")]
    public class FloatEventGameObjectResult : BaseEvent<float, GameObject>
    {
    }
}