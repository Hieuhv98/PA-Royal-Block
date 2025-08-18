using UnityEngine;
using VirtueSky.DataStorage;

namespace VirtueSky.Core
{
    public class RuntimeInitialize : MonoBehaviour
    {
        private void Awake()
        {
            AutoInitialize();
        }
        private void AutoInitialize()
        {
            var app = new GameObject("MonoGlobal");
            App.InitMonoGlobalComponent(app.AddComponent<MonoGlobal>());
            GameData.Init();
            Object.DontDestroyOnLoad(app);
        }
    }
}