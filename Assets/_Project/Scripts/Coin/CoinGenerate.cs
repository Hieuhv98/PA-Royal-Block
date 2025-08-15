using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DG.Tweening;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.ObjectPooling;
using Random = UnityEngine.Random;

public class CoinGenerate : BaseMono
{
    [SerializeField] private GameObject coinPrefab;
    [SerializeField] private Transform holder;
    [SerializeField] private int numberCoin;
    [SerializeField] private int delay;
    [SerializeField] private float durationNear;
    [SerializeField] private float durationTarget;
    [SerializeField] private Ease easeNear;
    [SerializeField] private Ease easeTarget;
    [SerializeField] private float scale = 1;
    [SerializeField] private float offsetNear = 1;
    [SerializeField] private Vector3Event setFromCoinEvent;
    [SerializeField] private GameObjectEvent addTargetToCoinGenerateEvent;
    [SerializeField] private GameObjectEvent removeTargetToCoinGenerateEvent;
    [SerializeField] private EventNoParam moveOneCoinDone;
    [SerializeField] private EventNoParam moveAllCoinDone;
    [SerializeField] private EventNoParam decreaseCoinEvent;
    [SerializeField] private EventNoParam addCoinEvent;
    [SerializeField] private EventNoParam minusCoinEvent;
    [Header("Sound")] [SerializeField] public PlaySfxEvent playSoundFx;
    [SerializeField] private SoundData soundCoinMove;
    [Header("Fx")]
    [SerializeField] private ParticleSystem fx;

    private bool isScaleIconTo = false;
    private Vector3 from;
    private GameObject to;
    private List<GameObject> coinsActive = new List<GameObject>();
    private List<GameObject> listTo = new List<GameObject>();
    private int cacheCurrentCoin;

    public override void OnEnable()
    {
        base.OnEnable();
        addCoinEvent.AddListener(GenerateCoin);
        minusCoinEvent.AddListener(DecreaseCoin);
        setFromCoinEvent.AddListener(SetFrom);
        addTargetToCoinGenerateEvent.AddListener(AddTo);
        removeTargetToCoinGenerateEvent.AddListener(RemoveTo);
        SetFrom(holder.position);
        SaveCache();
    }

    public override void OnDisable()
    {
        base.OnDisable();
        addCoinEvent.RemoveListener(GenerateCoin);
        minusCoinEvent.RemoveListener(DecreaseCoin);
        setFromCoinEvent.RemoveListener(SetFrom);
        addTargetToCoinGenerateEvent.RemoveListener(AddTo);
        removeTargetToCoinGenerateEvent.RemoveListener(RemoveTo);
    }

    private void SaveCache()
    {
        cacheCurrentCoin = CoinSystem.GetCurrentCoin();
    }

    private void DecreaseCoin()
    {
        decreaseCoinEvent.Raise();
        SaveCache();
    }

    public void SetFrom(Vector3 from)
    {
        this.from = from;
    }

    public void AddTo(GameObject obj)
    {
        listTo.Add(obj);
        to = GetToNear();
    }

    public void RemoveTo(GameObject obj)
    {
        listTo.Remove(obj);
        if (listTo.Count > 0)
        {
            to = GetToNear();
        }
    }

    GameObject GetToNear()
    {
        List<float> distances = new List<float>();
        foreach (var t in listTo)
        {
            var distance = Vector3.Distance(from, t.transform.position);
            distances.Add(distance);
        }

        int intdex = 0;
        float currentDistance = distances[0];
        for (int i = 0; i < distances.Count; i++)
        {
            if (distances[i] < currentDistance)
            {
                currentDistance = distances[i];
                intdex = i;
            }
        }

        return listTo[intdex];
    }


    public async void GenerateCoin()
    {
        isScaleIconTo = false;
        playSoundFx.Raise(soundCoinMove);
        to = GetToNear();
        for (int i = 0; i < numberCoin; i++)
        {
            await Task.Delay(Random.Range(0, delay));
            GameObject coin = coinPrefab.Spawn(holder);
            coin.transform.localScale = Vector3.one * scale;
            coinsActive.Add(coin);
            coin.transform.position = from;
            MoveToTarget(coin, () =>
            {
                coinsActive.Remove(coin);
                coin.DeSpawn();

                moveOneCoinDone.Raise();
                if (!isScaleIconTo)
                {
                    isScaleIconTo = true;
                    ScaleIconTo();
                    if (fx)
                    {
                        fx.transform.parent = to.transform;
                        fx.transform.localPosition = Vector3.zero;
                        fx.Stop();
                        fx.Play();
                    }
                }

                if (coinsActive.Count == 0)
                {
                    to.transform.parent.DOKill(true);
                    moveAllCoinDone.Raise();
                    SaveCache();
                    SetFrom(holder.position);
                }
            });
        }
    }

    private void MoveToTarget(GameObject coin, Action completed)
    {
        coin.transform
            .DOMove(coin.transform.position + (Vector3)Random.insideUnitCircle * offsetNear,
                durationNear)
            .SetEase(easeNear)
            .OnComplete(
                () =>
                {
                    coin.transform.DOMove(to.transform.position, durationTarget).SetEase(easeTarget)
                        .OnComplete(() => completed());
                });
    }

    public void SetNumberCoin(int _numberCoin)
    {
        numberCoin = _numberCoin;
    }

    private void ScaleIconTo()
    {
        Vector3 currentScale = Vector3.one;
        Vector3 nextScale = currentScale + new Vector3(.1f, .1f, .1f);
        var tween = to.transform.parent.DOScale(nextScale, .15f).SetEase(Ease.OutBack)
            .OnComplete(() => { to.transform.parent.DOScale(currentScale, .1f).SetEase(Ease.InBack); });
        tween.SetLoops(-1);
    }
}