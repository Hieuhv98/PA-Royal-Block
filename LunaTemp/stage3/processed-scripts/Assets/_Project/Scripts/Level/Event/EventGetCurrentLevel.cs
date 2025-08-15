using UnityEngine;
using VirtueSky.Events;

namespace TheBeginning.LevelSystem
{
    [CreateAssetMenu(menuName = "Event Custom/Event Get Current Level", fileName = "event_get_current_level")]
    public class EventGetCurrentLevel : EventNoParamResult<Level>
    {
    }
}