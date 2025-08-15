using System.Collections;
using VirtueSky.Core;
using VirtueSky.ObjectPooling;

public class PooledParticleCallback : BaseMono
{
    void OnParticleSystemStopped()
    {
        StartCoroutine(IEDespawn());
    }

    IEnumerator IEDespawn()
    {
        yield return null;
        Pool.DeSpawn(gameObject);
    }
}