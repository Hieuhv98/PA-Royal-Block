using DG.Tweening;
using UnityEngine;
using VirtueSky.Core;

public class WallPath : Wall
{
    [SerializeField] private float timeMove = 0.5f;
    [SerializeField] private float distanceMove = -0.5f;

    private float _yAxisModelDefault = 0f;
    private Tween _tweenMove;
    public override void  Start()
    {
        base.Start();
        _yAxisModelDefault = model.transform.localPosition.y;
        
    }
   
    void OnSelectBlock(bool isSelect) 
    {
        var posY = isSelect ? _yAxisModelDefault + distanceMove : _yAxisModelDefault;
        MoveY(posY);
    }
    public void MoveY(float y) 
    {
        _tweenMove.Kill();
        _tweenMove = model.transform.DOLocalMoveY(y, timeMove);
    }
    private void OnDestroy()
    {
       
    }
}