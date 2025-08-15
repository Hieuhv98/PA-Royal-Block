using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(menuName = "Game/Level/Collection/Block Collection", fileName = "Block Collection", order = 0)]
public class BlockCollection : CollectionBase<BlockColor>
{
    public List<BlockColor> GetBlock(EColorType eColorType) => List.FindAll(x => x.EColorType == eColorType && x.IsAlive);
    public List<BlockColor> GetBlockAlive() => List.FindAll(x => x.IsAlive);
    public bool IsHaveBlockColor(EColorType eColorType) => GetBlock(eColorType).Count > 0;
}