using UnityEngine;
using VirtueSky.Core;
using VirtueSky.Variables;

namespace TheBeginning.LevelSystem
{
    public class LevelLoader : BaseMono
    {
        [SerializeField] private Level currentLevel;
        [SerializeField] private Level previousLevel;
        [SerializeField] private LevelSettings levelSettings;
        [SerializeField] private IntegerVariable currentIndexLevel;
        [SerializeField] private IntegerVariable currentIndexLevelLoopBy;
        [SerializeField] private EventLoadLevel eventLoadLevel;
        [SerializeField] private EventGetCurrentLevel eventGetCurrentLevel;
        [SerializeField] private EventGetPreviousLevel eventGetPreviousLevel;

        private Level CurrentLevel() => currentLevel;
        private Level PreviousLevel() => previousLevel;

        public void Awake()
        {
            eventLoadLevel.AddListener(LoadLevel);
            eventGetCurrentLevel.AddListener(CurrentLevel);
            eventGetPreviousLevel.AddListener(PreviousLevel);

            LoadLevel();
        }

        private void OnDestroy()
        {
            eventLoadLevel.RemoveListener(LoadLevel);
            eventGetCurrentLevel.RemoveListener(CurrentLevel);
            eventGetPreviousLevel.RemoveListener(PreviousLevel);
        }

        private Level LoadLevel()
        {
            int index = HandleIndexLevel(currentIndexLevel.Value);
            currentIndexLevelLoopBy.Value = index;
            var result = levelSettings.GePrefabLevel(index);
            if (currentLevel != null)
            {
                previousLevel = currentLevel;
            }
            else
            {
                int indexPrev = HandleIndexLevel(currentIndexLevel.Value - 1);
                var resultPre = levelSettings.GePrefabLevel(indexPrev);
                if(resultPre) previousLevel = resultPre.GetComponent<Level>();
            }

            currentLevel = result.GetComponent<Level>();
            return currentLevel;
        }

        int HandleIndexLevel(int indexLevel)
        {
            if (indexLevel > levelSettings.MaxLevel)
            {
                return (indexLevel - levelSettings.StartLoopLevel) %
                       (levelSettings.MaxLevel - levelSettings.StartLoopLevel + 1) +
                       levelSettings.StartLoopLevel;
            }

            if (indexLevel > 0 && indexLevel <= levelSettings.MaxLevel)
            {
                //return (indexLevel - 1) % gameConfig.maxLevel + 1;
                return indexLevel;
            }

            if (indexLevel == 0)
            {
                return levelSettings.MaxLevel;
            }

            return 1;
        }

        public void ActiveCurrentLevel(bool active)
        {
            currentLevel.gameObject.SetActive(active);
        }
    }
}