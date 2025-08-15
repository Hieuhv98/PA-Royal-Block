using UnityEngine;
using VirtueSky.Events;

namespace VirtueSky.Audio
{
    [CreateAssetMenu(menuName = "Sunflower/Audio/Music Event/Play Music Event", fileName = "play_music_event")]
    public class PlayMusicEvent : BaseEvent<SoundData>
    {
    }
}