using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ButtonCTA : MonoBehaviour
{
    [SerializeField] string urlAndroid = "https://play.google.com/store/apps/details?id=com.gamee.homepin2.manor.homescape";
    [SerializeField] string urlIos = "https://apps.apple.com/vn/app/home-pin-2-family-adventure/id6443785203?l";
    public void TriggerCTA()
    {
        Luna.Unity.Playable.InstallFullGame(urlIos, urlAndroid);
        Luna.Unity.LifeCycle.GameEnded();
    }
}