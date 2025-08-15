using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Core;

public class GateSwitcher : BaseMono
{
    [SerializeField] private List<Renderer> listRender = new List<Renderer>();

    private Material _materialDefault, _materialTarget;
    private Renderer _rendererTarget;
    private bool _isSwitched = false;
    private bool _isCanSwitched = true;
    private Action<bool> _onSwith;

    public Material MaterialDefault => _isSwitched ? _materialTarget : _materialDefault;
    public Material MaterialTarget => _isSwitched ? _materialDefault : _materialTarget;
    public void SetUp(Renderer renderTarget, Action<bool> onSwith = null) 
    {
        _rendererTarget = renderTarget;
        _onSwith = onSwith;
        _materialDefault = listRender[0].material;
        _materialTarget = renderTarget.material;
        _isSwitched = false;
        _isCanSwitched = true;
    }
    public void SetMaterial(Material material) { foreach(var render in listRender) if(render) render.material = material; }
    public void Switch(bool isCanSwitch = true) 
    {
        if (_isCanSwitched) 
        {
            _isSwitched = !_isSwitched;
            _rendererTarget.material = MaterialTarget;
            var material = isCanSwitch ? MaterialDefault : MaterialTarget;
            SetMaterial(material);
            _onSwith?.Invoke(_isSwitched);
            if (!isCanSwitch && _isCanSwitched) _isCanSwitched = false;
        }
    }
    public override void OnDisable()
    {
        base.OnDisable();
        _onSwith = null;
    }
} 