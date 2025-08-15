using System;
using Spine;
using Spine.Unity;
using UnityEngine;
using VirtueSky.Misc;

public class Transittion : MonoBehaviour
{
    [Header("MainTransition")] [SerializeField]
    private SkeletonGraphic trans;

    [SpineAnimation(dataField: "trans")] [SerializeField]
    private string mainTransAnim;

    [SpineEvent(dataField: "trans")] [SerializeField]
    private string mainEventOpen;

    [SpineEvent(dataField: "trans")] [SerializeField]
    private string mainEventClose;
        
    [Header("CurtainTransition")] [SerializeField]
    private SkeletonGraphic curtain;

    [SpineAnimation(dataField: "curtain")] [SerializeField]
    private string curtainTransAnim;

    [SpineEvent(dataField: "curtain")] [SerializeField]
    private string curtainEventClose;

    private Action OnClose;
    private Action OnOpen;
    private Action CloseCurtainEvent;
    private bool isPlay = false;
    private bool isPlayCurtain = false;
    private static event Action<Action, Action> OnPlay;

    private static event Action<Action, Action> OnPlayCurTain;

    public static void Play(Action close = null, Action open = null) => OnPlay?.Invoke(close, open);

    public static void PlayCurtain(Action close = null, Action complete = null) =>
        OnPlayCurTain?.Invoke(close, complete);

    private void Awake()
    {
        OnPlay += InternalPlay;
        OnPlayCurTain += InternalPlayCurtain;
        trans.AnimationState.Event += HandleEventMainTrans;
        curtain.AnimationState.Event += HandleEventCurtainTrans;
        trans.gameObject.SetActive(false);
        curtain.gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        OnPlay -= InternalPlay;
        OnPlayCurTain -= InternalPlayCurtain;
        trans.AnimationState.Event -= HandleEventMainTrans;
        curtain.AnimationState.Event -= HandleEventCurtainTrans;
    }

    void HandleEventMainTrans(TrackEntry trackEntry, Spine.Event e)
    {
        if (e.Data.Name == mainEventClose)
        {
            Common.CallActionAndClean(ref OnClose);
        }
        else if (e.Data.Name == mainEventOpen)
        {
            Common.CallActionAndClean(ref OnOpen);
        }
    }

    void HandleEventCurtainTrans(TrackEntry trackEntry, Spine.Event e)
    {
        if (e.Data.Name == curtainEventClose)
        {
            Common.CallActionAndClean(ref CloseCurtainEvent);
        }
    }

    void InternalPlay(Action close = null, Action open = null)
    {
        if (isPlay) return;
        isPlay = true;
        OnClose = close;
        OnOpen = open;
        trans.gameObject.SetActive(true);
        trans.PlayOnly(mainTransAnim).OnComplete(() =>
        {
            isPlay = false;
            trans.gameObject.SetActive(false);
        });
    }

    void InternalPlayCurtain(Action close = null, Action completed = null)
    {
        if (isPlayCurtain) return;
        isPlayCurtain = true;
        CloseCurtainEvent = close;
        curtain.gameObject.SetActive(true);
        curtain.PlayOnly(curtainTransAnim).OnComplete(() =>
        {
            completed?.Invoke();
            isPlayCurtain = false;
            curtain.gameObject.SetActive(false);
        });
    }
}