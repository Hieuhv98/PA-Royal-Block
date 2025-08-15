using UnityEngine;
using VirtueSky.Events;

namespace TheBeginning.LevelSystem
{
    [CreateAssetMenu(menuName = "Event Custom/Event Get Previous Level", fileName = "event_get_previous_level")]
    public class EventGetPreviousLevel : EventNoParamResult<Level>
    {
    }
}