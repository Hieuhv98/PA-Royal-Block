using UnityEngine;
using VirtueSky.Events;

namespace TheBeginning.LevelSystem
{
    [CreateAssetMenu(menuName = "Event Custom/Event Load Level", fileName = "event_load_level")]
    public class EventLoadLevel : EventNoParamResult<Level>
    {
    }
}