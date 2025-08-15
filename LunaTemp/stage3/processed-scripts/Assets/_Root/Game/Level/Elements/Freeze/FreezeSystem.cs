using System;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.ObjectPooling;

public class FreezeSystem : BaseMono
{
    [SerializeField] List<FreezeLinker> listLinker = new List<FreezeLinker>();
    [SerializeField] private EFreezeType type;
    [SerializeField] private List<FreezeConfig> configs;
    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;

    private SoundData _soundCrack;
    private ParticleSystem _fxBreak;

    private Dictionary<IFreezer, FreezePrefab> _dicData = new Dictionary<IFreezer, FreezePrefab>();
    public Material Material => configs.FirstOrDefault(x => x.Type == type).Material;
    public FreezePrefab freezePrefab => configs.FirstOrDefault(x => x.Type == type).FreezePrefab;

    private void Awake()
    {
        _dicData.Clear();
        foreach (var item in listLinker)
        {
            if (item != null) 
            {
                _dicData.Add(item.Freezer.GetComponent<IFreezer>(), item.Prefab);
            }
        }

        foreach (var data in _dicData)
        {
            var valueCurrent = data.Key.FreezeCount;
            data.Key.FreezeCurrentCount = valueCurrent;
            data.Value.UpdateUI(valueCurrent);
        }

        var config = configs.FirstOrDefault(x => x.Type == type);
        _soundCrack = config.SoundCrack;
        _fxBreak = config.FxBreak;
    }
    bool Contains(GameObject freezer)
    {
        return GetFreezer(freezer) != null;
    }

    FreezePrefab GetPrefab(GameObject freezer)
    {
        return GetFreezer(freezer).Prefab;
    }

    FreezeLinker GetFreezer(GameObject freezer)
    {
        return listLinker.Find(x => x.Freezer == freezer);
    }

    public void Add(IFreezer freezer)
    {
        CheckNull();
        if (!Contains(freezer.GameObject))
        {
            FreezePrefab prefab = new FreezePrefab();
#if UNITY_EDITOR
            prefab = PrefabUtility.InstantiatePrefab(freezePrefab, transform) as FreezePrefab;
#else
            prefab = Instantiate(freezePrefab, transform);
#endif
            //prefab.transform.SetParent(freezer.GameObject.transform);
            prefab.SetUp(freezer.FreezeCenterPosition, freezer.FreezeCount, freezer.TextSize);
            freezer.OnFreezerSetup(Material);
            listLinker.Add(new FreezeLinker(freezer.GameObject, prefab));
        }
    }

    public void Remove(IFreezer freezer)
    {
        if (Contains(freezer.GameObject))
        {
            var freezerLiner = GetFreezer(freezer.GameObject);
            OnFreezerBreak(freezer, freezerLiner.Prefab);
            listLinker.Remove(freezerLiner);
        }
    }

    public void CheckNull()
    {
        if (listLinker.Count > 0)
        {
            var listLinkerNull = new List<FreezeLinker>();
            for (int i = 0; i < listLinker.Count; i++)
            {
                if (listLinker[i].Freezer == null)
                {
                    listLinkerNull.Add(listLinker[i]);
                }
            }

            foreach (var linkerNull in listLinkerNull) listLinker.Remove(linkerNull);
        }
    }

    void OnFreezerBreak(IFreezer freezer, FreezePrefab prefab)
    {
        var position = prefab.transform.position;
#if UNITY_EDITOR
        DestroyImmediate(prefab.gameObject, true);
#else
            Destroy(prefab.gameObject);
#endif
        freezer.OnFreezerBreak();
        // create fx
        if (_fxBreak) 
        {
            var fx = Pool.Spawn(_fxBreak);
            if (fx)
            {
                fx.transform.position = position;
                fx.Play();
            }
        }

        if(_soundCrack) playSfxEvent?.Raise(_soundCrack);
    }

    public void OnChange(int value = 1)
    {
        foreach (var data in _dicData)
        {
            OnFreezerCrack(data.Key, value);
        }
    }
    public void OnFreezerCrack(IFreezer iFreezer, int value = 1) 
    {
        iFreezer.FreezeCurrentCount -= value;
        if (iFreezer != null && iFreezer.IsFrezering)
        {
            iFreezer.OnFreezerChanged();
            var count = iFreezer.FreezeCurrentCount;
            if (count <= 0)
            {
                OnFreezerBreak(iFreezer, _dicData[iFreezer]);
                iFreezer.IsFrezering = false;
            }
            else _dicData[iFreezer].UpdateUI(count);
        }
    }
}

[Serializable]
public class FreezeLinker
{
    [SerializeField] private GameObject freezer;
    [SerializeField] private FreezePrefab prefab;

    public GameObject Freezer => freezer;
    public FreezePrefab Prefab => prefab;

    public FreezeLinker(GameObject freezer, FreezePrefab prefab)
    {
        this.freezer = freezer;
        this.prefab = prefab;
    }
}
[Serializable]
public class FreezeConfig 
{
    [SerializeField] private EFreezeType type;
    [SerializeField] private FreezePrefab freezePrefab;
    [SerializeField] private Material material;
    [SerializeField] private SoundData soundCrack;
    [SerializeField] private ParticleSystem fxBreak;
    public EFreezeType Type => type;
    public Material Material => material;
    public SoundData SoundCrack => soundCrack;
    public ParticleSystem FxBreak => fxBreak;
    public FreezePrefab FreezePrefab => freezePrefab;
}
public enum EFreezeType 
{
    Normal,
    Wood,
}