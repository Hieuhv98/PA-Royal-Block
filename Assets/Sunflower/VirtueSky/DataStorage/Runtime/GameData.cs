using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace VirtueSky.DataStorage
{
    public static class GameData
    {
        private static bool isInitialized;
        private static int profile;
        private static Dictionary<string, object> datas = new Dictionary<string, object>();
        private const int INIT_SIZE = 64;

        public static bool IsAutoSave { get; set; } = true;
        public static event Action OnSaveEvent;

        #region Internal Stuff

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void Init()
        {
            if (isInitialized) return;
            isInitialized = true;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static void RequireNullCheck()
        {
            if (datas == null) datas = new Dictionary<string, object>(INIT_SIZE);
        }

        #endregion

        #region Public API

        public static bool IsInitialized => isInitialized;

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void ChangeProfile(int profile)
        {
            if (GameData.profile == profile) return;

            GameData.profile = profile;
            datas.Clear();
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool VerifyProfile(int profile)
        {
            return GameData.profile == profile;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void Save()
        {
            OnSaveEvent?.Invoke();
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void SaveAsync()
        {
            OnSaveEvent?.Invoke();
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void Load()
        {
            if (datas.Count == 0)
            {
                datas = new Dictionary<string, object>(INIT_SIZE);
            }
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static async void LoadAsync()
        {
            if (datas.Count == 0)
            {
                datas = new Dictionary<string, object>(INIT_SIZE);
            }
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static T Get<T>(string key, T @default = default)
        {
            RequireNullCheck();

            if (datas.TryGetValue(key, out object value))
            {
                return (T)value;
            }
            return @default;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool TryGet<T>(string key, out T data)
        {
            RequireNullCheck();

            bool hasKey = datas.TryGetValue(key, out object value);
            data = hasKey ? (T)value : default;
            return hasKey;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void Set<T>(string key, T data)
        {
            RequireNullCheck();
            datas[key] = data;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static bool HasKey(string key) => datas.ContainsKey(key);

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void DeleteKey(string key) => datas.Remove(key);

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void DeleteAll() => datas.Clear();

        public static void DeleteFileData()
        {
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static object Backup()
        {
            return datas;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static void Restore(object data)
        {
            datas = (Dictionary<string, object>)data;
        }

        #endregion
    }
}