using DG.Tweening;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Events;
using VirtueSky.ObjectPooling;
using Random = UnityEngine.Random;

public class StarGenerate : BaseMono
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
    [SerializeField] private float scaleTo = 1;
    [SerializeField] private float offsetNear = 1;
    [SerializeField] private IntegerEvent setStarCountEvent;
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
        setStarCountEvent.AddListener(SetNumberCoin);
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
        setStarCountEvent.RemoveListener(SetNumberCoin);
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
        to = listTo.Last();
    }

    public void RemoveTo(GameObject obj)
    {
        listTo.Remove(obj);
        if (listTo.Count > 0)
        {
            to = listTo.Last();
        }
    }


    public async void GenerateCoin()
    {
        isScaleIconTo = false;
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
                if (!isScaleIconTo)
                {
                    isScaleIconTo = true;
                    playSoundFx.Raise(soundCoinMove);
                    AddComplete();
                }

                moveOneCoinDone.Raise();
                if (coinsActive.Count == 0)
                {
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
                    coin.transform.DOJump(to.transform.position, 0.15f, 1, durationTarget)
                        .SetEase(easeTarget)
                        .OnComplete(() => completed?.Invoke());
                    coin.transform.DOScale(scaleTo, durationTarget).SetEase(easeTarget);
                });
    }

    public void SetNumberCoin(int _numberCoin)
    {
        numberCoin = _numberCoin;
    }

    private void AddComplete()
    {
        Vector3 currentScale = Vector3.one;
        Vector3 nextScale = currentScale + new Vector3(.15f, .15f, .15f);
        to.transform.parent.DOScale(nextScale, 0.15f).SetEase(Ease.OutBack)
            .OnComplete((() => { to.transform.parent.transform.DOScale(currentScale, 0.1f).SetEase(Ease.InBack); }));
    }
}