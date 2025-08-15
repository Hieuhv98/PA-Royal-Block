using UnityEngine;
using VirtueSky.Events;

namespace TheBeginning.LevelSystem
{
    [CreateAssetMenu(menuName = "Event Custom/Event Get Transform Current Level",
        fileName = "event_get_transform_current_level")]
    public class EventGetTransformCurrentLevel : EventNoParamResult<Transform>
    {
    }
}