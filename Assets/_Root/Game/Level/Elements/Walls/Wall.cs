using UnityEngine;

public class Wall : ObjectBase
{
    [SerializeField] private bool isAutoSize;
    [SerializeField] private Vector3 sizeOrigin = Vector3.one;
    protected void AutoSize()
    {
        if (isAutoSize)
        {
            var height = size.z;
            var render = Renderer == null ? model.GetComponentInChildren<Renderer>() : Renderer;
            switch (render.transform.localEulerAngles.y)
            {
                case 90:
                    height = size.x;
                    break;
                case 270:
                    height = size.x;
                    break;
                default:
                    height = size.z;
                    break;
            }
            render.transform.localScale = new Vector3(render.transform.localScale.x, render.transform.localScale.y, height / sizeOrigin.z);
        }
    }

#if UNITY_EDITOR
    protected override void OnChangeInEditor()
    {
        base.OnChangeInEditor();
        AutoSize();
    }
#endif
}