using UnityEngine;

namespace VirtueSky.Variables
{
    [CreateAssetMenu(menuName = "Sunflower/Scriptable/Variables/Vector3", fileName = "vector3_variable")]
    public class Vector3Variable : BaseVariable<Vector3>
    {
        [SerializeField] private Vector3 value = Vector3.one;
        public override Vector3 Value { get => value; set => base.Value = value; }
    }
}