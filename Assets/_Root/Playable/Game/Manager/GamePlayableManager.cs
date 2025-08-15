using DG.Tweening;
using TheBeginning.LevelSystem;
using TheBeginning.UI;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Events;
using VirtueSky.Variables;

public class GamePlayableManager : MonoBehaviour
{
    [SerializeField]
    private GameState gameState;

    [SerializeField] private Transform levelHolder;
    [SerializeField] private IntegerVariable indexLevelVariable;
    [SerializeField] private EventLoadLevel eventLoadLevel;
    [SerializeField] private EventGetCurrentLevel eventGetCurrentLevel;
    [SerializeField] private EventGetPreviousLevel eventGetPreviousLevel;
    [SerializeField] private EventNoParam callReplayLevelEvent;
    [SerializeField] private EventNoParam callPlayCurrentLevelEvent;
    [SerializeField] private EventNoParam callNextLevelEvent;
    [SerializeField] private EventNoParam onLoadLevelComplete;
    [SerializeField] private FloatEvent callWinLevelEvent;
    [SerializeField] private FloatEvent callLoseLevelEvent;
    [SerializeField] private PlaySfxEvent playSfxEvent;

    [SerializeField] private LevelModeData levelModeData;
    private ELevelMode _currentLevelMode;

    private LevelMap _levelMap;
    private Tween _delayTimeTween;
    public bool IsGamePlaying => gameState == GameState.PlayingGame;
    private GameState GetGameState() => gameState;

    public void OnEnable()
    {
        callPlayCurrentLevelEvent.AddListener(PlayCurrentLevel);
        callReplayLevelEvent.AddListener(ReplayGame);
        callNextLevelEvent.AddListener(NextLevel);
        callWinLevelEvent.AddListener(OnWinGame);
        callLoseLevelEvent.AddListener(OnLoseGame);
    }

    public void OnDisable()
    {
        callPlayCurrentLevelEvent.RemoveListener(PlayCurrentLevel);
        callReplayLevelEvent.RemoveListener(ReplayGame);
        callNextLevelEvent.RemoveListener(NextLevel);
        callWinLevelEvent.RemoveListener(OnWinGame);
        callLoseLevelEvent.RemoveListener(OnLoseGame);
    }

    public void Start()
    {
        PlayCurrentLevel();
    }

    private void PlayCurrentLevel()
    {
        PopupManager.Show<GameplayPopup>();
        StartGame();
    }

    private void ReplayGame()
    {
        PopupManager.Show<GameplayPopup>();
        StartGame();
    }

    private void NextLevel()
    {
        indexLevelVariable.Value++;
        var levelPrefab = eventLoadLevel.Raise();
        levelHolder.Clear();
        Instantiate(levelPrefab, levelHolder, false);
    }

    private void StartGame()
    {
        gameState = GameState.PlayingGame;
        var levelData = levelModeData.GetLevelData();
        _currentLevelMode = levelData.getLevelModeInfor.levelMode;
        if (levelData.getLevelTypeInfor.soundStartGame)
        {
            playSfxEvent.Raise(levelData.getLevelTypeInfor.soundStartGame);
        }

        var currentLevelPrefab = eventLoadLevel.Raise();
        levelHolder.Clear();
        var level = Instantiate(currentLevelPrefab, levelHolder, false);
        if (onLoadLevelComplete) onLoadLevelComplete?.Raise();
    }

    private void OnWinGame(float delayPopupShowTime = 2.5f)
    {
        if (gameState == GameState.WaitingResult ||
            gameState == GameState.LoseGame ||
            gameState == GameState.WinGame) return;

        gameState = GameState.WinGame;

        _delayTimeTween = DOVirtual.DelayedCall(delayPopupShowTime, () =>
        {
            Show();
            void Show()
            {
                PopupManager.Show<WinPopup>();
                PopupManager.Hide<GameplayPopup>();
                eventLoadLevel.Raise();
            }
        });
    }

    private void OnLoseGame(float delayPopupShowTime = 2.5f)
    {
        if (gameState == GameState.WaitingResult ||
            gameState == GameState.LoseGame ||
            gameState == GameState.WinGame) return;
        gameState = GameState.LoseGame;

        _delayTimeTween = DOVirtual.DelayedCall(delayPopupShowTime, () =>
        {
            PopupManager.Show<LosePopup>();
        });
    }
}
public enum GameState
{
    PrepareGame,
    PlayingGame,
    WaitingResult,
    LoseGame,
    WinGame,
    Lobby
}