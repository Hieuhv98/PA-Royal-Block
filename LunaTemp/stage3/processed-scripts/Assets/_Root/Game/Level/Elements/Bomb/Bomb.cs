using DG.Tweening;
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using VirtueSky.Audio;
using VirtueSky.Core;
using VirtueSky.Variables;

public class Bomb : BaseMono
{
    [SerializeField] GameObject group;
    [SerializeField] GameObject active;
    [SerializeField] GameObject deactive;

    [Header("Explosion")]
    [SerializeField] float timeExplosion = 60f;
    [SerializeField] float timeRemainToScale = 5f;
    [SerializeField] TextMeshPro txtTimeExplosion;
    [SerializeField] string stringFormatTime = "{0}";
    [SerializeField] float scale = 1.15f;
    [SerializeField] float scaleOutTime = 0.25f;
    [SerializeField] float scaleInTime = 0.25f;
    [SerializeField] Ease scaleEase;
    [SerializeField] ParticleSystem fxExplosion;

    [Header("Audio")]
    [SerializeField] private PlaySfxEvent playSfxEvent;
    [SerializeField] private SoundData soundWarring;
    [SerializeField] private SoundData soundExplosion;

    [SerializeField] private BooleanVariable isPauseGame;

    bool _isActive = false;
    bool _isAlive = true;
    int _orderLayer = 1;
    Action _actionExplosion;

    public bool IsActive => _isActive;
    public bool IsAlive => _isAlive;
    public override void OnEnable()
    {
        base.OnEnable();
        transform.localEulerAngles = new Vector3(transform.parent.localEulerAngles.x, -transform.parent.localEulerAngles.y, transform.parent.localEulerAngles.z);
    }
    public void SetUp(Action actionExplosion = null)
    {
        _actionExplosion = actionExplosion;
        _scaleDefault = group.transform.localScale;
        Default();
    }

    public void UpdateStatus(bool isActive)
    {
        active.SetActive(isActive);
        deactive.SetActive(!isActive);
        txtTimeExplosion.gameObject.SetActive(isActive);
    }
    public void UpdateStatusCurrent() { UpdateStatus(_isActive); }

    public void Active()
    {
        if (_isActive) return;
        _isActive = true;
        UpdateStatusCurrent();
        StartExplosion();
    }
    public void Default()
    {
        group.SetActive(true);
        _isActive = false;
        _isAlive = true;
        UpdateStatusCurrent();
    }
    public void DoDestroy()
    {
        _isAlive = false;
        group.SetActive(false);
        Clear();
    }
    public override void OnDisable()
    {
        base.OnDisable();
        Clear();
    }

    #region explosion
    void OnValidate() 
    {
        txtTimeExplosion.text = string.Format(stringFormatTime, timeExplosion);
    }
    Coroutine _corountineExplosion;
    float _timeExplosionCurrent = 0;
    Vector3 _scaleDefault = Vector3.one;

    public void StartExplosion()
    {
        _timeExplosionCurrent = timeExplosion;
        _corountineExplosion = StartCoroutine(IEExplosion());
    }
    IEnumerator IEExplosion()
    {
        while (_isActive && _timeExplosionCurrent > 0)
        {
            if (!isPauseGame.Value) 
            {
                txtTimeExplosion.text = string.Format(stringFormatTime, _timeExplosionCurrent);
                if (_timeExplosionCurrent <= timeRemainToScale) Scale();
                yield return new WaitForSeconds(1);
                _timeExplosionCurrent--;
            }

            yield return null;
        }

        Explosion();
    }
    void Scale()
    {
        if(soundWarring) playSfxEvent?.Raise(soundWarring);
        group.transform.DOScale(_scaleDefault * scale, scaleOutTime).SetEase(scaleEase).OnComplete(() =>
        {
            group.transform.DOScale(_scaleDefault, scaleInTime).SetEase(scaleEase);
        });
    }
    void Explosion()
    {
        if(soundExplosion) playSfxEvent?.Raise(soundExplosion);
        if (fxExplosion) fxExplosion.Play();

        _actionExplosion?.Invoke();
        DoDestroy();
    }
    public void Clear()
    {
        if (_corountineExplosion != null) StopCoroutine(_corountineExplosion);
        _corountineExplosion = null;

        DOTween.KillAll(group);
    }
    #endregion
}