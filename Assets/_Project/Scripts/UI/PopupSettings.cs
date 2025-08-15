using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace TheBeginning.UI
{
    public class PopupSettings : ScriptableObject
    {
        [SerializeField] private string pathLoad = "Assets/_Project/Prefabs/Popups";
        [SerializeField] private List<UIPopup> listUiPopups;

        public List<UIPopup> ItemPopupConfigs => listUiPopups;

        public UIPopup GetPrefabPopup(string popupName)
        {
            return listUiPopups.FirstOrDefault(item => item.name == popupName);
        }
    }
}