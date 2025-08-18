using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Events;

[Serializable]
public class ResourceEventData
{
    public Camera camera;
    public List<ResourcePrefab> listObject;
    public Action actionStart;
    public Action actionComplete;

    public ResourceEventData(Camera camera, List<ResourcePrefab> listObject, Action actionStart, Action actionComplete)
    {
        this.camera = camera;
        this.listObject = listObject;
        this.actionStart = actionStart;
        this.actionComplete = actionComplete;
    }
}

[CreateAssetMenu(menuName = "Event Custom/CreateResourcesEvent", fileName = "create_resources_event")]
public class CreateResourcesEvent : BaseEvent<ResourceEventData>
{
}