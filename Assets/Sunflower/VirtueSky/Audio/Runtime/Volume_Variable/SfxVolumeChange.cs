using UnityEngine;
using VirtueSky.Variables;

namespace VirtueSky.Audio
{
    [CreateAssetMenu(menuName = "Sunflower/Audio/Volume Change Variable/Sfx Volume Change",
        fileName = "sfx_volume")]
    public class SfxVolumeChange : FloatVariable
    {
        [SerializeField] private float volume = 1f;

        public override float Value { get => volume; set => volume = value; }
    }
}