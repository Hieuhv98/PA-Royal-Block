using System;
using System.Collections.Generic;
using System.Linq;
using TheBeginning.UI;
using UnityEngine;
using UnityEngine.Serialization;
using VirtueSky.DataStorage;
using VirtueSky.Variables;

[CreateAssetMenu(menuName = "Data/UnlockNewElementData", fileName = "unlock_new_element_data")]
public class UnlockNewElementData : ScriptableObject
{
    [SerializeField] private IntegerVariable currentLevel;
    [SerializeField] private List<UnlockNewElementInfor> unlockNewElementInfors;
    private EElementType _currentElementUnlockType;

    public UnlockNewElementInfor GetUnlockNewElementInfor()
    {
        return null;
    }



    public (float prevProcessValue, float processValue, Sprite nextIconElement ) GetProcessNextIconData(bool isShowComplete)
    {
        int index = 0;
        int currentLevelValue = currentLevel.Value;
        for (int i = 0; i < unlockNewElementInfors.Count; i++)
        {
            var gap = unlockNewElementInfors[i].levelUnlock - currentLevelValue;
            if (isShowComplete ? gap >= 0 : gap > 0)
            {
                index = i;
                break;
            }
        }

        var origin = index == 0 ? 1 : unlockNewElementInfors[index - 1].levelUnlock;
        return ((float)(Mathf.Max(currentLevelValue - 1, 1) - origin) / (unlockNewElementInfors[index].levelUnlock - origin),
            (float)(currentLevelValue - origin) / (unlockNewElementInfors[index].levelUnlock - origin), unlockNewElementInfors[index].smallIconUnlcok);
    }


    void Sort()
    {
        unlockNewElementInfors.Sort((a, b) => a.levelUnlock.CompareTo(b.levelUnlock));
    }
}


[Serializable]
public class UnlockNewElementInfor
{

    [FormerlySerializedAs("mainIconUnlck")]
    public Sprite mainIconUnlock;

    public Sprite titleIconUnlock;
    public Sprite smallIconUnlcok;
    public string elementName;
    public string description;
    public int levelUnlock;
}