using System;
using UnityEngine;
using UnityEngine.Playables;
using VirtueSky.DataStorage;

namespace TheBeginning.Data
{
    public partial struct UserData
    {
        // public static int CurrentCoin
        // {
        //     get => Get(Constant.CURRENT_COIN, 0);
        //     set => Set(Constant.CURRENT_COIN, value);
        // }

        public static bool IsFirstOpenGame
        {
            get => Get(Constant.IS_FIRST_OPEN_GAME, 0) == 1;
            set => Set(Constant.IS_FIRST_OPEN_GAME, value ? 1 : 0);
        }

        public static int GetNumberShowGameObject(string gameObjectID)
        {
            return Get($"{Constant.GAMEOBJECT_SHOW}_{gameObjectID}", 0);
        }

        public static void IncreaseNumberShowGameObject(string gameObjectID)
        {
            int value = GetNumberShowGameObject(gameObjectID);
            Set($"{Constant.GAMEOBJECT_SHOW}_{gameObjectID}", ++value);
        }

        public static int ProgressAmount
        {
            get => Get(Constant.PROGRESS_AMOUNT, 0);
            set => Set(Constant.PROGRESS_AMOUNT, value);
        }

        #region AFK

        public static string LastSessiontime
        {
            get => Get(Constant.LAST_SESSION_TIME, DateTime.Now.ToString());
            set => Set(Constant.LAST_SESSION_TIME, value);
        }

        #endregion

        #region Booster

        public static int GetBoosterAmount(string key, int defaultValue) => Get(key, defaultValue);

        public static void SetBoosterAmount(string key, int value) => Set(key, value);

        public static bool GetBoosterUnlock(string key, bool defaultValue) => Get(key, defaultValue);

        public static void SetBoosterUnlock(string key, bool value) => Set(key, value);

        #endregion

        #region Building

        public static bool GetSkinMakeupUnlocked(string key, bool defaultValue) => Get(key, defaultValue);

        public static void SetSkinMakeupUnlocked(string key, bool value) => Set(key, value);

        public static string GetSkinMakeupUnlockedSelectName(string key, string defaultValue) => Get(key, defaultValue);

        public static void SetSkinMakeupUnlockedSelectName(string key, string value) => Set(key, value);

        public static void SetInitData(string key, bool value) => Set(key, value);

        public static bool GetInitData(string key) => Get(key, false);

        public static int GetCurrentSelectRoom()
        {
            return Get("ROOM_SELECT", 0);
        }

        public static void SetCurrentSelectRoom(int value)
        {
            Set("ROOM_SELECT", value);
            GameData.Save();
        }

        #endregion

        #region BattlePass

        public static void SetItemBattlePassClaimed(string key, bool value) => Set(key, value);
        public static bool GetItemBattlePassClaimed(string key) => Get(key, false);

        public static string CurrentMonthBattlePass
        {
            get => Get(Constant.CURRENT_MONTH_BATTLE_PASS, DateTime.Now.ToString());
            set => Set(Constant.CURRENT_MONTH_BATTLE_PASS, value);
        }

        #endregion

        #region Stats

        public static void SetStatValue(string key, int value)
        {
            Set(key, value);
        }

        public static int GetStatValue(string key, int defauleValue)
        {
            return Get(key, defauleValue);
        }

        #endregion

        #region WinStreakGift

        public static void SetUnlockWinStreakGift(string key, bool value)
        {
            Set("WinStreakGift" + key, value);
        }

        public static bool GetUnlockWinStreakGift(string key)
        {
            return Get("WinStreakGift" + key, false);
        }

        public static string DayStartWinStreak
        {
            get => Get(Constant.LAST_WIN_STREAK_START, DateTime.Now.ToString());
            set => Set(Constant.LAST_WIN_STREAK_START, value);
        }

        #endregion

        #region Avt

        public static void SetPlayerProfileFrameThemeLag(string key, string value)
        {
            Set(key, value);
        }

        public static string GetPlayerProfileFrameThemeFlag(string key, string defaultValue)
        {
            return Get(key, defaultValue);
        }

        #endregion


        public static T Get<T>(string key, T defaultValue = default(T)) => GameData.Get(key, defaultValue);
        public static void Set<T>(string key, T data) => GameData.Set(key, data);
    }
}