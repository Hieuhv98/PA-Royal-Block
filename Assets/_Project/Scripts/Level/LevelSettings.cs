using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace TheBeginning.LevelSystem
{
    public class LevelSettings : ScriptableObject
    {
        [SerializeField] private int maxLevel;
        [SerializeField] private int startLoopLevel;
        [SerializeField] private string levelFormat = "Level {0}";
        [SerializeField] private List<Level> listLevels = new List<Level>();
        public int MaxLevel => maxLevel;
        public int StartLoopLevel => startLoopLevel;

        public Level GePrefabLevel(int index)
        {
            return GePrefabLevel(string.Format(levelFormat, index));
        }

        public Level GePrefabLevel(string levelName)
        {
            return listLevels.FirstOrDefault(item => item.name == levelName);
        }
    }
}