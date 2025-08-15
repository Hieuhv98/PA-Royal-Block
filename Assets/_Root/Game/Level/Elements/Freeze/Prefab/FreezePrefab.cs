using TMPro;
using UnityEngine;

public class FreezePrefab : MonoBehaviour
{
    [SerializeField] private TextMeshPro txtCount;
    [SerializeField] private float yAxis = 0f;

    public void SetUp(Vector3 position, int count, float textSize) 
    {
        transform.position = new Vector3(position.x, yAxis, position.z);
        txtCount.fontSize = textSize;
        UpdateUI(count);
    }
    public void UpdateUI(int count) { txtCount.text = $"{count}"; }
}