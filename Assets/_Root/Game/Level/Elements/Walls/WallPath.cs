using DG.Tweening;
using UnityEngine;
using VirtueSky.Core;

public class WallPath : Wall
{
    [SerializeField] private BlockCollection blockCollection;
    [SerializeField] private float timeMove = 0.5f;
    [SerializeField] private float distanceMove = -0.5f;

    private float _yAxisModelDefault = 0f;
    private Tween _tweenMove;
    public override void  Start()
    {
        base.Start();
        _yAxisModelDefault = model.transform.localPosition.y;
        OnSelectBlock(false);
        if(blockCollection && eColorType != EColorType.NONE) 
        {
            blockCollection.OnAdd += OnAddBlock;
            foreach(var block in blockCollection.List) 
            {
                if(block.EColorType == eColorType) 
                {
                    block.ActionSelect += OnSelectBlock;
                    foreach(var blockCollider in block.ListColliders) 
                    {
                        foreach (var collider in ListColliders)
                        {
                            Physics.IgnoreCollision(collider, blockCollider);
                            collider.gameObject.transform.SetParent(transform);
                        }
                    }
                }
            }
        }
    }
    void OnAddBlock(BlockColor block) 
    {
        App.Delay(0.15f, () =>
        {
            if (block.EColorType == eColorType)
            {
                block.ActionSelect += OnSelectBlock;
                foreach (var blockCollider in block.ListColliders)
                {
                    foreach (var collider in ListColliders)
                    {
                        Physics.IgnoreCollision(collider, blockCollider);
                        collider.gameObject.transform.SetParent(transform);
                    }
                }
            }
        });
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
        if (blockCollection && eColorType != EColorType.NONE)
        {
            blockCollection.OnAdd -= OnAddBlock;
            foreach (var block in blockCollection.List)
            {
                if (block.EColorType == eColorType)
                {
                    block.ActionSelect -= OnSelectBlock;
                }
            }
        }
    }
}