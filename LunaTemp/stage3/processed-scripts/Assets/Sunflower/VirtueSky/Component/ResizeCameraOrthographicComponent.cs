using UnityEngine;
using VirtueSky.Core;

namespace VirtueSky.Component
{
    public class ResizeCameraOrthographicComponent : CacheComponent<Camera>
    {
        [SerializeField] private Vector2 ratio = new Vector2(9, 16);

        protected override void Awake()
        {
            base.Awake();
            float sizeStart = component.orthographicSize;
            float size = component.orthographicSize * ratio.x / (ratio.y * component.aspect);
            if (size > sizeStart)
                component.orthographicSize = size;
        }
    }
}