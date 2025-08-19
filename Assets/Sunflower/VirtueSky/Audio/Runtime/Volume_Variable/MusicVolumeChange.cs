using UnityEngine;
using VirtueSky.Variables;

namespace VirtueSky.Audio
{
    [CreateAssetMenu(menuName = "Sunflower/Audio/Volume Change Variable/Music Volume Change",
        fileName = "music_volume")]
    public class MusicVolumeChange : FloatVariable
    {
        [SerializeField] private float volume = 1f;

        public override float Value { get => volume; set => volume = value; }
    }
}