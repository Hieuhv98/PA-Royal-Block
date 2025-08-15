using UnityEngine;

namespace TheBeginning.Services
{
    public class RuntimeInitialization : MonoBehaviour
    {
        [SerializeField] private ServiceInitialization[] serviceInitializations;

        private void Awake()
        {
            foreach (var serviceInitialization in serviceInitializations)
            {
                serviceInitialization.Initialization();
            }
        }
#if UNITY_EDITOR
        void GetServiceInitialization()
        {
            serviceInitializations = GetComponents<ServiceInitialization>();
        }
#endif
    }
}