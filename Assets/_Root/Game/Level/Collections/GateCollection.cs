using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(menuName = "Game/Level/Collection/Gate Collection", fileName = "Gate Collection", order = 0)]
public class GateCollection : CollectionBase<Gate>
{
    public List<Gate> Get(EColorType eColorType) => List.FindAll(x => x.EColorType == eColorType && x.IsAlive);
    public List<Gate> GetAlive() => List.FindAll(x => x.IsAlive);
    public bool IsHaveColor(EColorType eColorType) => Get(eColorType).Count > 0;
}