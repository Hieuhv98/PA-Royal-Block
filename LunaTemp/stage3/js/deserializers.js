var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.JointSpring' )
  var i989 = data
  i988.spring = i989[0]
  i988.damper = i989[1]
  i988.targetPosition = i989[2]
  return i988
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.JointMotor' )
  var i991 = data
  i990.m_TargetVelocity = i991[0]
  i990.m_Force = i991[1]
  i990.m_FreeSpin = i991[2]
  return i990
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.JointLimits' )
  var i993 = data
  i992.m_Min = i993[0]
  i992.m_Max = i993[1]
  i992.m_Bounciness = i993[2]
  i992.m_BounceMinVelocity = i993[3]
  i992.m_ContactDistance = i993[4]
  i992.minBounce = i993[5]
  i992.maxBounce = i993[6]
  return i992
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.JointDrive' )
  var i995 = data
  i994.m_PositionSpring = i995[0]
  i994.m_PositionDamper = i995[1]
  i994.m_MaximumForce = i995[2]
  i994.m_UseAcceleration = i995[3]
  return i994
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i997 = data
  i996.m_Spring = i997[0]
  i996.m_Damper = i997[1]
  return i996
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i999 = data
  i998.m_Limit = i999[0]
  i998.m_Bounciness = i999[1]
  i998.m_ContactDistance = i999[2]
  return i998
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1001 = data
  i1000.m_ExtremumSlip = i1001[0]
  i1000.m_ExtremumValue = i1001[1]
  i1000.m_AsymptoteSlip = i1001[2]
  i1000.m_AsymptoteValue = i1001[3]
  i1000.m_Stiffness = i1001[4]
  return i1000
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1003 = data
  i1002.m_LowerAngle = i1003[0]
  i1002.m_UpperAngle = i1003[1]
  return i1002
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1005 = data
  i1004.m_MotorSpeed = i1005[0]
  i1004.m_MaximumMotorTorque = i1005[1]
  return i1004
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1007 = data
  i1006.m_DampingRatio = i1007[0]
  i1006.m_Frequency = i1007[1]
  i1006.m_Angle = i1007[2]
  return i1006
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1009 = data
  i1008.m_LowerTranslation = i1009[0]
  i1008.m_UpperTranslation = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.halfPrecision = !!i1011[1]
  i1010.useUInt32IndexFormat = !!i1011[2]
  i1010.vertexCount = i1011[3]
  i1010.aabb = i1011[4]
  var i1013 = i1011[5]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( !!i1013[i + 0] );
  }
  i1010.streams = i1012
  i1010.vertices = i1011[6]
  var i1015 = i1011[7]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1015[i + 0]) );
  }
  i1010.subMeshes = i1014
  var i1017 = i1011[8]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 16) {
    i1016.push( new pc.Mat4().setData(i1017[i + 0], i1017[i + 1], i1017[i + 2], i1017[i + 3],  i1017[i + 4], i1017[i + 5], i1017[i + 6], i1017[i + 7],  i1017[i + 8], i1017[i + 9], i1017[i + 10], i1017[i + 11],  i1017[i + 12], i1017[i + 13], i1017[i + 14], i1017[i + 15]) );
  }
  i1010.bindposes = i1016
  var i1019 = i1011[9]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1019[i + 0]) );
  }
  i1010.blendShapes = i1018
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1025 = data
  i1024.triangles = i1025[0]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1031 = data
  i1030.name = i1031[0]
  var i1033 = i1031[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1033[i + 0]) );
  }
  i1030.frames = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.width = i1035[1]
  i1034.height = i1035[2]
  i1034.mipmapCount = i1035[3]
  i1034.anisoLevel = i1035[4]
  i1034.filterMode = i1035[5]
  i1034.hdr = !!i1035[6]
  i1034.format = i1035[7]
  i1034.wrapMode = i1035[8]
  i1034.alphaIsTransparency = !!i1035[9]
  i1034.alphaSource = i1035[10]
  i1034.graphicsFormat = i1035[11]
  i1034.sRGBTexture = !!i1035[12]
  i1034.desiredColorSpace = i1035[13]
  i1034.wrapU = i1035[14]
  i1034.wrapV = i1035[15]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1037 = data
  i1036.pivot = new pc.Vec2( i1037[0], i1037[1] )
  i1036.anchorMin = new pc.Vec2( i1037[2], i1037[3] )
  i1036.anchorMax = new pc.Vec2( i1037[4], i1037[5] )
  i1036.sizeDelta = new pc.Vec2( i1037[6], i1037[7] )
  i1036.anchoredPosition3D = new pc.Vec3( i1037[8], i1037[9], i1037[10] )
  i1036.rotation = new pc.Quat(i1037[11], i1037[12], i1037[13], i1037[14])
  i1036.scale = new pc.Vec3( i1037[15], i1037[16], i1037[17] )
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1039 = data
  i1038.planeDistance = i1039[0]
  i1038.referencePixelsPerUnit = i1039[1]
  i1038.isFallbackOverlay = !!i1039[2]
  i1038.renderMode = i1039[3]
  i1038.renderOrder = i1039[4]
  i1038.sortingLayerName = i1039[5]
  i1038.sortingOrder = i1039[6]
  i1038.scaleFactor = i1039[7]
  request.r(i1039[8], i1039[9], 0, i1038, 'worldCamera')
  i1038.overrideSorting = !!i1039[10]
  i1038.pixelPerfect = !!i1039[11]
  i1038.targetDisplay = i1039[12]
  i1038.overridePixelPerfect = !!i1039[13]
  i1038.enabled = !!i1039[14]
  return i1038
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1041 = data
  i1040.m_IgnoreReversedGraphics = !!i1041[0]
  i1040.m_BlockingObjects = i1041[1]
  i1040.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1041[2] )
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1043 = data
  i1042.m_Alpha = i1043[0]
  i1042.m_Interactable = !!i1043[1]
  i1042.m_BlocksRaycasts = !!i1043[2]
  i1042.m_IgnoreParentGroups = !!i1043[3]
  i1042.enabled = !!i1043[4]
  return i1042
}

Deserializers["TheBeginning.UI.GameplayPopup"] = function (request, data, root) {
  var i1044 = root || request.c( 'TheBeginning.UI.GameplayPopup' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'levelText')
  i1044.stringFormatLevel = i1045[2]
  request.r(i1045[3], i1045[4], 0, i1044, 'levelTypeText')
  request.r(i1045[5], i1045[6], 0, i1044, 'canvasGroup')
  request.r(i1045[7], i1045[8], 0, i1044, 'canvas')
  i1044.useAnimation = !!i1045[9]
  i1044.isAutoShow = !!i1045[10]
  i1044.isNotSortingLayer = !!i1045[11]
  i1044.useShowAnimation = !!i1045[12]
  i1044.showAnimationType = i1045[13]
  i1044.durationShowPopup = i1045[14]
  i1044.useHideAnimation = !!i1045[15]
  i1044.hideAnimationType = i1045[16]
  i1044.durationHidePopup = i1045[17]
  i1044.ActionHide = request.d('System.Action', i1045[18], i1044.ActionHide)
  request.r(i1045[19], i1045[20], 0, i1044, 'levelTextNumber')
  request.r(i1045[21], i1045[22], 0, i1044, 'boardLevel')
  request.r(i1045[23], i1045[24], 0, i1044, 'boardLevelText')
  request.r(i1045[25], i1045[26], 0, i1044, 'replayIcon')
  request.r(i1045[27], i1045[28], 0, i1044, 'settingIcon')
  request.r(i1045[29], i1045[30], 0, i1044, 'levelModeData')
  request.r(i1045[31], i1045[32], 0, i1044, 'replayEvent')
  request.r(i1045[33], i1045[34], 0, i1044, 'callReturnHomeEvent')
  request.r(i1045[35], i1045[36], 0, i1044, 'callReplayLevelEvent')
  request.r(i1045[37], i1045[38], 0, i1044, 'nextLevelEvent')
  request.r(i1045[39], i1045[40], 0, i1044, 'backLevelEvent')
  request.r(i1045[41], i1045[42], 0, i1044, 'winLevelEvent')
  request.r(i1045[43], i1045[44], 0, i1044, 'loseLevelEvent')
  request.r(i1045[45], i1045[46], 0, i1044, 'isStartingLevel')
  request.r(i1045[47], i1045[48], 0, i1044, 'indexLevelVariable')
  request.r(i1045[49], i1045[50], 0, i1044, 'unlockWinStreakLevel')
  request.r(i1045[51], i1045[52], 0, i1044, 'isPlayingLevel')
  request.r(i1045[53], i1045[54], 0, i1044, 'playMusicEvent')
  request.r(i1045[55], i1045[56], 0, i1044, 'soundHardLevel')
  request.r(i1045[57], i1045[58], 0, i1044, 'musicInGame')
  request.r(i1045[59], i1045[60], 0, i1044, 'transHardLevel')
  i1044.transHardLevelAnim = i1045[61]
  request.r(i1045[62], i1045[63], 0, i1044, 'isBackToBuildTutorialPlaying')
  request.r(i1045[64], i1045[65], 0, i1044, 'tutorialUI')
  request.r(i1045[66], i1045[67], 0, i1044, 'btnBackHome')
  request.r(i1045[68], i1045[69], 0, i1044, 'onShowBoosterGuild')
  request.r(i1045[70], i1045[71], 0, i1044, 'groupUI')
  request.r(i1045[72], i1045[73], 0, i1044, 'showCTAButtonEvent')
  request.r(i1045[74], i1045[75], 0, i1044, 'ctaButton')
  request.r(i1045[76], i1045[77], 0, i1044, 'levelAdditionalTime')
  request.r(i1045[78], i1045[79], 0, i1044, 'addTimeIcon')
  request.r(i1045[80], i1045[81], 0, i1044, 'addTimeModel')
  request.r(i1045[82], i1045[83], 0, i1044, 'addTimeModelDefaultPos')
  request.r(i1045[84], i1045[85], 0, i1044, 'addTimeModelToPos')
  request.r(i1045[86], i1045[87], 0, i1044, 'addTimeText')
  i1044.stringFormatAddTimeText = i1045[88]
  i1044.timeDelayMove = i1045[89]
  i1044.timeMove = i1045[90]
  i1044.scaleDefault = i1045[91]
  i1044.scaleToEnd = i1045[92]
  i1044.easeMove = i1045[93]
  request.r(i1045[94], i1045[95], 0, i1044, 'preStartLevelEvent')
  request.r(i1045[96], i1045[97], 0, i1044, 'addTimePlayEvent')
  request.r(i1045[98], i1045[99], 0, i1044, 'background')
  request.r(i1045[100], i1045[101], 0, i1044, 'container')
  i1044.showMovePopup = i1045[102]
  i1044.offsetShowMove = i1045[103]
  i1044.scaleFromShow = new pc.Vec3( i1045[104], i1045[105], i1045[106] )
  i1044.eulerAngleShowFrom = new pc.Vec3( i1045[107], i1045[108], i1045[109] )
  request.r(i1045[110], i1045[111], 0, i1044, 'pointShowPos')
  i1044.hideMovePopup = i1045[112]
  i1044.offsetHideMove = i1045[113]
  i1044.scaleFromHide = new pc.Vec3( i1045[114], i1045[115], i1045[116] )
  request.r(i1045[117], i1045[118], 0, i1044, 'pointHidePos')
  request.r(i1045[119], i1045[120], 0, i1044, 'playSfxEvent')
  request.r(i1045[121], i1045[122], 0, i1044, 'soundOpen')
  request.r(i1045[123], i1045[124], 0, i1044, 'soundClose')
  return i1044
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1046 = root || request.c( 'System.Action' )
  var i1047 = data
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1049 = data
  i1048.cullTransparentMesh = !!i1049[0]
  return i1048
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.Image' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'm_Sprite')
  i1050.m_Type = i1051[2]
  i1050.m_PreserveAspect = !!i1051[3]
  i1050.m_FillCenter = !!i1051[4]
  i1050.m_FillMethod = i1051[5]
  i1050.m_FillAmount = i1051[6]
  i1050.m_FillClockwise = !!i1051[7]
  i1050.m_FillOrigin = i1051[8]
  i1050.m_UseSpriteMesh = !!i1051[9]
  i1050.m_PixelsPerUnitMultiplier = i1051[10]
  i1050.m_Maskable = !!i1051[11]
  request.r(i1051[12], i1051[13], 0, i1050, 'm_Material')
  i1050.m_Color = new pc.Color(i1051[14], i1051[15], i1051[16], i1051[17])
  i1050.m_RaycastTarget = !!i1051[18]
  i1050.m_RaycastPadding = new pc.Vec4( i1051[19], i1051[20], i1051[21], i1051[22] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.tagId = i1053[1]
  i1052.enabled = !!i1053[2]
  i1052.isStatic = !!i1053[3]
  i1052.layer = i1053[4]
  return i1052
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1054 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'skeletonDataAsset')
  request.r(i1055[2], i1055[3], 0, i1054, 'additiveMaterial')
  request.r(i1055[4], i1055[5], 0, i1054, 'multiplyMaterial')
  request.r(i1055[6], i1055[7], 0, i1054, 'screenMaterial')
  i1054.initialSkinName = i1055[8]
  i1054.initialFlipX = !!i1055[9]
  i1054.initialFlipY = !!i1055[10]
  i1054.startingAnimation = i1055[11]
  i1054.startingLoop = !!i1055[12]
  i1054.timeScale = i1055[13]
  i1054.freeze = !!i1055[14]
  i1054.layoutScaleMode = i1055[15]
  i1054.updateWhenInvisible = i1055[16]
  i1054.allowMultipleCanvasRenderers = !!i1055[17]
  var i1057 = i1055[18]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1054.canvasRenderers = i1056
  i1054.enableSeparatorSlots = !!i1055[19]
  i1054.updateSeparatorPartLocation = !!i1055[20]
  i1054.updateSeparatorPartScale = !!i1055[21]
  i1054.disableMeshAssignmentOnOverride = !!i1055[22]
  i1054.referenceSize = new pc.Vec2( i1055[23], i1055[24] )
  i1054.referenceScale = i1055[25]
  i1054.rectTransformSize = new pc.Vec2( i1055[26], i1055[27] )
  i1054.editReferenceRect = !!i1055[28]
  var i1059 = i1055[29]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.separatorSlotNames = i1058
  var i1061 = i1055[30]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 1, i1060, '')
  }
  i1054.separatorParts = i1060
  i1054.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1055[31], i1054.meshGenerator)
  i1054.updateTiming = i1055[32]
  i1054.unscaledTime = !!i1055[33]
  i1054.m_Maskable = !!i1055[34]
  request.r(i1055[35], i1055[36], 0, i1054, 'm_Material')
  i1054.m_Color = new pc.Color(i1055[37], i1055[38], i1055[39], i1055[40])
  i1054.m_RaycastTarget = !!i1055[41]
  i1054.m_RaycastPadding = new pc.Vec4( i1055[42], i1055[43], i1055[44], i1055[45] )
  return i1054
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1068 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1069 = data
  i1068.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1069[0], i1068.settings)
  return i1068
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1071 = data
  i1070.useClipping = !!i1071[0]
  i1070.zSpacing = i1071[1]
  i1070.pmaVertexColors = !!i1071[2]
  i1070.tintBlack = !!i1071[3]
  i1070.canvasGroupTintBlack = !!i1071[4]
  i1070.calculateTangents = !!i1071[5]
  i1070.addNormals = !!i1071[6]
  i1070.immutableTriangles = !!i1071[7]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1073 = data
  i1072.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1073[0], i1072.main)
  i1072.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1073[1], i1072.colorBySpeed)
  i1072.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1073[2], i1072.colorOverLifetime)
  i1072.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1073[3], i1072.emission)
  i1072.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1073[4], i1072.rotationBySpeed)
  i1072.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1073[5], i1072.rotationOverLifetime)
  i1072.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1073[6], i1072.shape)
  i1072.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1073[7], i1072.sizeBySpeed)
  i1072.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1073[8], i1072.sizeOverLifetime)
  i1072.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1073[9], i1072.textureSheetAnimation)
  i1072.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1073[10], i1072.velocityOverLifetime)
  i1072.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1073[11], i1072.noise)
  i1072.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1073[12], i1072.inheritVelocity)
  i1072.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1073[13], i1072.forceOverLifetime)
  i1072.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1073[14], i1072.limitVelocityOverLifetime)
  i1072.useAutoRandomSeed = !!i1073[15]
  i1072.randomSeed = i1073[16]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1074 = root || new pc.ParticleSystemMain()
  var i1075 = data
  i1074.duration = i1075[0]
  i1074.loop = !!i1075[1]
  i1074.prewarm = !!i1075[2]
  i1074.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[3], i1074.startDelay)
  i1074.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[4], i1074.startLifetime)
  i1074.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[5], i1074.startSpeed)
  i1074.startSize3D = !!i1075[6]
  i1074.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[7], i1074.startSizeX)
  i1074.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[8], i1074.startSizeY)
  i1074.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[9], i1074.startSizeZ)
  i1074.startRotation3D = !!i1075[10]
  i1074.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[11], i1074.startRotationX)
  i1074.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[12], i1074.startRotationY)
  i1074.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[13], i1074.startRotationZ)
  i1074.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1075[14], i1074.startColor)
  i1074.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[15], i1074.gravityModifier)
  i1074.simulationSpace = i1075[16]
  request.r(i1075[17], i1075[18], 0, i1074, 'customSimulationSpace')
  i1074.simulationSpeed = i1075[19]
  i1074.useUnscaledTime = !!i1075[20]
  i1074.scalingMode = i1075[21]
  i1074.playOnAwake = !!i1075[22]
  i1074.maxParticles = i1075[23]
  i1074.emitterVelocityMode = i1075[24]
  i1074.stopAction = i1075[25]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1076 = root || new pc.MinMaxCurve()
  var i1077 = data
  i1076.mode = i1077[0]
  i1076.curveMin = new pc.AnimationCurve( { keys_flow: i1077[1] } )
  i1076.curveMax = new pc.AnimationCurve( { keys_flow: i1077[2] } )
  i1076.curveMultiplier = i1077[3]
  i1076.constantMin = i1077[4]
  i1076.constantMax = i1077[5]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1078 = root || new pc.MinMaxGradient()
  var i1079 = data
  i1078.mode = i1079[0]
  i1078.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1079[1], i1078.gradientMin)
  i1078.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1079[2], i1078.gradientMax)
  i1078.colorMin = new pc.Color(i1079[3], i1079[4], i1079[5], i1079[6])
  i1078.colorMax = new pc.Color(i1079[7], i1079[8], i1079[9], i1079[10])
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1081 = data
  i1080.mode = i1081[0]
  var i1083 = i1081[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1083[i + 0]) );
  }
  i1080.colorKeys = i1082
  var i1085 = i1081[2]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1085[i + 0]) );
  }
  i1080.alphaKeys = i1084
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1086 = root || new pc.ParticleSystemColorBySpeed()
  var i1087 = data
  i1086.enabled = !!i1087[0]
  i1086.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1087[1], i1086.color)
  i1086.range = new pc.Vec2( i1087[2], i1087[3] )
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1091 = data
  i1090.color = new pc.Color(i1091[0], i1091[1], i1091[2], i1091[3])
  i1090.time = i1091[4]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1095 = data
  i1094.alpha = i1095[0]
  i1094.time = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1096 = root || new pc.ParticleSystemColorOverLifetime()
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1097[1], i1096.color)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1098 = root || new pc.ParticleSystemEmitter()
  var i1099 = data
  i1098.enabled = !!i1099[0]
  i1098.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1099[1], i1098.rateOverTime)
  i1098.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1099[2], i1098.rateOverDistance)
  var i1101 = i1099[3]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1101[i + 0]) );
  }
  i1098.bursts = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1104 = root || new pc.ParticleSystemBurst()
  var i1105 = data
  i1104.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1105[0], i1104.count)
  i1104.cycleCount = i1105[1]
  i1104.minCount = i1105[2]
  i1104.maxCount = i1105[3]
  i1104.repeatInterval = i1105[4]
  i1104.time = i1105[5]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1106 = root || new pc.ParticleSystemRotationBySpeed()
  var i1107 = data
  i1106.enabled = !!i1107[0]
  i1106.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1107[1], i1106.x)
  i1106.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1107[2], i1106.y)
  i1106.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1107[3], i1106.z)
  i1106.separateAxes = !!i1107[4]
  i1106.range = new pc.Vec2( i1107[5], i1107[6] )
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1108 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1109 = data
  i1108.enabled = !!i1109[0]
  i1108.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1109[1], i1108.x)
  i1108.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1109[2], i1108.y)
  i1108.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1109[3], i1108.z)
  i1108.separateAxes = !!i1109[4]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1110 = root || new pc.ParticleSystemShape()
  var i1111 = data
  i1110.enabled = !!i1111[0]
  i1110.shapeType = i1111[1]
  i1110.randomDirectionAmount = i1111[2]
  i1110.sphericalDirectionAmount = i1111[3]
  i1110.randomPositionAmount = i1111[4]
  i1110.alignToDirection = !!i1111[5]
  i1110.radius = i1111[6]
  i1110.radiusMode = i1111[7]
  i1110.radiusSpread = i1111[8]
  i1110.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1111[9], i1110.radiusSpeed)
  i1110.radiusThickness = i1111[10]
  i1110.angle = i1111[11]
  i1110.length = i1111[12]
  i1110.boxThickness = new pc.Vec3( i1111[13], i1111[14], i1111[15] )
  i1110.meshShapeType = i1111[16]
  request.r(i1111[17], i1111[18], 0, i1110, 'mesh')
  request.r(i1111[19], i1111[20], 0, i1110, 'meshRenderer')
  request.r(i1111[21], i1111[22], 0, i1110, 'skinnedMeshRenderer')
  i1110.useMeshMaterialIndex = !!i1111[23]
  i1110.meshMaterialIndex = i1111[24]
  i1110.useMeshColors = !!i1111[25]
  i1110.normalOffset = i1111[26]
  i1110.arc = i1111[27]
  i1110.arcMode = i1111[28]
  i1110.arcSpread = i1111[29]
  i1110.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1111[30], i1110.arcSpeed)
  i1110.donutRadius = i1111[31]
  i1110.position = new pc.Vec3( i1111[32], i1111[33], i1111[34] )
  i1110.rotation = new pc.Vec3( i1111[35], i1111[36], i1111[37] )
  i1110.scale = new pc.Vec3( i1111[38], i1111[39], i1111[40] )
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1112 = root || new pc.ParticleSystemSizeBySpeed()
  var i1113 = data
  i1112.enabled = !!i1113[0]
  i1112.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1113[1], i1112.x)
  i1112.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1113[2], i1112.y)
  i1112.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1113[3], i1112.z)
  i1112.separateAxes = !!i1113[4]
  i1112.range = new pc.Vec2( i1113[5], i1113[6] )
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1114 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1115 = data
  i1114.enabled = !!i1115[0]
  i1114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1115[1], i1114.x)
  i1114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1115[2], i1114.y)
  i1114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1115[3], i1114.z)
  i1114.separateAxes = !!i1115[4]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1116 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.mode = i1117[1]
  i1116.animation = i1117[2]
  i1116.numTilesX = i1117[3]
  i1116.numTilesY = i1117[4]
  i1116.useRandomRow = !!i1117[5]
  i1116.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1117[6], i1116.frameOverTime)
  i1116.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1117[7], i1116.startFrame)
  i1116.cycleCount = i1117[8]
  i1116.rowIndex = i1117[9]
  i1116.flipU = i1117[10]
  i1116.flipV = i1117[11]
  i1116.spriteCount = i1117[12]
  var i1119 = i1117[13]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1116.sprites = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1122 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1123 = data
  i1122.enabled = !!i1123[0]
  i1122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[1], i1122.x)
  i1122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[2], i1122.y)
  i1122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[3], i1122.z)
  i1122.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[4], i1122.radial)
  i1122.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[5], i1122.speedModifier)
  i1122.space = i1123[6]
  i1122.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[7], i1122.orbitalX)
  i1122.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[8], i1122.orbitalY)
  i1122.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[9], i1122.orbitalZ)
  i1122.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[10], i1122.orbitalOffsetX)
  i1122.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[11], i1122.orbitalOffsetY)
  i1122.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1123[12], i1122.orbitalOffsetZ)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1124 = root || new pc.ParticleSystemNoise()
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.separateAxes = !!i1125[1]
  i1124.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[2], i1124.strengthX)
  i1124.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[3], i1124.strengthY)
  i1124.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[4], i1124.strengthZ)
  i1124.frequency = i1125[5]
  i1124.damping = !!i1125[6]
  i1124.octaveCount = i1125[7]
  i1124.octaveMultiplier = i1125[8]
  i1124.octaveScale = i1125[9]
  i1124.quality = i1125[10]
  i1124.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[11], i1124.scrollSpeed)
  i1124.scrollSpeedMultiplier = i1125[12]
  i1124.remapEnabled = !!i1125[13]
  i1124.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[14], i1124.remapX)
  i1124.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[15], i1124.remapY)
  i1124.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[16], i1124.remapZ)
  i1124.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[17], i1124.positionAmount)
  i1124.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[18], i1124.rotationAmount)
  i1124.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1125[19], i1124.sizeAmount)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1126 = root || new pc.ParticleSystemInheritVelocity()
  var i1127 = data
  i1126.enabled = !!i1127[0]
  i1126.mode = i1127[1]
  i1126.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1127[2], i1126.curve)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1128 = root || new pc.ParticleSystemForceOverLifetime()
  var i1129 = data
  i1128.enabled = !!i1129[0]
  i1128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1129[1], i1128.x)
  i1128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1129[2], i1128.y)
  i1128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1129[3], i1128.z)
  i1128.space = i1129[4]
  i1128.randomized = !!i1129[5]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1130 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1131 = data
  i1130.enabled = !!i1131[0]
  i1130.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1131[1], i1130.limit)
  i1130.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1131[2], i1130.limitX)
  i1130.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1131[3], i1130.limitY)
  i1130.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1131[4], i1130.limitZ)
  i1130.dampen = i1131[5]
  i1130.separateAxes = !!i1131[6]
  i1130.space = i1131[7]
  i1130.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1131[8], i1130.drag)
  i1130.multiplyDragByParticleSize = !!i1131[9]
  i1130.multiplyDragByParticleVelocity = !!i1131[10]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'mesh')
  i1132.meshCount = i1133[2]
  i1132.activeVertexStreamsCount = i1133[3]
  i1132.alignment = i1133[4]
  i1132.renderMode = i1133[5]
  i1132.sortMode = i1133[6]
  i1132.lengthScale = i1133[7]
  i1132.velocityScale = i1133[8]
  i1132.cameraVelocityScale = i1133[9]
  i1132.normalDirection = i1133[10]
  i1132.sortingFudge = i1133[11]
  i1132.minParticleSize = i1133[12]
  i1132.maxParticleSize = i1133[13]
  i1132.pivot = new pc.Vec3( i1133[14], i1133[15], i1133[16] )
  request.r(i1133[17], i1133[18], 0, i1132, 'trailMaterial')
  i1132.applyActiveColorSpace = !!i1133[19]
  i1132.enabled = !!i1133[20]
  request.r(i1133[21], i1133[22], 0, i1132, 'sharedMaterial')
  var i1135 = i1133[23]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 2, i1134, '')
  }
  i1132.sharedMaterials = i1134
  i1132.receiveShadows = !!i1133[24]
  i1132.shadowCastingMode = i1133[25]
  i1132.sortingLayerID = i1133[26]
  i1132.sortingOrder = i1133[27]
  i1132.lightmapIndex = i1133[28]
  i1132.lightmapSceneIndex = i1133[29]
  i1132.lightmapScaleOffset = new pc.Vec4( i1133[30], i1133[31], i1133[32], i1133[33] )
  i1132.lightProbeUsage = i1133[34]
  i1132.reflectionProbeUsage = i1133[35]
  return i1132
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i1138 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i1139 = data
  i1138.m_IsTrail = !!i1139[0]
  i1138.m_IgnoreCanvasScaler = !!i1139[1]
  i1138.m_AbsoluteMode = !!i1139[2]
  i1138.m_Scale3D = new pc.Vec3( i1139[3], i1139[4], i1139[5] )
  var i1141 = i1139[6]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Coffee.UIExtensions.AnimatableProperty', i1141[i + 0]) );
  }
  i1138.m_AnimatableProperties = i1140
  var i1143 = i1139[7]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1138.m_Particles = i1142
  i1138.m_MeshSharing = i1139[8]
  i1138.m_GroupId = i1139[9]
  i1138.m_GroupMaxId = i1139[10]
  i1138.m_PositionMode = i1139[11]
  i1138.m_AutoScaling = !!i1139[12]
  i1138.m_AutoScalingMode = i1139[13]
  i1138.m_UseCustomView = !!i1139[14]
  i1138.m_CustomViewSize = i1139[15]
  i1138.m_Maskable = !!i1139[16]
  request.r(i1139[17], i1139[18], 0, i1138, 'm_Material')
  i1138.m_Color = new pc.Color(i1139[19], i1139[20], i1139[21], i1139[22])
  i1138.m_RaycastTarget = !!i1139[23]
  i1138.m_RaycastPadding = new pc.Vec4( i1139[24], i1139[25], i1139[26], i1139[27] )
  return i1138
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i1146 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i1147 = data
  i1146.m_Name = i1147[0]
  i1146.m_Type = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1151 = data
  i1150.position = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.scale = new pc.Vec3( i1151[3], i1151[4], i1151[5] )
  i1150.rotation = new pc.Quat(i1151[6], i1151[7], i1151[8], i1151[9])
  return i1150
}

Deserializers["VirtueSky.Component.SafeAreaComponent"] = function (request, data, root) {
  var i1152 = root || request.c( 'VirtueSky.Component.SafeAreaComponent' )
  var i1153 = data
  i1152.ConformX = !!i1153[0]
  i1152.ConformY = !!i1153[1]
  i1152.Logging = !!i1153[2]
  return i1152
}

Deserializers["CoinUpdater"] = function (request, data, root) {
  var i1154 = root || request.c( 'CoinUpdater' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'CurrencyAmountText')
  request.r(i1155[2], i1155[3], 0, i1154, 'iconCoin')
  request.r(i1155[4], i1155[5], 0, i1154, 'updateCoinEvent')
  request.r(i1155[6], i1155[7], 0, i1154, 'moveOneCoinDone')
  request.r(i1155[8], i1155[9], 0, i1154, 'moveAllCoinDone')
  request.r(i1155[10], i1155[11], 0, i1154, 'decreaseCoinEvent')
  request.r(i1155[12], i1155[13], 0, i1154, 'addTargetToCoinGenerateEvent')
  request.r(i1155[14], i1155[15], 0, i1154, 'removeTargetToCoinGenerateEvent')
  return i1154
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1157 = data
  i1156.m_hasFontAssetChanged = !!i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'm_baseMaterial')
  i1156.m_maskOffset = new pc.Vec4( i1157[3], i1157[4], i1157[5], i1157[6] )
  i1156.m_text = i1157[7]
  i1156.m_isRightToLeft = !!i1157[8]
  request.r(i1157[9], i1157[10], 0, i1156, 'm_fontAsset')
  request.r(i1157[11], i1157[12], 0, i1156, 'm_sharedMaterial')
  var i1159 = i1157[13]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1156.m_fontSharedMaterials = i1158
  request.r(i1157[14], i1157[15], 0, i1156, 'm_fontMaterial')
  var i1161 = i1157[16]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 2, i1160, '')
  }
  i1156.m_fontMaterials = i1160
  i1156.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1157[17], i1157[18], i1157[19], i1157[20])
  i1156.m_fontColor = new pc.Color(i1157[21], i1157[22], i1157[23], i1157[24])
  i1156.m_enableVertexGradient = !!i1157[25]
  i1156.m_colorMode = i1157[26]
  i1156.m_fontColorGradient = request.d('TMPro.VertexGradient', i1157[27], i1156.m_fontColorGradient)
  request.r(i1157[28], i1157[29], 0, i1156, 'm_fontColorGradientPreset')
  request.r(i1157[30], i1157[31], 0, i1156, 'm_spriteAsset')
  i1156.m_tintAllSprites = !!i1157[32]
  request.r(i1157[33], i1157[34], 0, i1156, 'm_StyleSheet')
  i1156.m_TextStyleHashCode = i1157[35]
  i1156.m_overrideHtmlColors = !!i1157[36]
  i1156.m_faceColor = UnityEngine.Color32.ConstructColor(i1157[37], i1157[38], i1157[39], i1157[40])
  i1156.m_fontSize = i1157[41]
  i1156.m_fontSizeBase = i1157[42]
  i1156.m_fontWeight = i1157[43]
  i1156.m_enableAutoSizing = !!i1157[44]
  i1156.m_fontSizeMin = i1157[45]
  i1156.m_fontSizeMax = i1157[46]
  i1156.m_fontStyle = i1157[47]
  i1156.m_HorizontalAlignment = i1157[48]
  i1156.m_VerticalAlignment = i1157[49]
  i1156.m_textAlignment = i1157[50]
  i1156.m_characterSpacing = i1157[51]
  i1156.m_wordSpacing = i1157[52]
  i1156.m_lineSpacing = i1157[53]
  i1156.m_lineSpacingMax = i1157[54]
  i1156.m_paragraphSpacing = i1157[55]
  i1156.m_charWidthMaxAdj = i1157[56]
  i1156.m_enableWordWrapping = !!i1157[57]
  i1156.m_wordWrappingRatios = i1157[58]
  i1156.m_overflowMode = i1157[59]
  request.r(i1157[60], i1157[61], 0, i1156, 'm_linkedTextComponent')
  request.r(i1157[62], i1157[63], 0, i1156, 'parentLinkedComponent')
  i1156.m_enableKerning = !!i1157[64]
  i1156.m_enableExtraPadding = !!i1157[65]
  i1156.checkPaddingRequired = !!i1157[66]
  i1156.m_isRichText = !!i1157[67]
  i1156.m_parseCtrlCharacters = !!i1157[68]
  i1156.m_isOrthographic = !!i1157[69]
  i1156.m_isCullingEnabled = !!i1157[70]
  i1156.m_horizontalMapping = i1157[71]
  i1156.m_verticalMapping = i1157[72]
  i1156.m_uvLineOffset = i1157[73]
  i1156.m_geometrySortingOrder = i1157[74]
  i1156.m_IsTextObjectScaleStatic = !!i1157[75]
  i1156.m_VertexBufferAutoSizeReduction = !!i1157[76]
  i1156.m_useMaxVisibleDescender = !!i1157[77]
  i1156.m_pageToDisplay = i1157[78]
  i1156.m_margin = new pc.Vec4( i1157[79], i1157[80], i1157[81], i1157[82] )
  i1156.m_isUsingLegacyAnimationComponent = !!i1157[83]
  i1156.m_isVolumetricText = !!i1157[84]
  i1156.m_Maskable = !!i1157[85]
  request.r(i1157[86], i1157[87], 0, i1156, 'm_Material')
  i1156.m_Color = new pc.Color(i1157[88], i1157[89], i1157[90], i1157[91])
  i1156.m_RaycastTarget = !!i1157[92]
  i1156.m_RaycastPadding = new pc.Vec4( i1157[93], i1157[94], i1157[95], i1157[96] )
  return i1156
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.VertexGradient' )
  var i1163 = data
  i1162.topLeft = new pc.Color(i1163[0], i1163[1], i1163[2], i1163[3])
  i1162.topRight = new pc.Color(i1163[4], i1163[5], i1163[6], i1163[7])
  i1162.bottomLeft = new pc.Color(i1163[8], i1163[9], i1163[10], i1163[11])
  i1162.bottomRight = new pc.Color(i1163[12], i1163[13], i1163[14], i1163[15])
  return i1162
}

Deserializers["KingUI"] = function (request, data, root) {
  var i1164 = root || request.c( 'KingUI' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'model')
  var i1167 = i1165[2]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(i1167[i + 0]);
  }
  i1164.idleAnimations = i1166
  i1164.loseAnimation = i1165[3]
  i1164.winAnimation = i1165[4]
  i1164.worryAnimation = i1165[5]
  i1164.happyAnimation = i1165[6]
  i1164.gateSuckTimeToHappy = i1165[7]
  i1164.gateSuckTimeToPlaySound = i1165[8]
  request.r(i1165[9], i1165[10], 0, i1164, 'onWinLevelEvent')
  request.r(i1165[11], i1165[12], 0, i1164, 'onLevelLoadCompleteEvent')
  request.r(i1165[13], i1165[14], 0, i1164, 'onLoseLevelEvent')
  request.r(i1165[15], i1165[16], 0, i1164, 'onWarringTimeEvent')
  request.r(i1165[17], i1165[18], 0, i1164, 'onGateSuckComplete')
  request.r(i1165[19], i1165[20], 0, i1164, 'onAddTime')
  request.r(i1165[21], i1165[22], 0, i1164, 'playSfxEvent')
  request.r(i1165[23], i1165[24], 0, i1164, 'soundFirstBlockBreak')
  return i1164
}

Deserializers["TimingController"] = function (request, data, root) {
  var i1170 = root || request.c( 'TimingController' )
  var i1171 = data
  i1170.fadeWarnDuration = i1171[0]
  request.r(i1171[1], i1171[2], 0, i1170, 'pauseTimeLevelVariable')
  request.r(i1171[3], i1171[4], 0, i1170, 'loseData')
  i1170.stringFormat = i1171[5]
  request.r(i1171[6], i1171[7], 0, i1170, 'timeText')
  request.r(i1171[8], i1171[9], 0, i1170, 'addTimePlayEvent')
  request.r(i1171[10], i1171[11], 0, i1170, 'countDownTimeSetupEvent')
  request.r(i1171[12], i1171[13], 0, i1170, 'startCountDownTimeEvent')
  request.r(i1171[14], i1171[15], 0, i1170, 'onTimeUpEvent')
  request.r(i1171[16], i1171[17], 0, i1170, 'playDuration')
  request.r(i1171[18], i1171[19], 0, i1170, 'totalTimeAddWhenPlay')
  request.r(i1171[20], i1171[21], 0, i1170, 'isUsingTimerBooster')
  request.r(i1171[22], i1171[23], 0, i1170, 'onWarringTimeEvent')
  request.r(i1171[24], i1171[25], 0, i1170, 'isPlayAgainMore')
  request.r(i1171[26], i1171[27], 0, i1170, 'warningFrame')
  request.r(i1171[28], i1171[29], 0, i1170, 'playSfxEvent')
  request.r(i1171[30], i1171[31], 0, i1170, 'stopSfxEvent')
  request.r(i1171[32], i1171[33], 0, i1170, 'soundWarring')
  return i1170
}

Deserializers["VirtueSky.UIButton.ButtonUI"] = function (request, data, root) {
  var i1172 = root || request.c( 'VirtueSky.UIButton.ButtonUI' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'clickButtonEvent')
  i1172.isMotion = !!i1173[2]
  i1172.easingTypes = i1173[3]
  i1172.scale = i1173[4]
  i1172.isShrugOver = !!i1173[5]
  i1172.timeShrug = i1173[6]
  i1172.strength = i1173[7]
  i1172.useSoundFx = !!i1173[8]
  request.r(i1173[9], i1173[10], 0, i1172, 'playSfxEvent')
  request.r(i1173[11], i1173[12], 0, i1172, 'soundDataClickButton')
  i1172.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1173[13], i1172.m_OnClick)
  i1172.m_Navigation = request.d('UnityEngine.UI.Navigation', i1173[14], i1172.m_Navigation)
  i1172.m_Transition = i1173[15]
  i1172.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1173[16], i1172.m_Colors)
  i1172.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1173[17], i1172.m_SpriteState)
  i1172.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1173[18], i1172.m_AnimationTriggers)
  i1172.m_Interactable = !!i1173[19]
  request.r(i1173[20], i1173[21], 0, i1172, 'm_TargetGraphic')
  return i1172
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1175 = data
  i1174.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1175[0], i1174.m_PersistentCalls)
  return i1174
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.Events.PersistentCall', i1179[i + 0]));
  }
  i1176.m_Calls = i1178
  return i1176
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'm_Target')
  i1182.m_TargetAssemblyTypeName = i1183[2]
  i1182.m_MethodName = i1183[3]
  i1182.m_Mode = i1183[4]
  i1182.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1183[5], i1182.m_Arguments)
  i1182.m_CallState = i1183[6]
  return i1182
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'm_ObjectArgument')
  i1184.m_ObjectArgumentAssemblyTypeName = i1185[2]
  i1184.m_IntArgument = i1185[3]
  i1184.m_FloatArgument = i1185[4]
  i1184.m_StringArgument = i1185[5]
  i1184.m_BoolArgument = !!i1185[6]
  return i1184
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1187 = data
  i1186.m_Mode = i1187[0]
  i1186.m_WrapAround = !!i1187[1]
  request.r(i1187[2], i1187[3], 0, i1186, 'm_SelectOnUp')
  request.r(i1187[4], i1187[5], 0, i1186, 'm_SelectOnDown')
  request.r(i1187[6], i1187[7], 0, i1186, 'm_SelectOnLeft')
  request.r(i1187[8], i1187[9], 0, i1186, 'm_SelectOnRight')
  return i1186
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1189 = data
  i1188.m_NormalColor = new pc.Color(i1189[0], i1189[1], i1189[2], i1189[3])
  i1188.m_HighlightedColor = new pc.Color(i1189[4], i1189[5], i1189[6], i1189[7])
  i1188.m_PressedColor = new pc.Color(i1189[8], i1189[9], i1189[10], i1189[11])
  i1188.m_SelectedColor = new pc.Color(i1189[12], i1189[13], i1189[14], i1189[15])
  i1188.m_DisabledColor = new pc.Color(i1189[16], i1189[17], i1189[18], i1189[19])
  i1188.m_ColorMultiplier = i1189[20]
  i1188.m_FadeDuration = i1189[21]
  return i1188
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'm_HighlightedSprite')
  request.r(i1191[2], i1191[3], 0, i1190, 'm_PressedSprite')
  request.r(i1191[4], i1191[5], 0, i1190, 'm_SelectedSprite')
  request.r(i1191[6], i1191[7], 0, i1190, 'm_DisabledSprite')
  return i1190
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1193 = data
  i1192.m_NormalTrigger = i1193[0]
  i1192.m_HighlightedTrigger = i1193[1]
  i1192.m_PressedTrigger = i1193[2]
  i1192.m_SelectedTrigger = i1193[3]
  i1192.m_DisabledTrigger = i1193[4]
  return i1192
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1195 = data
  i1194.m_Spacing = i1195[0]
  i1194.m_ChildForceExpandWidth = !!i1195[1]
  i1194.m_ChildForceExpandHeight = !!i1195[2]
  i1194.m_ChildControlWidth = !!i1195[3]
  i1194.m_ChildControlHeight = !!i1195[4]
  i1194.m_ChildScaleWidth = !!i1195[5]
  i1194.m_ChildScaleHeight = !!i1195[6]
  i1194.m_ReverseArrangement = !!i1195[7]
  i1194.m_Padding = UnityEngine.RectOffset.FromPaddings(i1195[8], i1195[9], i1195[10], i1195[11])
  i1194.m_ChildAlignment = i1195[12]
  return i1194
}

Deserializers["ButtonTutorialUI"] = function (request, data, root) {
  var i1196 = root || request.c( 'ButtonTutorialUI' )
  var i1197 = data
  i1196.ActionShow = request.d('System.Action', i1197[0], i1196.ActionShow)
  i1196.ActionComplete = request.d('System.Action', i1197[1], i1196.ActionComplete)
  i1196.isCreateButtonCache = !!i1197[2]
  request.r(i1197[3], i1197[4], 0, i1196, 'btnTutorial')
  request.r(i1197[5], i1197[6], 0, i1196, 'handPrefab')
  request.r(i1197[7], i1197[8], 0, i1196, 'broad')
  return i1196
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.UI.Button' )
  var i1199 = data
  i1198.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1199[0], i1198.m_OnClick)
  i1198.m_Navigation = request.d('UnityEngine.UI.Navigation', i1199[1], i1198.m_Navigation)
  i1198.m_Transition = i1199[2]
  i1198.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1199[3], i1198.m_Colors)
  i1198.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1199[4], i1198.m_SpriteState)
  i1198.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1199[5], i1198.m_AnimationTriggers)
  i1198.m_Interactable = !!i1199[6]
  request.r(i1199[7], i1199[8], 0, i1198, 'm_TargetGraphic')
  return i1198
}

Deserializers["ButtonCTA"] = function (request, data, root) {
  var i1200 = root || request.c( 'ButtonCTA' )
  var i1201 = data
  i1200.urlAndroid = i1201[0]
  i1200.urlIos = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1202 = root || new pc.UnityMaterial()
  var i1203 = data
  i1202.name = i1203[0]
  request.r(i1203[1], i1203[2], 0, i1202, 'shader')
  i1202.renderQueue = i1203[3]
  i1202.enableInstancing = !!i1203[4]
  var i1205 = i1203[5]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1205[i + 0]) );
  }
  i1202.floatParameters = i1204
  var i1207 = i1203[6]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1207[i + 0]) );
  }
  i1202.colorParameters = i1206
  var i1209 = i1203[7]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1209[i + 0]) );
  }
  i1202.vectorParameters = i1208
  var i1211 = i1203[8]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1211[i + 0]) );
  }
  i1202.textureParameters = i1210
  var i1213 = i1203[9]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1213[i + 0]) );
  }
  i1202.materialFlags = i1212
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.value = i1217[1]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.value = new pc.Color(i1221[1], i1221[2], i1221[3], i1221[4])
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.value = new pc.Vec4( i1225[1], i1225[2], i1225[3], i1225[4] )
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1229 = data
  i1228.name = i1229[0]
  request.r(i1229[1], i1229[2], 0, i1228, 'value')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1233 = data
  i1232.name = i1233[0]
  i1232.enabled = !!i1233[1]
  return i1232
}

Deserializers["TheBeginning.UI.WinPopup"] = function (request, data, root) {
  var i1234 = root || request.c( 'TheBeginning.UI.WinPopup' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'canvasGroup')
  request.r(i1235[2], i1235[3], 0, i1234, 'canvas')
  i1234.useAnimation = !!i1235[4]
  i1234.isAutoShow = !!i1235[5]
  i1234.isNotSortingLayer = !!i1235[6]
  i1234.useShowAnimation = !!i1235[7]
  i1234.showAnimationType = i1235[8]
  i1234.durationShowPopup = i1235[9]
  i1234.useHideAnimation = !!i1235[10]
  i1234.hideAnimationType = i1235[11]
  i1234.durationHidePopup = i1235[12]
  i1234.ActionHide = request.d('System.Action', i1235[13], i1234.ActionHide)
  request.r(i1235[14], i1235[15], 0, i1234, 'gameSettings')
  i1234.moneyWin = i1235[16]
  i1234.ratioScaleContinueButton = i1235[17]
  request.r(i1235[18], i1235[19], 0, i1234, 'currentLevel')
  request.r(i1235[20], i1235[21], 0, i1234, 'btnTapToContinue')
  i1234.textValueFormat = i1235[22]
  request.r(i1235[23], i1235[24], 0, i1234, 'textButtonComplete')
  i1234.timeDelayShowContinue = i1235[25]
  i1234.timeScaleContinue = i1235[26]
  request.r(i1235[27], i1235[28], 0, i1234, 'soundFx')
  i1234.timeDelayPlayFx = i1235[29]
  request.r(i1235[30], i1235[31], 0, i1234, 'starPosition')
  request.r(i1235[32], i1235[33], 0, i1234, 'playCurrentLevelEvent')
  request.r(i1235[34], i1235[35], 0, i1234, 'moveAllCoinDone')
  i1234.timeShowAnimation = i1235[36]
  var i1237 = i1235[37]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatorUIControl')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1234.listAnimatorUI = i1236
  request.r(i1235[38], i1235[39], 0, i1234, 'group')
  request.r(i1235[40], i1235[41], 0, i1234, 'background')
  request.r(i1235[42], i1235[43], 0, i1234, 'container')
  i1234.showMovePopup = i1235[44]
  i1234.offsetShowMove = i1235[45]
  i1234.scaleFromShow = new pc.Vec3( i1235[46], i1235[47], i1235[48] )
  i1234.eulerAngleShowFrom = new pc.Vec3( i1235[49], i1235[50], i1235[51] )
  request.r(i1235[52], i1235[53], 0, i1234, 'pointShowPos')
  i1234.hideMovePopup = i1235[54]
  i1234.offsetHideMove = i1235[55]
  i1234.scaleFromHide = new pc.Vec3( i1235[56], i1235[57], i1235[58] )
  request.r(i1235[59], i1235[60], 0, i1234, 'pointHidePos')
  request.r(i1235[61], i1235[62], 0, i1234, 'playSfxEvent')
  request.r(i1235[63], i1235[64], 0, i1234, 'soundOpen')
  request.r(i1235[65], i1235[66], 0, i1234, 'soundClose')
  return i1234
}

Deserializers["AnimatorUIControl"] = function (request, data, root) {
  var i1240 = root || request.c( 'AnimatorUIControl' )
  var i1241 = data
  i1240.timeDelayPlay = i1241[0]
  request.r(i1241[1], i1241[2], 0, i1240, 'graphic')
  var i1243 = i1241[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationData')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('AnimationData', i1243[i + 0]));
  }
  i1240.animations = i1242
  i1240.isHideWhenPlay = !!i1241[4]
  i1240.timeHide = i1241[5]
  i1240.timeDelayPlaySfx = i1241[6]
  request.r(i1241[7], i1241[8], 0, i1240, 'playSfxEvent')
  request.r(i1241[9], i1241[10], 0, i1240, 'sound')
  return i1240
}

Deserializers["AnimationData"] = function (request, data, root) {
  var i1246 = root || request.c( 'AnimationData' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.isLoop = !!i1247[1]
  return i1246
}

Deserializers["ProcessItemGroup"] = function (request, data, root) {
  var i1248 = root || request.c( 'ProcessItemGroup' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'unlockNewElementData')
  request.r(i1249[2], i1249[3], 0, i1248, 'processFill')
  i1248.isShowComplete = !!i1249[4]
  i1248.isFillAnimation = !!i1249[5]
  i1248.durationFill = i1249[6]
  i1248.formatProcess = i1249[7]
  request.r(i1249[8], i1249[9], 0, i1248, 'processValueText')
  request.r(i1249[10], i1249[11], 0, i1248, 'nextElementItem')
  return i1248
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1251 = data
  i1250.m_Spacing = i1251[0]
  i1250.m_ChildForceExpandWidth = !!i1251[1]
  i1250.m_ChildForceExpandHeight = !!i1251[2]
  i1250.m_ChildControlWidth = !!i1251[3]
  i1250.m_ChildControlHeight = !!i1251[4]
  i1250.m_ChildScaleWidth = !!i1251[5]
  i1250.m_ChildScaleHeight = !!i1251[6]
  i1250.m_ReverseArrangement = !!i1251[7]
  i1250.m_Padding = UnityEngine.RectOffset.FromPaddings(i1251[8], i1251[9], i1251[10], i1251[11])
  i1250.m_ChildAlignment = i1251[12]
  return i1250
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1253 = data
  i1252.m_HorizontalFit = i1253[0]
  i1252.m_VerticalFit = i1253[1]
  return i1252
}

Deserializers["StarUpdater"] = function (request, data, root) {
  var i1254 = root || request.c( 'StarUpdater' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'CurrencyAmountText')
  request.r(i1255[2], i1255[3], 0, i1254, 'iconStar')
  request.r(i1255[4], i1255[5], 0, i1254, 'moveOneStarDone')
  request.r(i1255[6], i1255[7], 0, i1254, 'moveAllStarDone')
  request.r(i1255[8], i1255[9], 0, i1254, 'decreaseStarEvent')
  request.r(i1255[10], i1255[11], 0, i1254, 'updateStartTextEvent')
  request.r(i1255[12], i1255[13], 0, i1254, 'addTargetToStarGenerateEvent')
  request.r(i1255[14], i1255[15], 0, i1254, 'removeTargetToStarGenerateEvent')
  return i1254
}

Deserializers["TheBeginning.UI.LosePopup"] = function (request, data, root) {
  var i1256 = root || request.c( 'TheBeginning.UI.LosePopup' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'canvasGroup')
  request.r(i1257[2], i1257[3], 0, i1256, 'canvas')
  i1256.useAnimation = !!i1257[4]
  i1256.isAutoShow = !!i1257[5]
  i1256.isNotSortingLayer = !!i1257[6]
  i1256.useShowAnimation = !!i1257[7]
  i1256.showAnimationType = i1257[8]
  i1256.durationShowPopup = i1257[9]
  i1256.useHideAnimation = !!i1257[10]
  i1256.hideAnimationType = i1257[11]
  i1256.durationHidePopup = i1257[12]
  i1256.ActionHide = request.d('System.Action', i1257[13], i1256.ActionHide)
  request.r(i1257[14], i1257[15], 0, i1256, 'currentLevel')
  request.r(i1257[16], i1257[17], 0, i1256, 'headerText')
  i1256.levelFormatText = i1257[18]
  request.r(i1257[19], i1257[20], 0, i1256, 'loseData')
  request.r(i1257[21], i1257[22], 0, i1256, 'heartData')
  request.r(i1257[23], i1257[24], 0, i1256, 'iconTransform')
  request.r(i1257[25], i1257[26], 0, i1256, 'replayGameEvent')
  request.r(i1257[27], i1257[28], 0, i1256, 'returnHomeEvent')
  request.r(i1257[29], i1257[30], 0, i1256, 'background')
  request.r(i1257[31], i1257[32], 0, i1256, 'container')
  i1256.showMovePopup = i1257[33]
  i1256.offsetShowMove = i1257[34]
  i1256.scaleFromShow = new pc.Vec3( i1257[35], i1257[36], i1257[37] )
  i1256.eulerAngleShowFrom = new pc.Vec3( i1257[38], i1257[39], i1257[40] )
  request.r(i1257[41], i1257[42], 0, i1256, 'pointShowPos')
  i1256.hideMovePopup = i1257[43]
  i1256.offsetHideMove = i1257[44]
  i1256.scaleFromHide = new pc.Vec3( i1257[45], i1257[46], i1257[47] )
  request.r(i1257[48], i1257[49], 0, i1256, 'pointHidePos')
  request.r(i1257[50], i1257[51], 0, i1256, 'playSfxEvent')
  request.r(i1257[52], i1257[53], 0, i1256, 'soundOpen')
  request.r(i1257[54], i1257[55], 0, i1256, 'soundClose')
  return i1256
}

Deserializers["HeartUI"] = function (request, data, root) {
  var i1258 = root || request.c( 'HeartUI' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'updateHeartEvent')
  request.r(i1259[2], i1259[3], 0, i1258, 'updatingTimeIncreaseHeartEvent')
  request.r(i1259[4], i1259[5], 0, i1258, 'immortalData')
  request.r(i1259[6], i1259[7], 0, i1258, 'heartData')
  request.r(i1259[8], i1259[9], 0, i1258, 'plusIcon')
  request.r(i1259[10], i1259[11], 0, i1258, 'iconHeart')
  request.r(i1259[12], i1259[13], 0, i1258, 'iconHeartNormal')
  request.r(i1259[14], i1259[15], 0, i1258, 'iconHeartImmortal')
  request.r(i1259[16], i1259[17], 0, i1258, 'txtCount')
  request.r(i1259[18], i1259[19], 0, i1258, 'txtFull')
  i1258.stringFormatCount = i1259[20]
  request.r(i1259[21], i1259[22], 0, i1258, 'txtTime')
  i1258.stringFormatTime = i1259[23]
  i1258.stringFormatImmortalTimeWithDay = i1259[24]
  i1258.stringFormatImmortalTimeWithHour = i1259[25]
  i1258.stringFormatImmortalTimeWithMinute = i1259[26]
  return i1258
}

Deserializers["TheBeginning.UI.SettingPopupInGame"] = function (request, data, root) {
  var i1260 = root || request.c( 'TheBeginning.UI.SettingPopupInGame' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'canvasGroup')
  request.r(i1261[2], i1261[3], 0, i1260, 'canvas')
  i1260.useAnimation = !!i1261[4]
  i1260.isAutoShow = !!i1261[5]
  i1260.isNotSortingLayer = !!i1261[6]
  i1260.useShowAnimation = !!i1261[7]
  i1260.showAnimationType = i1261[8]
  i1260.durationShowPopup = i1261[9]
  i1260.useHideAnimation = !!i1261[10]
  i1260.hideAnimationType = i1261[11]
  i1260.durationHidePopup = i1261[12]
  i1260.ActionHide = request.d('System.Action', i1261[13], i1260.ActionHide)
  request.r(i1261[14], i1261[15], 0, i1260, 'unlockWinStreakLevel')
  request.r(i1261[16], i1261[17], 0, i1260, 'indexLevelVariable')
  request.r(i1261[18], i1261[19], 0, i1260, 'soundVolume')
  request.r(i1261[20], i1261[21], 0, i1260, 'buttonSound')
  request.r(i1261[22], i1261[23], 0, i1260, 'soundOn')
  request.r(i1261[24], i1261[25], 0, i1260, 'soundOff')
  request.r(i1261[26], i1261[27], 0, i1260, 'musicVolume')
  request.r(i1261[28], i1261[29], 0, i1260, 'buttonMusic')
  request.r(i1261[30], i1261[31], 0, i1260, 'musicOn')
  request.r(i1261[32], i1261[33], 0, i1260, 'musicOff')
  request.r(i1261[34], i1261[35], 0, i1260, 'buttonVibrate')
  request.r(i1261[36], i1261[37], 0, i1260, 'vibrateOn')
  request.r(i1261[38], i1261[39], 0, i1260, 'vibrateOff')
  request.r(i1261[40], i1261[41], 0, i1260, 'buttonHome')
  request.r(i1261[42], i1261[43], 0, i1260, 'btnRestorePurchase')
  request.r(i1261[44], i1261[45], 0, i1260, 'isPlayingLevel')
  request.r(i1261[46], i1261[47], 0, i1260, 'isPauseGame')
  request.r(i1261[48], i1261[49], 0, i1260, 'isStartingLevel')
  request.r(i1261[50], i1261[51], 0, i1260, 'pauseTimeLevelVariable')
  request.r(i1261[52], i1261[53], 0, i1260, 'callReturnHome')
  request.r(i1261[54], i1261[55], 0, i1260, 'isBackToBuildTutorialPlaying')
  request.r(i1261[56], i1261[57], 0, i1260, 'tutorialUI')
  request.r(i1261[58], i1261[59], 0, i1260, 'isStartingGlamRush')
  request.r(i1261[60], i1261[61], 0, i1260, 'isGlamRushFinished')
  request.r(i1261[62], i1261[63], 0, i1260, 'background')
  request.r(i1261[64], i1261[65], 0, i1260, 'container')
  i1260.showMovePopup = i1261[66]
  i1260.offsetShowMove = i1261[67]
  i1260.scaleFromShow = new pc.Vec3( i1261[68], i1261[69], i1261[70] )
  i1260.eulerAngleShowFrom = new pc.Vec3( i1261[71], i1261[72], i1261[73] )
  request.r(i1261[74], i1261[75], 0, i1260, 'pointShowPos')
  i1260.hideMovePopup = i1261[76]
  i1260.offsetHideMove = i1261[77]
  i1260.scaleFromHide = new pc.Vec3( i1261[78], i1261[79], i1261[80] )
  request.r(i1261[81], i1261[82], 0, i1260, 'pointHidePos')
  request.r(i1261[83], i1261[84], 0, i1260, 'playSfxEvent')
  request.r(i1261[85], i1261[86], 0, i1260, 'soundOpen')
  request.r(i1261[87], i1261[88], 0, i1260, 'soundClose')
  return i1260
}

Deserializers["SelectBackGroundUI"] = function (request, data, root) {
  var i1262 = root || request.c( 'SelectBackGroundUI' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'managerData')
  request.r(i1263[2], i1263[3], 0, i1262, 'prefab')
  request.r(i1263[4], i1263[5], 0, i1262, 'content')
  return i1262
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'm_Content')
  i1264.m_Horizontal = !!i1265[2]
  i1264.m_Vertical = !!i1265[3]
  i1264.m_MovementType = i1265[4]
  i1264.m_Elasticity = i1265[5]
  i1264.m_Inertia = !!i1265[6]
  i1264.m_DecelerationRate = i1265[7]
  i1264.m_ScrollSensitivity = i1265[8]
  request.r(i1265[9], i1265[10], 0, i1264, 'm_Viewport')
  request.r(i1265[11], i1265[12], 0, i1264, 'm_HorizontalScrollbar')
  request.r(i1265[13], i1265[14], 0, i1264, 'm_VerticalScrollbar')
  i1264.m_HorizontalScrollbarVisibility = i1265[15]
  i1264.m_VerticalScrollbarVisibility = i1265[16]
  i1264.m_HorizontalScrollbarSpacing = i1265[17]
  i1264.m_VerticalScrollbarSpacing = i1265[18]
  i1264.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1265[19], i1264.m_OnValueChanged)
  return i1264
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1267 = data
  i1266.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1267[0], i1266.m_PersistentCalls)
  return i1266
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1269 = data
  i1268.m_ShowMaskGraphic = !!i1269[0]
  return i1268
}

Deserializers["SelectBackGroundItemUI"] = function (request, data, root) {
  var i1270 = root || request.c( 'SelectBackGroundItemUI' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'imgIcon')
  request.r(i1271[2], i1271[3], 0, i1270, 'goSelect')
  return i1270
}

Deserializers["GraphicsQualitySettingUI"] = function (request, data, root) {
  var i1272 = root || request.c( 'GraphicsQualitySettingUI' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'qualitySlider')
  request.r(i1273[2], i1273[3], 0, i1272, 'txtQuality')
  request.r(i1273[4], i1273[5], 0, i1272, 'graphicsQualitySetting')
  i1272.isRefreshOnStart = !!i1273[6]
  return i1272
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1275 = data
  request.r(i1275[0], i1275[1], 0, i1274, 'm_FillRect')
  request.r(i1275[2], i1275[3], 0, i1274, 'm_HandleRect')
  i1274.m_Direction = i1275[4]
  i1274.m_MinValue = i1275[5]
  i1274.m_MaxValue = i1275[6]
  i1274.m_WholeNumbers = !!i1275[7]
  i1274.m_Value = i1275[8]
  i1274.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1275[9], i1274.m_OnValueChanged)
  i1274.m_Navigation = request.d('UnityEngine.UI.Navigation', i1275[10], i1274.m_Navigation)
  i1274.m_Transition = i1275[11]
  i1274.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1275[12], i1274.m_Colors)
  i1274.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1275[13], i1274.m_SpriteState)
  i1274.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1275[14], i1274.m_AnimationTriggers)
  i1274.m_Interactable = !!i1275[15]
  request.r(i1275[16], i1275[17], 0, i1274, 'm_TargetGraphic')
  return i1274
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1277 = data
  i1276.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1277[0], i1276.m_PersistentCalls)
  return i1276
}

Deserializers["UnlockNewElementPopup"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnlockNewElementPopup' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'canvasGroup')
  request.r(i1279[2], i1279[3], 0, i1278, 'canvas')
  i1278.useAnimation = !!i1279[4]
  i1278.isAutoShow = !!i1279[5]
  i1278.isNotSortingLayer = !!i1279[6]
  i1278.useShowAnimation = !!i1279[7]
  i1278.showAnimationType = i1279[8]
  i1278.durationShowPopup = i1279[9]
  i1278.useHideAnimation = !!i1279[10]
  i1278.hideAnimationType = i1279[11]
  i1278.durationHidePopup = i1279[12]
  i1278.ActionHide = request.d('System.Action', i1279[13], i1278.ActionHide)
  request.r(i1279[14], i1279[15], 0, i1278, 'onClickContinueUnlockNewElementEvent')
  request.r(i1279[16], i1279[17], 0, i1278, 'unlockNewElementData')
  request.r(i1279[18], i1279[19], 0, i1278, 'titleIcon')
  request.r(i1279[20], i1279[21], 0, i1278, 'unlockIcon')
  request.r(i1279[22], i1279[23], 0, i1278, 'description')
  request.r(i1279[24], i1279[25], 0, i1278, 'background')
  request.r(i1279[26], i1279[27], 0, i1278, 'container')
  i1278.showMovePopup = i1279[28]
  i1278.offsetShowMove = i1279[29]
  i1278.scaleFromShow = new pc.Vec3( i1279[30], i1279[31], i1279[32] )
  i1278.eulerAngleShowFrom = new pc.Vec3( i1279[33], i1279[34], i1279[35] )
  request.r(i1279[36], i1279[37], 0, i1278, 'pointShowPos')
  i1278.hideMovePopup = i1279[38]
  i1278.offsetHideMove = i1279[39]
  i1278.scaleFromHide = new pc.Vec3( i1279[40], i1279[41], i1279[42] )
  request.r(i1279[43], i1279[44], 0, i1278, 'pointHidePos')
  request.r(i1279[45], i1279[46], 0, i1278, 'playSfxEvent')
  request.r(i1279[47], i1279[48], 0, i1278, 'soundOpen')
  request.r(i1279[49], i1279[50], 0, i1278, 'soundClose')
  return i1278
}

Deserializers["ReplayPopup"] = function (request, data, root) {
  var i1280 = root || request.c( 'ReplayPopup' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'canvasGroup')
  request.r(i1281[2], i1281[3], 0, i1280, 'canvas')
  i1280.useAnimation = !!i1281[4]
  i1280.isAutoShow = !!i1281[5]
  i1280.isNotSortingLayer = !!i1281[6]
  i1280.useShowAnimation = !!i1281[7]
  i1280.showAnimationType = i1281[8]
  i1280.durationShowPopup = i1281[9]
  i1280.useHideAnimation = !!i1281[10]
  i1280.hideAnimationType = i1281[11]
  i1280.durationHidePopup = i1281[12]
  i1280.ActionHide = request.d('System.Action', i1281[13], i1280.ActionHide)
  request.r(i1281[14], i1281[15], 0, i1280, 'heartData')
  request.r(i1281[16], i1281[17], 0, i1280, 'replayEvent')
  request.r(i1281[18], i1281[19], 0, i1280, 'returnHomeEvent')
  request.r(i1281[20], i1281[21], 0, i1280, 'isGlamRushFinished')
  request.r(i1281[22], i1281[23], 0, i1280, 'isGlamRushDone')
  request.r(i1281[24], i1281[25], 0, i1280, 'glamRushFinishedTime')
  request.r(i1281[26], i1281[27], 0, i1280, 'glamRushLosingTime')
  request.r(i1281[28], i1281[29], 0, i1280, 'glamRushLevelCurrentCache')
  request.r(i1281[30], i1281[31], 0, i1280, 'isStartingGlamRush')
  request.r(i1281[32], i1281[33], 0, i1280, 'currentLevel')
  request.r(i1281[34], i1281[35], 0, i1280, 'indexUnlockWinStreak')
  request.r(i1281[36], i1281[37], 0, i1280, 'background')
  request.r(i1281[38], i1281[39], 0, i1280, 'container')
  i1280.showMovePopup = i1281[40]
  i1280.offsetShowMove = i1281[41]
  i1280.scaleFromShow = new pc.Vec3( i1281[42], i1281[43], i1281[44] )
  i1280.eulerAngleShowFrom = new pc.Vec3( i1281[45], i1281[46], i1281[47] )
  request.r(i1281[48], i1281[49], 0, i1280, 'pointShowPos')
  i1280.hideMovePopup = i1281[50]
  i1280.offsetHideMove = i1281[51]
  i1280.scaleFromHide = new pc.Vec3( i1281[52], i1281[53], i1281[54] )
  request.r(i1281[55], i1281[56], 0, i1280, 'pointHidePos')
  request.r(i1281[57], i1281[58], 0, i1280, 'playSfxEvent')
  request.r(i1281[59], i1281[60], 0, i1280, 'soundOpen')
  request.r(i1281[61], i1281[62], 0, i1280, 'soundClose')
  return i1280
}

Deserializers["BuyBoosterPopup"] = function (request, data, root) {
  var i1282 = root || request.c( 'BuyBoosterPopup' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'canvasGroup')
  request.r(i1283[2], i1283[3], 0, i1282, 'canvas')
  i1282.useAnimation = !!i1283[4]
  i1282.isAutoShow = !!i1283[5]
  i1282.isNotSortingLayer = !!i1283[6]
  i1282.useShowAnimation = !!i1283[7]
  i1282.showAnimationType = i1283[8]
  i1282.durationShowPopup = i1283[9]
  i1282.useHideAnimation = !!i1283[10]
  i1282.hideAnimationType = i1283[11]
  i1282.durationHidePopup = i1283[12]
  i1282.ActionHide = request.d('System.Action', i1283[13], i1282.ActionHide)
  request.r(i1283[14], i1283[15], 0, i1282, 'buttonBuy')
  request.r(i1283[16], i1283[17], 0, i1282, 'icon')
  request.r(i1283[18], i1283[19], 0, i1282, 'priceText')
  request.r(i1283[20], i1283[21], 0, i1282, 'boosterNameIcon')
  request.r(i1283[22], i1283[23], 0, i1282, 'descriptionText')
  request.r(i1283[24], i1283[25], 0, i1282, 'nameBoosterText')
  request.r(i1283[26], i1283[27], 0, i1282, 'colorCanBuy')
  request.r(i1283[28], i1283[29], 0, i1282, 'colorCanNotBuy')
  request.r(i1283[30], i1283[31], 0, i1282, 'addCoinEvent')
  request.r(i1283[32], i1283[33], 0, i1282, 'minusCoinEvent')
  request.r(i1283[34], i1283[35], 0, i1282, 'soundBuyBoosterComplete')
  request.r(i1283[36], i1283[37], 0, i1282, 'background')
  request.r(i1283[38], i1283[39], 0, i1282, 'container')
  i1282.showMovePopup = i1283[40]
  i1282.offsetShowMove = i1283[41]
  i1282.scaleFromShow = new pc.Vec3( i1283[42], i1283[43], i1283[44] )
  i1282.eulerAngleShowFrom = new pc.Vec3( i1283[45], i1283[46], i1283[47] )
  request.r(i1283[48], i1283[49], 0, i1282, 'pointShowPos')
  i1282.hideMovePopup = i1283[50]
  i1282.offsetHideMove = i1283[51]
  i1282.scaleFromHide = new pc.Vec3( i1283[52], i1283[53], i1283[54] )
  request.r(i1283[55], i1283[56], 0, i1282, 'pointHidePos')
  request.r(i1283[57], i1283[58], 0, i1282, 'playSfxEvent')
  request.r(i1283[59], i1283[60], 0, i1282, 'soundOpen')
  request.r(i1283[61], i1283[62], 0, i1282, 'soundClose')
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'clip')
  request.r(i1285[2], i1285[3], 0, i1284, 'outputAudioMixerGroup')
  i1284.playOnAwake = !!i1285[4]
  i1284.loop = !!i1285[5]
  i1284.time = i1285[6]
  i1284.volume = i1285[7]
  i1284.pitch = i1285[8]
  i1284.enabled = !!i1285[9]
  return i1284
}

Deserializers["VirtueSky.Audio.SoundComponent"] = function (request, data, root) {
  var i1286 = root || request.c( 'VirtueSky.Audio.SoundComponent' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'component')
  i1286.key = i1287[2]
  return i1286
}

Deserializers["CoinGenerate"] = function (request, data, root) {
  var i1288 = root || request.c( 'CoinGenerate' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'playSoundFx')
  request.r(i1289[2], i1289[3], 0, i1288, 'coinPrefab')
  request.r(i1289[4], i1289[5], 0, i1288, 'holder')
  i1288.numberCoin = i1289[6]
  i1288.delay = i1289[7]
  i1288.durationNear = i1289[8]
  i1288.durationTarget = i1289[9]
  i1288.easeNear = i1289[10]
  i1288.easeTarget = i1289[11]
  i1288.scale = i1289[12]
  i1288.offsetNear = i1289[13]
  request.r(i1289[14], i1289[15], 0, i1288, 'setFromCoinEvent')
  request.r(i1289[16], i1289[17], 0, i1288, 'addTargetToCoinGenerateEvent')
  request.r(i1289[18], i1289[19], 0, i1288, 'removeTargetToCoinGenerateEvent')
  request.r(i1289[20], i1289[21], 0, i1288, 'moveOneCoinDone')
  request.r(i1289[22], i1289[23], 0, i1288, 'moveAllCoinDone')
  request.r(i1289[24], i1289[25], 0, i1288, 'decreaseCoinEvent')
  request.r(i1289[26], i1289[27], 0, i1288, 'addCoinEvent')
  request.r(i1289[28], i1289[29], 0, i1288, 'minusCoinEvent')
  request.r(i1289[30], i1289[31], 0, i1288, 'soundCoinMove')
  request.r(i1289[32], i1289[33], 0, i1288, 'fx')
  return i1288
}

Deserializers["VirtueSky.Component.RotateComponent"] = function (request, data, root) {
  var i1290 = root || request.c( 'VirtueSky.Component.RotateComponent' )
  var i1291 = data
  i1290.ignoreTimeScale = !!i1291[0]
  i1290.speed = i1291[1]
  i1290.rotateX = !!i1291[2]
  i1290.rotateY = !!i1291[3]
  i1290.rotateZ = !!i1291[4]
  i1290.isReverse = !!i1291[5]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'animatorController')
  request.r(i1293[2], i1293[3], 0, i1292, 'avatar')
  i1292.updateMode = i1293[4]
  i1292.hasTransformHierarchy = !!i1293[5]
  i1292.applyRootMotion = !!i1293[6]
  var i1295 = i1293[7]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 2, i1294, '')
  }
  i1292.humanBones = i1294
  i1292.enabled = !!i1293[8]
  return i1292
}

Deserializers["StarGenerate"] = function (request, data, root) {
  var i1298 = root || request.c( 'StarGenerate' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'playSoundFx')
  request.r(i1299[2], i1299[3], 0, i1298, 'coinPrefab')
  request.r(i1299[4], i1299[5], 0, i1298, 'holder')
  i1298.numberCoin = i1299[6]
  i1298.delay = i1299[7]
  i1298.durationNear = i1299[8]
  i1298.durationTarget = i1299[9]
  i1298.easeNear = i1299[10]
  i1298.easeTarget = i1299[11]
  i1298.scale = i1299[12]
  i1298.scaleTo = i1299[13]
  i1298.offsetNear = i1299[14]
  request.r(i1299[15], i1299[16], 0, i1298, 'setStarCountEvent')
  request.r(i1299[17], i1299[18], 0, i1298, 'setFromCoinEvent')
  request.r(i1299[19], i1299[20], 0, i1298, 'addTargetToCoinGenerateEvent')
  request.r(i1299[21], i1299[22], 0, i1298, 'removeTargetToCoinGenerateEvent')
  request.r(i1299[23], i1299[24], 0, i1298, 'moveOneCoinDone')
  request.r(i1299[25], i1299[26], 0, i1298, 'moveAllCoinDone')
  request.r(i1299[27], i1299[28], 0, i1298, 'decreaseCoinEvent')
  request.r(i1299[29], i1299[30], 0, i1298, 'addCoinEvent')
  request.r(i1299[31], i1299[32], 0, i1298, 'minusCoinEvent')
  request.r(i1299[33], i1299[34], 0, i1298, 'soundCoinMove')
  return i1298
}

Deserializers["RotateUI"] = function (request, data, root) {
  var i1300 = root || request.c( 'RotateUI' )
  var i1301 = data
  i1300.ignoreTimeScale = !!i1301[0]
  i1300.speed = i1301[1]
  i1300.rotateX = !!i1301[2]
  i1300.rotateY = !!i1301[3]
  i1300.rotateZ = !!i1301[4]
  i1300.isReverse = !!i1301[5]
  i1300.timeDelay = i1301[6]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1303 = data
  i1302.aspect = i1303[0]
  i1302.orthographic = !!i1303[1]
  i1302.orthographicSize = i1303[2]
  i1302.backgroundColor = new pc.Color(i1303[3], i1303[4], i1303[5], i1303[6])
  i1302.nearClipPlane = i1303[7]
  i1302.farClipPlane = i1303[8]
  i1302.fieldOfView = i1303[9]
  i1302.depth = i1303[10]
  i1302.clearFlags = i1303[11]
  i1302.cullingMask = i1303[12]
  i1302.rect = i1303[13]
  request.r(i1303[14], i1303[15], 0, i1302, 'targetTexture')
  i1302.usePhysicalProperties = !!i1303[16]
  i1302.focalLength = i1303[17]
  i1302.sensorSize = new pc.Vec2( i1303[18], i1303[19] )
  i1302.lensShift = new pc.Vec2( i1303[20], i1303[21] )
  i1302.gateFit = i1303[22]
  i1302.commandBufferCount = i1303[23]
  i1302.cameraType = i1303[24]
  i1302.enabled = !!i1303[25]
  return i1302
}

Deserializers["CameraSystem"] = function (request, data, root) {
  var i1304 = root || request.c( 'CameraSystem' )
  var i1305 = data
  i1304.screenSizeOrigin = new pc.Vec2( i1305[0], i1305[1] )
  request.r(i1305[2], i1305[3], 0, i1304, 'cameraTarget')
  request.r(i1305[4], i1305[5], 0, i1304, 'bg')
  return i1304
}

Deserializers["TouchSystem"] = function (request, data, root) {
  var i1306 = root || request.c( 'TouchSystem' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'sceneCamera')
  i1306.includeLayer = UnityEngine.LayerMask.FromIntegerValue( i1307[2] )
  i1306.distance = i1307[3]
  request.r(i1307[4], i1307[5], 0, i1306, 'inputEventTouchBegin')
  request.r(i1307[6], i1307[7], 0, i1306, 'inputEventTouchEnd')
  return i1306
}

Deserializers["MapSystem"] = function (request, data, root) {
  var i1308 = root || request.c( 'MapSystem' )
  var i1309 = data
  i1308.sizeGrid = new pc.Vec2( i1309[0], i1309[1] )
  i1308.sizeActive = new pc.Vec2( i1309[2], i1309[3] )
  i1308.gridOffset = new pc.Vec2( i1309[4], i1309[5] )
  i1308.gridType = i1309[6]
  i1308.axisType = i1309[7]
  request.r(i1309[8], i1309[9], 0, i1308, 'setting')
  request.r(i1309[10], i1309[11], 0, i1308, 'gridSystem')
  request.r(i1309[12], i1309[13], 0, i1308, 'plane')
  i1308.path = i1309[14]
  return i1308
}

Deserializers["Plane"] = function (request, data, root) {
  var i1310 = root || request.c( 'Plane' )
  var i1311 = data
  i1310.objectName = i1311[0]
  request.r(i1311[1], i1311[2], 0, i1310, 'girdSize')
  i1310.heightOrigin = i1311[3]
  i1310.size = new pc.Vec3( i1311[4], i1311[5], i1311[6] )
  i1310.eRotationType = i1311[7]
  request.r(i1311[8], i1311[9], 0, i1310, 'materialCurrent')
  request.r(i1311[10], i1311[11], 0, i1310, 'centerModel')
  request.r(i1311[12], i1311[13], 0, i1310, 'isStarttingLevel')
  var i1313 = i1311[14]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 1, i1312, '')
  }
  i1310.listColliders = i1312
  i1310.eColorType = i1311[15]
  request.r(i1311[16], i1311[17], 0, i1310, 'colorConfig')
  i1310.path = i1311[18]
  i1310.colorMaterialName = i1311[19]
  i1310.pivotType = i1311[20]
  request.r(i1311[21], i1311[22], 0, i1310, 'model')
  i1310.yAxis = i1311[23]
  i1310.isHaveStar = !!i1311[24]
  request.r(i1311[25], i1311[26], 0, i1310, 'objectStarPrefab')
  request.r(i1311[27], i1311[28], 0, i1310, 'objectStar')
  i1310.isFreeze = !!i1311[29]
  i1310.freezeCount = i1311[30]
  i1310.textSize = i1311[31]
  request.r(i1311[32], i1311[33], 0, i1310, 'materialFreezeOverride')
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'sharedMesh')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'additionalVertexStreams')
  i1318.enabled = !!i1319[2]
  request.r(i1319[3], i1319[4], 0, i1318, 'sharedMaterial')
  var i1321 = i1319[5]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 2, i1320, '')
  }
  i1318.sharedMaterials = i1320
  i1318.receiveShadows = !!i1319[6]
  i1318.shadowCastingMode = i1319[7]
  i1318.sortingLayerID = i1319[8]
  i1318.sortingOrder = i1319[9]
  i1318.lightmapIndex = i1319[10]
  i1318.lightmapSceneIndex = i1319[11]
  i1318.lightmapScaleOffset = new pc.Vec4( i1319[12], i1319[13], i1319[14], i1319[15] )
  i1318.lightProbeUsage = i1319[16]
  i1318.reflectionProbeUsage = i1319[17]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'sharedMesh')
  i1322.convex = !!i1323[2]
  i1322.enabled = !!i1323[3]
  i1322.isTrigger = !!i1323[4]
  request.r(i1323[5], i1323[6], 0, i1322, 'material')
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1325 = data
  i1324.color = new pc.Color(i1325[0], i1325[1], i1325[2], i1325[3])
  request.r(i1325[4], i1325[5], 0, i1324, 'sprite')
  i1324.flipX = !!i1325[6]
  i1324.flipY = !!i1325[7]
  i1324.drawMode = i1325[8]
  i1324.size = new pc.Vec2( i1325[9], i1325[10] )
  i1324.tileMode = i1325[11]
  i1324.adaptiveModeThreshold = i1325[12]
  i1324.maskInteraction = i1325[13]
  i1324.spriteSortPoint = i1325[14]
  i1324.enabled = !!i1325[15]
  request.r(i1325[16], i1325[17], 0, i1324, 'sharedMaterial')
  var i1327 = i1325[18]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 2, i1326, '')
  }
  i1324.sharedMaterials = i1326
  i1324.receiveShadows = !!i1325[19]
  i1324.shadowCastingMode = i1325[20]
  i1324.sortingLayerID = i1325[21]
  i1324.sortingOrder = i1325[22]
  i1324.lightmapIndex = i1325[23]
  i1324.lightmapSceneIndex = i1325[24]
  i1324.lightmapScaleOffset = new pc.Vec4( i1325[25], i1325[26], i1325[27], i1325[28] )
  i1324.lightProbeUsage = i1325[29]
  i1324.reflectionProbeUsage = i1325[30]
  return i1324
}

Deserializers["BGLevel"] = function (request, data, root) {
  var i1328 = root || request.c( 'BGLevel' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'managerData')
  request.r(i1329[2], i1329[3], 0, i1328, 'bg')
  i1328.fieldOfViewOriginal = i1329[4]
  i1328.sizeOriginal = i1329[5]
  return i1328
}

Deserializers["GridSystem"] = function (request, data, root) {
  var i1330 = root || request.c( 'GridSystem' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('CellGrid')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1330.listCell = i1332
  return i1330
}

Deserializers["CellGrid"] = function (request, data, root) {
  var i1336 = root || request.c( 'CellGrid' )
  var i1337 = data
  i1336.coordinate = new pc.Vec2( i1337[0], i1337[1] )
  var i1339 = i1337[2]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('CellData')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('CellData', i1339[i + 0]));
  }
  i1336.neighbours = i1338
  i1336.objectName = i1337[3]
  request.r(i1337[4], i1337[5], 0, i1336, 'girdSize')
  i1336.heightOrigin = i1337[6]
  i1336.size = new pc.Vec3( i1337[7], i1337[8], i1337[9] )
  i1336.eRotationType = i1337[10]
  request.r(i1337[11], i1337[12], 0, i1336, 'materialCurrent')
  request.r(i1337[13], i1337[14], 0, i1336, 'centerModel')
  request.r(i1337[15], i1337[16], 0, i1336, 'isStarttingLevel')
  var i1341 = i1337[17]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 1, i1340, '')
  }
  i1336.listColliders = i1340
  i1336.eColorType = i1337[18]
  request.r(i1337[19], i1337[20], 0, i1336, 'colorConfig')
  i1336.path = i1337[21]
  i1336.colorMaterialName = i1337[22]
  i1336.pivotType = i1337[23]
  request.r(i1337[24], i1337[25], 0, i1336, 'model')
  i1336.yAxis = i1337[26]
  i1336.isHaveStar = !!i1337[27]
  request.r(i1337[28], i1337[29], 0, i1336, 'objectStarPrefab')
  request.r(i1337[30], i1337[31], 0, i1336, 'objectStar')
  i1336.isFreeze = !!i1337[32]
  i1336.freezeCount = i1337[33]
  i1336.textSize = i1337[34]
  request.r(i1337[35], i1337[36], 0, i1336, 'materialFreezeOverride')
  return i1336
}

Deserializers["CellData"] = function (request, data, root) {
  var i1344 = root || request.c( 'CellData' )
  var i1345 = data
  request.r(i1345[0], i1345[1], 0, i1344, 'cell')
  i1344.direction = i1345[2]
  return i1344
}

Deserializers["FreezeSystem"] = function (request, data, root) {
  var i1346 = root || request.c( 'FreezeSystem' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('FreezeLinker')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('FreezeLinker', i1349[i + 0]));
  }
  i1346.listLinker = i1348
  i1346.type = i1347[1]
  var i1351 = i1347[2]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('FreezeConfig')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('FreezeConfig', i1351[i + 0]));
  }
  i1346.configs = i1350
  request.r(i1347[3], i1347[4], 0, i1346, 'playSfxEvent')
  return i1346
}

Deserializers["FreezeLinker"] = function (request, data, root) {
  var i1354 = root || request.c( 'FreezeLinker' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'freezer')
  request.r(i1355[2], i1355[3], 0, i1354, 'prefab')
  return i1354
}

Deserializers["FreezeConfig"] = function (request, data, root) {
  var i1358 = root || request.c( 'FreezeConfig' )
  var i1359 = data
  i1358.type = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'freezePrefab')
  request.r(i1359[3], i1359[4], 0, i1358, 'material')
  request.r(i1359[5], i1359[6], 0, i1358, 'soundCrack')
  request.r(i1359[7], i1359[8], 0, i1358, 'fxBreak')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1361 = data
  i1360.mass = i1361[0]
  i1360.drag = i1361[1]
  i1360.angularDrag = i1361[2]
  i1360.useGravity = !!i1361[3]
  i1360.isKinematic = !!i1361[4]
  i1360.constraints = i1361[5]
  i1360.maxAngularVelocity = i1361[6]
  i1360.collisionDetectionMode = i1361[7]
  i1360.interpolation = i1361[8]
  return i1360
}

Deserializers["Wall"] = function (request, data, root) {
  var i1362 = root || request.c( 'Wall' )
  var i1363 = data
  i1362.isAutoSize = !!i1363[0]
  i1362.sizeOrigin = new pc.Vec3( i1363[1], i1363[2], i1363[3] )
  i1362.objectName = i1363[4]
  request.r(i1363[5], i1363[6], 0, i1362, 'girdSize')
  i1362.heightOrigin = i1363[7]
  i1362.size = new pc.Vec3( i1363[8], i1363[9], i1363[10] )
  i1362.eRotationType = i1363[11]
  request.r(i1363[12], i1363[13], 0, i1362, 'materialCurrent')
  request.r(i1363[14], i1363[15], 0, i1362, 'centerModel')
  request.r(i1363[16], i1363[17], 0, i1362, 'isStarttingLevel')
  var i1365 = i1363[18]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 1, i1364, '')
  }
  i1362.listColliders = i1364
  i1362.eColorType = i1363[19]
  request.r(i1363[20], i1363[21], 0, i1362, 'colorConfig')
  i1362.path = i1363[22]
  i1362.colorMaterialName = i1363[23]
  i1362.pivotType = i1363[24]
  request.r(i1363[25], i1363[26], 0, i1362, 'model')
  i1362.yAxis = i1363[27]
  i1362.isHaveStar = !!i1363[28]
  request.r(i1363[29], i1363[30], 0, i1362, 'objectStarPrefab')
  request.r(i1363[31], i1363[32], 0, i1362, 'objectStar')
  i1362.isFreeze = !!i1363[33]
  i1362.freezeCount = i1363[34]
  i1362.textSize = i1363[35]
  request.r(i1363[36], i1363[37], 0, i1362, 'materialFreezeOverride')
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1367 = data
  i1366.center = new pc.Vec3( i1367[0], i1367[1], i1367[2] )
  i1366.size = new pc.Vec3( i1367[3], i1367[4], i1367[5] )
  i1366.enabled = !!i1367[6]
  i1366.isTrigger = !!i1367[7]
  request.r(i1367[8], i1367[9], 0, i1366, 'material')
  return i1366
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TextMeshPro' )
  var i1369 = data
  i1368._SortingLayer = i1369[0]
  i1368._SortingLayerID = i1369[1]
  i1368._SortingOrder = i1369[2]
  i1368.m_hasFontAssetChanged = !!i1369[3]
  request.r(i1369[4], i1369[5], 0, i1368, 'm_renderer')
  i1368.m_maskType = i1369[6]
  i1368.m_text = i1369[7]
  i1368.m_isRightToLeft = !!i1369[8]
  request.r(i1369[9], i1369[10], 0, i1368, 'm_fontAsset')
  request.r(i1369[11], i1369[12], 0, i1368, 'm_sharedMaterial')
  var i1371 = i1369[13]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 2, i1370, '')
  }
  i1368.m_fontSharedMaterials = i1370
  request.r(i1369[14], i1369[15], 0, i1368, 'm_fontMaterial')
  var i1373 = i1369[16]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 2) {
  request.r(i1373[i + 0], i1373[i + 1], 2, i1372, '')
  }
  i1368.m_fontMaterials = i1372
  i1368.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1369[17], i1369[18], i1369[19], i1369[20])
  i1368.m_fontColor = new pc.Color(i1369[21], i1369[22], i1369[23], i1369[24])
  i1368.m_enableVertexGradient = !!i1369[25]
  i1368.m_colorMode = i1369[26]
  i1368.m_fontColorGradient = request.d('TMPro.VertexGradient', i1369[27], i1368.m_fontColorGradient)
  request.r(i1369[28], i1369[29], 0, i1368, 'm_fontColorGradientPreset')
  request.r(i1369[30], i1369[31], 0, i1368, 'm_spriteAsset')
  i1368.m_tintAllSprites = !!i1369[32]
  request.r(i1369[33], i1369[34], 0, i1368, 'm_StyleSheet')
  i1368.m_TextStyleHashCode = i1369[35]
  i1368.m_overrideHtmlColors = !!i1369[36]
  i1368.m_faceColor = UnityEngine.Color32.ConstructColor(i1369[37], i1369[38], i1369[39], i1369[40])
  i1368.m_fontSize = i1369[41]
  i1368.m_fontSizeBase = i1369[42]
  i1368.m_fontWeight = i1369[43]
  i1368.m_enableAutoSizing = !!i1369[44]
  i1368.m_fontSizeMin = i1369[45]
  i1368.m_fontSizeMax = i1369[46]
  i1368.m_fontStyle = i1369[47]
  i1368.m_HorizontalAlignment = i1369[48]
  i1368.m_VerticalAlignment = i1369[49]
  i1368.m_textAlignment = i1369[50]
  i1368.m_characterSpacing = i1369[51]
  i1368.m_wordSpacing = i1369[52]
  i1368.m_lineSpacing = i1369[53]
  i1368.m_lineSpacingMax = i1369[54]
  i1368.m_paragraphSpacing = i1369[55]
  i1368.m_charWidthMaxAdj = i1369[56]
  i1368.m_enableWordWrapping = !!i1369[57]
  i1368.m_wordWrappingRatios = i1369[58]
  i1368.m_overflowMode = i1369[59]
  request.r(i1369[60], i1369[61], 0, i1368, 'm_linkedTextComponent')
  request.r(i1369[62], i1369[63], 0, i1368, 'parentLinkedComponent')
  i1368.m_enableKerning = !!i1369[64]
  i1368.m_enableExtraPadding = !!i1369[65]
  i1368.checkPaddingRequired = !!i1369[66]
  i1368.m_isRichText = !!i1369[67]
  i1368.m_parseCtrlCharacters = !!i1369[68]
  i1368.m_isOrthographic = !!i1369[69]
  i1368.m_isCullingEnabled = !!i1369[70]
  i1368.m_horizontalMapping = i1369[71]
  i1368.m_verticalMapping = i1369[72]
  i1368.m_uvLineOffset = i1369[73]
  i1368.m_geometrySortingOrder = i1369[74]
  i1368.m_IsTextObjectScaleStatic = !!i1369[75]
  i1368.m_VertexBufferAutoSizeReduction = !!i1369[76]
  i1368.m_useMaxVisibleDescender = !!i1369[77]
  i1368.m_pageToDisplay = i1369[78]
  i1368.m_margin = new pc.Vec4( i1369[79], i1369[80], i1369[81], i1369[82] )
  i1368.m_isUsingLegacyAnimationComponent = !!i1369[83]
  i1368.m_isVolumetricText = !!i1369[84]
  i1368.m_Maskable = !!i1369[85]
  request.r(i1369[86], i1369[87], 0, i1368, 'm_Material')
  i1368.m_Color = new pc.Color(i1369[88], i1369[89], i1369[90], i1369[91])
  i1368.m_RaycastTarget = !!i1369[92]
  i1368.m_RaycastPadding = new pc.Vec4( i1369[93], i1369[94], i1369[95], i1369[96] )
  return i1368
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1374 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1375 = data
  i1374.loop = !!i1375[0]
  i1374.timeScale = i1375[1]
  request.r(i1375[2], i1375[3], 0, i1374, 'skeletonDataAsset')
  i1374.initialSkinName = i1375[4]
  i1374.fixPrefabOverrideViaMeshFilter = i1375[5]
  i1374.initialFlipX = !!i1375[6]
  i1374.initialFlipY = !!i1375[7]
  i1374.updateWhenInvisible = i1375[8]
  i1374.zSpacing = i1375[9]
  i1374.useClipping = !!i1375[10]
  i1374.immutableTriangles = !!i1375[11]
  i1374.pmaVertexColors = !!i1375[12]
  i1374.clearStateOnDisable = !!i1375[13]
  i1374.tintBlack = !!i1375[14]
  i1374.singleSubmesh = !!i1375[15]
  i1374.fixDrawOrder = !!i1375[16]
  i1374.addNormals = !!i1375[17]
  i1374.calculateTangents = !!i1375[18]
  i1374.maskInteraction = i1375[19]
  i1374.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1375[20], i1374.maskMaterials)
  i1374.disableRenderingOnOverride = !!i1375[21]
  i1374.updateTiming = i1375[22]
  i1374.unscaledTime = !!i1375[23]
  i1374._animationName = i1375[24]
  var i1377 = i1375[25]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( i1377[i + 0] );
  }
  i1374.separatorSlotNames = i1376
  return i1374
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1378 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 2) {
  request.r(i1381[i + 0], i1381[i + 1], 2, i1380, '')
  }
  i1378.materialsMaskDisabled = i1380
  var i1383 = i1379[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 2, i1382, '')
  }
  i1378.materialsInsideMask = i1382
  var i1385 = i1379[2]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 2, i1384, '')
  }
  i1378.materialsOutsideMask = i1384
  return i1378
}

Deserializers["FreezePrefab"] = function (request, data, root) {
  var i1386 = root || request.c( 'FreezePrefab' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'txtCount')
  i1386.yAxis = i1387[2]
  return i1386
}

Deserializers["PooledParticleCallback"] = function (request, data, root) {
  var i1388 = root || request.c( 'PooledParticleCallback' )
  var i1389 = data
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.atlasId = i1391[1]
  i1390.mipmapCount = i1391[2]
  i1390.hdr = !!i1391[3]
  i1390.size = i1391[4]
  i1390.anisoLevel = i1391[5]
  i1390.filterMode = i1391[6]
  var i1393 = i1391[7]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 4) {
    i1392.push( UnityEngine.Rect.MinMaxRect(i1393[i + 0], i1393[i + 1], i1393[i + 2], i1393[i + 3]) );
  }
  i1390.rects = i1392
  i1390.wrapU = i1391[8]
  i1390.wrapV = i1391[9]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.index = i1397[1]
  i1396.startup = !!i1397[2]
  return i1396
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1399 = data
  i1398.m_UiScaleMode = i1399[0]
  i1398.m_ReferencePixelsPerUnit = i1399[1]
  i1398.m_ScaleFactor = i1399[2]
  i1398.m_ReferenceResolution = new pc.Vec2( i1399[3], i1399[4] )
  i1398.m_ScreenMatchMode = i1399[5]
  i1398.m_MatchWidthOrHeight = i1399[6]
  i1398.m_PhysicalUnit = i1399[7]
  i1398.m_FallbackScreenDPI = i1399[8]
  i1398.m_DefaultSpriteDPI = i1399[9]
  i1398.m_DynamicPixelsPerUnit = i1399[10]
  i1398.m_PresetInfoIsWorld = !!i1399[11]
  return i1398
}

Deserializers["VirtueSky.Component.ResizeMatchCanvasScalerComponent"] = function (request, data, root) {
  var i1400 = root || request.c( 'VirtueSky.Component.ResizeMatchCanvasScalerComponent' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'component')
  i1400.aspectRatio = i1401[2]
  request.r(i1401[3], i1401[4], 0, i1400, 'canvas')
  request.r(i1401[5], i1401[6], 0, i1400, 'camera')
  return i1400
}

Deserializers["Coffee.UIExtensions.UIParticleRenderer"] = function (request, data, root) {
  var i1402 = root || request.c( 'Coffee.UIExtensions.UIParticleRenderer' )
  var i1403 = data
  i1402.m_Maskable = !!i1403[0]
  request.r(i1403[1], i1403[2], 0, i1402, 'm_Material')
  i1402.m_Color = new pc.Color(i1403[3], i1403[4], i1403[5], i1403[6])
  i1402.m_RaycastTarget = !!i1403[7]
  i1402.m_RaycastPadding = new pc.Vec4( i1403[8], i1403[9], i1403[10], i1403[11] )
  return i1402
}

Deserializers["TheBeginning.UI.PopupManager"] = function (request, data, root) {
  var i1404 = root || request.c( 'TheBeginning.UI.PopupManager' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'parentContainer')
  request.r(i1405[2], i1405[3], 0, i1404, 'popupSettings')
  request.r(i1405[4], i1405[5], 0, i1404, 'cameraUI')
  i1404.index = i1405[6]
  return i1404
}

Deserializers["TheBeginning.Services.PoolInitialization"] = function (request, data, root) {
  var i1406 = root || request.c( 'TheBeginning.Services.PoolInitialization' )
  var i1407 = data
  return i1406
}

Deserializers["TheBeginning.Services.VibrationInitialization"] = function (request, data, root) {
  var i1408 = root || request.c( 'TheBeginning.Services.VibrationInitialization' )
  var i1409 = data
  return i1408
}

Deserializers["TheBeginning.Services.RuntimeInitialization"] = function (request, data, root) {
  var i1410 = root || request.c( 'TheBeginning.Services.RuntimeInitialization' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 2, i1412, '')
  }
  i1410.serviceInitializations = i1412
  return i1410
}

Deserializers["TheBeginning.LevelSystem.LevelLoader"] = function (request, data, root) {
  var i1416 = root || request.c( 'TheBeginning.LevelSystem.LevelLoader' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'currentLevel')
  request.r(i1417[2], i1417[3], 0, i1416, 'previousLevel')
  request.r(i1417[4], i1417[5], 0, i1416, 'levelSettings')
  request.r(i1417[6], i1417[7], 0, i1416, 'currentIndexLevel')
  request.r(i1417[8], i1417[9], 0, i1416, 'currentIndexLevelLoopBy')
  request.r(i1417[10], i1417[11], 0, i1416, 'eventLoadLevel')
  request.r(i1417[12], i1417[13], 0, i1416, 'eventGetCurrentLevel')
  request.r(i1417[14], i1417[15], 0, i1416, 'eventGetPreviousLevel')
  return i1416
}

Deserializers["VirtueSky.Audio.AudioManager"] = function (request, data, root) {
  var i1418 = root || request.c( 'VirtueSky.Audio.AudioManager' )
  var i1419 = data
  i1418.isDontDestroyOnLoad = !!i1419[0]
  request.r(i1419[1], i1419[2], 0, i1418, 'soundComponentPrefab')
  request.r(i1419[3], i1419[4], 0, i1418, 'audioHolder')
  request.r(i1419[5], i1419[6], 0, i1418, 'eventPlayMusic')
  request.r(i1419[7], i1419[8], 0, i1418, 'eventStopMusic')
  request.r(i1419[9], i1419[10], 0, i1418, 'eventPauseMusic')
  request.r(i1419[11], i1419[12], 0, i1418, 'eventResumeMusic')
  request.r(i1419[13], i1419[14], 0, i1418, 'eventPlaySfx')
  request.r(i1419[15], i1419[16], 0, i1418, 'eventStopSfx')
  request.r(i1419[17], i1419[18], 0, i1418, 'eventPauseSfx')
  request.r(i1419[19], i1419[20], 0, i1418, 'eventResumeSfx')
  request.r(i1419[21], i1419[22], 0, i1418, 'eventFinishSfx')
  request.r(i1419[23], i1419[24], 0, i1418, 'eventStopAllSfx')
  request.r(i1419[25], i1419[26], 0, i1418, 'musicVolume')
  request.r(i1419[27], i1419[28], 0, i1418, 'sfxVolume')
  var i1421 = i1419[29]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('VirtueSky.Audio.SoundComponent')))
  for(var i = 0; i < i1421.length; i += 2) {
  request.r(i1421[i + 0], i1421[i + 1], 1, i1420, '')
  }
  i1418.listCacheSfx = i1420
  return i1418
}

Deserializers["VirtueSky.TouchInput.TouchInputManager"] = function (request, data, root) {
  var i1424 = root || request.c( 'VirtueSky.TouchInput.TouchInputManager' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'inputEventTouchBegin')
  request.r(i1425[2], i1425[3], 0, i1424, 'inputEventTouchMove')
  request.r(i1425[4], i1425[5], 0, i1424, 'inputEventTouchStationary')
  request.r(i1425[6], i1425[7], 0, i1424, 'inputEventTouchEnd')
  request.r(i1425[8], i1425[9], 0, i1424, 'inputEventTouchCancel')
  request.r(i1425[10], i1425[11], 0, i1424, 'inputPreventTouchVariable')
  i1424.touchPosition = new pc.Vec3( i1425[12], i1425[13], i1425[14] )
  i1424.preventTouch = !!i1425[15]
  return i1424
}

Deserializers["CoinSystem"] = function (request, data, root) {
  var i1426 = root || request.c( 'CoinSystem' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'generateCoinEvent')
  request.r(i1427[2], i1427[3], 0, i1426, 'addCoinEvent')
  request.r(i1427[4], i1427[5], 0, i1426, 'updateCoinEvent')
  request.r(i1427[6], i1427[7], 0, i1426, 'minusCoinEvent')
  request.r(i1427[8], i1427[9], 0, i1426, 'balanceAmount')
  return i1426
}

Deserializers["StarSystem"] = function (request, data, root) {
  var i1428 = root || request.c( 'StarSystem' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'generateStarEvent')
  request.r(i1429[2], i1429[3], 0, i1428, 'addStarEvent')
  request.r(i1429[4], i1429[5], 0, i1428, 'minusStarEvent')
  request.r(i1429[6], i1429[7], 0, i1428, 'addStarCompleteEvent')
  request.r(i1429[8], i1429[9], 0, i1428, 'balanceAmount')
  return i1428
}

Deserializers["Transittion"] = function (request, data, root) {
  var i1430 = root || request.c( 'Transittion' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'trans')
  i1430.mainTransAnim = i1431[2]
  i1430.mainEventOpen = i1431[3]
  i1430.mainEventClose = i1431[4]
  request.r(i1431[5], i1431[6], 0, i1430, 'curtain')
  i1430.curtainTransAnim = i1431[7]
  i1430.curtainEventClose = i1431[8]
  return i1430
}

Deserializers["GamePlayableManager"] = function (request, data, root) {
  var i1432 = root || request.c( 'GamePlayableManager' )
  var i1433 = data
  i1432.gameState = i1433[0]
  request.r(i1433[1], i1433[2], 0, i1432, 'levelHolder')
  request.r(i1433[3], i1433[4], 0, i1432, 'indexLevelVariable')
  request.r(i1433[5], i1433[6], 0, i1432, 'eventLoadLevel')
  request.r(i1433[7], i1433[8], 0, i1432, 'eventGetCurrentLevel')
  request.r(i1433[9], i1433[10], 0, i1432, 'eventGetPreviousLevel')
  request.r(i1433[11], i1433[12], 0, i1432, 'callReplayLevelEvent')
  request.r(i1433[13], i1433[14], 0, i1432, 'callPlayCurrentLevelEvent')
  request.r(i1433[15], i1433[16], 0, i1432, 'callNextLevelEvent')
  request.r(i1433[17], i1433[18], 0, i1432, 'onLoadLevelComplete')
  request.r(i1433[19], i1433[20], 0, i1432, 'callWinLevelEvent')
  request.r(i1433[21], i1433[22], 0, i1432, 'callLoseLevelEvent')
  request.r(i1433[23], i1433[24], 0, i1432, 'playSfxEvent')
  request.r(i1433[25], i1433[26], 0, i1432, 'levelModeData')
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1435 = data
  i1434.type = i1435[0]
  i1434.color = new pc.Color(i1435[1], i1435[2], i1435[3], i1435[4])
  i1434.cullingMask = i1435[5]
  i1434.intensity = i1435[6]
  i1434.range = i1435[7]
  i1434.spotAngle = i1435[8]
  i1434.shadows = i1435[9]
  i1434.shadowNormalBias = i1435[10]
  i1434.shadowBias = i1435[11]
  i1434.shadowStrength = i1435[12]
  i1434.shadowResolution = i1435[13]
  i1434.lightmapBakeType = i1435[14]
  i1434.renderMode = i1435[15]
  request.r(i1435[16], i1435[17], 0, i1434, 'cookie')
  i1434.cookieSize = i1435[18]
  i1434.enabled = !!i1435[19]
  return i1434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'm_FirstSelected')
  i1436.m_sendNavigationEvents = !!i1437[2]
  i1436.m_DragThreshold = i1437[3]
  return i1436
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i1439 = data
  i1438.m_MoveRepeatDelay = i1439[0]
  i1438.m_MoveRepeatRate = i1439[1]
  request.r(i1439[2], i1439[3], 0, i1438, 'm_XRTrackingOrigin')
  request.r(i1439[4], i1439[5], 0, i1438, 'm_ActionsAsset')
  request.r(i1439[6], i1439[7], 0, i1438, 'm_PointAction')
  request.r(i1439[8], i1439[9], 0, i1438, 'm_MoveAction')
  request.r(i1439[10], i1439[11], 0, i1438, 'm_SubmitAction')
  request.r(i1439[12], i1439[13], 0, i1438, 'm_CancelAction')
  request.r(i1439[14], i1439[15], 0, i1438, 'm_LeftClickAction')
  request.r(i1439[16], i1439[17], 0, i1438, 'm_MiddleClickAction')
  request.r(i1439[18], i1439[19], 0, i1438, 'm_RightClickAction')
  request.r(i1439[20], i1439[21], 0, i1438, 'm_ScrollWheelAction')
  request.r(i1439[22], i1439[23], 0, i1438, 'm_TrackedDevicePositionAction')
  request.r(i1439[24], i1439[25], 0, i1438, 'm_TrackedDeviceOrientationAction')
  i1438.m_DeselectOnBackgroundClick = !!i1439[26]
  i1438.m_PointerBehavior = i1439[27]
  i1438.m_CursorLockBehavior = i1439[28]
  i1438.m_ScrollDeltaPerTick = i1439[29]
  i1438.m_SendPointerHoverToParent = !!i1439[30]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1441 = data
  i1440.ambientIntensity = i1441[0]
  i1440.reflectionIntensity = i1441[1]
  i1440.ambientMode = i1441[2]
  i1440.ambientLight = new pc.Color(i1441[3], i1441[4], i1441[5], i1441[6])
  i1440.ambientSkyColor = new pc.Color(i1441[7], i1441[8], i1441[9], i1441[10])
  i1440.ambientGroundColor = new pc.Color(i1441[11], i1441[12], i1441[13], i1441[14])
  i1440.ambientEquatorColor = new pc.Color(i1441[15], i1441[16], i1441[17], i1441[18])
  i1440.fogColor = new pc.Color(i1441[19], i1441[20], i1441[21], i1441[22])
  i1440.fogEndDistance = i1441[23]
  i1440.fogStartDistance = i1441[24]
  i1440.fogDensity = i1441[25]
  i1440.fog = !!i1441[26]
  request.r(i1441[27], i1441[28], 0, i1440, 'skybox')
  i1440.fogMode = i1441[29]
  var i1443 = i1441[30]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1443[i + 0]) );
  }
  i1440.lightmaps = i1442
  i1440.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1441[31], i1440.lightProbes)
  i1440.lightmapsMode = i1441[32]
  i1440.mixedBakeMode = i1441[33]
  i1440.environmentLightingMode = i1441[34]
  i1440.ambientProbe = new pc.SphericalHarmonicsL2(i1441[35])
  i1440.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1441[36])
  i1440.useReferenceAmbientProbe = !!i1441[37]
  request.r(i1441[38], i1441[39], 0, i1440, 'customReflection')
  request.r(i1441[40], i1441[41], 0, i1440, 'defaultReflection')
  i1440.defaultReflectionMode = i1441[42]
  i1440.defaultReflectionResolution = i1441[43]
  i1440.sunLightObjectId = i1441[44]
  i1440.pixelLightCount = i1441[45]
  i1440.defaultReflectionHDR = !!i1441[46]
  i1440.hasLightDataAsset = !!i1441[47]
  i1440.hasManualGenerate = !!i1441[48]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'lightmapColor')
  request.r(i1447[2], i1447[3], 0, i1446, 'lightmapDirection')
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1448 = root || new UnityEngine.LightProbes()
  var i1449 = data
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1457 = data
  var i1459 = i1457[0]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1459[i + 0]));
  }
  i1456.ShaderCompilationErrors = i1458
  i1456.name = i1457[1]
  i1456.guid = i1457[2]
  var i1461 = i1457[3]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( i1461[i + 0] );
  }
  i1456.shaderDefinedKeywords = i1460
  var i1463 = i1457[4]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1463[i + 0]) );
  }
  i1456.passes = i1462
  var i1465 = i1457[5]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1465[i + 0]) );
  }
  i1456.usePasses = i1464
  var i1467 = i1457[6]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1467[i + 0]) );
  }
  i1456.defaultParameterValues = i1466
  request.r(i1457[7], i1457[8], 0, i1456, 'unityFallbackShader')
  i1456.readDepth = !!i1457[9]
  i1456.isCreatedByShaderGraph = !!i1457[10]
  i1456.disableBatching = !!i1457[11]
  i1456.compiled = !!i1457[12]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1471 = data
  i1470.shaderName = i1471[0]
  i1470.errorMessage = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1474 = root || new pc.UnityShaderPass()
  var i1475 = data
  i1474.id = i1475[0]
  i1474.subShaderIndex = i1475[1]
  i1474.name = i1475[2]
  i1474.passType = i1475[3]
  i1474.grabPassTextureName = i1475[4]
  i1474.usePass = !!i1475[5]
  i1474.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[6], i1474.zTest)
  i1474.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[7], i1474.zWrite)
  i1474.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[8], i1474.culling)
  i1474.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1475[9], i1474.blending)
  i1474.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1475[10], i1474.alphaBlending)
  i1474.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[11], i1474.colorWriteMask)
  i1474.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[12], i1474.offsetUnits)
  i1474.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[13], i1474.offsetFactor)
  i1474.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[14], i1474.stencilRef)
  i1474.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[15], i1474.stencilReadMask)
  i1474.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[16], i1474.stencilWriteMask)
  i1474.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1475[17], i1474.stencilOp)
  i1474.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1475[18], i1474.stencilOpFront)
  i1474.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1475[19], i1474.stencilOpBack)
  var i1477 = i1475[20]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1477[i + 0]) );
  }
  i1474.tags = i1476
  var i1479 = i1475[21]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1474.passDefinedKeywords = i1478
  var i1481 = i1475[22]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1481[i + 0]) );
  }
  i1474.passDefinedKeywordGroups = i1480
  var i1483 = i1475[23]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1483[i + 0]) );
  }
  i1474.variants = i1482
  var i1485 = i1475[24]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1485[i + 0]) );
  }
  i1474.excludedVariants = i1484
  i1474.hasDepthReader = !!i1475[25]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1487 = data
  i1486.val = i1487[0]
  i1486.name = i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1489 = data
  i1488.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[0], i1488.src)
  i1488.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[1], i1488.dst)
  i1488.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1489[2], i1488.op)
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1491 = data
  i1490.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[0], i1490.pass)
  i1490.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[1], i1490.fail)
  i1490.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[2], i1490.zFail)
  i1490.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[3], i1490.comp)
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.value = i1495[1]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1499 = data
  var i1501 = i1499[0]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( i1501[i + 0] );
  }
  i1498.keywords = i1500
  i1498.hasDiscard = !!i1499[1]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1505 = data
  i1504.passId = i1505[0]
  i1504.subShaderIndex = i1505[1]
  var i1507 = i1505[2]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( i1507[i + 0] );
  }
  i1504.keywords = i1506
  i1504.vertexProgram = i1505[3]
  i1504.fragmentProgram = i1505[4]
  i1504.exportedForWebGl2 = !!i1505[5]
  i1504.readDepth = !!i1505[6]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'shader')
  i1510.pass = i1511[2]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.type = i1515[1]
  i1514.value = new pc.Vec4( i1515[2], i1515[3], i1515[4], i1515[5] )
  i1514.textureValue = i1515[6]
  i1514.shaderPropertyFlag = i1515[7]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1517 = data
  i1516.name = i1517[0]
  request.r(i1517[1], i1517[2], 0, i1516, 'texture')
  i1516.aabb = i1517[3]
  i1516.vertices = i1517[4]
  i1516.triangles = i1517[5]
  i1516.textureRect = UnityEngine.Rect.MinMaxRect(i1517[6], i1517[7], i1517[8], i1517[9])
  i1516.packedRect = UnityEngine.Rect.MinMaxRect(i1517[10], i1517[11], i1517[12], i1517[13])
  i1516.border = new pc.Vec4( i1517[14], i1517[15], i1517[16], i1517[17] )
  i1516.transparency = i1517[18]
  i1516.bounds = i1517[19]
  i1516.pixelsPerUnit = i1517[20]
  i1516.textureWidth = i1517[21]
  i1516.textureHeight = i1517[22]
  i1516.nativeSize = new pc.Vec2( i1517[23], i1517[24] )
  i1516.pivot = new pc.Vec2( i1517[25], i1517[26] )
  i1516.textureRectOffset = new pc.Vec2( i1517[27], i1517[28] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1519 = data
  i1518.name = i1519[0]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1521 = data
  i1520.name = i1521[0]
  i1520.wrapMode = i1521[1]
  i1520.isLooping = !!i1521[2]
  i1520.length = i1521[3]
  var i1523 = i1521[4]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1523[i + 0]) );
  }
  i1520.curves = i1522
  var i1525 = i1521[5]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1525[i + 0]) );
  }
  i1520.events = i1524
  i1520.halfPrecision = !!i1521[6]
  i1520._frameRate = i1521[7]
  i1520.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1521[8], i1520.localBounds)
  i1520.hasMuscleCurves = !!i1521[9]
  var i1527 = i1521[10]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( i1527[i + 0] );
  }
  i1520.clipMuscleConstant = i1526
  i1520.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1521[11], i1520.clipBindingConstant)
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1531 = data
  i1530.path = i1531[0]
  i1530.hash = i1531[1]
  i1530.componentType = i1531[2]
  i1530.property = i1531[3]
  i1530.keys = i1531[4]
  var i1533 = i1531[5]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1533[i + 0]) );
  }
  i1530.objectReferenceKeys = i1532
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1537 = data
  i1536.time = i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'value')
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1541 = data
  i1540.functionName = i1541[0]
  i1540.floatParameter = i1541[1]
  i1540.intParameter = i1541[2]
  i1540.stringParameter = i1541[3]
  request.r(i1541[4], i1541[5], 0, i1540, 'objectReferenceParameter')
  i1540.time = i1541[6]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1543 = data
  i1542.center = new pc.Vec3( i1543[0], i1543[1], i1543[2] )
  i1542.extends = new pc.Vec3( i1543[3], i1543[4], i1543[5] )
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1547 = data
  var i1549 = i1547[0]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( i1549[i + 0] );
  }
  i1546.genericBindings = i1548
  var i1551 = i1547[1]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( i1551[i + 0] );
  }
  i1546.pptrCurveMapping = i1550
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.ascent = i1553[1]
  i1552.originalLineHeight = i1553[2]
  i1552.fontSize = i1553[3]
  var i1555 = i1553[4]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1555[i + 0]) );
  }
  i1552.characterInfo = i1554
  request.r(i1553[5], i1553[6], 0, i1552, 'texture')
  i1552.originalFontSize = i1553[7]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1559 = data
  i1558.index = i1559[0]
  i1558.advance = i1559[1]
  i1558.bearing = i1559[2]
  i1558.glyphWidth = i1559[3]
  i1558.glyphHeight = i1559[4]
  i1558.minX = i1559[5]
  i1558.maxX = i1559[6]
  i1558.minY = i1559[7]
  i1558.maxY = i1559[8]
  i1558.uvBottomLeftX = i1559[9]
  i1558.uvBottomLeftY = i1559[10]
  i1558.uvBottomRightX = i1559[11]
  i1558.uvBottomRightY = i1559[12]
  i1558.uvTopLeftX = i1559[13]
  i1558.uvTopLeftY = i1559[14]
  i1558.uvTopRightX = i1559[15]
  i1558.uvTopRightY = i1559[16]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1561 = data
  i1560.name = i1561[0]
  var i1563 = i1561[1]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1563[i + 0]) );
  }
  i1560.layers = i1562
  var i1565 = i1561[2]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1565[i + 0]) );
  }
  i1560.parameters = i1564
  i1560.animationClips = i1561[3]
  i1560.avatarUnsupported = i1561[4]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1569 = data
  i1568.name = i1569[0]
  i1568.defaultWeight = i1569[1]
  i1568.blendingMode = i1569[2]
  i1568.avatarMask = i1569[3]
  i1568.syncedLayerIndex = i1569[4]
  i1568.syncedLayerAffectsTiming = !!i1569[5]
  i1568.syncedLayers = i1569[6]
  i1568.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1569[7], i1568.stateMachine)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1571 = data
  i1570.id = i1571[0]
  i1570.name = i1571[1]
  i1570.path = i1571[2]
  var i1573 = i1571[3]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1573[i + 0]) );
  }
  i1570.states = i1572
  var i1575 = i1571[4]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1575[i + 0]) );
  }
  i1570.machines = i1574
  var i1577 = i1571[5]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1577[i + 0]) );
  }
  i1570.entryStateTransitions = i1576
  var i1579 = i1571[6]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1579[i + 0]) );
  }
  i1570.exitStateTransitions = i1578
  var i1581 = i1571[7]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1581[i + 0]) );
  }
  i1570.anyStateTransitions = i1580
  i1570.defaultStateId = i1571[8]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1585 = data
  i1584.id = i1585[0]
  i1584.name = i1585[1]
  i1584.cycleOffset = i1585[2]
  i1584.cycleOffsetParameter = i1585[3]
  i1584.cycleOffsetParameterActive = !!i1585[4]
  i1584.mirror = !!i1585[5]
  i1584.mirrorParameter = i1585[6]
  i1584.mirrorParameterActive = !!i1585[7]
  i1584.motionId = i1585[8]
  i1584.nameHash = i1585[9]
  i1584.fullPathHash = i1585[10]
  i1584.speed = i1585[11]
  i1584.speedParameter = i1585[12]
  i1584.speedParameterActive = !!i1585[13]
  i1584.tag = i1585[14]
  i1584.tagHash = i1585[15]
  i1584.writeDefaultValues = !!i1585[16]
  var i1587 = i1585[17]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 2) {
  request.r(i1587[i + 0], i1587[i + 1], 2, i1586, '')
  }
  i1584.behaviours = i1586
  var i1589 = i1585[18]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1589[i + 0]) );
  }
  i1584.transitions = i1588
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1595 = data
  i1594.fullPath = i1595[0]
  i1594.canTransitionToSelf = !!i1595[1]
  i1594.duration = i1595[2]
  i1594.exitTime = i1595[3]
  i1594.hasExitTime = !!i1595[4]
  i1594.hasFixedDuration = !!i1595[5]
  i1594.interruptionSource = i1595[6]
  i1594.offset = i1595[7]
  i1594.orderedInterruption = !!i1595[8]
  i1594.destinationStateId = i1595[9]
  i1594.isExit = !!i1595[10]
  i1594.mute = !!i1595[11]
  i1594.solo = !!i1595[12]
  var i1597 = i1595[13]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1597[i + 0]) );
  }
  i1594.conditions = i1596
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1603 = data
  i1602.destinationStateId = i1603[0]
  i1602.isExit = !!i1603[1]
  i1602.mute = !!i1603[2]
  i1602.solo = !!i1603[3]
  var i1605 = i1603[4]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1605[i + 0]) );
  }
  i1602.conditions = i1604
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1609 = data
  i1608.defaultBool = !!i1609[0]
  i1608.defaultFloat = i1609[1]
  i1608.defaultInt = i1609[2]
  i1608.name = i1609[3]
  i1608.nameHash = i1609[4]
  i1608.type = i1609[5]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.bytes64 = i1611[1]
  i1610.data = i1611[2]
  return i1610
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1612 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 2, i1614, '')
  }
  i1612.atlasAssets = i1614
  i1612.scale = i1613[1]
  request.r(i1613[2], i1613[3], 0, i1612, 'skeletonJSON')
  i1612.isUpgradingBlendModeMaterials = !!i1613[4]
  i1612.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1613[5], i1612.blendModeMaterials)
  var i1617 = i1613[6]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 1, i1616, '')
  }
  i1612.skeletonDataModifiers = i1616
  var i1619 = i1613[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( i1619[i + 0] );
  }
  i1612.fromAnimation = i1618
  var i1621 = i1613[8]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( i1621[i + 0] );
  }
  i1612.toAnimation = i1620
  i1612.duration = i1613[9]
  i1612.defaultMix = i1613[10]
  request.r(i1613[11], i1613[12], 0, i1612, 'controller')
  return i1612
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1624 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1625 = data
  i1624.applyAdditiveMaterial = !!i1625[0]
  var i1627 = i1625[1]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1627[i + 0]));
  }
  i1624.additiveMaterials = i1626
  var i1629 = i1625[2]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1629[i + 0]));
  }
  i1624.multiplyMaterials = i1628
  var i1631 = i1625[3]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1631[i + 0]));
  }
  i1624.screenMaterials = i1630
  i1624.requiresBlendModeMaterials = !!i1625[4]
  return i1624
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1634 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1635 = data
  i1634.pageName = i1635[0]
  request.r(i1635[1], i1635[2], 0, i1634, 'material')
  return i1634
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1638 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'atlasFile')
  var i1641 = i1639[2]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.materials = i1640
  i1638.textureLoadingMode = i1639[3]
  request.r(i1639[4], i1639[5], 0, i1638, 'onDemandTextureLoader')
  return i1638
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'atlas')
  i1642.normalStyle = i1643[2]
  i1642.normalSpacingOffset = i1643[3]
  i1642.boldStyle = i1643[4]
  i1642.boldSpacing = i1643[5]
  i1642.italicStyle = i1643[6]
  i1642.tabSize = i1643[7]
  i1642.hashCode = i1643[8]
  request.r(i1643[9], i1643[10], 0, i1642, 'material')
  i1642.materialHashCode = i1643[11]
  i1642.m_Version = i1643[12]
  i1642.m_SourceFontFileGUID = i1643[13]
  request.r(i1643[14], i1643[15], 0, i1642, 'm_SourceFontFile_EditorRef')
  request.r(i1643[16], i1643[17], 0, i1642, 'm_SourceFontFile')
  i1642.m_AtlasPopulationMode = i1643[18]
  i1642.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1643[19], i1642.m_FaceInfo)
  var i1645 = i1643[20]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('UnityEngine.TextCore.Glyph', i1645[i + 0]));
  }
  i1642.m_GlyphTable = i1644
  var i1647 = i1643[21]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('TMPro.TMP_Character', i1647[i + 0]));
  }
  i1642.m_CharacterTable = i1646
  var i1649 = i1643[22]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1642.m_AtlasTextures = i1648
  i1642.m_AtlasTextureIndex = i1643[23]
  i1642.m_IsMultiAtlasTexturesEnabled = !!i1643[24]
  i1642.m_ClearDynamicDataOnBuild = !!i1643[25]
  var i1651 = i1643[26]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('UnityEngine.TextCore.GlyphRect', i1651[i + 0]));
  }
  i1642.m_UsedGlyphRects = i1650
  var i1653 = i1643[27]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('UnityEngine.TextCore.GlyphRect', i1653[i + 0]));
  }
  i1642.m_FreeGlyphRects = i1652
  i1642.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1643[28], i1642.m_fontInfo)
  i1642.m_AtlasWidth = i1643[29]
  i1642.m_AtlasHeight = i1643[30]
  i1642.m_AtlasPadding = i1643[31]
  i1642.m_AtlasRenderMode = i1643[32]
  var i1655 = i1643[33]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('TMPro.TMP_Glyph', i1655[i + 0]));
  }
  i1642.m_glyphInfoList = i1654
  i1642.m_KerningTable = request.d('TMPro.KerningTable', i1643[34], i1642.m_KerningTable)
  i1642.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1643[35], i1642.m_FontFeatureTable)
  var i1657 = i1643[36]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 1, i1656, '')
  }
  i1642.fallbackFontAssets = i1656
  var i1659 = i1643[37]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1642.m_FallbackFontAssetTable = i1658
  i1642.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1643[38], i1642.m_CreationSettings)
  var i1661 = i1643[39]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('TMPro.TMP_FontWeightPair', i1661[i + 0]) );
  }
  i1642.m_FontWeightTable = i1660
  var i1663 = i1643[40]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('TMPro.TMP_FontWeightPair', i1663[i + 0]) );
  }
  i1642.fontWeights = i1662
  return i1642
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1665 = data
  i1664.m_FaceIndex = i1665[0]
  i1664.m_FamilyName = i1665[1]
  i1664.m_StyleName = i1665[2]
  i1664.m_PointSize = i1665[3]
  i1664.m_Scale = i1665[4]
  i1664.m_UnitsPerEM = i1665[5]
  i1664.m_LineHeight = i1665[6]
  i1664.m_AscentLine = i1665[7]
  i1664.m_CapLine = i1665[8]
  i1664.m_MeanLine = i1665[9]
  i1664.m_Baseline = i1665[10]
  i1664.m_DescentLine = i1665[11]
  i1664.m_SuperscriptOffset = i1665[12]
  i1664.m_SuperscriptSize = i1665[13]
  i1664.m_SubscriptOffset = i1665[14]
  i1664.m_SubscriptSize = i1665[15]
  i1664.m_UnderlineOffset = i1665[16]
  i1664.m_UnderlineThickness = i1665[17]
  i1664.m_StrikethroughOffset = i1665[18]
  i1664.m_StrikethroughThickness = i1665[19]
  i1664.m_TabWidth = i1665[20]
  return i1664
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1669 = data
  i1668.m_Index = i1669[0]
  i1668.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1669[1], i1668.m_Metrics)
  i1668.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1669[2], i1668.m_GlyphRect)
  i1668.m_Scale = i1669[3]
  i1668.m_AtlasIndex = i1669[4]
  i1668.m_ClassDefinitionType = i1669[5]
  return i1668
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1671 = data
  i1670.m_Width = i1671[0]
  i1670.m_Height = i1671[1]
  i1670.m_HorizontalBearingX = i1671[2]
  i1670.m_HorizontalBearingY = i1671[3]
  i1670.m_HorizontalAdvance = i1671[4]
  return i1670
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1673 = data
  i1672.m_X = i1673[0]
  i1672.m_Y = i1673[1]
  i1672.m_Width = i1673[2]
  i1672.m_Height = i1673[3]
  return i1672
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1676 = root || request.c( 'TMPro.TMP_Character' )
  var i1677 = data
  i1676.m_ElementType = i1677[0]
  i1676.m_Unicode = i1677[1]
  i1676.m_GlyphIndex = i1677[2]
  i1676.m_Scale = i1677[3]
  return i1676
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1683 = data
  i1682.Name = i1683[0]
  i1682.PointSize = i1683[1]
  i1682.Scale = i1683[2]
  i1682.CharacterCount = i1683[3]
  i1682.LineHeight = i1683[4]
  i1682.Baseline = i1683[5]
  i1682.Ascender = i1683[6]
  i1682.CapHeight = i1683[7]
  i1682.Descender = i1683[8]
  i1682.CenterLine = i1683[9]
  i1682.SuperscriptOffset = i1683[10]
  i1682.SubscriptOffset = i1683[11]
  i1682.SubSize = i1683[12]
  i1682.Underline = i1683[13]
  i1682.UnderlineThickness = i1683[14]
  i1682.strikethrough = i1683[15]
  i1682.strikethroughThickness = i1683[16]
  i1682.TabWidth = i1683[17]
  i1682.Padding = i1683[18]
  i1682.AtlasWidth = i1683[19]
  i1682.AtlasHeight = i1683[20]
  return i1682
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1686 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1687 = data
  i1686.id = i1687[0]
  i1686.x = i1687[1]
  i1686.y = i1687[2]
  i1686.width = i1687[3]
  i1686.height = i1687[4]
  i1686.xOffset = i1687[5]
  i1686.yOffset = i1687[6]
  i1686.xAdvance = i1687[7]
  i1686.scale = i1687[8]
  return i1686
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1688 = root || request.c( 'TMPro.KerningTable' )
  var i1689 = data
  var i1691 = i1689[0]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('TMPro.KerningPair', i1691[i + 0]));
  }
  i1688.kerningPairs = i1690
  return i1688
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1694 = root || request.c( 'TMPro.KerningPair' )
  var i1695 = data
  i1694.xOffset = i1695[0]
  i1694.m_FirstGlyph = i1695[1]
  i1694.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1695[2], i1694.m_FirstGlyphAdjustments)
  i1694.m_SecondGlyph = i1695[3]
  i1694.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1695[4], i1694.m_SecondGlyphAdjustments)
  i1694.m_IgnoreSpacingAdjustments = !!i1695[5]
  return i1694
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1696 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1699[i + 0]));
  }
  i1696.m_GlyphPairAdjustmentRecords = i1698
  return i1696
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1702 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1703 = data
  i1702.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1703[0], i1702.m_FirstAdjustmentRecord)
  i1702.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1703[1], i1702.m_SecondAdjustmentRecord)
  i1702.m_FeatureLookupFlags = i1703[2]
  return i1702
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1707 = data
  i1706.sourceFontFileName = i1707[0]
  i1706.sourceFontFileGUID = i1707[1]
  i1706.pointSizeSamplingMode = i1707[2]
  i1706.pointSize = i1707[3]
  i1706.padding = i1707[4]
  i1706.packingMode = i1707[5]
  i1706.atlasWidth = i1707[6]
  i1706.atlasHeight = i1707[7]
  i1706.characterSetSelectionMode = i1707[8]
  i1706.characterSequence = i1707[9]
  i1706.referencedFontAssetGUID = i1707[10]
  i1706.referencedTextAssetGUID = i1707[11]
  i1706.fontStyle = i1707[12]
  i1706.fontStyleModifier = i1707[13]
  i1706.renderMode = i1707[14]
  i1706.includeFontFeatures = !!i1707[15]
  return i1706
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'regularTypeface')
  request.r(i1711[2], i1711[3], 0, i1710, 'italicTypeface')
  return i1710
}

Deserializers["VirtueSky.Events.EventNoParam"] = function (request, data, root) {
  var i1712 = root || request.c( 'VirtueSky.Events.EventNoParam' )
  var i1713 = data
  i1712.description = i1713[0]
  return i1712
}

Deserializers["VirtueSky.Events.GameObjectEvent"] = function (request, data, root) {
  var i1714 = root || request.c( 'VirtueSky.Events.GameObjectEvent' )
  var i1715 = data
  i1714.description = i1715[0]
  return i1714
}

Deserializers["VirtueSky.Events.FloatEvent"] = function (request, data, root) {
  var i1716 = root || request.c( 'VirtueSky.Events.FloatEvent' )
  var i1717 = data
  i1716.description = i1717[0]
  return i1716
}

Deserializers["VirtueSky.Events.IntegerEvent"] = function (request, data, root) {
  var i1718 = root || request.c( 'VirtueSky.Events.IntegerEvent' )
  var i1719 = data
  i1718.description = i1719[0]
  return i1718
}

Deserializers["VirtueSky.Audio.PlaySfxEvent"] = function (request, data, root) {
  var i1720 = root || request.c( 'VirtueSky.Audio.PlaySfxEvent' )
  var i1721 = data
  i1720.description = i1721[0]
  return i1720
}

Deserializers["VirtueSky.Audio.SoundData"] = function (request, data, root) {
  var i1722 = root || request.c( 'VirtueSky.Audio.SoundData' )
  var i1723 = data
  i1722.loop = !!i1723[0]
  i1722.volume = i1723[1]
  i1722.isMusicFadeVolume = !!i1723[2]
  i1722.fadeInDuration = i1723[3]
  i1722.fadeOutDuration = i1723[4]
  var i1725 = i1723[5]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 1, i1724, '')
  }
  i1722.audioClips = i1724
  i1722.description = i1723[6]
  return i1722
}

Deserializers["VirtueSky.Variables.BooleanVariable"] = function (request, data, root) {
  var i1728 = root || request.c( 'VirtueSky.Variables.BooleanVariable' )
  var i1729 = data
  i1728.description = i1729[0]
  return i1728
}

Deserializers["LoseData"] = function (request, data, root) {
  var i1730 = root || request.c( 'LoseData' )
  var i1731 = data
  i1730.timeStartWarn = i1731[0]
  i1730.warningTime = i1731[1]
  request.r(i1731[2], i1731[3], 0, i1730, 'loseBy')
  var i1733 = i1731[4]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('LoseDataInfor')))
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.add(request.d('LoseDataInfor', i1733[i + 0]));
  }
  i1730.loseDataInfors = i1732
  return i1730
}

Deserializers["LoseDataInfor"] = function (request, data, root) {
  var i1736 = root || request.c( 'LoseDataInfor' )
  var i1737 = data
  i1736.loseType = i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'loseName')
  request.r(i1737[3], i1737[4], 0, i1736, 'prefab')
  i1736.loseDescription = i1737[5]
  return i1736
}

Deserializers["VirtueSky.Variables.StringVariable"] = function (request, data, root) {
  var i1738 = root || request.c( 'VirtueSky.Variables.StringVariable' )
  var i1739 = data
  i1738.description = i1739[0]
  return i1738
}

Deserializers["VirtueSky.Variables.FloatVariable"] = function (request, data, root) {
  var i1740 = root || request.c( 'VirtueSky.Variables.FloatVariable' )
  var i1741 = data
  i1740.isClamped = !!i1741[0]
  i1740.minMax = new pc.Vec2( i1741[1], i1741[2] )
  i1740.description = i1741[3]
  return i1740
}

Deserializers["VirtueSky.Variables.IntegerVariable"] = function (request, data, root) {
  var i1742 = root || request.c( 'VirtueSky.Variables.IntegerVariable' )
  var i1743 = data
  i1742.isClamped = !!i1743[0]
  i1742.minMax = new pc.Vec2( i1743[1], i1743[2] )
  i1742.description = i1743[3]
  return i1742
}

Deserializers["VirtueSky.Audio.StopSfxEvent"] = function (request, data, root) {
  var i1744 = root || request.c( 'VirtueSky.Audio.StopSfxEvent' )
  var i1745 = data
  i1744.description = i1745[0]
  return i1744
}

Deserializers["VirtueSky.Events.ClickButtonEvent"] = function (request, data, root) {
  var i1746 = root || request.c( 'VirtueSky.Events.ClickButtonEvent' )
  var i1747 = data
  i1746.description = i1747[0]
  return i1746
}

Deserializers["LevelModeData"] = function (request, data, root) {
  var i1748 = root || request.c( 'LevelModeData' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'levelSettings')
  request.r(i1749[2], i1749[3], 0, i1748, 'levelTypeData')
  var i1751 = i1749[4]
  var i1750 = new (System.Collections.Generic.List$1(Bridge.ns('LevelModeInfor')))
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.add(request.d('LevelModeInfor', i1751[i + 0]));
  }
  i1748.levelModeInfors = i1750
  request.r(i1749[5], i1749[6], 0, i1748, 'currentLevel')
  return i1748
}

Deserializers["LevelModeInfor"] = function (request, data, root) {
  var i1754 = root || request.c( 'LevelModeInfor' )
  var i1755 = data
  i1754.levelIndex = i1755[0]
  i1754.star = i1755[1]
  i1754.levelMode = i1755[2]
  return i1754
}

Deserializers["TheBeginning.LevelSystem.LevelSettings"] = function (request, data, root) {
  var i1756 = root || request.c( 'TheBeginning.LevelSystem.LevelSettings' )
  var i1757 = data
  i1756.maxLevel = i1757[0]
  i1756.startLoopLevel = i1757[1]
  i1756.levelFormat = i1757[2]
  var i1759 = i1757[3]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('TheBeginning.LevelSystem.Level')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1756.listLevels = i1758
  return i1756
}

Deserializers["LevelTypeData"] = function (request, data, root) {
  var i1762 = root || request.c( 'LevelTypeData' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('LevelTypeInfor')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('LevelTypeInfor', i1765[i + 0]));
  }
  i1762.levelTypeInfors = i1764
  return i1762
}

Deserializers["LevelTypeInfor"] = function (request, data, root) {
  var i1768 = root || request.c( 'LevelTypeInfor' )
  var i1769 = data
  i1768.LevelMode = i1769[0]
  request.r(i1769[1], i1769[2], 0, i1768, 'icon')
  request.r(i1769[3], i1769[4], 0, i1768, 'iconBoardGameplay')
  i1768.description = i1769[5]
  request.r(i1769[6], i1769[7], 0, i1768, 'soundStartGame')
  i1768.coinBonus = i1769[8]
  request.r(i1769[9], i1769[10], 0, i1768, 'colorTextGameplay')
  request.r(i1769[11], i1769[12], 0, i1768, 'colorTextHome')
  request.r(i1769[13], i1769[14], 0, i1768, 'iconReplay')
  request.r(i1769[15], i1769[16], 0, i1768, 'iconBoardLevel')
  request.r(i1769[17], i1769[18], 0, i1768, 'iconSetting')
  var i1771 = i1769[19]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('LevelTypeInfor+BoosterIconData')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('LevelTypeInfor+BoosterIconData', i1771[i + 0]));
  }
  i1768.boosterIconDatas = i1770
  return i1768
}

Deserializers["LevelTypeInfor+BoosterIconData"] = function (request, data, root) {
  var i1774 = root || request.c( 'LevelTypeInfor+BoosterIconData' )
  var i1775 = data
  i1774.elementType = i1775[0]
  request.r(i1775[1], i1775[2], 0, i1774, 'icon')
  request.r(i1775[3], i1775[4], 0, i1774, 'iconLock')
  return i1774
}

Deserializers["VirtueSky.Audio.PlayMusicEvent"] = function (request, data, root) {
  var i1776 = root || request.c( 'VirtueSky.Audio.PlayMusicEvent' )
  var i1777 = data
  i1776.description = i1777[0]
  return i1776
}

Deserializers["VirtueSky.Events.BooleanEvent"] = function (request, data, root) {
  var i1778 = root || request.c( 'VirtueSky.Events.BooleanEvent' )
  var i1779 = data
  i1778.description = i1779[0]
  return i1778
}

Deserializers["LevelAdditionalTime"] = function (request, data, root) {
  var i1780 = root || request.c( 'LevelAdditionalTime' )
  var i1781 = data
  return i1780
}

Deserializers["TheBeginning.UI.PopupSettings"] = function (request, data, root) {
  var i1782 = root || request.c( 'TheBeginning.UI.PopupSettings' )
  var i1783 = data
  i1782.pathLoad = i1783[0]
  var i1785 = i1783[1]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('TheBeginning.UI.UIPopup')))
  for(var i = 0; i < i1785.length; i += 2) {
  request.r(i1785[i + 0], i1785[i + 1], 1, i1784, '')
  }
  i1782.listUiPopups = i1784
  return i1782
}

Deserializers["UnlockNewElementData"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnlockNewElementData' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'currentLevel')
  var i1791 = i1789[2]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('UnlockNewElementInfor')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('UnlockNewElementInfor', i1791[i + 0]));
  }
  i1788.unlockNewElementInfors = i1790
  return i1788
}

Deserializers["UnlockNewElementInfor"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnlockNewElementInfor' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'mainIconUnlock')
  request.r(i1795[2], i1795[3], 0, i1794, 'titleIconUnlock')
  request.r(i1795[4], i1795[5], 0, i1794, 'smallIconUnlcok')
  i1794.elementName = i1795[6]
  i1794.description = i1795[7]
  i1794.levelUnlock = i1795[8]
  return i1794
}

Deserializers["GameSettings"] = function (request, data, root) {
  var i1796 = root || request.c( 'GameSettings' )
  var i1797 = data
  i1796.enableDebugView = !!i1797[0]
  i1796.targetFrameRate = i1797[1]
  i1796.multiTouchEnabled = !!i1797[2]
  i1796.winLevelMoney = i1797[3]
  i1796.percentWinGiftPerLevel = i1797[4]
  i1796.pauseTimeBoosterAmount = i1797[5]
  i1796.hammerBoosterAmount = i1797[6]
  i1796.suckBoosterAmount = i1797[7]
  i1796.enableNotificationInGame = !!i1797[8]
  i1796.timeDelayHideNotificationInGame = i1797[9]
  i1796.enableRequireInternet = !!i1797[10]
  i1796.timeDelayCheckInternet = i1797[11]
  i1796.timeLoopCheckInternet = i1797[12]
  i1796.enableShowPopupUpdate = !!i1797[13]
  return i1796
}

Deserializers["ImmortalData"] = function (request, data, root) {
  var i1798 = root || request.c( 'ImmortalData' )
  var i1799 = data
  i1798.OnInStatusImmortalAction = request.d('System.Action', i1799[0], i1798.OnInStatusImmortalAction)
  i1798.OnEndStatusImmortalAction = request.d('System.Action', i1799[1], i1798.OnEndStatusImmortalAction)
  request.r(i1799[2], i1799[3], 0, i1798, 'totalTimeCountDownImmortalVariable')
  i1798.isImmortalStatusVariable = !!i1799[4]
  request.r(i1799[5], i1799[6], 0, i1798, 'isFirstTimePlayGame')
  return i1798
}

Deserializers["HeartData"] = function (request, data, root) {
  var i1800 = root || request.c( 'HeartData' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'immortalData')
  i1800.id = i1801[2]
  i1800.max = i1801[3]
  request.r(i1801[4], i1801[5], 0, i1800, 'updateHeartEvent')
  request.r(i1801[6], i1801[7], 0, i1800, 'balanceAmount')
  i1800.countIncrease = i1801[8]
  i1800.timeIncrease = i1801[9]
  return i1800
}

Deserializers["PlaneManagerData"] = function (request, data, root) {
  var i1802 = root || request.c( 'PlaneManagerData' )
  var i1803 = data
  i1802.id = i1803[0]
  var i1805 = i1803[1]
  var i1804 = new (System.Collections.Generic.List$1(Bridge.ns('PlaneData')))
  for(var i = 0; i < i1805.length; i += 2) {
  request.r(i1805[i + 0], i1805[i + 1], 1, i1804, '')
  }
  i1802.listData = i1804
  request.r(i1803[2], i1803[3], 0, i1802, 'remoteConfigBgID')
  return i1802
}

Deserializers["PlaneData"] = function (request, data, root) {
  var i1808 = root || request.c( 'PlaneData' )
  var i1809 = data
  i1808.id = i1809[0]
  i1808.isUseDefault = !!i1809[1]
  request.r(i1809[2], i1809[3], 0, i1808, 'icon')
  request.r(i1809[4], i1809[5], 0, i1808, 'Sprite')
  return i1808
}

Deserializers["GraphicsQualitySetting"] = function (request, data, root) {
  var i1810 = root || request.c( 'GraphicsQualitySetting' )
  var i1811 = data
  i1810.guid = i1811[0]
  var i1813 = i1811[1]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('GraphicsQualitySetting+GraphicsQualityLevel')))
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.add(request.d('GraphicsQualitySetting+GraphicsQualityLevel', i1813[i + 0]));
  }
  i1810.graphicSettings = i1812
  i1810.levelDefault = i1811[2]
  return i1810
}

Deserializers["GraphicsQualitySetting+GraphicsQualityLevel"] = function (request, data, root) {
  var i1816 = root || request.c( 'GraphicsQualitySetting+GraphicsQualityLevel' )
  var i1817 = data
  i1816.qualityName = i1817[0]
  i1816.qualityLevel = i1817[1]
  i1816.antiAliasing = i1817[2]
  i1816.shadowQuality = i1817[3]
  i1816.shadowResolution = i1817[4]
  i1816.shadowProjection = i1817[5]
  i1816.shadowDistance = i1817[6]
  i1816.shadowNearPlaneOffset = i1817[7]
  return i1816
}

Deserializers["VirtueSky.Audio.SfxVolumeChange"] = function (request, data, root) {
  var i1818 = root || request.c( 'VirtueSky.Audio.SfxVolumeChange' )
  var i1819 = data
  i1818.isClamped = !!i1819[0]
  i1818.minMax = new pc.Vec2( i1819[1], i1819[2] )
  i1818.description = i1819[3]
  return i1818
}

Deserializers["VirtueSky.Audio.MusicVolumeChange"] = function (request, data, root) {
  var i1820 = root || request.c( 'VirtueSky.Audio.MusicVolumeChange' )
  var i1821 = data
  i1820.isClamped = !!i1821[0]
  i1820.minMax = new pc.Vec2( i1821[1], i1821[2] )
  i1820.description = i1821[3]
  return i1820
}

Deserializers["TheBeginning.LevelSystem.EventLoadLevel"] = function (request, data, root) {
  var i1822 = root || request.c( 'TheBeginning.LevelSystem.EventLoadLevel' )
  var i1823 = data
  i1822.description = i1823[0]
  return i1822
}

Deserializers["TheBeginning.LevelSystem.EventGetCurrentLevel"] = function (request, data, root) {
  var i1824 = root || request.c( 'TheBeginning.LevelSystem.EventGetCurrentLevel' )
  var i1825 = data
  i1824.description = i1825[0]
  return i1824
}

Deserializers["TheBeginning.LevelSystem.EventGetPreviousLevel"] = function (request, data, root) {
  var i1826 = root || request.c( 'TheBeginning.LevelSystem.EventGetPreviousLevel' )
  var i1827 = data
  i1826.description = i1827[0]
  return i1826
}

Deserializers["VirtueSky.Audio.StopMusicEvent"] = function (request, data, root) {
  var i1828 = root || request.c( 'VirtueSky.Audio.StopMusicEvent' )
  var i1829 = data
  i1828.description = i1829[0]
  return i1828
}

Deserializers["VirtueSky.Audio.PauseMusicEvent"] = function (request, data, root) {
  var i1830 = root || request.c( 'VirtueSky.Audio.PauseMusicEvent' )
  var i1831 = data
  i1830.description = i1831[0]
  return i1830
}

Deserializers["VirtueSky.Audio.ResumeMusicEvent"] = function (request, data, root) {
  var i1832 = root || request.c( 'VirtueSky.Audio.ResumeMusicEvent' )
  var i1833 = data
  i1832.description = i1833[0]
  return i1832
}

Deserializers["VirtueSky.Audio.PauseSfxEvent"] = function (request, data, root) {
  var i1834 = root || request.c( 'VirtueSky.Audio.PauseSfxEvent' )
  var i1835 = data
  i1834.description = i1835[0]
  return i1834
}

Deserializers["VirtueSky.Audio.ResumeSfxEvent"] = function (request, data, root) {
  var i1836 = root || request.c( 'VirtueSky.Audio.ResumeSfxEvent' )
  var i1837 = data
  i1836.description = i1837[0]
  return i1836
}

Deserializers["VirtueSky.Audio.FinishSfxEvent"] = function (request, data, root) {
  var i1838 = root || request.c( 'VirtueSky.Audio.FinishSfxEvent' )
  var i1839 = data
  i1838.description = i1839[0]
  return i1838
}

Deserializers["VirtueSky.Audio.StopAllSfxEvent"] = function (request, data, root) {
  var i1840 = root || request.c( 'VirtueSky.Audio.StopAllSfxEvent' )
  var i1841 = data
  i1840.description = i1841[0]
  return i1840
}

Deserializers["VirtueSky.TouchInput.InputEventTouchBegin"] = function (request, data, root) {
  var i1842 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchBegin' )
  var i1843 = data
  i1842.description = i1843[0]
  return i1842
}

Deserializers["VirtueSky.TouchInput.InputEventTouchMove"] = function (request, data, root) {
  var i1844 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchMove' )
  var i1845 = data
  i1844.description = i1845[0]
  return i1844
}

Deserializers["VirtueSky.TouchInput.InputEventTouchStationary"] = function (request, data, root) {
  var i1846 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchStationary' )
  var i1847 = data
  i1846.description = i1847[0]
  return i1846
}

Deserializers["VirtueSky.TouchInput.InputEventTouchEnd"] = function (request, data, root) {
  var i1848 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchEnd' )
  var i1849 = data
  i1848.description = i1849[0]
  return i1848
}

Deserializers["VirtueSky.TouchInput.InputEventTouchCancel"] = function (request, data, root) {
  var i1850 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchCancel' )
  var i1851 = data
  i1850.description = i1851[0]
  return i1850
}

Deserializers["VirtueSky.TouchInput.InputPreventTouchVariable"] = function (request, data, root) {
  var i1852 = root || request.c( 'VirtueSky.TouchInput.InputPreventTouchVariable' )
  var i1853 = data
  i1852.description = i1853[0]
  return i1852
}

Deserializers["VirtueSky.Events.Vector3Event"] = function (request, data, root) {
  var i1854 = root || request.c( 'VirtueSky.Events.Vector3Event' )
  var i1855 = data
  i1854.description = i1855[0]
  return i1854
}

Deserializers["VirtueSky.Variables.Vector3Variable"] = function (request, data, root) {
  var i1856 = root || request.c( 'VirtueSky.Variables.Vector3Variable' )
  var i1857 = data
  i1856.description = i1857[0]
  return i1856
}

Deserializers["ColorConfig"] = function (request, data, root) {
  var i1858 = root || request.c( 'ColorConfig' )
  var i1859 = data
  var i1861 = i1859[0]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('ColorData')))
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.add(request.d('ColorData', i1861[i + 0]));
  }
  i1858.colors = i1860
  return i1858
}

Deserializers["ColorData"] = function (request, data, root) {
  var i1864 = root || request.c( 'ColorData' )
  var i1865 = data
  i1864.type = i1865[0]
  i1864.color = new pc.Color(i1865[1], i1865[2], i1865[3], i1865[4])
  return i1864
}

Deserializers["GridSetting"] = function (request, data, root) {
  var i1866 = root || request.c( 'GridSetting' )
  var i1867 = data
  i1866.rectangle = request.d('GridSettingData', i1867[0], i1866.rectangle)
  i1866.hexagon = request.d('GridSettingData', i1867[1], i1866.hexagon)
  return i1866
}

Deserializers["GridSettingData"] = function (request, data, root) {
  var i1868 = root || request.c( 'GridSettingData' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'prefab')
  request.r(i1869[2], i1869[3], 0, i1868, 'size')
  return i1868
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1870 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1871 = data
  i1870.m_GlyphIndex = i1871[0]
  i1870.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1871[1], i1870.m_GlyphValueRecord)
  return i1870
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1872 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1873 = data
  i1872.m_XPlacement = i1873[0]
  i1872.m_YPlacement = i1873[1]
  i1872.m_XAdvance = i1873[2]
  i1872.m_YAdvance = i1873[3]
  return i1872
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1874 = root || request.c( 'TMPro.TMP_Settings' )
  var i1875 = data
  i1874.m_enableWordWrapping = !!i1875[0]
  i1874.m_enableKerning = !!i1875[1]
  i1874.m_enableExtraPadding = !!i1875[2]
  i1874.m_enableTintAllSprites = !!i1875[3]
  i1874.m_enableParseEscapeCharacters = !!i1875[4]
  i1874.m_EnableRaycastTarget = !!i1875[5]
  i1874.m_GetFontFeaturesAtRuntime = !!i1875[6]
  i1874.m_missingGlyphCharacter = i1875[7]
  i1874.m_warningsDisabled = !!i1875[8]
  request.r(i1875[9], i1875[10], 0, i1874, 'm_defaultFontAsset')
  i1874.m_defaultFontAssetPath = i1875[11]
  i1874.m_defaultFontSize = i1875[12]
  i1874.m_defaultAutoSizeMinRatio = i1875[13]
  i1874.m_defaultAutoSizeMaxRatio = i1875[14]
  i1874.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1875[15], i1875[16] )
  i1874.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1875[17], i1875[18] )
  i1874.m_autoSizeTextContainer = !!i1875[19]
  i1874.m_IsTextObjectScaleStatic = !!i1875[20]
  var i1877 = i1875[21]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 1, i1876, '')
  }
  i1874.m_fallbackFontAssets = i1876
  i1874.m_matchMaterialPreset = !!i1875[22]
  request.r(i1875[23], i1875[24], 0, i1874, 'm_defaultSpriteAsset')
  i1874.m_defaultSpriteAssetPath = i1875[25]
  i1874.m_enableEmojiSupport = !!i1875[26]
  i1874.m_MissingCharacterSpriteUnicode = i1875[27]
  i1874.m_defaultColorGradientPresetsPath = i1875[28]
  request.r(i1875[29], i1875[30], 0, i1874, 'm_defaultStyleSheet')
  i1874.m_StyleSheetsResourcePath = i1875[31]
  request.r(i1875[32], i1875[33], 0, i1874, 'm_leadingCharacters')
  request.r(i1875[34], i1875[35], 0, i1874, 'm_followingCharacters')
  i1874.m_UseModernHangulLineBreakingRules = !!i1875[36]
  return i1874
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'spriteSheet')
  var i1881 = i1879[2]
  var i1880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.add(request.d('TMPro.TMP_Sprite', i1881[i + 0]));
  }
  i1878.spriteInfoList = i1880
  var i1883 = i1879[3]
  var i1882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1883.length; i += 2) {
  request.r(i1883[i + 0], i1883[i + 1], 1, i1882, '')
  }
  i1878.fallbackSpriteAssets = i1882
  i1878.hashCode = i1879[4]
  request.r(i1879[5], i1879[6], 0, i1878, 'material')
  i1878.materialHashCode = i1879[7]
  i1878.m_Version = i1879[8]
  i1878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1879[9], i1878.m_FaceInfo)
  var i1885 = i1879[10]
  var i1884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.add(request.d('TMPro.TMP_SpriteCharacter', i1885[i + 0]));
  }
  i1878.m_SpriteCharacterTable = i1884
  var i1887 = i1879[11]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.add(request.d('TMPro.TMP_SpriteGlyph', i1887[i + 0]));
  }
  i1878.m_SpriteGlyphTable = i1886
  return i1878
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.hashCode = i1891[1]
  i1890.unicode = i1891[2]
  i1890.pivot = new pc.Vec2( i1891[3], i1891[4] )
  request.r(i1891[5], i1891[6], 0, i1890, 'sprite')
  i1890.id = i1891[7]
  i1890.x = i1891[8]
  i1890.y = i1891[9]
  i1890.width = i1891[10]
  i1890.height = i1891[11]
  i1890.xOffset = i1891[12]
  i1890.yOffset = i1891[13]
  i1890.xAdvance = i1891[14]
  i1890.scale = i1891[15]
  return i1890
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1896 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1897 = data
  i1896.m_Name = i1897[0]
  i1896.m_HashCode = i1897[1]
  i1896.m_ElementType = i1897[2]
  i1896.m_Unicode = i1897[3]
  i1896.m_GlyphIndex = i1897[4]
  i1896.m_Scale = i1897[5]
  return i1896
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1900 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'sprite')
  i1900.m_Index = i1901[2]
  i1900.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1901[3], i1900.m_Metrics)
  i1900.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1901[4], i1900.m_GlyphRect)
  i1900.m_Scale = i1901[5]
  i1900.m_AtlasIndex = i1901[6]
  i1900.m_ClassDefinitionType = i1901[7]
  return i1900
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1902 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1903 = data
  var i1905 = i1903[0]
  var i1904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.add(request.d('TMPro.TMP_Style', i1905[i + 0]));
  }
  i1902.m_StyleList = i1904
  return i1902
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.TMP_Style' )
  var i1909 = data
  i1908.m_Name = i1909[0]
  i1908.m_HashCode = i1909[1]
  i1908.m_OpeningDefinition = i1909[2]
  i1908.m_ClosingDefinition = i1909[3]
  i1908.m_OpeningTagArray = i1909[4]
  i1908.m_ClosingTagArray = i1909[5]
  i1908.m_OpeningTagUnicodeArray = i1909[6]
  i1908.m_ClosingTagUnicodeArray = i1909[7]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1913[i + 0]) );
  }
  i1910.files = i1912
  i1910.componentToPrefabIds = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1917 = data
  i1916.path = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'unityObject')
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1919 = data
  var i1921 = i1919[0]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1921[i + 0]) );
  }
  i1918.scriptsExecutionOrder = i1920
  var i1923 = i1919[1]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1923[i + 0]) );
  }
  i1918.sortingLayers = i1922
  var i1925 = i1919[2]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1925[i + 0]) );
  }
  i1918.cullingLayers = i1924
  i1918.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1919[3], i1918.timeSettings)
  i1918.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1919[4], i1918.physicsSettings)
  i1918.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1919[5], i1918.physics2DSettings)
  i1918.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1919[6], i1918.qualitySettings)
  i1918.enableRealtimeShadows = !!i1919[7]
  i1918.enableAutoInstancing = !!i1919[8]
  i1918.enableStaticBatching = !!i1919[9]
  i1918.enableDynamicBatching = !!i1919[10]
  i1918.lightmapEncodingQuality = i1919[11]
  i1918.desiredColorSpace = i1919[12]
  var i1927 = i1919[13]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1918.allTags = i1926
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1935 = data
  i1934.id = i1935[0]
  i1934.name = i1935[1]
  i1934.value = i1935[2]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1939 = data
  i1938.id = i1939[0]
  i1938.name = i1939[1]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1941 = data
  i1940.fixedDeltaTime = i1941[0]
  i1940.maximumDeltaTime = i1941[1]
  i1940.timeScale = i1941[2]
  i1940.maximumParticleTimestep = i1941[3]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1943 = data
  i1942.gravity = new pc.Vec3( i1943[0], i1943[1], i1943[2] )
  i1942.defaultSolverIterations = i1943[3]
  i1942.bounceThreshold = i1943[4]
  i1942.autoSyncTransforms = !!i1943[5]
  i1942.autoSimulation = !!i1943[6]
  var i1945 = i1943[7]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1945[i + 0]) );
  }
  i1942.collisionMatrix = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.layerId = i1949[1]
  i1948.otherLayerId = i1949[2]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'material')
  i1950.gravity = new pc.Vec2( i1951[2], i1951[3] )
  i1950.positionIterations = i1951[4]
  i1950.velocityIterations = i1951[5]
  i1950.velocityThreshold = i1951[6]
  i1950.maxLinearCorrection = i1951[7]
  i1950.maxAngularCorrection = i1951[8]
  i1950.maxTranslationSpeed = i1951[9]
  i1950.maxRotationSpeed = i1951[10]
  i1950.baumgarteScale = i1951[11]
  i1950.baumgarteTOIScale = i1951[12]
  i1950.timeToSleep = i1951[13]
  i1950.linearSleepTolerance = i1951[14]
  i1950.angularSleepTolerance = i1951[15]
  i1950.defaultContactOffset = i1951[16]
  i1950.autoSimulation = !!i1951[17]
  i1950.queriesHitTriggers = !!i1951[18]
  i1950.queriesStartInColliders = !!i1951[19]
  i1950.callbacksOnDisable = !!i1951[20]
  i1950.reuseCollisionCallbacks = !!i1951[21]
  i1950.autoSyncTransforms = !!i1951[22]
  var i1953 = i1951[23]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1953[i + 0]) );
  }
  i1950.collisionMatrix = i1952
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.layerId = i1957[1]
  i1956.otherLayerId = i1957[2]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1959 = data
  var i1961 = i1959[0]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1961[i + 0]) );
  }
  i1958.qualityLevels = i1960
  var i1963 = i1959[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( i1963[i + 0] );
  }
  i1958.names = i1962
  i1958.shadows = i1959[2]
  i1958.anisotropicFiltering = i1959[3]
  i1958.antiAliasing = i1959[4]
  i1958.lodBias = i1959[5]
  i1958.shadowCascades = i1959[6]
  i1958.shadowDistance = i1959[7]
  i1958.shadowmaskMode = i1959[8]
  i1958.shadowProjection = i1959[9]
  i1958.shadowResolution = i1959[10]
  i1958.softParticles = !!i1959[11]
  i1958.softVegetation = !!i1959[12]
  i1958.activeColorSpace = i1959[13]
  i1958.desiredColorSpace = i1959[14]
  i1958.masterTextureLimit = i1959[15]
  i1958.maxQueuedFrames = i1959[16]
  i1958.particleRaycastBudget = i1959[17]
  i1958.pixelLightCount = i1959[18]
  i1958.realtimeReflectionProbes = !!i1959[19]
  i1958.shadowCascade2Split = i1959[20]
  i1958.shadowCascade4Split = new pc.Vec3( i1959[21], i1959[22], i1959[23] )
  i1958.streamingMipmapsActive = !!i1959[24]
  i1958.vSyncCount = i1959[25]
  i1958.asyncUploadBufferSize = i1959[26]
  i1958.asyncUploadTimeSlice = i1959[27]
  i1958.billboardsFaceCameraPosition = !!i1959[28]
  i1958.shadowNearPlaneOffset = i1959[29]
  i1958.streamingMipmapsMemoryBudget = i1959[30]
  i1958.maximumLODLevel = i1959[31]
  i1958.streamingMipmapsAddAllCameras = !!i1959[32]
  i1958.streamingMipmapsMaxLevelReduction = i1959[33]
  i1958.streamingMipmapsRenderersPerFrame = i1959[34]
  i1958.resolutionScalingFixedDPIFactor = i1959[35]
  i1958.streamingMipmapsMaxFileIORequests = i1959[36]
  i1958.currentQualityLevel = i1959[37]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1969 = data
  i1968.weight = i1969[0]
  i1968.vertices = i1969[1]
  i1968.normals = i1969[2]
  i1968.tangents = i1969[3]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1973 = data
  i1972.mode = i1973[0]
  i1972.parameter = i1973[1]
  i1972.threshold = i1973[2]
  return i1972
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1975 = data
  i1974.xPlacement = i1975[0]
  i1974.yPlacement = i1975[1]
  i1974.xAdvance = i1975[2]
  i1974.yAdvance = i1975[3]
  return i1974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"153":[154],"155":[154],"156":[154],"157":[154],"158":[154],"159":[154],"160":[161],"162":[82],"163":[102],"164":[102],"165":[102],"166":[102],"167":[102],"168":[102],"169":[102],"170":[171],"172":[171],"173":[171],"174":[171],"175":[171],"176":[171],"177":[171],"178":[171],"179":[171],"180":[171],"181":[171],"182":[171],"183":[171],"184":[82],"185":[96],"186":[187],"188":[187],"1":[0],"83":[82],"189":[1,3,4],"72":[1,3,4],"71":[1,3,4],"70":[1,3,4],"6":[1,3,4],"55":[1,3,4],"190":[1,3,4],"59":[1,3,4],"191":[1,3,4],"192":[1,3,4],"47":[1,3,4],"193":[106],"194":[16],"195":[106],"196":[16],"197":[198],"199":[7],"40":[8],"200":[8],"201":[8],"74":[73],"202":[0],"203":[0],"3":[1],"8":[23,0],"204":[0],"109":[1],"53":[0],"205":[0],"42":[0],"206":[0],"207":[0],"208":[0],"52":[0],"66":[0],"209":[0],"210":[23,0],"211":[0],"212":[0],"65":[0],"68":[0],"198":[23,0],"213":[0],"214":[140],"215":[140],"216":[140],"217":[140],"218":[82],"219":[82],"141":[140],"220":[1],"221":[82],"222":[223],"224":[0],"225":[23,0],"106":[96],"16":[23,0],"226":[78,96],"227":[96],"228":[96,94],"229":[102],"230":[171],"231":[223],"232":[233],"29":[0,23],"234":[0],"105":[96,0],"7":[0,23],"235":[0],"236":[23,0],"237":[96],"238":[23,0],"239":[0]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","TheBeginning.UI.GameplayPopup","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","LevelModeData","VirtueSky.Events.EventNoParam","VirtueSky.Events.FloatEvent","VirtueSky.Variables.BooleanVariable","VirtueSky.Variables.IntegerVariable","VirtueSky.Audio.PlayMusicEvent","VirtueSky.Audio.SoundData","Spine.Unity.SkeletonGraphic","ButtonTutorialUI","UnityEngine.GameObject","VirtueSky.Events.BooleanEvent","LevelAdditionalTime","VirtueSky.Events.IntegerEvent","VirtueSky.Audio.PlaySfxEvent","UnityEngine.CanvasRenderer","UnityEngine.Sprite","UnityEngine.Material","Spine.Unity.SkeletonDataAsset","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Coffee.UIExtensions.UIParticle","UnityEngine.Transform","VirtueSky.Component.SafeAreaComponent","CoinUpdater","VirtueSky.Events.GameObjectEvent","TMPro.TMP_FontAsset","KingUI","TimingController","LoseData","VirtueSky.Variables.FloatVariable","VirtueSky.Audio.StopSfxEvent","VirtueSky.UIButton.ButtonUI","VirtueSky.Events.ClickButtonEvent","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","ButtonCTA","UnityEngine.Shader","UnityEngine.Texture2D","TheBeginning.UI.WinPopup","GameSettings","AnimatorUIControl","ProcessItemGroup","UnlockNewElementData","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","StarUpdater","TheBeginning.UI.LosePopup","HeartData","HeartUI","ImmortalData","TheBeginning.UI.SettingPopupInGame","VirtueSky.Audio.SfxVolumeChange","VirtueSky.Audio.MusicVolumeChange","SelectBackGroundUI","PlaneManagerData","SelectBackGroundItemUI","UnityEngine.UI.ScrollRect","UnityEngine.UI.Mask","GraphicsQualitySettingUI","UnityEngine.UI.Slider","GraphicsQualitySetting","UnlockNewElementPopup","ReplayPopup","BuyBoosterPopup","UnityEngine.AudioSource","VirtueSky.Audio.SoundComponent","CoinGenerate","VirtueSky.Events.Vector3Event","VirtueSky.Component.RotateComponent","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","StarGenerate","RotateUI","UnityEngine.Camera","CameraSystem","BGLevel","TouchSystem","VirtueSky.TouchInput.InputEventTouchBegin","VirtueSky.TouchInput.InputEventTouchEnd","MapSystem","GridSetting","GridSystem","Plane","VirtueSky.Variables.Vector3Variable","ColorConfig","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.SpriteRenderer","CellGrid","FreezeSystem","FreezePrefab","UnityEngine.Rigidbody","Wall","UnityEngine.BoxCollider","TMPro.TextMeshPro","Spine.Unity.SkeletonAnimation","PooledParticleCallback","UnityEngine.AudioListener","UnityEngine.UI.CanvasScaler","VirtueSky.Component.ResizeMatchCanvasScalerComponent","Coffee.UIExtensions.UIParticleRenderer","TheBeginning.UI.PopupManager","TheBeginning.UI.PopupSettings","TheBeginning.Services.PoolInitialization","TheBeginning.Services.VibrationInitialization","TheBeginning.Services.RuntimeInitialization","TheBeginning.LevelSystem.LevelLoader","TheBeginning.LevelSystem.LevelSettings","TheBeginning.LevelSystem.EventLoadLevel","TheBeginning.LevelSystem.EventGetCurrentLevel","TheBeginning.LevelSystem.EventGetPreviousLevel","VirtueSky.Audio.AudioManager","VirtueSky.Audio.StopMusicEvent","VirtueSky.Audio.PauseMusicEvent","VirtueSky.Audio.ResumeMusicEvent","VirtueSky.Audio.PauseSfxEvent","VirtueSky.Audio.ResumeSfxEvent","VirtueSky.Audio.FinishSfxEvent","VirtueSky.Audio.StopAllSfxEvent","VirtueSky.TouchInput.TouchInputManager","VirtueSky.TouchInput.InputEventTouchMove","VirtueSky.TouchInput.InputEventTouchStationary","VirtueSky.TouchInput.InputEventTouchCancel","VirtueSky.TouchInput.InputPreventTouchVariable","CoinSystem","StarSystem","Transittion","GamePlayableManager","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioClip","VirtueSky.Variables.StringVariable","LevelTypeData","PlaneData","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BoardBoosterGuidPopup","TheBeginning.UI.SettingPopup","TheBeginning.UI.UpdatePopup","TheBeginning.UI.UIPopup","VirtueSky.Component.AnimationSkeletonComponent","VirtueSky.Component.AnimationSkeletonUIComponent","VirtueSky.Component.SkinSkeletonComponent","VirtueSky.Component.SkinSkeletonUIComponent","VirtueSky.UIButton.ButtonText","UnityEngine.UI.Text","VirtueSky.UIButton.ButtonTMP","VirtueSky.UIButton.ButtonUI_Text","VirtueSky.UIButton.ButtonUI_TMP","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","ToonyColorsPro.Runtime.TCP2_CameraDepth","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.54f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "PA_13_08_25_HVH";

Deserializers.lunaAppID = "27960";

Deserializers.projectId = "cda918763811bfc4d809dfe72c2337f6";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.11.2\ncom.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "2037";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5667";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.Myproject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "610cd35b-90c4-4fb4-be29-96bbc1151a8d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Serialization","DefaultPropertyBagInitializer","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["EditorInitializer","RuntimeEditorInitialize"],["VirtueSky","Core","RuntimeInitialize","AutoInitialize"]],[["$BurstDirectCallInitializer","Initialize"]],[],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["Unity","Serialization","Json","JsonObject","RegisterPropertyBag"],["Unity","Serialization","Json","JsonArray","RegisterPropertyBag"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

