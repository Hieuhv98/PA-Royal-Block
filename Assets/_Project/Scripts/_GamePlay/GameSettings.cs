using UnityEngine;

public class GameSettings : ScriptableObject
{
    #region Field

    [Header("Gameplay config")] [SerializeField]
    private bool enableDebugView = true;

    [SerializeField] private TargetFrameRate targetFrameRate = TargetFrameRate.Frame60;
    [SerializeField] private bool multiTouchEnabled;
    [SerializeField] private int winLevelMoney = 100;
    [SerializeField] private int percentWinGiftPerLevel = 10;
    [SerializeField] private int pauseTimeBoosterAmount=10;
    [SerializeField] private int hammerBoosterAmount=10;
    [SerializeField] private int suckBoosterAmount=10;

    [Space, Header("Notification In Game")] [SerializeField]
    private bool enableNotificationInGame = true;

    [SerializeField]
    private float timeDelayHideNotificationInGame = 1.0f;

    [Space, Header("Require Internet")] [SerializeField]
    private bool enableRequireInternet = false;

    [SerializeField]
    private float timeDelayCheckInternet = 5;

    [SerializeField]
    private float timeLoopCheckInternet = .5f;

    [Space, Header("Show Popup Update")] [SerializeField]
    private bool enableShowPopupUpdate = false;

    #endregion

    #region Properties

    public bool EnableDebugView => enableDebugView;
    public TargetFrameRate TargetFrameRate => targetFrameRate;
    public bool MultiTouchEnabled => multiTouchEnabled;
    public int WinLevelMoney => winLevelMoney;
    public int PercentWinGiftPerLevel => percentWinGiftPerLevel;
    public int PauseTimeBoosterAmount => pauseTimeBoosterAmount;
    public int HammerBoosterAmount => hammerBoosterAmount;
    public int SuckBoosterAmount => suckBoosterAmount;
    public bool EnableNotificationInGame => enableNotificationInGame;
    public float TimeDelayHideNotificationInGame => timeDelayHideNotificationInGame;
    public bool EnableRequireInternet => enableRequireInternet;
    public float TimeDelayCheckInternet => timeDelayCheckInternet;
    public float TimeLoopCheckInternet => timeLoopCheckInternet;
    public bool EnableShowPopupUpdate => enableShowPopupUpdate;

    #endregion
}

public enum TargetFrameRate
{
    ByDevice = -1,
    Frame60 = 60,
    Frame120 = 120,
    Frame240 = 240
}