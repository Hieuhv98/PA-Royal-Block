using System;
using UnityEngine;
using VirtueSky.DataStorage;
using VirtueSky.Events;

namespace VirtueSky.Variables
{
    public class BaseVariable<TType> : BaseEvent<TType>, IVariable<TType>, ISerializationCallbackReceiver, IGuidVariable
    {
        [SerializeField]
        private TypeId typeId;

        [SerializeField]
        protected string guid;

        [SerializeField]
        private string customId;


        [SerializeField]
        protected TType initializeValue;

        [SerializeField]
        protected bool isSetData;

        [SerializeField]
        protected bool isSaveData;

        [SerializeField]
        protected bool isRaiseEvent;

        [NonSerialized] protected TType runtimeValue;
#if UNITY_EDITOR
        [SerializeField]
        protected TType currentValue;
#endif
        public TType InitializeValue => initializeValue;

        public string Guid
        {
            get => guid;
            set => guid = value;
        }

        public string CustomId
        {
            get => customId;
            set => customId = value;
        }

        public string Id
        {
            get
            {
                if (typeId == TypeId.Guid) return guid;
                return customId;
            }
        }

        private void OnEnable()
        {
#if UNITY_EDITOR
            currentValue = Value;
#endif
        }

        public virtual TType Value
        {
            get => isSetData ? GameData.Get(Id, initializeValue) : runtimeValue;
            set
            {
                if (isSetData)
                {
                    GameData.Set(Id, value);
                    if (isSaveData)
                    {
                        GameData.Save();
                    }
                }
                else
                {
                    runtimeValue = value;
                }
#if UNITY_EDITOR
                currentValue = value;
#endif
                if (isRaiseEvent)
                {
                    Raise(value);
                }
            }
        }

        public void OnBeforeSerialize()
        {
        }

        public void OnAfterDeserialize()
        {
            runtimeValue = initializeValue;
        }

        public void ResetValue()
        {
            Value = initializeValue;
        }

        public override string ToString()
        {
            return Value.ToString();
        }

        private bool IsShowGuid => isSetData && typeId == TypeId.Guid;
        private bool IsShowCustomId => isSetData && typeId == TypeId.CustomId;
    }

    public enum TypeId
    {
        Guid,
        CustomId
    }
}