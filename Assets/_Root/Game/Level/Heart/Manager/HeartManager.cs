using System.Collections;
using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Events;

public class HeartManager : BaseMono
{
    [SerializeField] private bool isDontDestroyOnLoad = true;
    [SerializeField] private HeartData heartData;
    [SerializeField] private IntegerEvent updatingTimeIncreaseHeart;

    Coroutine _coroutineUpdateHeart;

    public void Awake()
    {
        if (isDontDestroyOnLoad) DontDestroyOnLoad(this.gameObject);
    }

    public override void OnEnable()
    {
        base.OnEnable();

        heartData.Refesh();
        _coroutineUpdateHeart = StartCoroutine(IUpdateTimeIncreaseHeart());
    }

    public override void OnDisable()
    {
        base.OnDisable();
        if (_coroutineUpdateHeart != null) StopCoroutine(_coroutineUpdateHeart);
    }

    IEnumerator IUpdateTimeIncreaseHeart()
    {
        while (true)
        {
            if (!heartData.IsCanIncrease)
            {
                updatingTimeIncreaseHeart?.Raise(-1);
                heartData.ResetTimeIncrease();
                yield return null;
            }
            else
            {
                if (heartData.TimeRemainingToIncrease <= 0)
                {
                    heartData.Add(1);
                    heartData.ResetTimeIncrease();
                }

                updatingTimeIncreaseHeart?.Raise(heartData.TimeRemainingToIncrease);
                yield return new WaitForSeconds(1);
            }
        }
    }
}