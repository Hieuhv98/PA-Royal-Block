using UnityEngine;

public class Plane : ObjectBase
{
    public void SetSize(Vector3 size) { transform.localScale = new Vector3(size.x, 1, size.y); }
}