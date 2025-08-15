using System;
using System.Collections.Generic;
using UnityEngine;
using VirtueSky.Events;

[CreateAssetMenu(menuName = "Event Custom/CreateResourcesEvent", fileName = "create_resources_event")]
public class CreateResourcesEvent : BaseEvent<(Camera camera, List<ResourcePrefab> listObject, Action actionStart, Action actionComplete)>
{
}