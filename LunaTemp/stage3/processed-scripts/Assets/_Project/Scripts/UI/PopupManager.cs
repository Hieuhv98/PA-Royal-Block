using System.Collections.Generic;
using UnityEngine;
using System;
using VirtueSky.Core;

namespace TheBeginning.UI
{
    public class PopupManager : BaseMono
    {
        [SerializeField]
        private Transform parentContainer;
        [SerializeField] private PopupSettings popupSettings;
        [SerializeField] private Camera cameraUI;
        [SerializeField] private int index = 1;
        private readonly Dictionary<Type, UIPopup> container = new Dictionary<Type, UIPopup>();
        private static PopupManager _ins;

        private void Awake()
        {
            Debug.Assert(cameraUI != null, "CameraUI != null");
            if (_ins == null)
            {
                _ins = this;
            }

            parentContainer.Clear();
        }

        private void InternalShow<T>(bool isHideAll = true, Action showPopupCompleted = null)
        {
            container.TryGetValue(typeof(T), out UIPopup popup);
            if (popup == null)
            {
                var popupPrefab = popupSettings.GetPrefabPopup(typeof(T).Name);
                if (popupPrefab != null)
                {
                    var popupInstance = Instantiate(popupPrefab, parentContainer);
                    if (isHideAll)
                    {
                        InternalHideAll();
                    }

                    if (!popupInstance.isNotSortingLayer)
                    {
                        popupInstance.canvas.sortingOrder = index++;
                    }

                    popupInstance.Show();
                    showPopupCompleted?.Invoke();
                    container.Add(popupInstance.GetType(), popupInstance);
                }
                else
                {
                    Debug.Log("Popup not found in the list to show");
                }
            }
            else
            {
                if (!popup.isActiveAndEnabled)
                {
                    if (isHideAll)
                    {
                        InternalHideAll();
                    }

                    if (!popup.isNotSortingLayer)
                    {
                        popup.canvas.sortingOrder = index++;
                    }

                    popup.Show();
                    showPopupCompleted?.Invoke();
                }
            }
        }

        private void InternalHide<T>(Action hidePopupCompleted = null)
        {
            if (container.TryGetValue(typeof(T), out UIPopup popup))
            {
                if (popup.isActiveAndEnabled)
                {
                    popup.Hide();
                    hidePopupCompleted?.Invoke();
                }
            }
            else
            {
                Debug.Log("Popup not found to hide");
            }
        }

        private UIPopup InternalGet<T>()
        {
            return container.GetValueOrDefault(typeof(T));
        }

        private bool InternalIsPopupReady<T>()
        {
            return container.ContainsKey(typeof(T));
        }

        private void InternalHideAll()
        {
            foreach (var popup in container.Values)
            {
                if (popup.isActiveAndEnabled)
                {
                    popup.Hide();
                }
            }
        }

        string GetKeyPopup(string fullName)
        {
            int index = fullName.LastIndexOf('.');
            if (index != -1)
            {
                return fullName.Substring(index + 1).Trim();
            }
            else
            {
                return fullName;
            }
        }

        #region API

        public static void Show<T>(bool isHideAll = true, Action showPopupCompleted = null) =>
            _ins.InternalShow<T>(isHideAll, showPopupCompleted);

        public static void Hide<T>(Action hidePopupCompleted = null) => _ins.InternalHide<T>(hidePopupCompleted);
        public static UIPopup Get<T>() => _ins.InternalGet<T>();
        public static bool IsPopupReady<T>() => _ins.InternalIsPopupReady<T>();
        public static void HideAll() => _ins.InternalHideAll();

        #endregion
    }
}