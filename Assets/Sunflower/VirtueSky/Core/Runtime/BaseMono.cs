using UnityEngine;

namespace VirtueSky.Core
{
    public class BaseMono : MonoBehaviour, IEntity
    {
        public virtual void OnEnable()
        {
        }

        public virtual void OnDisable()
        {
        }


        public virtual void Initialize()
        {
        }
        public virtual void Tick()
        {
        }

        public virtual void LateTick()
        {
        }

        public virtual void FixedTick()
        {
        }

        public virtual void CleanUp()
        {
        }
        public void Update()
        {
            Tick();
        }

        public void FixedUpdate()
        {
            FixedTick();
        }

        public void LateUpdate()
        {
            LateTick();
        }

        void SubTick()
        {
            App.SubTick(this);
            App.SubLateTick(this);
            App.SubFixedTick(this);
        }

        void UnSubTick()
        {
            App.UnSubTick(this);
            App.UnSubLateTick(this);
            App.UnSubFixedTick(this);
        }
    }
}