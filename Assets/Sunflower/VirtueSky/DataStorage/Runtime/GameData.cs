using System;
using System.Collections.Generic;

namespace VirtueSky.DataStorage
{
    public static class GameData
    {
        private static bool isInitialized;
        private static Dictionary<string, object> datas = new Dictionary<string, object>();
        private const int INIT_SIZE = 64;

        public static bool IsAutoSave { get; set; } = true;
        public static event Action OnSaveEvent;

        #region Internal Stuff

        public static void Init()
        {
            if (isInitialized) return;
            isInitialized = true;
        }

        private static void RequireNullCheck()
        {
            if (datas == null)
                datas = new Dictionary<string, object>(INIT_SIZE);
        }

        #endregion

        #region Public API

        public static bool IsInitialized { get { return isInitialized; } }

        public static void Save()
        {
            OnSaveEvent?.Invoke();
        }

        public static void SaveAsync()
        {
            OnSaveEvent?.Invoke();
        }

        public static void Load()
        {
            if (datas.Count == 0)
            {
                datas = new Dictionary<string, object>(INIT_SIZE);
            }
        }


        public static T Get<T>(string key, T defaultValue = default(T))
        {
            RequireNullCheck();

            object value;
            if (datas.TryGetValue(key, out value))
            {
                if (value is T tValue)
                {
                    return tValue;
                }
            }
            return defaultValue;
        }

        public static bool TryGet<T>(string key, out T data)
        {
            RequireNullCheck();

            object value;
            bool hasKey = datas.TryGetValue(key, out value);
            if (hasKey && value is T tValue)
            {
                data = tValue;
                return true;
            }

            data = default(T);
            return false;
        }

        public static void Set<T>(string key, T data)
        {
            RequireNullCheck();
            datas[key] = data;
        }

        public static bool HasKey(string key) { return datas.ContainsKey(key); }

        public static void DeleteKey(string key) { datas.Remove(key); }

        public static void DeleteAll() { datas.Clear(); }

        public static object Backup()
        {
            return datas;
        }

        public static void Restore(object data)
        {
            if (data is Dictionary<string, object> restoredData)
            {
                datas = restoredData;
            }
            else
            {
                throw new InvalidCastException("Data cannot be restored, invalid type.");
            }
        }
        #endregion
    }
}