using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Event Custom/Event Get GameState", fileName = "event_get_game_state")]
public class EventGetGameState : EventNoParamResult<GameState>
{
}