using System.Collections.Generic;
using UnityEngine;

namespace VirtueSky.Vfx
{
    [CreateAssetMenu(menuName = "Sunflower/Vfx/Vfx Data", fileName = "vfx_data")]
    public class VfxData : ScriptableObject
    {
        [SerializeField] private float timeDestroy = 3;

        [SerializeField] private List<GameObject> listVfx;

        public float TimeDestroy => timeDestroy;

        public GameObject GetVfxRandom() => PickRandom(listVfx);

        public GameObject GetVfxByIndex(int index) => listVfx[Mathf.Clamp(index, 0, listVfx.Count - 1)];

        GameObject PickRandom(List<GameObject> collection)
        {
            return collection.Count == 0 ? default(UnityEngine.GameObject) : collection[UnityEngine.Random.Range(0, collection.Count)];
        }
    }
}