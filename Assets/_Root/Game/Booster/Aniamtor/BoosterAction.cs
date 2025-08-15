using UnityEngine;
using VirtueSky.Core;

public class BoosterAction : BaseMono
{
    [SerializeField] ParticleSystem fxOnStart;
    [SerializeField] ParticleSystem fxDoing;
    public void OnStart() { fxOnStart?.Play(); }
    public void OnDoing() { fxDoing?.Play(); }
}