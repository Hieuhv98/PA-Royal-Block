var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.JointSpring' )
  var i927 = data
  i926.spring = i927[0]
  i926.damper = i927[1]
  i926.targetPosition = i927[2]
  return i926
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.JointMotor' )
  var i929 = data
  i928.m_TargetVelocity = i929[0]
  i928.m_Force = i929[1]
  i928.m_FreeSpin = i929[2]
  return i928
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.JointLimits' )
  var i931 = data
  i930.m_Min = i931[0]
  i930.m_Max = i931[1]
  i930.m_Bounciness = i931[2]
  i930.m_BounceMinVelocity = i931[3]
  i930.m_ContactDistance = i931[4]
  i930.minBounce = i931[5]
  i930.maxBounce = i931[6]
  return i930
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.JointDrive' )
  var i933 = data
  i932.m_PositionSpring = i933[0]
  i932.m_PositionDamper = i933[1]
  i932.m_MaximumForce = i933[2]
  i932.m_UseAcceleration = i933[3]
  return i932
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i935 = data
  i934.m_Spring = i935[0]
  i934.m_Damper = i935[1]
  return i934
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i937 = data
  i936.m_Limit = i937[0]
  i936.m_Bounciness = i937[1]
  i936.m_ContactDistance = i937[2]
  return i936
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i939 = data
  i938.m_ExtremumSlip = i939[0]
  i938.m_ExtremumValue = i939[1]
  i938.m_AsymptoteSlip = i939[2]
  i938.m_AsymptoteValue = i939[3]
  i938.m_Stiffness = i939[4]
  return i938
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i941 = data
  i940.m_LowerAngle = i941[0]
  i940.m_UpperAngle = i941[1]
  return i940
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i943 = data
  i942.m_MotorSpeed = i943[0]
  i942.m_MaximumMotorTorque = i943[1]
  return i942
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i945 = data
  i944.m_DampingRatio = i945[0]
  i944.m_Frequency = i945[1]
  i944.m_Angle = i945[2]
  return i944
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i947 = data
  i946.m_LowerTranslation = i947[0]
  i946.m_UpperTranslation = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i949 = data
  i948.name = i949[0]
  i948.halfPrecision = !!i949[1]
  i948.useUInt32IndexFormat = !!i949[2]
  i948.vertexCount = i949[3]
  i948.aabb = i949[4]
  var i951 = i949[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( !!i951[i + 0] );
  }
  i948.streams = i950
  i948.vertices = i949[6]
  var i953 = i949[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i953[i + 0]) );
  }
  i948.subMeshes = i952
  var i955 = i949[8]
  var i954 = []
  for(var i = 0; i < i955.length; i += 16) {
    i954.push( new pc.Mat4().setData(i955[i + 0], i955[i + 1], i955[i + 2], i955[i + 3],  i955[i + 4], i955[i + 5], i955[i + 6], i955[i + 7],  i955[i + 8], i955[i + 9], i955[i + 10], i955[i + 11],  i955[i + 12], i955[i + 13], i955[i + 14], i955[i + 15]) );
  }
  i948.bindposes = i954
  var i957 = i949[9]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i957[i + 0]) );
  }
  i948.blendShapes = i956
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i963 = data
  i962.triangles = i963[0]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i969 = data
  i968.name = i969[0]
  var i971 = i969[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i971[i + 0]) );
  }
  i968.frames = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i973 = data
  i972.name = i973[0]
  i972.width = i973[1]
  i972.height = i973[2]
  i972.mipmapCount = i973[3]
  i972.anisoLevel = i973[4]
  i972.filterMode = i973[5]
  i972.hdr = !!i973[6]
  i972.format = i973[7]
  i972.wrapMode = i973[8]
  i972.alphaIsTransparency = !!i973[9]
  i972.alphaSource = i973[10]
  i972.graphicsFormat = i973[11]
  i972.sRGBTexture = !!i973[12]
  i972.desiredColorSpace = i973[13]
  i972.wrapU = i973[14]
  i972.wrapV = i973[15]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i975 = data
  i974.pivot = new pc.Vec2( i975[0], i975[1] )
  i974.anchorMin = new pc.Vec2( i975[2], i975[3] )
  i974.anchorMax = new pc.Vec2( i975[4], i975[5] )
  i974.sizeDelta = new pc.Vec2( i975[6], i975[7] )
  i974.anchoredPosition3D = new pc.Vec3( i975[8], i975[9], i975[10] )
  i974.rotation = new pc.Quat(i975[11], i975[12], i975[13], i975[14])
  i974.scale = new pc.Vec3( i975[15], i975[16], i975[17] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i977 = data
  i976.planeDistance = i977[0]
  i976.referencePixelsPerUnit = i977[1]
  i976.isFallbackOverlay = !!i977[2]
  i976.renderMode = i977[3]
  i976.renderOrder = i977[4]
  i976.sortingLayerName = i977[5]
  i976.sortingOrder = i977[6]
  i976.scaleFactor = i977[7]
  request.r(i977[8], i977[9], 0, i976, 'worldCamera')
  i976.overrideSorting = !!i977[10]
  i976.pixelPerfect = !!i977[11]
  i976.targetDisplay = i977[12]
  i976.overridePixelPerfect = !!i977[13]
  i976.enabled = !!i977[14]
  return i976
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i979 = data
  i978.m_IgnoreReversedGraphics = !!i979[0]
  i978.m_BlockingObjects = i979[1]
  i978.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i979[2] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i981 = data
  i980.m_Alpha = i981[0]
  i980.m_Interactable = !!i981[1]
  i980.m_BlocksRaycasts = !!i981[2]
  i980.m_IgnoreParentGroups = !!i981[3]
  i980.enabled = !!i981[4]
  return i980
}

Deserializers["TheBeginning.UI.GameplayPopup"] = function (request, data, root) {
  var i982 = root || request.c( 'TheBeginning.UI.GameplayPopup' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'levelText')
  i982.stringFormatLevel = i983[2]
  request.r(i983[3], i983[4], 0, i982, 'levelTypeText')
  request.r(i983[5], i983[6], 0, i982, 'canvasGroup')
  request.r(i983[7], i983[8], 0, i982, 'canvas')
  i982.useAnimation = !!i983[9]
  i982.isAutoShow = !!i983[10]
  i982.isNotSortingLayer = !!i983[11]
  i982.useShowAnimation = !!i983[12]
  i982.showAnimationType = i983[13]
  i982.durationShowPopup = i983[14]
  i982.useHideAnimation = !!i983[15]
  i982.hideAnimationType = i983[16]
  i982.durationHidePopup = i983[17]
  i982.ActionHide = request.d('System.Action', i983[18], i982.ActionHide)
  request.r(i983[19], i983[20], 0, i982, 'levelTextNumber')
  request.r(i983[21], i983[22], 0, i982, 'boardLevel')
  request.r(i983[23], i983[24], 0, i982, 'boardLevelText')
  request.r(i983[25], i983[26], 0, i982, 'replayIcon')
  request.r(i983[27], i983[28], 0, i982, 'settingIcon')
  request.r(i983[29], i983[30], 0, i982, 'levelModeData')
  request.r(i983[31], i983[32], 0, i982, 'replayEvent')
  request.r(i983[33], i983[34], 0, i982, 'callReturnHomeEvent')
  request.r(i983[35], i983[36], 0, i982, 'callReplayLevelEvent')
  request.r(i983[37], i983[38], 0, i982, 'nextLevelEvent')
  request.r(i983[39], i983[40], 0, i982, 'backLevelEvent')
  request.r(i983[41], i983[42], 0, i982, 'winLevelEvent')
  request.r(i983[43], i983[44], 0, i982, 'loseLevelEvent')
  request.r(i983[45], i983[46], 0, i982, 'isStartingLevel')
  request.r(i983[47], i983[48], 0, i982, 'indexLevelVariable')
  request.r(i983[49], i983[50], 0, i982, 'unlockWinStreakLevel')
  request.r(i983[51], i983[52], 0, i982, 'isPlayingLevel')
  request.r(i983[53], i983[54], 0, i982, 'playMusicEvent')
  request.r(i983[55], i983[56], 0, i982, 'soundHardLevel')
  request.r(i983[57], i983[58], 0, i982, 'musicInGame')
  request.r(i983[59], i983[60], 0, i982, 'transHardLevel')
  i982.transHardLevelAnim = i983[61]
  request.r(i983[62], i983[63], 0, i982, 'isBackToBuildTutorialPlaying')
  request.r(i983[64], i983[65], 0, i982, 'btnBackHome')
  request.r(i983[66], i983[67], 0, i982, 'onShowBoosterGuild')
  request.r(i983[68], i983[69], 0, i982, 'groupUI')
  request.r(i983[70], i983[71], 0, i982, 'showCTAButtonEvent')
  request.r(i983[72], i983[73], 0, i982, 'ctaButton')
  request.r(i983[74], i983[75], 0, i982, 'levelAdditionalTime')
  request.r(i983[76], i983[77], 0, i982, 'addTimeIcon')
  request.r(i983[78], i983[79], 0, i982, 'addTimeModel')
  request.r(i983[80], i983[81], 0, i982, 'addTimeModelDefaultPos')
  request.r(i983[82], i983[83], 0, i982, 'addTimeModelToPos')
  request.r(i983[84], i983[85], 0, i982, 'addTimeText')
  i982.stringFormatAddTimeText = i983[86]
  i982.timeDelayMove = i983[87]
  i982.timeMove = i983[88]
  i982.scaleDefault = i983[89]
  i982.scaleToEnd = i983[90]
  i982.easeMove = i983[91]
  request.r(i983[92], i983[93], 0, i982, 'preStartLevelEvent')
  request.r(i983[94], i983[95], 0, i982, 'addTimePlayEvent')
  request.r(i983[96], i983[97], 0, i982, 'background')
  request.r(i983[98], i983[99], 0, i982, 'container')
  i982.showMovePopup = i983[100]
  i982.offsetShowMove = i983[101]
  i982.scaleFromShow = new pc.Vec3( i983[102], i983[103], i983[104] )
  i982.eulerAngleShowFrom = new pc.Vec3( i983[105], i983[106], i983[107] )
  request.r(i983[108], i983[109], 0, i982, 'pointShowPos')
  i982.hideMovePopup = i983[110]
  i982.offsetHideMove = i983[111]
  i982.scaleFromHide = new pc.Vec3( i983[112], i983[113], i983[114] )
  request.r(i983[115], i983[116], 0, i982, 'pointHidePos')
  request.r(i983[117], i983[118], 0, i982, 'playSfxEvent')
  request.r(i983[119], i983[120], 0, i982, 'soundOpen')
  request.r(i983[121], i983[122], 0, i982, 'soundClose')
  return i982
}

Deserializers["System.Action"] = function (request, data, root) {
  var i984 = root || request.c( 'System.Action' )
  var i985 = data
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i987 = data
  i986.cullTransparentMesh = !!i987[0]
  return i986
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.Image' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_Sprite')
  i988.m_Type = i989[2]
  i988.m_PreserveAspect = !!i989[3]
  i988.m_FillCenter = !!i989[4]
  i988.m_FillMethod = i989[5]
  i988.m_FillAmount = i989[6]
  i988.m_FillClockwise = !!i989[7]
  i988.m_FillOrigin = i989[8]
  i988.m_UseSpriteMesh = !!i989[9]
  i988.m_PixelsPerUnitMultiplier = i989[10]
  i988.m_Maskable = !!i989[11]
  request.r(i989[12], i989[13], 0, i988, 'm_Material')
  i988.m_Color = new pc.Color(i989[14], i989[15], i989[16], i989[17])
  i988.m_RaycastTarget = !!i989[18]
  i988.m_RaycastPadding = new pc.Vec4( i989[19], i989[20], i989[21], i989[22] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i991 = data
  i990.name = i991[0]
  i990.tagId = i991[1]
  i990.enabled = !!i991[2]
  i990.isStatic = !!i991[3]
  i990.layer = i991[4]
  return i990
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i992 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'skeletonDataAsset')
  request.r(i993[2], i993[3], 0, i992, 'additiveMaterial')
  request.r(i993[4], i993[5], 0, i992, 'multiplyMaterial')
  request.r(i993[6], i993[7], 0, i992, 'screenMaterial')
  i992.initialSkinName = i993[8]
  i992.initialFlipX = !!i993[9]
  i992.initialFlipY = !!i993[10]
  i992.startingAnimation = i993[11]
  i992.startingLoop = !!i993[12]
  i992.timeScale = i993[13]
  i992.freeze = !!i993[14]
  i992.layoutScaleMode = i993[15]
  i992.updateWhenInvisible = i993[16]
  i992.allowMultipleCanvasRenderers = !!i993[17]
  var i995 = i993[18]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i992.canvasRenderers = i994
  i992.enableSeparatorSlots = !!i993[19]
  i992.updateSeparatorPartLocation = !!i993[20]
  i992.updateSeparatorPartScale = !!i993[21]
  i992.disableMeshAssignmentOnOverride = !!i993[22]
  i992.referenceSize = new pc.Vec2( i993[23], i993[24] )
  i992.referenceScale = i993[25]
  i992.rectTransformSize = new pc.Vec2( i993[26], i993[27] )
  i992.editReferenceRect = !!i993[28]
  var i997 = i993[29]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i992.separatorSlotNames = i996
  var i999 = i993[30]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i992.separatorParts = i998
  i992.meshGenerator = request.d('Spine.Unity.MeshGenerator', i993[31], i992.meshGenerator)
  i992.updateTiming = i993[32]
  i992.unscaledTime = !!i993[33]
  i992.m_Maskable = !!i993[34]
  request.r(i993[35], i993[36], 0, i992, 'm_Material')
  i992.m_Color = new pc.Color(i993[37], i993[38], i993[39], i993[40])
  i992.m_RaycastTarget = !!i993[41]
  i992.m_RaycastPadding = new pc.Vec4( i993[42], i993[43], i993[44], i993[45] )
  return i992
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1006 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1007 = data
  i1006.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1007[0], i1006.settings)
  return i1006
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1009 = data
  i1008.useClipping = !!i1009[0]
  i1008.zSpacing = i1009[1]
  i1008.pmaVertexColors = !!i1009[2]
  i1008.tintBlack = !!i1009[3]
  i1008.canvasGroupTintBlack = !!i1009[4]
  i1008.calculateTangents = !!i1009[5]
  i1008.addNormals = !!i1009[6]
  i1008.immutableTriangles = !!i1009[7]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1011 = data
  i1010.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1011[0], i1010.main)
  i1010.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1011[1], i1010.colorBySpeed)
  i1010.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1011[2], i1010.colorOverLifetime)
  i1010.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1011[3], i1010.emission)
  i1010.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1011[4], i1010.rotationBySpeed)
  i1010.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1011[5], i1010.rotationOverLifetime)
  i1010.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1011[6], i1010.shape)
  i1010.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1011[7], i1010.sizeBySpeed)
  i1010.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1011[8], i1010.sizeOverLifetime)
  i1010.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1011[9], i1010.textureSheetAnimation)
  i1010.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1011[10], i1010.velocityOverLifetime)
  i1010.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1011[11], i1010.noise)
  i1010.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1011[12], i1010.inheritVelocity)
  i1010.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1011[13], i1010.forceOverLifetime)
  i1010.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1011[14], i1010.limitVelocityOverLifetime)
  i1010.useAutoRandomSeed = !!i1011[15]
  i1010.randomSeed = i1011[16]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1012 = root || new pc.ParticleSystemMain()
  var i1013 = data
  i1012.duration = i1013[0]
  i1012.loop = !!i1013[1]
  i1012.prewarm = !!i1013[2]
  i1012.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[3], i1012.startDelay)
  i1012.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[4], i1012.startLifetime)
  i1012.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[5], i1012.startSpeed)
  i1012.startSize3D = !!i1013[6]
  i1012.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[7], i1012.startSizeX)
  i1012.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[8], i1012.startSizeY)
  i1012.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[9], i1012.startSizeZ)
  i1012.startRotation3D = !!i1013[10]
  i1012.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[11], i1012.startRotationX)
  i1012.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[12], i1012.startRotationY)
  i1012.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[13], i1012.startRotationZ)
  i1012.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1013[14], i1012.startColor)
  i1012.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1013[15], i1012.gravityModifier)
  i1012.simulationSpace = i1013[16]
  request.r(i1013[17], i1013[18], 0, i1012, 'customSimulationSpace')
  i1012.simulationSpeed = i1013[19]
  i1012.useUnscaledTime = !!i1013[20]
  i1012.scalingMode = i1013[21]
  i1012.playOnAwake = !!i1013[22]
  i1012.maxParticles = i1013[23]
  i1012.emitterVelocityMode = i1013[24]
  i1012.stopAction = i1013[25]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1014 = root || new pc.MinMaxCurve()
  var i1015 = data
  i1014.mode = i1015[0]
  i1014.curveMin = new pc.AnimationCurve( { keys_flow: i1015[1] } )
  i1014.curveMax = new pc.AnimationCurve( { keys_flow: i1015[2] } )
  i1014.curveMultiplier = i1015[3]
  i1014.constantMin = i1015[4]
  i1014.constantMax = i1015[5]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1016 = root || new pc.MinMaxGradient()
  var i1017 = data
  i1016.mode = i1017[0]
  i1016.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1017[1], i1016.gradientMin)
  i1016.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1017[2], i1016.gradientMax)
  i1016.colorMin = new pc.Color(i1017[3], i1017[4], i1017[5], i1017[6])
  i1016.colorMax = new pc.Color(i1017[7], i1017[8], i1017[9], i1017[10])
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1019 = data
  i1018.mode = i1019[0]
  var i1021 = i1019[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1021[i + 0]) );
  }
  i1018.colorKeys = i1020
  var i1023 = i1019[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1023[i + 0]) );
  }
  i1018.alphaKeys = i1022
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1024 = root || new pc.ParticleSystemColorBySpeed()
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1025[1], i1024.color)
  i1024.range = new pc.Vec2( i1025[2], i1025[3] )
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1029 = data
  i1028.color = new pc.Color(i1029[0], i1029[1], i1029[2], i1029[3])
  i1028.time = i1029[4]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1033 = data
  i1032.alpha = i1033[0]
  i1032.time = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1034 = root || new pc.ParticleSystemColorOverLifetime()
  var i1035 = data
  i1034.enabled = !!i1035[0]
  i1034.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1035[1], i1034.color)
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1036 = root || new pc.ParticleSystemEmitter()
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[1], i1036.rateOverTime)
  i1036.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1037[2], i1036.rateOverDistance)
  var i1039 = i1037[3]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1039[i + 0]) );
  }
  i1036.bursts = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1042 = root || new pc.ParticleSystemBurst()
  var i1043 = data
  i1042.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[0], i1042.count)
  i1042.cycleCount = i1043[1]
  i1042.minCount = i1043[2]
  i1042.maxCount = i1043[3]
  i1042.repeatInterval = i1043[4]
  i1042.time = i1043[5]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1044 = root || new pc.ParticleSystemRotationBySpeed()
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1045[1], i1044.x)
  i1044.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1045[2], i1044.y)
  i1044.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1045[3], i1044.z)
  i1044.separateAxes = !!i1045[4]
  i1044.range = new pc.Vec2( i1045[5], i1045[6] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1046 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1047 = data
  i1046.enabled = !!i1047[0]
  i1046.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[1], i1046.x)
  i1046.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[2], i1046.y)
  i1046.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1047[3], i1046.z)
  i1046.separateAxes = !!i1047[4]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1048 = root || new pc.ParticleSystemShape()
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.shapeType = i1049[1]
  i1048.randomDirectionAmount = i1049[2]
  i1048.sphericalDirectionAmount = i1049[3]
  i1048.randomPositionAmount = i1049[4]
  i1048.alignToDirection = !!i1049[5]
  i1048.radius = i1049[6]
  i1048.radiusMode = i1049[7]
  i1048.radiusSpread = i1049[8]
  i1048.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[9], i1048.radiusSpeed)
  i1048.radiusThickness = i1049[10]
  i1048.angle = i1049[11]
  i1048.length = i1049[12]
  i1048.boxThickness = new pc.Vec3( i1049[13], i1049[14], i1049[15] )
  i1048.meshShapeType = i1049[16]
  request.r(i1049[17], i1049[18], 0, i1048, 'mesh')
  request.r(i1049[19], i1049[20], 0, i1048, 'meshRenderer')
  request.r(i1049[21], i1049[22], 0, i1048, 'skinnedMeshRenderer')
  i1048.useMeshMaterialIndex = !!i1049[23]
  i1048.meshMaterialIndex = i1049[24]
  i1048.useMeshColors = !!i1049[25]
  i1048.normalOffset = i1049[26]
  i1048.arc = i1049[27]
  i1048.arcMode = i1049[28]
  i1048.arcSpread = i1049[29]
  i1048.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[30], i1048.arcSpeed)
  i1048.donutRadius = i1049[31]
  i1048.position = new pc.Vec3( i1049[32], i1049[33], i1049[34] )
  i1048.rotation = new pc.Vec3( i1049[35], i1049[36], i1049[37] )
  i1048.scale = new pc.Vec3( i1049[38], i1049[39], i1049[40] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1050 = root || new pc.ParticleSystemSizeBySpeed()
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[1], i1050.x)
  i1050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[2], i1050.y)
  i1050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[3], i1050.z)
  i1050.separateAxes = !!i1051[4]
  i1050.range = new pc.Vec2( i1051[5], i1051[6] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1052 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[1], i1052.x)
  i1052.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[2], i1052.y)
  i1052.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[3], i1052.z)
  i1052.separateAxes = !!i1053[4]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1054 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1055 = data
  i1054.enabled = !!i1055[0]
  i1054.mode = i1055[1]
  i1054.animation = i1055[2]
  i1054.numTilesX = i1055[3]
  i1054.numTilesY = i1055[4]
  i1054.useRandomRow = !!i1055[5]
  i1054.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[6], i1054.frameOverTime)
  i1054.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[7], i1054.startFrame)
  i1054.cycleCount = i1055[8]
  i1054.rowIndex = i1055[9]
  i1054.flipU = i1055[10]
  i1054.flipV = i1055[11]
  i1054.spriteCount = i1055[12]
  var i1057 = i1055[13]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.sprites = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1060 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[1], i1060.x)
  i1060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[2], i1060.y)
  i1060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[3], i1060.z)
  i1060.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[4], i1060.radial)
  i1060.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[5], i1060.speedModifier)
  i1060.space = i1061[6]
  i1060.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[7], i1060.orbitalX)
  i1060.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[8], i1060.orbitalY)
  i1060.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[9], i1060.orbitalZ)
  i1060.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[10], i1060.orbitalOffsetX)
  i1060.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[11], i1060.orbitalOffsetY)
  i1060.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[12], i1060.orbitalOffsetZ)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1062 = root || new pc.ParticleSystemNoise()
  var i1063 = data
  i1062.enabled = !!i1063[0]
  i1062.separateAxes = !!i1063[1]
  i1062.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[2], i1062.strengthX)
  i1062.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[3], i1062.strengthY)
  i1062.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[4], i1062.strengthZ)
  i1062.frequency = i1063[5]
  i1062.damping = !!i1063[6]
  i1062.octaveCount = i1063[7]
  i1062.octaveMultiplier = i1063[8]
  i1062.octaveScale = i1063[9]
  i1062.quality = i1063[10]
  i1062.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[11], i1062.scrollSpeed)
  i1062.scrollSpeedMultiplier = i1063[12]
  i1062.remapEnabled = !!i1063[13]
  i1062.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[14], i1062.remapX)
  i1062.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[15], i1062.remapY)
  i1062.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[16], i1062.remapZ)
  i1062.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[17], i1062.positionAmount)
  i1062.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[18], i1062.rotationAmount)
  i1062.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[19], i1062.sizeAmount)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1064 = root || new pc.ParticleSystemInheritVelocity()
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.mode = i1065[1]
  i1064.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[2], i1064.curve)
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1066 = root || new pc.ParticleSystemForceOverLifetime()
  var i1067 = data
  i1066.enabled = !!i1067[0]
  i1066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[1], i1066.x)
  i1066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[2], i1066.y)
  i1066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[3], i1066.z)
  i1066.space = i1067[4]
  i1066.randomized = !!i1067[5]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1068 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[1], i1068.limit)
  i1068.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[2], i1068.limitX)
  i1068.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[3], i1068.limitY)
  i1068.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[4], i1068.limitZ)
  i1068.dampen = i1069[5]
  i1068.separateAxes = !!i1069[6]
  i1068.space = i1069[7]
  i1068.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[8], i1068.drag)
  i1068.multiplyDragByParticleSize = !!i1069[9]
  i1068.multiplyDragByParticleVelocity = !!i1069[10]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'mesh')
  i1070.meshCount = i1071[2]
  i1070.activeVertexStreamsCount = i1071[3]
  i1070.alignment = i1071[4]
  i1070.renderMode = i1071[5]
  i1070.sortMode = i1071[6]
  i1070.lengthScale = i1071[7]
  i1070.velocityScale = i1071[8]
  i1070.cameraVelocityScale = i1071[9]
  i1070.normalDirection = i1071[10]
  i1070.sortingFudge = i1071[11]
  i1070.minParticleSize = i1071[12]
  i1070.maxParticleSize = i1071[13]
  i1070.pivot = new pc.Vec3( i1071[14], i1071[15], i1071[16] )
  request.r(i1071[17], i1071[18], 0, i1070, 'trailMaterial')
  i1070.applyActiveColorSpace = !!i1071[19]
  i1070.enabled = !!i1071[20]
  request.r(i1071[21], i1071[22], 0, i1070, 'sharedMaterial')
  var i1073 = i1071[23]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.sharedMaterials = i1072
  i1070.receiveShadows = !!i1071[24]
  i1070.shadowCastingMode = i1071[25]
  i1070.sortingLayerID = i1071[26]
  i1070.sortingOrder = i1071[27]
  i1070.lightmapIndex = i1071[28]
  i1070.lightmapSceneIndex = i1071[29]
  i1070.lightmapScaleOffset = new pc.Vec4( i1071[30], i1071[31], i1071[32], i1071[33] )
  i1070.lightProbeUsage = i1071[34]
  i1070.reflectionProbeUsage = i1071[35]
  return i1070
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i1076 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i1077 = data
  i1076.m_IsTrail = !!i1077[0]
  i1076.m_IgnoreCanvasScaler = !!i1077[1]
  i1076.m_AbsoluteMode = !!i1077[2]
  i1076.m_Scale3D = new pc.Vec3( i1077[3], i1077[4], i1077[5] )
  var i1079 = i1077[6]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Coffee.UIExtensions.AnimatableProperty', i1079[i + 0]) );
  }
  i1076.m_AnimatableProperties = i1078
  var i1081 = i1077[7]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1076.m_Particles = i1080
  i1076.m_MeshSharing = i1077[8]
  i1076.m_GroupId = i1077[9]
  i1076.m_GroupMaxId = i1077[10]
  i1076.m_PositionMode = i1077[11]
  i1076.m_AutoScaling = !!i1077[12]
  i1076.m_AutoScalingMode = i1077[13]
  i1076.m_UseCustomView = !!i1077[14]
  i1076.m_CustomViewSize = i1077[15]
  i1076.m_Maskable = !!i1077[16]
  request.r(i1077[17], i1077[18], 0, i1076, 'm_Material')
  i1076.m_Color = new pc.Color(i1077[19], i1077[20], i1077[21], i1077[22])
  i1076.m_RaycastTarget = !!i1077[23]
  i1076.m_RaycastPadding = new pc.Vec4( i1077[24], i1077[25], i1077[26], i1077[27] )
  return i1076
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i1084 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i1085 = data
  i1084.m_Name = i1085[0]
  i1084.m_Type = i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1089 = data
  i1088.position = new pc.Vec3( i1089[0], i1089[1], i1089[2] )
  i1088.scale = new pc.Vec3( i1089[3], i1089[4], i1089[5] )
  i1088.rotation = new pc.Quat(i1089[6], i1089[7], i1089[8], i1089[9])
  return i1088
}

Deserializers["VirtueSky.Component.SafeAreaComponent"] = function (request, data, root) {
  var i1090 = root || request.c( 'VirtueSky.Component.SafeAreaComponent' )
  var i1091 = data
  i1090.ConformX = !!i1091[0]
  i1090.ConformY = !!i1091[1]
  i1090.Logging = !!i1091[2]
  return i1090
}

Deserializers["CoinUpdater"] = function (request, data, root) {
  var i1092 = root || request.c( 'CoinUpdater' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'CurrencyAmountText')
  request.r(i1093[2], i1093[3], 0, i1092, 'iconCoin')
  request.r(i1093[4], i1093[5], 0, i1092, 'updateCoinEvent')
  request.r(i1093[6], i1093[7], 0, i1092, 'moveOneCoinDone')
  request.r(i1093[8], i1093[9], 0, i1092, 'moveAllCoinDone')
  request.r(i1093[10], i1093[11], 0, i1092, 'decreaseCoinEvent')
  request.r(i1093[12], i1093[13], 0, i1092, 'addTargetToCoinGenerateEvent')
  request.r(i1093[14], i1093[15], 0, i1092, 'removeTargetToCoinGenerateEvent')
  return i1092
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1095 = data
  i1094.m_hasFontAssetChanged = !!i1095[0]
  request.r(i1095[1], i1095[2], 0, i1094, 'm_baseMaterial')
  i1094.m_maskOffset = new pc.Vec4( i1095[3], i1095[4], i1095[5], i1095[6] )
  i1094.m_text = i1095[7]
  i1094.m_isRightToLeft = !!i1095[8]
  request.r(i1095[9], i1095[10], 0, i1094, 'm_fontAsset')
  request.r(i1095[11], i1095[12], 0, i1094, 'm_sharedMaterial')
  var i1097 = i1095[13]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.m_fontSharedMaterials = i1096
  request.r(i1095[14], i1095[15], 0, i1094, 'm_fontMaterial')
  var i1099 = i1095[16]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1094.m_fontMaterials = i1098
  i1094.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1095[17], i1095[18], i1095[19], i1095[20])
  i1094.m_fontColor = new pc.Color(i1095[21], i1095[22], i1095[23], i1095[24])
  i1094.m_enableVertexGradient = !!i1095[25]
  i1094.m_colorMode = i1095[26]
  i1094.m_fontColorGradient = request.d('TMPro.VertexGradient', i1095[27], i1094.m_fontColorGradient)
  request.r(i1095[28], i1095[29], 0, i1094, 'm_fontColorGradientPreset')
  request.r(i1095[30], i1095[31], 0, i1094, 'm_spriteAsset')
  i1094.m_tintAllSprites = !!i1095[32]
  request.r(i1095[33], i1095[34], 0, i1094, 'm_StyleSheet')
  i1094.m_TextStyleHashCode = i1095[35]
  i1094.m_overrideHtmlColors = !!i1095[36]
  i1094.m_faceColor = UnityEngine.Color32.ConstructColor(i1095[37], i1095[38], i1095[39], i1095[40])
  i1094.m_fontSize = i1095[41]
  i1094.m_fontSizeBase = i1095[42]
  i1094.m_fontWeight = i1095[43]
  i1094.m_enableAutoSizing = !!i1095[44]
  i1094.m_fontSizeMin = i1095[45]
  i1094.m_fontSizeMax = i1095[46]
  i1094.m_fontStyle = i1095[47]
  i1094.m_HorizontalAlignment = i1095[48]
  i1094.m_VerticalAlignment = i1095[49]
  i1094.m_textAlignment = i1095[50]
  i1094.m_characterSpacing = i1095[51]
  i1094.m_wordSpacing = i1095[52]
  i1094.m_lineSpacing = i1095[53]
  i1094.m_lineSpacingMax = i1095[54]
  i1094.m_paragraphSpacing = i1095[55]
  i1094.m_charWidthMaxAdj = i1095[56]
  i1094.m_enableWordWrapping = !!i1095[57]
  i1094.m_wordWrappingRatios = i1095[58]
  i1094.m_overflowMode = i1095[59]
  request.r(i1095[60], i1095[61], 0, i1094, 'm_linkedTextComponent')
  request.r(i1095[62], i1095[63], 0, i1094, 'parentLinkedComponent')
  i1094.m_enableKerning = !!i1095[64]
  i1094.m_enableExtraPadding = !!i1095[65]
  i1094.checkPaddingRequired = !!i1095[66]
  i1094.m_isRichText = !!i1095[67]
  i1094.m_parseCtrlCharacters = !!i1095[68]
  i1094.m_isOrthographic = !!i1095[69]
  i1094.m_isCullingEnabled = !!i1095[70]
  i1094.m_horizontalMapping = i1095[71]
  i1094.m_verticalMapping = i1095[72]
  i1094.m_uvLineOffset = i1095[73]
  i1094.m_geometrySortingOrder = i1095[74]
  i1094.m_IsTextObjectScaleStatic = !!i1095[75]
  i1094.m_VertexBufferAutoSizeReduction = !!i1095[76]
  i1094.m_useMaxVisibleDescender = !!i1095[77]
  i1094.m_pageToDisplay = i1095[78]
  i1094.m_margin = new pc.Vec4( i1095[79], i1095[80], i1095[81], i1095[82] )
  i1094.m_isUsingLegacyAnimationComponent = !!i1095[83]
  i1094.m_isVolumetricText = !!i1095[84]
  i1094.m_Maskable = !!i1095[85]
  request.r(i1095[86], i1095[87], 0, i1094, 'm_Material')
  i1094.m_Color = new pc.Color(i1095[88], i1095[89], i1095[90], i1095[91])
  i1094.m_RaycastTarget = !!i1095[92]
  i1094.m_RaycastPadding = new pc.Vec4( i1095[93], i1095[94], i1095[95], i1095[96] )
  return i1094
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.VertexGradient' )
  var i1101 = data
  i1100.topLeft = new pc.Color(i1101[0], i1101[1], i1101[2], i1101[3])
  i1100.topRight = new pc.Color(i1101[4], i1101[5], i1101[6], i1101[7])
  i1100.bottomLeft = new pc.Color(i1101[8], i1101[9], i1101[10], i1101[11])
  i1100.bottomRight = new pc.Color(i1101[12], i1101[13], i1101[14], i1101[15])
  return i1100
}

Deserializers["TimingController"] = function (request, data, root) {
  var i1102 = root || request.c( 'TimingController' )
  var i1103 = data
  i1102.fadeWarnDuration = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'pauseTimeLevelVariable')
  i1102.stringFormat = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'timeText')
  request.r(i1103[6], i1103[7], 0, i1102, 'addTimePlayEvent')
  request.r(i1103[8], i1103[9], 0, i1102, 'countDownTimeSetupEvent')
  request.r(i1103[10], i1103[11], 0, i1102, 'startCountDownTimeEvent')
  request.r(i1103[12], i1103[13], 0, i1102, 'onTimeUpEvent')
  request.r(i1103[14], i1103[15], 0, i1102, 'playDuration')
  request.r(i1103[16], i1103[17], 0, i1102, 'totalTimeAddWhenPlay')
  request.r(i1103[18], i1103[19], 0, i1102, 'isUsingTimerBooster')
  request.r(i1103[20], i1103[21], 0, i1102, 'onWarringTimeEvent')
  request.r(i1103[22], i1103[23], 0, i1102, 'isPlayAgainMore')
  request.r(i1103[24], i1103[25], 0, i1102, 'warningFrame')
  request.r(i1103[26], i1103[27], 0, i1102, 'playSfxEvent')
  request.r(i1103[28], i1103[29], 0, i1102, 'stopSfxEvent')
  request.r(i1103[30], i1103[31], 0, i1102, 'soundWarring')
  return i1102
}

Deserializers["VirtueSky.UIButton.ButtonUI"] = function (request, data, root) {
  var i1104 = root || request.c( 'VirtueSky.UIButton.ButtonUI' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'clickButtonEvent')
  i1104.isMotion = !!i1105[2]
  i1104.easingTypes = i1105[3]
  i1104.scale = i1105[4]
  i1104.isShrugOver = !!i1105[5]
  i1104.timeShrug = i1105[6]
  i1104.strength = i1105[7]
  i1104.useSoundFx = !!i1105[8]
  request.r(i1105[9], i1105[10], 0, i1104, 'playSfxEvent')
  request.r(i1105[11], i1105[12], 0, i1104, 'soundDataClickButton')
  i1104.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1105[13], i1104.m_OnClick)
  i1104.m_Navigation = request.d('UnityEngine.UI.Navigation', i1105[14], i1104.m_Navigation)
  i1104.m_Transition = i1105[15]
  i1104.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1105[16], i1104.m_Colors)
  i1104.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1105[17], i1104.m_SpriteState)
  i1104.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1105[18], i1104.m_AnimationTriggers)
  i1104.m_Interactable = !!i1105[19]
  request.r(i1105[20], i1105[21], 0, i1104, 'm_TargetGraphic')
  return i1104
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1107 = data
  i1106.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1107[0], i1106.m_PersistentCalls)
  return i1106
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('UnityEngine.Events.PersistentCall', i1111[i + 0]));
  }
  i1108.m_Calls = i1110
  return i1108
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'm_Target')
  i1114.m_TargetAssemblyTypeName = i1115[2]
  i1114.m_MethodName = i1115[3]
  i1114.m_Mode = i1115[4]
  i1114.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1115[5], i1114.m_Arguments)
  i1114.m_CallState = i1115[6]
  return i1114
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'm_ObjectArgument')
  i1116.m_ObjectArgumentAssemblyTypeName = i1117[2]
  i1116.m_IntArgument = i1117[3]
  i1116.m_FloatArgument = i1117[4]
  i1116.m_StringArgument = i1117[5]
  i1116.m_BoolArgument = !!i1117[6]
  return i1116
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1119 = data
  i1118.m_Mode = i1119[0]
  i1118.m_WrapAround = !!i1119[1]
  request.r(i1119[2], i1119[3], 0, i1118, 'm_SelectOnUp')
  request.r(i1119[4], i1119[5], 0, i1118, 'm_SelectOnDown')
  request.r(i1119[6], i1119[7], 0, i1118, 'm_SelectOnLeft')
  request.r(i1119[8], i1119[9], 0, i1118, 'm_SelectOnRight')
  return i1118
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1121 = data
  i1120.m_NormalColor = new pc.Color(i1121[0], i1121[1], i1121[2], i1121[3])
  i1120.m_HighlightedColor = new pc.Color(i1121[4], i1121[5], i1121[6], i1121[7])
  i1120.m_PressedColor = new pc.Color(i1121[8], i1121[9], i1121[10], i1121[11])
  i1120.m_SelectedColor = new pc.Color(i1121[12], i1121[13], i1121[14], i1121[15])
  i1120.m_DisabledColor = new pc.Color(i1121[16], i1121[17], i1121[18], i1121[19])
  i1120.m_ColorMultiplier = i1121[20]
  i1120.m_FadeDuration = i1121[21]
  return i1120
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'm_HighlightedSprite')
  request.r(i1123[2], i1123[3], 0, i1122, 'm_PressedSprite')
  request.r(i1123[4], i1123[5], 0, i1122, 'm_SelectedSprite')
  request.r(i1123[6], i1123[7], 0, i1122, 'm_DisabledSprite')
  return i1122
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1125 = data
  i1124.m_NormalTrigger = i1125[0]
  i1124.m_HighlightedTrigger = i1125[1]
  i1124.m_PressedTrigger = i1125[2]
  i1124.m_SelectedTrigger = i1125[3]
  i1124.m_DisabledTrigger = i1125[4]
  return i1124
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1127 = data
  i1126.m_Spacing = i1127[0]
  i1126.m_ChildForceExpandWidth = !!i1127[1]
  i1126.m_ChildForceExpandHeight = !!i1127[2]
  i1126.m_ChildControlWidth = !!i1127[3]
  i1126.m_ChildControlHeight = !!i1127[4]
  i1126.m_ChildScaleWidth = !!i1127[5]
  i1126.m_ChildScaleHeight = !!i1127[6]
  i1126.m_ReverseArrangement = !!i1127[7]
  i1126.m_Padding = UnityEngine.RectOffset.FromPaddings(i1127[8], i1127[9], i1127[10], i1127[11])
  i1126.m_ChildAlignment = i1127[12]
  return i1126
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.UI.Button' )
  var i1129 = data
  i1128.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1129[0], i1128.m_OnClick)
  i1128.m_Navigation = request.d('UnityEngine.UI.Navigation', i1129[1], i1128.m_Navigation)
  i1128.m_Transition = i1129[2]
  i1128.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1129[3], i1128.m_Colors)
  i1128.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1129[4], i1128.m_SpriteState)
  i1128.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1129[5], i1128.m_AnimationTriggers)
  i1128.m_Interactable = !!i1129[6]
  request.r(i1129[7], i1129[8], 0, i1128, 'm_TargetGraphic')
  return i1128
}

Deserializers["ButtonCTA"] = function (request, data, root) {
  var i1130 = root || request.c( 'ButtonCTA' )
  var i1131 = data
  i1130.urlAndroid = i1131[0]
  i1130.urlIos = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1132 = root || new pc.UnityMaterial()
  var i1133 = data
  i1132.name = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'shader')
  i1132.renderQueue = i1133[3]
  i1132.enableInstancing = !!i1133[4]
  var i1135 = i1133[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1135[i + 0]) );
  }
  i1132.floatParameters = i1134
  var i1137 = i1133[6]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1137[i + 0]) );
  }
  i1132.colorParameters = i1136
  var i1139 = i1133[7]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1139[i + 0]) );
  }
  i1132.vectorParameters = i1138
  var i1141 = i1133[8]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1141[i + 0]) );
  }
  i1132.textureParameters = i1140
  var i1143 = i1133[9]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1143[i + 0]) );
  }
  i1132.materialFlags = i1142
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.value = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.value = new pc.Color(i1151[1], i1151[2], i1151[3], i1151[4])
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.value = new pc.Vec4( i1155[1], i1155[2], i1155[3], i1155[4] )
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1159 = data
  i1158.name = i1159[0]
  request.r(i1159[1], i1159[2], 0, i1158, 'value')
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.enabled = !!i1163[1]
  return i1162
}

Deserializers["TheBeginning.UI.WinPopup"] = function (request, data, root) {
  var i1164 = root || request.c( 'TheBeginning.UI.WinPopup' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'canvasGroup')
  request.r(i1165[2], i1165[3], 0, i1164, 'canvas')
  i1164.useAnimation = !!i1165[4]
  i1164.isAutoShow = !!i1165[5]
  i1164.isNotSortingLayer = !!i1165[6]
  i1164.useShowAnimation = !!i1165[7]
  i1164.showAnimationType = i1165[8]
  i1164.durationShowPopup = i1165[9]
  i1164.useHideAnimation = !!i1165[10]
  i1164.hideAnimationType = i1165[11]
  i1164.durationHidePopup = i1165[12]
  i1164.ActionHide = request.d('System.Action', i1165[13], i1164.ActionHide)
  request.r(i1165[14], i1165[15], 0, i1164, 'gameSettings')
  i1164.moneyWin = i1165[16]
  i1164.ratioScaleContinueButton = i1165[17]
  request.r(i1165[18], i1165[19], 0, i1164, 'currentLevel')
  request.r(i1165[20], i1165[21], 0, i1164, 'btnTapToContinue')
  i1164.textValueFormat = i1165[22]
  request.r(i1165[23], i1165[24], 0, i1164, 'textButtonComplete')
  i1164.timeDelayShowContinue = i1165[25]
  i1164.timeScaleContinue = i1165[26]
  request.r(i1165[27], i1165[28], 0, i1164, 'soundFx')
  i1164.timeDelayPlayFx = i1165[29]
  request.r(i1165[30], i1165[31], 0, i1164, 'starPosition')
  request.r(i1165[32], i1165[33], 0, i1164, 'playCurrentLevelEvent')
  request.r(i1165[34], i1165[35], 0, i1164, 'moveAllCoinDone')
  i1164.timeShowAnimation = i1165[36]
  var i1167 = i1165[37]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatorUIControl')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1164.listAnimatorUI = i1166
  request.r(i1165[38], i1165[39], 0, i1164, 'group')
  request.r(i1165[40], i1165[41], 0, i1164, 'background')
  request.r(i1165[42], i1165[43], 0, i1164, 'container')
  i1164.showMovePopup = i1165[44]
  i1164.offsetShowMove = i1165[45]
  i1164.scaleFromShow = new pc.Vec3( i1165[46], i1165[47], i1165[48] )
  i1164.eulerAngleShowFrom = new pc.Vec3( i1165[49], i1165[50], i1165[51] )
  request.r(i1165[52], i1165[53], 0, i1164, 'pointShowPos')
  i1164.hideMovePopup = i1165[54]
  i1164.offsetHideMove = i1165[55]
  i1164.scaleFromHide = new pc.Vec3( i1165[56], i1165[57], i1165[58] )
  request.r(i1165[59], i1165[60], 0, i1164, 'pointHidePos')
  request.r(i1165[61], i1165[62], 0, i1164, 'playSfxEvent')
  request.r(i1165[63], i1165[64], 0, i1164, 'soundOpen')
  request.r(i1165[65], i1165[66], 0, i1164, 'soundClose')
  return i1164
}

Deserializers["AnimatorUIControl"] = function (request, data, root) {
  var i1170 = root || request.c( 'AnimatorUIControl' )
  var i1171 = data
  i1170.timeDelayPlay = i1171[0]
  request.r(i1171[1], i1171[2], 0, i1170, 'graphic')
  var i1173 = i1171[3]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationData')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('AnimationData', i1173[i + 0]));
  }
  i1170.animations = i1172
  i1170.isHideWhenPlay = !!i1171[4]
  i1170.timeHide = i1171[5]
  i1170.timeDelayPlaySfx = i1171[6]
  request.r(i1171[7], i1171[8], 0, i1170, 'playSfxEvent')
  request.r(i1171[9], i1171[10], 0, i1170, 'sound')
  return i1170
}

Deserializers["AnimationData"] = function (request, data, root) {
  var i1176 = root || request.c( 'AnimationData' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.isLoop = !!i1177[1]
  return i1176
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1179 = data
  i1178.m_Spacing = i1179[0]
  i1178.m_ChildForceExpandWidth = !!i1179[1]
  i1178.m_ChildForceExpandHeight = !!i1179[2]
  i1178.m_ChildControlWidth = !!i1179[3]
  i1178.m_ChildControlHeight = !!i1179[4]
  i1178.m_ChildScaleWidth = !!i1179[5]
  i1178.m_ChildScaleHeight = !!i1179[6]
  i1178.m_ReverseArrangement = !!i1179[7]
  i1178.m_Padding = UnityEngine.RectOffset.FromPaddings(i1179[8], i1179[9], i1179[10], i1179[11])
  i1178.m_ChildAlignment = i1179[12]
  return i1178
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1181 = data
  i1180.m_HorizontalFit = i1181[0]
  i1180.m_VerticalFit = i1181[1]
  return i1180
}

Deserializers["TheBeginning.UI.LosePopup"] = function (request, data, root) {
  var i1182 = root || request.c( 'TheBeginning.UI.LosePopup' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'canvasGroup')
  request.r(i1183[2], i1183[3], 0, i1182, 'canvas')
  i1182.useAnimation = !!i1183[4]
  i1182.isAutoShow = !!i1183[5]
  i1182.isNotSortingLayer = !!i1183[6]
  i1182.useShowAnimation = !!i1183[7]
  i1182.showAnimationType = i1183[8]
  i1182.durationShowPopup = i1183[9]
  i1182.useHideAnimation = !!i1183[10]
  i1182.hideAnimationType = i1183[11]
  i1182.durationHidePopup = i1183[12]
  i1182.ActionHide = request.d('System.Action', i1183[13], i1182.ActionHide)
  request.r(i1183[14], i1183[15], 0, i1182, 'currentLevel')
  request.r(i1183[16], i1183[17], 0, i1182, 'headerText')
  i1182.levelFormatText = i1183[18]
  request.r(i1183[19], i1183[20], 0, i1182, 'heartData')
  request.r(i1183[21], i1183[22], 0, i1182, 'iconTransform')
  request.r(i1183[23], i1183[24], 0, i1182, 'replayGameEvent')
  request.r(i1183[25], i1183[26], 0, i1182, 'returnHomeEvent')
  request.r(i1183[27], i1183[28], 0, i1182, 'background')
  request.r(i1183[29], i1183[30], 0, i1182, 'container')
  i1182.showMovePopup = i1183[31]
  i1182.offsetShowMove = i1183[32]
  i1182.scaleFromShow = new pc.Vec3( i1183[33], i1183[34], i1183[35] )
  i1182.eulerAngleShowFrom = new pc.Vec3( i1183[36], i1183[37], i1183[38] )
  request.r(i1183[39], i1183[40], 0, i1182, 'pointShowPos')
  i1182.hideMovePopup = i1183[41]
  i1182.offsetHideMove = i1183[42]
  i1182.scaleFromHide = new pc.Vec3( i1183[43], i1183[44], i1183[45] )
  request.r(i1183[46], i1183[47], 0, i1182, 'pointHidePos')
  request.r(i1183[48], i1183[49], 0, i1182, 'playSfxEvent')
  request.r(i1183[50], i1183[51], 0, i1182, 'soundOpen')
  request.r(i1183[52], i1183[53], 0, i1182, 'soundClose')
  return i1182
}

Deserializers["TheBeginning.UI.SettingPopupInGame"] = function (request, data, root) {
  var i1184 = root || request.c( 'TheBeginning.UI.SettingPopupInGame' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'canvasGroup')
  request.r(i1185[2], i1185[3], 0, i1184, 'canvas')
  i1184.useAnimation = !!i1185[4]
  i1184.isAutoShow = !!i1185[5]
  i1184.isNotSortingLayer = !!i1185[6]
  i1184.useShowAnimation = !!i1185[7]
  i1184.showAnimationType = i1185[8]
  i1184.durationShowPopup = i1185[9]
  i1184.useHideAnimation = !!i1185[10]
  i1184.hideAnimationType = i1185[11]
  i1184.durationHidePopup = i1185[12]
  i1184.ActionHide = request.d('System.Action', i1185[13], i1184.ActionHide)
  request.r(i1185[14], i1185[15], 0, i1184, 'unlockWinStreakLevel')
  request.r(i1185[16], i1185[17], 0, i1184, 'indexLevelVariable')
  request.r(i1185[18], i1185[19], 0, i1184, 'soundVolume')
  request.r(i1185[20], i1185[21], 0, i1184, 'buttonSound')
  request.r(i1185[22], i1185[23], 0, i1184, 'soundOn')
  request.r(i1185[24], i1185[25], 0, i1184, 'soundOff')
  request.r(i1185[26], i1185[27], 0, i1184, 'musicVolume')
  request.r(i1185[28], i1185[29], 0, i1184, 'buttonMusic')
  request.r(i1185[30], i1185[31], 0, i1184, 'musicOn')
  request.r(i1185[32], i1185[33], 0, i1184, 'musicOff')
  request.r(i1185[34], i1185[35], 0, i1184, 'buttonVibrate')
  request.r(i1185[36], i1185[37], 0, i1184, 'vibrateOn')
  request.r(i1185[38], i1185[39], 0, i1184, 'vibrateOff')
  request.r(i1185[40], i1185[41], 0, i1184, 'buttonHome')
  request.r(i1185[42], i1185[43], 0, i1184, 'btnRestorePurchase')
  request.r(i1185[44], i1185[45], 0, i1184, 'isPlayingLevel')
  request.r(i1185[46], i1185[47], 0, i1184, 'isPauseGame')
  request.r(i1185[48], i1185[49], 0, i1184, 'isStartingLevel')
  request.r(i1185[50], i1185[51], 0, i1184, 'pauseTimeLevelVariable')
  request.r(i1185[52], i1185[53], 0, i1184, 'callReturnHome')
  request.r(i1185[54], i1185[55], 0, i1184, 'isBackToBuildTutorialPlaying')
  request.r(i1185[56], i1185[57], 0, i1184, 'isStartingGlamRush')
  request.r(i1185[58], i1185[59], 0, i1184, 'isGlamRushFinished')
  request.r(i1185[60], i1185[61], 0, i1184, 'background')
  request.r(i1185[62], i1185[63], 0, i1184, 'container')
  i1184.showMovePopup = i1185[64]
  i1184.offsetShowMove = i1185[65]
  i1184.scaleFromShow = new pc.Vec3( i1185[66], i1185[67], i1185[68] )
  i1184.eulerAngleShowFrom = new pc.Vec3( i1185[69], i1185[70], i1185[71] )
  request.r(i1185[72], i1185[73], 0, i1184, 'pointShowPos')
  i1184.hideMovePopup = i1185[74]
  i1184.offsetHideMove = i1185[75]
  i1184.scaleFromHide = new pc.Vec3( i1185[76], i1185[77], i1185[78] )
  request.r(i1185[79], i1185[80], 0, i1184, 'pointHidePos')
  request.r(i1185[81], i1185[82], 0, i1184, 'playSfxEvent')
  request.r(i1185[83], i1185[84], 0, i1184, 'soundOpen')
  request.r(i1185[85], i1185[86], 0, i1184, 'soundClose')
  return i1184
}

Deserializers["GraphicsQualitySettingUI"] = function (request, data, root) {
  var i1186 = root || request.c( 'GraphicsQualitySettingUI' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'qualitySlider')
  request.r(i1187[2], i1187[3], 0, i1186, 'txtQuality')
  request.r(i1187[4], i1187[5], 0, i1186, 'graphicsQualitySetting')
  i1186.isRefreshOnStart = !!i1187[6]
  return i1186
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'm_FillRect')
  request.r(i1189[2], i1189[3], 0, i1188, 'm_HandleRect')
  i1188.m_Direction = i1189[4]
  i1188.m_MinValue = i1189[5]
  i1188.m_MaxValue = i1189[6]
  i1188.m_WholeNumbers = !!i1189[7]
  i1188.m_Value = i1189[8]
  i1188.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1189[9], i1188.m_OnValueChanged)
  i1188.m_Navigation = request.d('UnityEngine.UI.Navigation', i1189[10], i1188.m_Navigation)
  i1188.m_Transition = i1189[11]
  i1188.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1189[12], i1188.m_Colors)
  i1188.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1189[13], i1188.m_SpriteState)
  i1188.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1189[14], i1188.m_AnimationTriggers)
  i1188.m_Interactable = !!i1189[15]
  request.r(i1189[16], i1189[17], 0, i1188, 'm_TargetGraphic')
  return i1188
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1191 = data
  i1190.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1191[0], i1190.m_PersistentCalls)
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'clip')
  request.r(i1193[2], i1193[3], 0, i1192, 'outputAudioMixerGroup')
  i1192.playOnAwake = !!i1193[4]
  i1192.loop = !!i1193[5]
  i1192.time = i1193[6]
  i1192.volume = i1193[7]
  i1192.pitch = i1193[8]
  i1192.enabled = !!i1193[9]
  return i1192
}

Deserializers["VirtueSky.Audio.SoundComponent"] = function (request, data, root) {
  var i1194 = root || request.c( 'VirtueSky.Audio.SoundComponent' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'component')
  i1194.key = i1195[2]
  return i1194
}

Deserializers["CoinGenerate"] = function (request, data, root) {
  var i1196 = root || request.c( 'CoinGenerate' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'playSoundFx')
  request.r(i1197[2], i1197[3], 0, i1196, 'coinPrefab')
  request.r(i1197[4], i1197[5], 0, i1196, 'holder')
  i1196.numberCoin = i1197[6]
  i1196.delay = i1197[7]
  i1196.durationNear = i1197[8]
  i1196.durationTarget = i1197[9]
  i1196.easeNear = i1197[10]
  i1196.easeTarget = i1197[11]
  i1196.scale = i1197[12]
  i1196.offsetNear = i1197[13]
  request.r(i1197[14], i1197[15], 0, i1196, 'setFromCoinEvent')
  request.r(i1197[16], i1197[17], 0, i1196, 'addTargetToCoinGenerateEvent')
  request.r(i1197[18], i1197[19], 0, i1196, 'removeTargetToCoinGenerateEvent')
  request.r(i1197[20], i1197[21], 0, i1196, 'moveOneCoinDone')
  request.r(i1197[22], i1197[23], 0, i1196, 'moveAllCoinDone')
  request.r(i1197[24], i1197[25], 0, i1196, 'decreaseCoinEvent')
  request.r(i1197[26], i1197[27], 0, i1196, 'addCoinEvent')
  request.r(i1197[28], i1197[29], 0, i1196, 'minusCoinEvent')
  request.r(i1197[30], i1197[31], 0, i1196, 'soundCoinMove')
  request.r(i1197[32], i1197[33], 0, i1196, 'fx')
  return i1196
}

Deserializers["VirtueSky.Component.RotateComponent"] = function (request, data, root) {
  var i1198 = root || request.c( 'VirtueSky.Component.RotateComponent' )
  var i1199 = data
  i1198.ignoreTimeScale = !!i1199[0]
  i1198.speed = i1199[1]
  i1198.rotateX = !!i1199[2]
  i1198.rotateY = !!i1199[3]
  i1198.rotateZ = !!i1199[4]
  i1198.isReverse = !!i1199[5]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'animatorController')
  request.r(i1201[2], i1201[3], 0, i1200, 'avatar')
  i1200.updateMode = i1201[4]
  i1200.hasTransformHierarchy = !!i1201[5]
  i1200.applyRootMotion = !!i1201[6]
  var i1203 = i1201[7]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1200.humanBones = i1202
  i1200.enabled = !!i1201[8]
  return i1200
}

Deserializers["StarGenerate"] = function (request, data, root) {
  var i1206 = root || request.c( 'StarGenerate' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'playSoundFx')
  request.r(i1207[2], i1207[3], 0, i1206, 'coinPrefab')
  request.r(i1207[4], i1207[5], 0, i1206, 'holder')
  i1206.numberCoin = i1207[6]
  i1206.delay = i1207[7]
  i1206.durationNear = i1207[8]
  i1206.durationTarget = i1207[9]
  i1206.easeNear = i1207[10]
  i1206.easeTarget = i1207[11]
  i1206.scale = i1207[12]
  i1206.scaleTo = i1207[13]
  i1206.offsetNear = i1207[14]
  request.r(i1207[15], i1207[16], 0, i1206, 'setStarCountEvent')
  request.r(i1207[17], i1207[18], 0, i1206, 'setFromCoinEvent')
  request.r(i1207[19], i1207[20], 0, i1206, 'addTargetToCoinGenerateEvent')
  request.r(i1207[21], i1207[22], 0, i1206, 'removeTargetToCoinGenerateEvent')
  request.r(i1207[23], i1207[24], 0, i1206, 'moveOneCoinDone')
  request.r(i1207[25], i1207[26], 0, i1206, 'moveAllCoinDone')
  request.r(i1207[27], i1207[28], 0, i1206, 'decreaseCoinEvent')
  request.r(i1207[29], i1207[30], 0, i1206, 'addCoinEvent')
  request.r(i1207[31], i1207[32], 0, i1206, 'minusCoinEvent')
  request.r(i1207[33], i1207[34], 0, i1206, 'soundCoinMove')
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1209 = data
  i1208.aspect = i1209[0]
  i1208.orthographic = !!i1209[1]
  i1208.orthographicSize = i1209[2]
  i1208.backgroundColor = new pc.Color(i1209[3], i1209[4], i1209[5], i1209[6])
  i1208.nearClipPlane = i1209[7]
  i1208.farClipPlane = i1209[8]
  i1208.fieldOfView = i1209[9]
  i1208.depth = i1209[10]
  i1208.clearFlags = i1209[11]
  i1208.cullingMask = i1209[12]
  i1208.rect = i1209[13]
  request.r(i1209[14], i1209[15], 0, i1208, 'targetTexture')
  i1208.usePhysicalProperties = !!i1209[16]
  i1208.focalLength = i1209[17]
  i1208.sensorSize = new pc.Vec2( i1209[18], i1209[19] )
  i1208.lensShift = new pc.Vec2( i1209[20], i1209[21] )
  i1208.gateFit = i1209[22]
  i1208.commandBufferCount = i1209[23]
  i1208.cameraType = i1209[24]
  i1208.enabled = !!i1209[25]
  return i1208
}

Deserializers["CameraSystem"] = function (request, data, root) {
  var i1210 = root || request.c( 'CameraSystem' )
  var i1211 = data
  i1210.screenSizeOrigin = new pc.Vec2( i1211[0], i1211[1] )
  request.r(i1211[2], i1211[3], 0, i1210, 'cameraTarget')
  return i1210
}

Deserializers["TouchSystem"] = function (request, data, root) {
  var i1212 = root || request.c( 'TouchSystem' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'sceneCamera')
  i1212.includeLayer = UnityEngine.LayerMask.FromIntegerValue( i1213[2] )
  i1212.distance = i1213[3]
  request.r(i1213[4], i1213[5], 0, i1212, 'inputEventTouchBegin')
  request.r(i1213[6], i1213[7], 0, i1212, 'inputEventTouchEnd')
  return i1212
}

Deserializers["MapSystem"] = function (request, data, root) {
  var i1214 = root || request.c( 'MapSystem' )
  var i1215 = data
  i1214.sizeGrid = new pc.Vec2( i1215[0], i1215[1] )
  i1214.sizeActive = new pc.Vec2( i1215[2], i1215[3] )
  i1214.gridOffset = new pc.Vec2( i1215[4], i1215[5] )
  i1214.gridType = i1215[6]
  i1214.axisType = i1215[7]
  request.r(i1215[8], i1215[9], 0, i1214, 'setting')
  request.r(i1215[10], i1215[11], 0, i1214, 'gridSystem')
  request.r(i1215[12], i1215[13], 0, i1214, 'plane')
  i1214.path = i1215[14]
  return i1214
}

Deserializers["Plane"] = function (request, data, root) {
  var i1216 = root || request.c( 'Plane' )
  var i1217 = data
  i1216.objectName = i1217[0]
  request.r(i1217[1], i1217[2], 0, i1216, 'girdSize')
  i1216.heightOrigin = i1217[3]
  i1216.size = new pc.Vec3( i1217[4], i1217[5], i1217[6] )
  i1216.eRotationType = i1217[7]
  request.r(i1217[8], i1217[9], 0, i1216, 'materialCurrent')
  request.r(i1217[10], i1217[11], 0, i1216, 'centerModel')
  request.r(i1217[12], i1217[13], 0, i1216, 'isStarttingLevel')
  var i1219 = i1217[14]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 1, i1218, '')
  }
  i1216.listColliders = i1218
  i1216.eColorType = i1217[15]
  request.r(i1217[16], i1217[17], 0, i1216, 'colorConfig')
  i1216.path = i1217[18]
  i1216.colorMaterialName = i1217[19]
  i1216.pivotType = i1217[20]
  request.r(i1217[21], i1217[22], 0, i1216, 'model')
  i1216.yAxis = i1217[23]
  i1216.isHaveStar = !!i1217[24]
  request.r(i1217[25], i1217[26], 0, i1216, 'objectStarPrefab')
  request.r(i1217[27], i1217[28], 0, i1216, 'objectStar')
  i1216.isFreeze = !!i1217[29]
  i1216.freezeCount = i1217[30]
  i1216.textSize = i1217[31]
  request.r(i1217[32], i1217[33], 0, i1216, 'materialFreezeOverride')
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'sharedMesh')
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'additionalVertexStreams')
  i1224.enabled = !!i1225[2]
  request.r(i1225[3], i1225[4], 0, i1224, 'sharedMaterial')
  var i1227 = i1225[5]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 2, i1226, '')
  }
  i1224.sharedMaterials = i1226
  i1224.receiveShadows = !!i1225[6]
  i1224.shadowCastingMode = i1225[7]
  i1224.sortingLayerID = i1225[8]
  i1224.sortingOrder = i1225[9]
  i1224.lightmapIndex = i1225[10]
  i1224.lightmapSceneIndex = i1225[11]
  i1224.lightmapScaleOffset = new pc.Vec4( i1225[12], i1225[13], i1225[14], i1225[15] )
  i1224.lightProbeUsage = i1225[16]
  i1224.reflectionProbeUsage = i1225[17]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'sharedMesh')
  i1228.convex = !!i1229[2]
  i1228.enabled = !!i1229[3]
  i1228.isTrigger = !!i1229[4]
  request.r(i1229[5], i1229[6], 0, i1228, 'material')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1231 = data
  i1230.color = new pc.Color(i1231[0], i1231[1], i1231[2], i1231[3])
  request.r(i1231[4], i1231[5], 0, i1230, 'sprite')
  i1230.flipX = !!i1231[6]
  i1230.flipY = !!i1231[7]
  i1230.drawMode = i1231[8]
  i1230.size = new pc.Vec2( i1231[9], i1231[10] )
  i1230.tileMode = i1231[11]
  i1230.adaptiveModeThreshold = i1231[12]
  i1230.maskInteraction = i1231[13]
  i1230.spriteSortPoint = i1231[14]
  i1230.enabled = !!i1231[15]
  request.r(i1231[16], i1231[17], 0, i1230, 'sharedMaterial')
  var i1233 = i1231[18]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1230.sharedMaterials = i1232
  i1230.receiveShadows = !!i1231[19]
  i1230.shadowCastingMode = i1231[20]
  i1230.sortingLayerID = i1231[21]
  i1230.sortingOrder = i1231[22]
  i1230.lightmapIndex = i1231[23]
  i1230.lightmapSceneIndex = i1231[24]
  i1230.lightmapScaleOffset = new pc.Vec4( i1231[25], i1231[26], i1231[27], i1231[28] )
  i1230.lightProbeUsage = i1231[29]
  i1230.reflectionProbeUsage = i1231[30]
  return i1230
}

Deserializers["GridSystem"] = function (request, data, root) {
  var i1234 = root || request.c( 'GridSystem' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('CellGrid')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1234.listCell = i1236
  return i1234
}

Deserializers["CellGrid"] = function (request, data, root) {
  var i1240 = root || request.c( 'CellGrid' )
  var i1241 = data
  i1240.coordinate = new pc.Vec2( i1241[0], i1241[1] )
  var i1243 = i1241[2]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('CellData')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('CellData', i1243[i + 0]));
  }
  i1240.neighbours = i1242
  i1240.objectName = i1241[3]
  request.r(i1241[4], i1241[5], 0, i1240, 'girdSize')
  i1240.heightOrigin = i1241[6]
  i1240.size = new pc.Vec3( i1241[7], i1241[8], i1241[9] )
  i1240.eRotationType = i1241[10]
  request.r(i1241[11], i1241[12], 0, i1240, 'materialCurrent')
  request.r(i1241[13], i1241[14], 0, i1240, 'centerModel')
  request.r(i1241[15], i1241[16], 0, i1240, 'isStarttingLevel')
  var i1245 = i1241[17]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1240.listColliders = i1244
  i1240.eColorType = i1241[18]
  request.r(i1241[19], i1241[20], 0, i1240, 'colorConfig')
  i1240.path = i1241[21]
  i1240.colorMaterialName = i1241[22]
  i1240.pivotType = i1241[23]
  request.r(i1241[24], i1241[25], 0, i1240, 'model')
  i1240.yAxis = i1241[26]
  i1240.isHaveStar = !!i1241[27]
  request.r(i1241[28], i1241[29], 0, i1240, 'objectStarPrefab')
  request.r(i1241[30], i1241[31], 0, i1240, 'objectStar')
  i1240.isFreeze = !!i1241[32]
  i1240.freezeCount = i1241[33]
  i1240.textSize = i1241[34]
  request.r(i1241[35], i1241[36], 0, i1240, 'materialFreezeOverride')
  return i1240
}

Deserializers["CellData"] = function (request, data, root) {
  var i1248 = root || request.c( 'CellData' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'cell')
  i1248.direction = i1249[2]
  return i1248
}

Deserializers["FreezeSystem"] = function (request, data, root) {
  var i1250 = root || request.c( 'FreezeSystem' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('FreezeLinker')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('FreezeLinker', i1253[i + 0]));
  }
  i1250.listLinker = i1252
  i1250.type = i1251[1]
  var i1255 = i1251[2]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('FreezeConfig')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('FreezeConfig', i1255[i + 0]));
  }
  i1250.configs = i1254
  request.r(i1251[3], i1251[4], 0, i1250, 'playSfxEvent')
  return i1250
}

Deserializers["FreezeLinker"] = function (request, data, root) {
  var i1258 = root || request.c( 'FreezeLinker' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'freezer')
  request.r(i1259[2], i1259[3], 0, i1258, 'prefab')
  return i1258
}

Deserializers["FreezeConfig"] = function (request, data, root) {
  var i1262 = root || request.c( 'FreezeConfig' )
  var i1263 = data
  i1262.type = i1263[0]
  request.r(i1263[1], i1263[2], 0, i1262, 'freezePrefab')
  request.r(i1263[3], i1263[4], 0, i1262, 'material')
  request.r(i1263[5], i1263[6], 0, i1262, 'soundCrack')
  request.r(i1263[7], i1263[8], 0, i1262, 'fxBreak')
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1265 = data
  i1264.mass = i1265[0]
  i1264.drag = i1265[1]
  i1264.angularDrag = i1265[2]
  i1264.useGravity = !!i1265[3]
  i1264.isKinematic = !!i1265[4]
  i1264.constraints = i1265[5]
  i1264.maxAngularVelocity = i1265[6]
  i1264.collisionDetectionMode = i1265[7]
  i1264.interpolation = i1265[8]
  return i1264
}

Deserializers["Wall"] = function (request, data, root) {
  var i1266 = root || request.c( 'Wall' )
  var i1267 = data
  i1266.isAutoSize = !!i1267[0]
  i1266.sizeOrigin = new pc.Vec3( i1267[1], i1267[2], i1267[3] )
  i1266.objectName = i1267[4]
  request.r(i1267[5], i1267[6], 0, i1266, 'girdSize')
  i1266.heightOrigin = i1267[7]
  i1266.size = new pc.Vec3( i1267[8], i1267[9], i1267[10] )
  i1266.eRotationType = i1267[11]
  request.r(i1267[12], i1267[13], 0, i1266, 'materialCurrent')
  request.r(i1267[14], i1267[15], 0, i1266, 'centerModel')
  request.r(i1267[16], i1267[17], 0, i1266, 'isStarttingLevel')
  var i1269 = i1267[18]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 1, i1268, '')
  }
  i1266.listColliders = i1268
  i1266.eColorType = i1267[19]
  request.r(i1267[20], i1267[21], 0, i1266, 'colorConfig')
  i1266.path = i1267[22]
  i1266.colorMaterialName = i1267[23]
  i1266.pivotType = i1267[24]
  request.r(i1267[25], i1267[26], 0, i1266, 'model')
  i1266.yAxis = i1267[27]
  i1266.isHaveStar = !!i1267[28]
  request.r(i1267[29], i1267[30], 0, i1266, 'objectStarPrefab')
  request.r(i1267[31], i1267[32], 0, i1266, 'objectStar')
  i1266.isFreeze = !!i1267[33]
  i1266.freezeCount = i1267[34]
  i1266.textSize = i1267[35]
  request.r(i1267[36], i1267[37], 0, i1266, 'materialFreezeOverride')
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1271 = data
  i1270.center = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.size = new pc.Vec3( i1271[3], i1271[4], i1271[5] )
  i1270.enabled = !!i1271[6]
  i1270.isTrigger = !!i1271[7]
  request.r(i1271[8], i1271[9], 0, i1270, 'material')
  return i1270
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TextMeshPro' )
  var i1273 = data
  i1272._SortingLayer = i1273[0]
  i1272._SortingLayerID = i1273[1]
  i1272._SortingOrder = i1273[2]
  i1272.m_hasFontAssetChanged = !!i1273[3]
  request.r(i1273[4], i1273[5], 0, i1272, 'm_renderer')
  i1272.m_maskType = i1273[6]
  i1272.m_text = i1273[7]
  i1272.m_isRightToLeft = !!i1273[8]
  request.r(i1273[9], i1273[10], 0, i1272, 'm_fontAsset')
  request.r(i1273[11], i1273[12], 0, i1272, 'm_sharedMaterial')
  var i1275 = i1273[13]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1272.m_fontSharedMaterials = i1274
  request.r(i1273[14], i1273[15], 0, i1272, 'm_fontMaterial')
  var i1277 = i1273[16]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 2, i1276, '')
  }
  i1272.m_fontMaterials = i1276
  i1272.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1273[17], i1273[18], i1273[19], i1273[20])
  i1272.m_fontColor = new pc.Color(i1273[21], i1273[22], i1273[23], i1273[24])
  i1272.m_enableVertexGradient = !!i1273[25]
  i1272.m_colorMode = i1273[26]
  i1272.m_fontColorGradient = request.d('TMPro.VertexGradient', i1273[27], i1272.m_fontColorGradient)
  request.r(i1273[28], i1273[29], 0, i1272, 'm_fontColorGradientPreset')
  request.r(i1273[30], i1273[31], 0, i1272, 'm_spriteAsset')
  i1272.m_tintAllSprites = !!i1273[32]
  request.r(i1273[33], i1273[34], 0, i1272, 'm_StyleSheet')
  i1272.m_TextStyleHashCode = i1273[35]
  i1272.m_overrideHtmlColors = !!i1273[36]
  i1272.m_faceColor = UnityEngine.Color32.ConstructColor(i1273[37], i1273[38], i1273[39], i1273[40])
  i1272.m_fontSize = i1273[41]
  i1272.m_fontSizeBase = i1273[42]
  i1272.m_fontWeight = i1273[43]
  i1272.m_enableAutoSizing = !!i1273[44]
  i1272.m_fontSizeMin = i1273[45]
  i1272.m_fontSizeMax = i1273[46]
  i1272.m_fontStyle = i1273[47]
  i1272.m_HorizontalAlignment = i1273[48]
  i1272.m_VerticalAlignment = i1273[49]
  i1272.m_textAlignment = i1273[50]
  i1272.m_characterSpacing = i1273[51]
  i1272.m_wordSpacing = i1273[52]
  i1272.m_lineSpacing = i1273[53]
  i1272.m_lineSpacingMax = i1273[54]
  i1272.m_paragraphSpacing = i1273[55]
  i1272.m_charWidthMaxAdj = i1273[56]
  i1272.m_enableWordWrapping = !!i1273[57]
  i1272.m_wordWrappingRatios = i1273[58]
  i1272.m_overflowMode = i1273[59]
  request.r(i1273[60], i1273[61], 0, i1272, 'm_linkedTextComponent')
  request.r(i1273[62], i1273[63], 0, i1272, 'parentLinkedComponent')
  i1272.m_enableKerning = !!i1273[64]
  i1272.m_enableExtraPadding = !!i1273[65]
  i1272.checkPaddingRequired = !!i1273[66]
  i1272.m_isRichText = !!i1273[67]
  i1272.m_parseCtrlCharacters = !!i1273[68]
  i1272.m_isOrthographic = !!i1273[69]
  i1272.m_isCullingEnabled = !!i1273[70]
  i1272.m_horizontalMapping = i1273[71]
  i1272.m_verticalMapping = i1273[72]
  i1272.m_uvLineOffset = i1273[73]
  i1272.m_geometrySortingOrder = i1273[74]
  i1272.m_IsTextObjectScaleStatic = !!i1273[75]
  i1272.m_VertexBufferAutoSizeReduction = !!i1273[76]
  i1272.m_useMaxVisibleDescender = !!i1273[77]
  i1272.m_pageToDisplay = i1273[78]
  i1272.m_margin = new pc.Vec4( i1273[79], i1273[80], i1273[81], i1273[82] )
  i1272.m_isUsingLegacyAnimationComponent = !!i1273[83]
  i1272.m_isVolumetricText = !!i1273[84]
  i1272.m_Maskable = !!i1273[85]
  request.r(i1273[86], i1273[87], 0, i1272, 'm_Material')
  i1272.m_Color = new pc.Color(i1273[88], i1273[89], i1273[90], i1273[91])
  i1272.m_RaycastTarget = !!i1273[92]
  i1272.m_RaycastPadding = new pc.Vec4( i1273[93], i1273[94], i1273[95], i1273[96] )
  return i1272
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1278 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1279 = data
  i1278.loop = !!i1279[0]
  i1278.timeScale = i1279[1]
  request.r(i1279[2], i1279[3], 0, i1278, 'skeletonDataAsset')
  i1278.initialSkinName = i1279[4]
  i1278.fixPrefabOverrideViaMeshFilter = i1279[5]
  i1278.initialFlipX = !!i1279[6]
  i1278.initialFlipY = !!i1279[7]
  i1278.updateWhenInvisible = i1279[8]
  i1278.zSpacing = i1279[9]
  i1278.useClipping = !!i1279[10]
  i1278.immutableTriangles = !!i1279[11]
  i1278.pmaVertexColors = !!i1279[12]
  i1278.clearStateOnDisable = !!i1279[13]
  i1278.tintBlack = !!i1279[14]
  i1278.singleSubmesh = !!i1279[15]
  i1278.fixDrawOrder = !!i1279[16]
  i1278.addNormals = !!i1279[17]
  i1278.calculateTangents = !!i1279[18]
  i1278.maskInteraction = i1279[19]
  i1278.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1279[20], i1278.maskMaterials)
  i1278.disableRenderingOnOverride = !!i1279[21]
  i1278.updateTiming = i1279[22]
  i1278.unscaledTime = !!i1279[23]
  i1278._animationName = i1279[24]
  var i1281 = i1279[25]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1278.separatorSlotNames = i1280
  return i1278
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1282 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 2, i1284, '')
  }
  i1282.materialsMaskDisabled = i1284
  var i1287 = i1283[1]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 2, i1286, '')
  }
  i1282.materialsInsideMask = i1286
  var i1289 = i1283[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 2, i1288, '')
  }
  i1282.materialsOutsideMask = i1288
  return i1282
}

Deserializers["FreezePrefab"] = function (request, data, root) {
  var i1290 = root || request.c( 'FreezePrefab' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'txtCount')
  i1290.yAxis = i1291[2]
  return i1290
}

Deserializers["PooledParticleCallback"] = function (request, data, root) {
  var i1292 = root || request.c( 'PooledParticleCallback' )
  var i1293 = data
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.atlasId = i1295[1]
  i1294.mipmapCount = i1295[2]
  i1294.hdr = !!i1295[3]
  i1294.size = i1295[4]
  i1294.anisoLevel = i1295[5]
  i1294.filterMode = i1295[6]
  var i1297 = i1295[7]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 4) {
    i1296.push( UnityEngine.Rect.MinMaxRect(i1297[i + 0], i1297[i + 1], i1297[i + 2], i1297[i + 3]) );
  }
  i1294.rects = i1296
  i1294.wrapU = i1295[8]
  i1294.wrapV = i1295[9]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.index = i1301[1]
  i1300.startup = !!i1301[2]
  return i1300
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1303 = data
  i1302.m_UiScaleMode = i1303[0]
  i1302.m_ReferencePixelsPerUnit = i1303[1]
  i1302.m_ScaleFactor = i1303[2]
  i1302.m_ReferenceResolution = new pc.Vec2( i1303[3], i1303[4] )
  i1302.m_ScreenMatchMode = i1303[5]
  i1302.m_MatchWidthOrHeight = i1303[6]
  i1302.m_PhysicalUnit = i1303[7]
  i1302.m_FallbackScreenDPI = i1303[8]
  i1302.m_DefaultSpriteDPI = i1303[9]
  i1302.m_DynamicPixelsPerUnit = i1303[10]
  i1302.m_PresetInfoIsWorld = !!i1303[11]
  return i1302
}

Deserializers["VirtueSky.Component.ResizeMatchCanvasScalerComponent"] = function (request, data, root) {
  var i1304 = root || request.c( 'VirtueSky.Component.ResizeMatchCanvasScalerComponent' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'component')
  i1304.aspectRatio = i1305[2]
  request.r(i1305[3], i1305[4], 0, i1304, 'canvas')
  request.r(i1305[5], i1305[6], 0, i1304, 'camera')
  return i1304
}

Deserializers["Coffee.UIExtensions.UIParticleRenderer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Coffee.UIExtensions.UIParticleRenderer' )
  var i1307 = data
  i1306.m_Maskable = !!i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'm_Material')
  i1306.m_Color = new pc.Color(i1307[3], i1307[4], i1307[5], i1307[6])
  i1306.m_RaycastTarget = !!i1307[7]
  i1306.m_RaycastPadding = new pc.Vec4( i1307[8], i1307[9], i1307[10], i1307[11] )
  return i1306
}

Deserializers["TheBeginning.UI.PopupManager"] = function (request, data, root) {
  var i1308 = root || request.c( 'TheBeginning.UI.PopupManager' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'parentContainer')
  request.r(i1309[2], i1309[3], 0, i1308, 'popupSettings')
  request.r(i1309[4], i1309[5], 0, i1308, 'cameraUI')
  i1308.index = i1309[6]
  return i1308
}

Deserializers["TheBeginning.Services.PoolInitialization"] = function (request, data, root) {
  var i1310 = root || request.c( 'TheBeginning.Services.PoolInitialization' )
  var i1311 = data
  return i1310
}

Deserializers["TheBeginning.Services.VibrationInitialization"] = function (request, data, root) {
  var i1312 = root || request.c( 'TheBeginning.Services.VibrationInitialization' )
  var i1313 = data
  return i1312
}

Deserializers["TheBeginning.Services.RuntimeInitialization"] = function (request, data, root) {
  var i1314 = root || request.c( 'TheBeginning.Services.RuntimeInitialization' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 2, i1316, '')
  }
  i1314.serviceInitializations = i1316
  return i1314
}

Deserializers["TheBeginning.LevelSystem.LevelLoader"] = function (request, data, root) {
  var i1320 = root || request.c( 'TheBeginning.LevelSystem.LevelLoader' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'currentLevel')
  request.r(i1321[2], i1321[3], 0, i1320, 'previousLevel')
  request.r(i1321[4], i1321[5], 0, i1320, 'levelSettings')
  request.r(i1321[6], i1321[7], 0, i1320, 'currentIndexLevel')
  request.r(i1321[8], i1321[9], 0, i1320, 'currentIndexLevelLoopBy')
  request.r(i1321[10], i1321[11], 0, i1320, 'eventLoadLevel')
  request.r(i1321[12], i1321[13], 0, i1320, 'eventGetCurrentLevel')
  request.r(i1321[14], i1321[15], 0, i1320, 'eventGetPreviousLevel')
  return i1320
}

Deserializers["VirtueSky.Audio.AudioManager"] = function (request, data, root) {
  var i1322 = root || request.c( 'VirtueSky.Audio.AudioManager' )
  var i1323 = data
  i1322.isDontDestroyOnLoad = !!i1323[0]
  request.r(i1323[1], i1323[2], 0, i1322, 'soundComponentPrefab')
  request.r(i1323[3], i1323[4], 0, i1322, 'audioHolder')
  request.r(i1323[5], i1323[6], 0, i1322, 'eventPlayMusic')
  request.r(i1323[7], i1323[8], 0, i1322, 'eventStopMusic')
  request.r(i1323[9], i1323[10], 0, i1322, 'eventPauseMusic')
  request.r(i1323[11], i1323[12], 0, i1322, 'eventResumeMusic')
  request.r(i1323[13], i1323[14], 0, i1322, 'eventPlaySfx')
  request.r(i1323[15], i1323[16], 0, i1322, 'eventStopSfx')
  request.r(i1323[17], i1323[18], 0, i1322, 'eventPauseSfx')
  request.r(i1323[19], i1323[20], 0, i1322, 'eventResumeSfx')
  request.r(i1323[21], i1323[22], 0, i1322, 'eventFinishSfx')
  request.r(i1323[23], i1323[24], 0, i1322, 'eventStopAllSfx')
  request.r(i1323[25], i1323[26], 0, i1322, 'musicVolume')
  request.r(i1323[27], i1323[28], 0, i1322, 'sfxVolume')
  var i1325 = i1323[29]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('VirtueSky.Audio.SoundComponent')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1322.listCacheSfx = i1324
  return i1322
}

Deserializers["VirtueSky.TouchInput.TouchInputManager"] = function (request, data, root) {
  var i1328 = root || request.c( 'VirtueSky.TouchInput.TouchInputManager' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'inputEventTouchBegin')
  request.r(i1329[2], i1329[3], 0, i1328, 'inputEventTouchMove')
  request.r(i1329[4], i1329[5], 0, i1328, 'inputEventTouchStationary')
  request.r(i1329[6], i1329[7], 0, i1328, 'inputEventTouchEnd')
  request.r(i1329[8], i1329[9], 0, i1328, 'inputEventTouchCancel')
  request.r(i1329[10], i1329[11], 0, i1328, 'inputPreventTouchVariable')
  i1328.touchPosition = new pc.Vec3( i1329[12], i1329[13], i1329[14] )
  i1328.preventTouch = !!i1329[15]
  return i1328
}

Deserializers["CoinSystem"] = function (request, data, root) {
  var i1330 = root || request.c( 'CoinSystem' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'generateCoinEvent')
  request.r(i1331[2], i1331[3], 0, i1330, 'addCoinEvent')
  request.r(i1331[4], i1331[5], 0, i1330, 'updateCoinEvent')
  request.r(i1331[6], i1331[7], 0, i1330, 'minusCoinEvent')
  request.r(i1331[8], i1331[9], 0, i1330, 'balanceAmount')
  return i1330
}

Deserializers["StarSystem"] = function (request, data, root) {
  var i1332 = root || request.c( 'StarSystem' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'generateStarEvent')
  request.r(i1333[2], i1333[3], 0, i1332, 'addStarEvent')
  request.r(i1333[4], i1333[5], 0, i1332, 'minusStarEvent')
  request.r(i1333[6], i1333[7], 0, i1332, 'addStarCompleteEvent')
  request.r(i1333[8], i1333[9], 0, i1332, 'balanceAmount')
  return i1332
}

Deserializers["GamePlayableManager"] = function (request, data, root) {
  var i1334 = root || request.c( 'GamePlayableManager' )
  var i1335 = data
  i1334.gameState = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'levelHolder')
  request.r(i1335[3], i1335[4], 0, i1334, 'indexLevelVariable')
  request.r(i1335[5], i1335[6], 0, i1334, 'eventLoadLevel')
  request.r(i1335[7], i1335[8], 0, i1334, 'eventGetCurrentLevel')
  request.r(i1335[9], i1335[10], 0, i1334, 'eventGetPreviousLevel')
  request.r(i1335[11], i1335[12], 0, i1334, 'callReplayLevelEvent')
  request.r(i1335[13], i1335[14], 0, i1334, 'callPlayCurrentLevelEvent')
  request.r(i1335[15], i1335[16], 0, i1334, 'callNextLevelEvent')
  request.r(i1335[17], i1335[18], 0, i1334, 'onLoadLevelComplete')
  request.r(i1335[19], i1335[20], 0, i1334, 'callWinLevelEvent')
  request.r(i1335[21], i1335[22], 0, i1334, 'callLoseLevelEvent')
  request.r(i1335[23], i1335[24], 0, i1334, 'playSfxEvent')
  request.r(i1335[25], i1335[26], 0, i1334, 'levelModeData')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1337 = data
  i1336.type = i1337[0]
  i1336.color = new pc.Color(i1337[1], i1337[2], i1337[3], i1337[4])
  i1336.cullingMask = i1337[5]
  i1336.intensity = i1337[6]
  i1336.range = i1337[7]
  i1336.spotAngle = i1337[8]
  i1336.shadows = i1337[9]
  i1336.shadowNormalBias = i1337[10]
  i1336.shadowBias = i1337[11]
  i1336.shadowStrength = i1337[12]
  i1336.shadowResolution = i1337[13]
  i1336.lightmapBakeType = i1337[14]
  i1336.renderMode = i1337[15]
  request.r(i1337[16], i1337[17], 0, i1336, 'cookie')
  i1336.cookieSize = i1337[18]
  i1336.enabled = !!i1337[19]
  return i1336
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'm_FirstSelected')
  i1338.m_sendNavigationEvents = !!i1339[2]
  i1338.m_DragThreshold = i1339[3]
  return i1338
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i1341 = data
  i1340.m_MoveRepeatDelay = i1341[0]
  i1340.m_MoveRepeatRate = i1341[1]
  request.r(i1341[2], i1341[3], 0, i1340, 'm_XRTrackingOrigin')
  request.r(i1341[4], i1341[5], 0, i1340, 'm_ActionsAsset')
  request.r(i1341[6], i1341[7], 0, i1340, 'm_PointAction')
  request.r(i1341[8], i1341[9], 0, i1340, 'm_MoveAction')
  request.r(i1341[10], i1341[11], 0, i1340, 'm_SubmitAction')
  request.r(i1341[12], i1341[13], 0, i1340, 'm_CancelAction')
  request.r(i1341[14], i1341[15], 0, i1340, 'm_LeftClickAction')
  request.r(i1341[16], i1341[17], 0, i1340, 'm_MiddleClickAction')
  request.r(i1341[18], i1341[19], 0, i1340, 'm_RightClickAction')
  request.r(i1341[20], i1341[21], 0, i1340, 'm_ScrollWheelAction')
  request.r(i1341[22], i1341[23], 0, i1340, 'm_TrackedDevicePositionAction')
  request.r(i1341[24], i1341[25], 0, i1340, 'm_TrackedDeviceOrientationAction')
  i1340.m_DeselectOnBackgroundClick = !!i1341[26]
  i1340.m_PointerBehavior = i1341[27]
  i1340.m_CursorLockBehavior = i1341[28]
  i1340.m_ScrollDeltaPerTick = i1341[29]
  i1340.m_SendPointerHoverToParent = !!i1341[30]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1343 = data
  i1342.ambientIntensity = i1343[0]
  i1342.reflectionIntensity = i1343[1]
  i1342.ambientMode = i1343[2]
  i1342.ambientLight = new pc.Color(i1343[3], i1343[4], i1343[5], i1343[6])
  i1342.ambientSkyColor = new pc.Color(i1343[7], i1343[8], i1343[9], i1343[10])
  i1342.ambientGroundColor = new pc.Color(i1343[11], i1343[12], i1343[13], i1343[14])
  i1342.ambientEquatorColor = new pc.Color(i1343[15], i1343[16], i1343[17], i1343[18])
  i1342.fogColor = new pc.Color(i1343[19], i1343[20], i1343[21], i1343[22])
  i1342.fogEndDistance = i1343[23]
  i1342.fogStartDistance = i1343[24]
  i1342.fogDensity = i1343[25]
  i1342.fog = !!i1343[26]
  request.r(i1343[27], i1343[28], 0, i1342, 'skybox')
  i1342.fogMode = i1343[29]
  var i1345 = i1343[30]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1345[i + 0]) );
  }
  i1342.lightmaps = i1344
  i1342.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1343[31], i1342.lightProbes)
  i1342.lightmapsMode = i1343[32]
  i1342.mixedBakeMode = i1343[33]
  i1342.environmentLightingMode = i1343[34]
  i1342.ambientProbe = new pc.SphericalHarmonicsL2(i1343[35])
  i1342.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1343[36])
  i1342.useReferenceAmbientProbe = !!i1343[37]
  request.r(i1343[38], i1343[39], 0, i1342, 'customReflection')
  request.r(i1343[40], i1343[41], 0, i1342, 'defaultReflection')
  i1342.defaultReflectionMode = i1343[42]
  i1342.defaultReflectionResolution = i1343[43]
  i1342.sunLightObjectId = i1343[44]
  i1342.pixelLightCount = i1343[45]
  i1342.defaultReflectionHDR = !!i1343[46]
  i1342.hasLightDataAsset = !!i1343[47]
  i1342.hasManualGenerate = !!i1343[48]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1349 = data
  request.r(i1349[0], i1349[1], 0, i1348, 'lightmapColor')
  request.r(i1349[2], i1349[3], 0, i1348, 'lightmapDirection')
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1350 = root || new UnityEngine.LightProbes()
  var i1351 = data
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1361[i + 0]));
  }
  i1358.ShaderCompilationErrors = i1360
  i1358.name = i1359[1]
  i1358.guid = i1359[2]
  var i1363 = i1359[3]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.shaderDefinedKeywords = i1362
  var i1365 = i1359[4]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1365[i + 0]) );
  }
  i1358.passes = i1364
  var i1367 = i1359[5]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1367[i + 0]) );
  }
  i1358.usePasses = i1366
  var i1369 = i1359[6]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1369[i + 0]) );
  }
  i1358.defaultParameterValues = i1368
  request.r(i1359[7], i1359[8], 0, i1358, 'unityFallbackShader')
  i1358.readDepth = !!i1359[9]
  i1358.isCreatedByShaderGraph = !!i1359[10]
  i1358.disableBatching = !!i1359[11]
  i1358.compiled = !!i1359[12]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1373 = data
  i1372.shaderName = i1373[0]
  i1372.errorMessage = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1376 = root || new pc.UnityShaderPass()
  var i1377 = data
  i1376.id = i1377[0]
  i1376.subShaderIndex = i1377[1]
  i1376.name = i1377[2]
  i1376.passType = i1377[3]
  i1376.grabPassTextureName = i1377[4]
  i1376.usePass = !!i1377[5]
  i1376.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[6], i1376.zTest)
  i1376.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[7], i1376.zWrite)
  i1376.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[8], i1376.culling)
  i1376.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1377[9], i1376.blending)
  i1376.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1377[10], i1376.alphaBlending)
  i1376.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[11], i1376.colorWriteMask)
  i1376.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[12], i1376.offsetUnits)
  i1376.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[13], i1376.offsetFactor)
  i1376.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[14], i1376.stencilRef)
  i1376.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[15], i1376.stencilReadMask)
  i1376.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[16], i1376.stencilWriteMask)
  i1376.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[17], i1376.stencilOp)
  i1376.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[18], i1376.stencilOpFront)
  i1376.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1377[19], i1376.stencilOpBack)
  var i1379 = i1377[20]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1379[i + 0]) );
  }
  i1376.tags = i1378
  var i1381 = i1377[21]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( i1381[i + 0] );
  }
  i1376.passDefinedKeywords = i1380
  var i1383 = i1377[22]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1383[i + 0]) );
  }
  i1376.passDefinedKeywordGroups = i1382
  var i1385 = i1377[23]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1385[i + 0]) );
  }
  i1376.variants = i1384
  var i1387 = i1377[24]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1387[i + 0]) );
  }
  i1376.excludedVariants = i1386
  i1376.hasDepthReader = !!i1377[25]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1389 = data
  i1388.val = i1389[0]
  i1388.name = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1391 = data
  i1390.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[0], i1390.src)
  i1390.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[1], i1390.dst)
  i1390.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1391[2], i1390.op)
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1393 = data
  i1392.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[0], i1392.pass)
  i1392.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[1], i1392.fail)
  i1392.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[2], i1392.zFail)
  i1392.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1393[3], i1392.comp)
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.value = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1400.keywords = i1402
  i1400.hasDiscard = !!i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1407 = data
  i1406.passId = i1407[0]
  i1406.subShaderIndex = i1407[1]
  var i1409 = i1407[2]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1406.keywords = i1408
  i1406.vertexProgram = i1407[3]
  i1406.fragmentProgram = i1407[4]
  i1406.exportedForWebGl2 = !!i1407[5]
  i1406.readDepth = !!i1407[6]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'shader')
  i1412.pass = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.type = i1417[1]
  i1416.value = new pc.Vec4( i1417[2], i1417[3], i1417[4], i1417[5] )
  i1416.textureValue = i1417[6]
  i1416.shaderPropertyFlag = i1417[7]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1419 = data
  i1418.name = i1419[0]
  request.r(i1419[1], i1419[2], 0, i1418, 'texture')
  i1418.aabb = i1419[3]
  i1418.vertices = i1419[4]
  i1418.triangles = i1419[5]
  i1418.textureRect = UnityEngine.Rect.MinMaxRect(i1419[6], i1419[7], i1419[8], i1419[9])
  i1418.packedRect = UnityEngine.Rect.MinMaxRect(i1419[10], i1419[11], i1419[12], i1419[13])
  i1418.border = new pc.Vec4( i1419[14], i1419[15], i1419[16], i1419[17] )
  i1418.transparency = i1419[18]
  i1418.bounds = i1419[19]
  i1418.pixelsPerUnit = i1419[20]
  i1418.textureWidth = i1419[21]
  i1418.textureHeight = i1419[22]
  i1418.nativeSize = new pc.Vec2( i1419[23], i1419[24] )
  i1418.pivot = new pc.Vec2( i1419[25], i1419[26] )
  i1418.textureRectOffset = new pc.Vec2( i1419[27], i1419[28] )
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1421 = data
  i1420.name = i1421[0]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.wrapMode = i1423[1]
  i1422.isLooping = !!i1423[2]
  i1422.length = i1423[3]
  var i1425 = i1423[4]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1425[i + 0]) );
  }
  i1422.curves = i1424
  var i1427 = i1423[5]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1427[i + 0]) );
  }
  i1422.events = i1426
  i1422.halfPrecision = !!i1423[6]
  i1422._frameRate = i1423[7]
  i1422.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1423[8], i1422.localBounds)
  i1422.hasMuscleCurves = !!i1423[9]
  var i1429 = i1423[10]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( i1429[i + 0] );
  }
  i1422.clipMuscleConstant = i1428
  i1422.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1423[11], i1422.clipBindingConstant)
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1433 = data
  i1432.path = i1433[0]
  i1432.hash = i1433[1]
  i1432.componentType = i1433[2]
  i1432.property = i1433[3]
  i1432.keys = i1433[4]
  var i1435 = i1433[5]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1435[i + 0]) );
  }
  i1432.objectReferenceKeys = i1434
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1439 = data
  i1438.time = i1439[0]
  request.r(i1439[1], i1439[2], 0, i1438, 'value')
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1443 = data
  i1442.functionName = i1443[0]
  i1442.floatParameter = i1443[1]
  i1442.intParameter = i1443[2]
  i1442.stringParameter = i1443[3]
  request.r(i1443[4], i1443[5], 0, i1442, 'objectReferenceParameter')
  i1442.time = i1443[6]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1445 = data
  i1444.center = new pc.Vec3( i1445[0], i1445[1], i1445[2] )
  i1444.extends = new pc.Vec3( i1445[3], i1445[4], i1445[5] )
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1448.genericBindings = i1450
  var i1453 = i1449[1]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( i1453[i + 0] );
  }
  i1448.pptrCurveMapping = i1452
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1455 = data
  i1454.name = i1455[0]
  i1454.ascent = i1455[1]
  i1454.originalLineHeight = i1455[2]
  i1454.fontSize = i1455[3]
  var i1457 = i1455[4]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1457[i + 0]) );
  }
  i1454.characterInfo = i1456
  request.r(i1455[5], i1455[6], 0, i1454, 'texture')
  i1454.originalFontSize = i1455[7]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1461 = data
  i1460.index = i1461[0]
  i1460.advance = i1461[1]
  i1460.bearing = i1461[2]
  i1460.glyphWidth = i1461[3]
  i1460.glyphHeight = i1461[4]
  i1460.minX = i1461[5]
  i1460.maxX = i1461[6]
  i1460.minY = i1461[7]
  i1460.maxY = i1461[8]
  i1460.uvBottomLeftX = i1461[9]
  i1460.uvBottomLeftY = i1461[10]
  i1460.uvBottomRightX = i1461[11]
  i1460.uvBottomRightY = i1461[12]
  i1460.uvTopLeftX = i1461[13]
  i1460.uvTopLeftY = i1461[14]
  i1460.uvTopRightX = i1461[15]
  i1460.uvTopRightY = i1461[16]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1463 = data
  i1462.name = i1463[0]
  var i1465 = i1463[1]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1465[i + 0]) );
  }
  i1462.layers = i1464
  var i1467 = i1463[2]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1467[i + 0]) );
  }
  i1462.parameters = i1466
  i1462.animationClips = i1463[3]
  i1462.avatarUnsupported = i1463[4]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.defaultWeight = i1471[1]
  i1470.blendingMode = i1471[2]
  i1470.avatarMask = i1471[3]
  i1470.syncedLayerIndex = i1471[4]
  i1470.syncedLayerAffectsTiming = !!i1471[5]
  i1470.syncedLayers = i1471[6]
  i1470.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1471[7], i1470.stateMachine)
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1473 = data
  i1472.id = i1473[0]
  i1472.name = i1473[1]
  i1472.path = i1473[2]
  var i1475 = i1473[3]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1475[i + 0]) );
  }
  i1472.states = i1474
  var i1477 = i1473[4]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1477[i + 0]) );
  }
  i1472.machines = i1476
  var i1479 = i1473[5]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1479[i + 0]) );
  }
  i1472.entryStateTransitions = i1478
  var i1481 = i1473[6]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1481[i + 0]) );
  }
  i1472.exitStateTransitions = i1480
  var i1483 = i1473[7]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1483[i + 0]) );
  }
  i1472.anyStateTransitions = i1482
  i1472.defaultStateId = i1473[8]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1487 = data
  i1486.id = i1487[0]
  i1486.name = i1487[1]
  i1486.cycleOffset = i1487[2]
  i1486.cycleOffsetParameter = i1487[3]
  i1486.cycleOffsetParameterActive = !!i1487[4]
  i1486.mirror = !!i1487[5]
  i1486.mirrorParameter = i1487[6]
  i1486.mirrorParameterActive = !!i1487[7]
  i1486.motionId = i1487[8]
  i1486.nameHash = i1487[9]
  i1486.fullPathHash = i1487[10]
  i1486.speed = i1487[11]
  i1486.speedParameter = i1487[12]
  i1486.speedParameterActive = !!i1487[13]
  i1486.tag = i1487[14]
  i1486.tagHash = i1487[15]
  i1486.writeDefaultValues = !!i1487[16]
  var i1489 = i1487[17]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 2) {
  request.r(i1489[i + 0], i1489[i + 1], 2, i1488, '')
  }
  i1486.behaviours = i1488
  var i1491 = i1487[18]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1491[i + 0]) );
  }
  i1486.transitions = i1490
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1497 = data
  i1496.fullPath = i1497[0]
  i1496.canTransitionToSelf = !!i1497[1]
  i1496.duration = i1497[2]
  i1496.exitTime = i1497[3]
  i1496.hasExitTime = !!i1497[4]
  i1496.hasFixedDuration = !!i1497[5]
  i1496.interruptionSource = i1497[6]
  i1496.offset = i1497[7]
  i1496.orderedInterruption = !!i1497[8]
  i1496.destinationStateId = i1497[9]
  i1496.isExit = !!i1497[10]
  i1496.mute = !!i1497[11]
  i1496.solo = !!i1497[12]
  var i1499 = i1497[13]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1499[i + 0]) );
  }
  i1496.conditions = i1498
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1505 = data
  i1504.destinationStateId = i1505[0]
  i1504.isExit = !!i1505[1]
  i1504.mute = !!i1505[2]
  i1504.solo = !!i1505[3]
  var i1507 = i1505[4]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1507[i + 0]) );
  }
  i1504.conditions = i1506
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1511 = data
  i1510.defaultBool = !!i1511[0]
  i1510.defaultFloat = i1511[1]
  i1510.defaultInt = i1511[2]
  i1510.name = i1511[3]
  i1510.nameHash = i1511[4]
  i1510.type = i1511[5]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.bytes64 = i1513[1]
  i1512.data = i1513[2]
  return i1512
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1514 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1515 = data
  var i1517 = i1515[0]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 2) {
  request.r(i1517[i + 0], i1517[i + 1], 2, i1516, '')
  }
  i1514.atlasAssets = i1516
  i1514.scale = i1515[1]
  request.r(i1515[2], i1515[3], 0, i1514, 'skeletonJSON')
  i1514.isUpgradingBlendModeMaterials = !!i1515[4]
  i1514.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1515[5], i1514.blendModeMaterials)
  var i1519 = i1515[6]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1519.length; i += 2) {
  request.r(i1519[i + 0], i1519[i + 1], 1, i1518, '')
  }
  i1514.skeletonDataModifiers = i1518
  var i1521 = i1515[7]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( i1521[i + 0] );
  }
  i1514.fromAnimation = i1520
  var i1523 = i1515[8]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( i1523[i + 0] );
  }
  i1514.toAnimation = i1522
  i1514.duration = i1515[9]
  i1514.defaultMix = i1515[10]
  request.r(i1515[11], i1515[12], 0, i1514, 'controller')
  return i1514
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1526 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1527 = data
  i1526.applyAdditiveMaterial = !!i1527[0]
  var i1529 = i1527[1]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1529[i + 0]));
  }
  i1526.additiveMaterials = i1528
  var i1531 = i1527[2]
  var i1530 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1531[i + 0]));
  }
  i1526.multiplyMaterials = i1530
  var i1533 = i1527[3]
  var i1532 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1533[i + 0]));
  }
  i1526.screenMaterials = i1532
  i1526.requiresBlendModeMaterials = !!i1527[4]
  return i1526
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1536 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1537 = data
  i1536.pageName = i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'material')
  return i1536
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1540 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'atlasFile')
  var i1543 = i1541[2]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.materials = i1542
  i1540.textureLoadingMode = i1541[3]
  request.r(i1541[4], i1541[5], 0, i1540, 'onDemandTextureLoader')
  return i1540
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1544 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'atlas')
  i1544.normalStyle = i1545[2]
  i1544.normalSpacingOffset = i1545[3]
  i1544.boldStyle = i1545[4]
  i1544.boldSpacing = i1545[5]
  i1544.italicStyle = i1545[6]
  i1544.tabSize = i1545[7]
  i1544.hashCode = i1545[8]
  request.r(i1545[9], i1545[10], 0, i1544, 'material')
  i1544.materialHashCode = i1545[11]
  i1544.m_Version = i1545[12]
  i1544.m_SourceFontFileGUID = i1545[13]
  request.r(i1545[14], i1545[15], 0, i1544, 'm_SourceFontFile_EditorRef')
  request.r(i1545[16], i1545[17], 0, i1544, 'm_SourceFontFile')
  i1544.m_AtlasPopulationMode = i1545[18]
  i1544.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1545[19], i1544.m_FaceInfo)
  var i1547 = i1545[20]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.add(request.d('UnityEngine.TextCore.Glyph', i1547[i + 0]));
  }
  i1544.m_GlyphTable = i1546
  var i1549 = i1545[21]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.add(request.d('TMPro.TMP_Character', i1549[i + 0]));
  }
  i1544.m_CharacterTable = i1548
  var i1551 = i1545[22]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 2, i1550, '')
  }
  i1544.m_AtlasTextures = i1550
  i1544.m_AtlasTextureIndex = i1545[23]
  i1544.m_IsMultiAtlasTexturesEnabled = !!i1545[24]
  i1544.m_ClearDynamicDataOnBuild = !!i1545[25]
  var i1553 = i1545[26]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('UnityEngine.TextCore.GlyphRect', i1553[i + 0]));
  }
  i1544.m_UsedGlyphRects = i1552
  var i1555 = i1545[27]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.add(request.d('UnityEngine.TextCore.GlyphRect', i1555[i + 0]));
  }
  i1544.m_FreeGlyphRects = i1554
  i1544.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1545[28], i1544.m_fontInfo)
  i1544.m_AtlasWidth = i1545[29]
  i1544.m_AtlasHeight = i1545[30]
  i1544.m_AtlasPadding = i1545[31]
  i1544.m_AtlasRenderMode = i1545[32]
  var i1557 = i1545[33]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('TMPro.TMP_Glyph', i1557[i + 0]));
  }
  i1544.m_glyphInfoList = i1556
  i1544.m_KerningTable = request.d('TMPro.KerningTable', i1545[34], i1544.m_KerningTable)
  i1544.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1545[35], i1544.m_FontFeatureTable)
  var i1559 = i1545[36]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1559.length; i += 2) {
  request.r(i1559[i + 0], i1559[i + 1], 1, i1558, '')
  }
  i1544.fallbackFontAssets = i1558
  var i1561 = i1545[37]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 1, i1560, '')
  }
  i1544.m_FallbackFontAssetTable = i1560
  i1544.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1545[38], i1544.m_CreationSettings)
  var i1563 = i1545[39]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('TMPro.TMP_FontWeightPair', i1563[i + 0]) );
  }
  i1544.m_FontWeightTable = i1562
  var i1565 = i1545[40]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('TMPro.TMP_FontWeightPair', i1565[i + 0]) );
  }
  i1544.fontWeights = i1564
  return i1544
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1567 = data
  i1566.m_FaceIndex = i1567[0]
  i1566.m_FamilyName = i1567[1]
  i1566.m_StyleName = i1567[2]
  i1566.m_PointSize = i1567[3]
  i1566.m_Scale = i1567[4]
  i1566.m_UnitsPerEM = i1567[5]
  i1566.m_LineHeight = i1567[6]
  i1566.m_AscentLine = i1567[7]
  i1566.m_CapLine = i1567[8]
  i1566.m_MeanLine = i1567[9]
  i1566.m_Baseline = i1567[10]
  i1566.m_DescentLine = i1567[11]
  i1566.m_SuperscriptOffset = i1567[12]
  i1566.m_SuperscriptSize = i1567[13]
  i1566.m_SubscriptOffset = i1567[14]
  i1566.m_SubscriptSize = i1567[15]
  i1566.m_UnderlineOffset = i1567[16]
  i1566.m_UnderlineThickness = i1567[17]
  i1566.m_StrikethroughOffset = i1567[18]
  i1566.m_StrikethroughThickness = i1567[19]
  i1566.m_TabWidth = i1567[20]
  return i1566
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1571 = data
  i1570.m_Index = i1571[0]
  i1570.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1571[1], i1570.m_Metrics)
  i1570.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1571[2], i1570.m_GlyphRect)
  i1570.m_Scale = i1571[3]
  i1570.m_AtlasIndex = i1571[4]
  i1570.m_ClassDefinitionType = i1571[5]
  return i1570
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1573 = data
  i1572.m_Width = i1573[0]
  i1572.m_Height = i1573[1]
  i1572.m_HorizontalBearingX = i1573[2]
  i1572.m_HorizontalBearingY = i1573[3]
  i1572.m_HorizontalAdvance = i1573[4]
  return i1572
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1575 = data
  i1574.m_X = i1575[0]
  i1574.m_Y = i1575[1]
  i1574.m_Width = i1575[2]
  i1574.m_Height = i1575[3]
  return i1574
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1578 = root || request.c( 'TMPro.TMP_Character' )
  var i1579 = data
  i1578.m_ElementType = i1579[0]
  i1578.m_Unicode = i1579[1]
  i1578.m_GlyphIndex = i1579[2]
  i1578.m_Scale = i1579[3]
  return i1578
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1585 = data
  i1584.Name = i1585[0]
  i1584.PointSize = i1585[1]
  i1584.Scale = i1585[2]
  i1584.CharacterCount = i1585[3]
  i1584.LineHeight = i1585[4]
  i1584.Baseline = i1585[5]
  i1584.Ascender = i1585[6]
  i1584.CapHeight = i1585[7]
  i1584.Descender = i1585[8]
  i1584.CenterLine = i1585[9]
  i1584.SuperscriptOffset = i1585[10]
  i1584.SubscriptOffset = i1585[11]
  i1584.SubSize = i1585[12]
  i1584.Underline = i1585[13]
  i1584.UnderlineThickness = i1585[14]
  i1584.strikethrough = i1585[15]
  i1584.strikethroughThickness = i1585[16]
  i1584.TabWidth = i1585[17]
  i1584.Padding = i1585[18]
  i1584.AtlasWidth = i1585[19]
  i1584.AtlasHeight = i1585[20]
  return i1584
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1588 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1589 = data
  i1588.id = i1589[0]
  i1588.x = i1589[1]
  i1588.y = i1589[2]
  i1588.width = i1589[3]
  i1588.height = i1589[4]
  i1588.xOffset = i1589[5]
  i1588.yOffset = i1589[6]
  i1588.xAdvance = i1589[7]
  i1588.scale = i1589[8]
  return i1588
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1590 = root || request.c( 'TMPro.KerningTable' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.add(request.d('TMPro.KerningPair', i1593[i + 0]));
  }
  i1590.kerningPairs = i1592
  return i1590
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.KerningPair' )
  var i1597 = data
  i1596.xOffset = i1597[0]
  i1596.m_FirstGlyph = i1597[1]
  i1596.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1597[2], i1596.m_FirstGlyphAdjustments)
  i1596.m_SecondGlyph = i1597[3]
  i1596.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1597[4], i1596.m_SecondGlyphAdjustments)
  i1596.m_IgnoreSpacingAdjustments = !!i1597[5]
  return i1596
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1601[i + 0]));
  }
  i1598.m_GlyphPairAdjustmentRecords = i1600
  return i1598
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1605 = data
  i1604.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1605[0], i1604.m_FirstAdjustmentRecord)
  i1604.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1605[1], i1604.m_SecondAdjustmentRecord)
  i1604.m_FeatureLookupFlags = i1605[2]
  return i1604
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1609 = data
  i1608.sourceFontFileName = i1609[0]
  i1608.sourceFontFileGUID = i1609[1]
  i1608.pointSizeSamplingMode = i1609[2]
  i1608.pointSize = i1609[3]
  i1608.padding = i1609[4]
  i1608.packingMode = i1609[5]
  i1608.atlasWidth = i1609[6]
  i1608.atlasHeight = i1609[7]
  i1608.characterSetSelectionMode = i1609[8]
  i1608.characterSequence = i1609[9]
  i1608.referencedFontAssetGUID = i1609[10]
  i1608.referencedTextAssetGUID = i1609[11]
  i1608.fontStyle = i1609[12]
  i1608.fontStyleModifier = i1609[13]
  i1608.renderMode = i1609[14]
  i1608.includeFontFeatures = !!i1609[15]
  return i1608
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'regularTypeface')
  request.r(i1613[2], i1613[3], 0, i1612, 'italicTypeface')
  return i1612
}

Deserializers["VirtueSky.Events.EventNoParam"] = function (request, data, root) {
  var i1614 = root || request.c( 'VirtueSky.Events.EventNoParam' )
  var i1615 = data
  i1614.description = i1615[0]
  return i1614
}

Deserializers["VirtueSky.Events.GameObjectEvent"] = function (request, data, root) {
  var i1616 = root || request.c( 'VirtueSky.Events.GameObjectEvent' )
  var i1617 = data
  i1616.description = i1617[0]
  return i1616
}

Deserializers["VirtueSky.Variables.BooleanVariable"] = function (request, data, root) {
  var i1618 = root || request.c( 'VirtueSky.Variables.BooleanVariable' )
  var i1619 = data
  i1618.description = i1619[0]
  return i1618
}

Deserializers["VirtueSky.Events.IntegerEvent"] = function (request, data, root) {
  var i1620 = root || request.c( 'VirtueSky.Events.IntegerEvent' )
  var i1621 = data
  i1620.description = i1621[0]
  return i1620
}

Deserializers["VirtueSky.Variables.FloatVariable"] = function (request, data, root) {
  var i1622 = root || request.c( 'VirtueSky.Variables.FloatVariable' )
  var i1623 = data
  i1622.isClamped = !!i1623[0]
  i1622.minMax = new pc.Vec2( i1623[1], i1623[2] )
  i1622.description = i1623[3]
  return i1622
}

Deserializers["VirtueSky.Variables.IntegerVariable"] = function (request, data, root) {
  var i1624 = root || request.c( 'VirtueSky.Variables.IntegerVariable' )
  var i1625 = data
  i1624.isClamped = !!i1625[0]
  i1624.minMax = new pc.Vec2( i1625[1], i1625[2] )
  i1624.description = i1625[3]
  return i1624
}

Deserializers["VirtueSky.Audio.PlaySfxEvent"] = function (request, data, root) {
  var i1626 = root || request.c( 'VirtueSky.Audio.PlaySfxEvent' )
  var i1627 = data
  i1626.description = i1627[0]
  return i1626
}

Deserializers["VirtueSky.Audio.StopSfxEvent"] = function (request, data, root) {
  var i1628 = root || request.c( 'VirtueSky.Audio.StopSfxEvent' )
  var i1629 = data
  i1628.description = i1629[0]
  return i1628
}

Deserializers["VirtueSky.Audio.SoundData"] = function (request, data, root) {
  var i1630 = root || request.c( 'VirtueSky.Audio.SoundData' )
  var i1631 = data
  i1630.loop = !!i1631[0]
  i1630.volume = i1631[1]
  i1630.isMusicFadeVolume = !!i1631[2]
  i1630.fadeInDuration = i1631[3]
  i1630.fadeOutDuration = i1631[4]
  var i1633 = i1631[5]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 1, i1632, '')
  }
  i1630.audioClips = i1632
  i1630.description = i1631[6]
  return i1630
}

Deserializers["VirtueSky.Events.ClickButtonEvent"] = function (request, data, root) {
  var i1636 = root || request.c( 'VirtueSky.Events.ClickButtonEvent' )
  var i1637 = data
  i1636.description = i1637[0]
  return i1636
}

Deserializers["LevelModeData"] = function (request, data, root) {
  var i1638 = root || request.c( 'LevelModeData' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'levelSettings')
  request.r(i1639[2], i1639[3], 0, i1638, 'levelTypeData')
  var i1641 = i1639[4]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('LevelModeInfor')))
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.add(request.d('LevelModeInfor', i1641[i + 0]));
  }
  i1638.levelModeInfors = i1640
  request.r(i1639[5], i1639[6], 0, i1638, 'currentLevel')
  return i1638
}

Deserializers["LevelModeInfor"] = function (request, data, root) {
  var i1644 = root || request.c( 'LevelModeInfor' )
  var i1645 = data
  i1644.levelIndex = i1645[0]
  i1644.star = i1645[1]
  i1644.levelMode = i1645[2]
  return i1644
}

Deserializers["TheBeginning.LevelSystem.LevelSettings"] = function (request, data, root) {
  var i1646 = root || request.c( 'TheBeginning.LevelSystem.LevelSettings' )
  var i1647 = data
  i1646.maxLevel = i1647[0]
  i1646.startLoopLevel = i1647[1]
  i1646.levelFormat = i1647[2]
  var i1649 = i1647[3]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('TheBeginning.LevelSystem.Level')))
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 1, i1648, '')
  }
  i1646.listLevels = i1648
  return i1646
}

Deserializers["LevelTypeData"] = function (request, data, root) {
  var i1652 = root || request.c( 'LevelTypeData' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('LevelTypeInfor')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('LevelTypeInfor', i1655[i + 0]));
  }
  i1652.levelTypeInfors = i1654
  return i1652
}

Deserializers["LevelTypeInfor"] = function (request, data, root) {
  var i1658 = root || request.c( 'LevelTypeInfor' )
  var i1659 = data
  i1658.LevelMode = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'icon')
  request.r(i1659[3], i1659[4], 0, i1658, 'iconBoardGameplay')
  i1658.description = i1659[5]
  request.r(i1659[6], i1659[7], 0, i1658, 'soundStartGame')
  i1658.coinBonus = i1659[8]
  request.r(i1659[9], i1659[10], 0, i1658, 'colorTextGameplay')
  request.r(i1659[11], i1659[12], 0, i1658, 'colorTextHome')
  request.r(i1659[13], i1659[14], 0, i1658, 'iconReplay')
  request.r(i1659[15], i1659[16], 0, i1658, 'iconBoardLevel')
  request.r(i1659[17], i1659[18], 0, i1658, 'iconSetting')
  var i1661 = i1659[19]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('LevelTypeInfor+BoosterIconData')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('LevelTypeInfor+BoosterIconData', i1661[i + 0]));
  }
  i1658.boosterIconDatas = i1660
  return i1658
}

Deserializers["LevelTypeInfor+BoosterIconData"] = function (request, data, root) {
  var i1664 = root || request.c( 'LevelTypeInfor+BoosterIconData' )
  var i1665 = data
  i1664.elementType = i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'icon')
  request.r(i1665[3], i1665[4], 0, i1664, 'iconLock')
  return i1664
}

Deserializers["VirtueSky.Events.FloatEvent"] = function (request, data, root) {
  var i1666 = root || request.c( 'VirtueSky.Events.FloatEvent' )
  var i1667 = data
  i1666.description = i1667[0]
  return i1666
}

Deserializers["VirtueSky.Audio.PlayMusicEvent"] = function (request, data, root) {
  var i1668 = root || request.c( 'VirtueSky.Audio.PlayMusicEvent' )
  var i1669 = data
  i1668.description = i1669[0]
  return i1668
}

Deserializers["VirtueSky.Events.BooleanEvent"] = function (request, data, root) {
  var i1670 = root || request.c( 'VirtueSky.Events.BooleanEvent' )
  var i1671 = data
  i1670.description = i1671[0]
  return i1670
}

Deserializers["LevelAdditionalTime"] = function (request, data, root) {
  var i1672 = root || request.c( 'LevelAdditionalTime' )
  var i1673 = data
  return i1672
}

Deserializers["TheBeginning.UI.PopupSettings"] = function (request, data, root) {
  var i1674 = root || request.c( 'TheBeginning.UI.PopupSettings' )
  var i1675 = data
  i1674.pathLoad = i1675[0]
  var i1677 = i1675[1]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('TheBeginning.UI.UIPopup')))
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 1, i1676, '')
  }
  i1674.listUiPopups = i1676
  return i1674
}

Deserializers["GameSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'GameSettings' )
  var i1681 = data
  i1680.enableDebugView = !!i1681[0]
  i1680.targetFrameRate = i1681[1]
  i1680.multiTouchEnabled = !!i1681[2]
  i1680.winLevelMoney = i1681[3]
  i1680.percentWinGiftPerLevel = i1681[4]
  i1680.pauseTimeBoosterAmount = i1681[5]
  i1680.hammerBoosterAmount = i1681[6]
  i1680.suckBoosterAmount = i1681[7]
  i1680.enableNotificationInGame = !!i1681[8]
  i1680.timeDelayHideNotificationInGame = i1681[9]
  i1680.enableRequireInternet = !!i1681[10]
  i1680.timeDelayCheckInternet = i1681[11]
  i1680.timeLoopCheckInternet = i1681[12]
  i1680.enableShowPopupUpdate = !!i1681[13]
  return i1680
}

Deserializers["HeartData"] = function (request, data, root) {
  var i1682 = root || request.c( 'HeartData' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'immortalData')
  i1682.id = i1683[2]
  i1682.max = i1683[3]
  request.r(i1683[4], i1683[5], 0, i1682, 'updateHeartEvent')
  request.r(i1683[6], i1683[7], 0, i1682, 'balanceAmount')
  i1682.countIncrease = i1683[8]
  i1682.timeIncrease = i1683[9]
  return i1682
}

Deserializers["ImmortalData"] = function (request, data, root) {
  var i1684 = root || request.c( 'ImmortalData' )
  var i1685 = data
  i1684.OnInStatusImmortalAction = request.d('System.Action', i1685[0], i1684.OnInStatusImmortalAction)
  i1684.OnEndStatusImmortalAction = request.d('System.Action', i1685[1], i1684.OnEndStatusImmortalAction)
  request.r(i1685[2], i1685[3], 0, i1684, 'totalTimeCountDownImmortalVariable')
  i1684.isImmortalStatusVariable = !!i1685[4]
  request.r(i1685[5], i1685[6], 0, i1684, 'isFirstTimePlayGame')
  return i1684
}

Deserializers["GraphicsQualitySetting"] = function (request, data, root) {
  var i1686 = root || request.c( 'GraphicsQualitySetting' )
  var i1687 = data
  i1686.guid = i1687[0]
  var i1689 = i1687[1]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('GraphicsQualitySetting+GraphicsQualityLevel')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('GraphicsQualitySetting+GraphicsQualityLevel', i1689[i + 0]));
  }
  i1686.graphicSettings = i1688
  i1686.levelDefault = i1687[2]
  return i1686
}

Deserializers["GraphicsQualitySetting+GraphicsQualityLevel"] = function (request, data, root) {
  var i1692 = root || request.c( 'GraphicsQualitySetting+GraphicsQualityLevel' )
  var i1693 = data
  i1692.qualityName = i1693[0]
  i1692.qualityLevel = i1693[1]
  i1692.antiAliasing = i1693[2]
  i1692.shadowQuality = i1693[3]
  i1692.shadowResolution = i1693[4]
  i1692.shadowProjection = i1693[5]
  i1692.shadowDistance = i1693[6]
  i1692.shadowNearPlaneOffset = i1693[7]
  return i1692
}

Deserializers["VirtueSky.Audio.SfxVolumeChange"] = function (request, data, root) {
  var i1694 = root || request.c( 'VirtueSky.Audio.SfxVolumeChange' )
  var i1695 = data
  i1694.isClamped = !!i1695[0]
  i1694.minMax = new pc.Vec2( i1695[1], i1695[2] )
  i1694.description = i1695[3]
  return i1694
}

Deserializers["VirtueSky.Audio.MusicVolumeChange"] = function (request, data, root) {
  var i1696 = root || request.c( 'VirtueSky.Audio.MusicVolumeChange' )
  var i1697 = data
  i1696.isClamped = !!i1697[0]
  i1696.minMax = new pc.Vec2( i1697[1], i1697[2] )
  i1696.description = i1697[3]
  return i1696
}

Deserializers["TheBeginning.LevelSystem.EventLoadLevel"] = function (request, data, root) {
  var i1698 = root || request.c( 'TheBeginning.LevelSystem.EventLoadLevel' )
  var i1699 = data
  i1698.description = i1699[0]
  return i1698
}

Deserializers["TheBeginning.LevelSystem.EventGetCurrentLevel"] = function (request, data, root) {
  var i1700 = root || request.c( 'TheBeginning.LevelSystem.EventGetCurrentLevel' )
  var i1701 = data
  i1700.description = i1701[0]
  return i1700
}

Deserializers["TheBeginning.LevelSystem.EventGetPreviousLevel"] = function (request, data, root) {
  var i1702 = root || request.c( 'TheBeginning.LevelSystem.EventGetPreviousLevel' )
  var i1703 = data
  i1702.description = i1703[0]
  return i1702
}

Deserializers["VirtueSky.Audio.StopMusicEvent"] = function (request, data, root) {
  var i1704 = root || request.c( 'VirtueSky.Audio.StopMusicEvent' )
  var i1705 = data
  i1704.description = i1705[0]
  return i1704
}

Deserializers["VirtueSky.Audio.PauseMusicEvent"] = function (request, data, root) {
  var i1706 = root || request.c( 'VirtueSky.Audio.PauseMusicEvent' )
  var i1707 = data
  i1706.description = i1707[0]
  return i1706
}

Deserializers["VirtueSky.Audio.ResumeMusicEvent"] = function (request, data, root) {
  var i1708 = root || request.c( 'VirtueSky.Audio.ResumeMusicEvent' )
  var i1709 = data
  i1708.description = i1709[0]
  return i1708
}

Deserializers["VirtueSky.Audio.PauseSfxEvent"] = function (request, data, root) {
  var i1710 = root || request.c( 'VirtueSky.Audio.PauseSfxEvent' )
  var i1711 = data
  i1710.description = i1711[0]
  return i1710
}

Deserializers["VirtueSky.Audio.ResumeSfxEvent"] = function (request, data, root) {
  var i1712 = root || request.c( 'VirtueSky.Audio.ResumeSfxEvent' )
  var i1713 = data
  i1712.description = i1713[0]
  return i1712
}

Deserializers["VirtueSky.Audio.FinishSfxEvent"] = function (request, data, root) {
  var i1714 = root || request.c( 'VirtueSky.Audio.FinishSfxEvent' )
  var i1715 = data
  i1714.description = i1715[0]
  return i1714
}

Deserializers["VirtueSky.Audio.StopAllSfxEvent"] = function (request, data, root) {
  var i1716 = root || request.c( 'VirtueSky.Audio.StopAllSfxEvent' )
  var i1717 = data
  i1716.description = i1717[0]
  return i1716
}

Deserializers["VirtueSky.TouchInput.InputEventTouchBegin"] = function (request, data, root) {
  var i1718 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchBegin' )
  var i1719 = data
  i1718.description = i1719[0]
  return i1718
}

Deserializers["VirtueSky.TouchInput.InputEventTouchMove"] = function (request, data, root) {
  var i1720 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchMove' )
  var i1721 = data
  i1720.description = i1721[0]
  return i1720
}

Deserializers["VirtueSky.TouchInput.InputEventTouchStationary"] = function (request, data, root) {
  var i1722 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchStationary' )
  var i1723 = data
  i1722.description = i1723[0]
  return i1722
}

Deserializers["VirtueSky.TouchInput.InputEventTouchEnd"] = function (request, data, root) {
  var i1724 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchEnd' )
  var i1725 = data
  i1724.description = i1725[0]
  return i1724
}

Deserializers["VirtueSky.TouchInput.InputEventTouchCancel"] = function (request, data, root) {
  var i1726 = root || request.c( 'VirtueSky.TouchInput.InputEventTouchCancel' )
  var i1727 = data
  i1726.description = i1727[0]
  return i1726
}

Deserializers["VirtueSky.TouchInput.InputPreventTouchVariable"] = function (request, data, root) {
  var i1728 = root || request.c( 'VirtueSky.TouchInput.InputPreventTouchVariable' )
  var i1729 = data
  i1728.description = i1729[0]
  return i1728
}

Deserializers["VirtueSky.Events.Vector3Event"] = function (request, data, root) {
  var i1730 = root || request.c( 'VirtueSky.Events.Vector3Event' )
  var i1731 = data
  i1730.description = i1731[0]
  return i1730
}

Deserializers["VirtueSky.Variables.Vector3Variable"] = function (request, data, root) {
  var i1732 = root || request.c( 'VirtueSky.Variables.Vector3Variable' )
  var i1733 = data
  i1732.description = i1733[0]
  return i1732
}

Deserializers["ColorConfig"] = function (request, data, root) {
  var i1734 = root || request.c( 'ColorConfig' )
  var i1735 = data
  var i1737 = i1735[0]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('ColorData')))
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.add(request.d('ColorData', i1737[i + 0]));
  }
  i1734.colors = i1736
  return i1734
}

Deserializers["ColorData"] = function (request, data, root) {
  var i1740 = root || request.c( 'ColorData' )
  var i1741 = data
  i1740.type = i1741[0]
  i1740.color = new pc.Color(i1741[1], i1741[2], i1741[3], i1741[4])
  return i1740
}

Deserializers["GridSetting"] = function (request, data, root) {
  var i1742 = root || request.c( 'GridSetting' )
  var i1743 = data
  i1742.rectangle = request.d('GridSettingData', i1743[0], i1742.rectangle)
  i1742.hexagon = request.d('GridSettingData', i1743[1], i1742.hexagon)
  return i1742
}

Deserializers["GridSettingData"] = function (request, data, root) {
  var i1744 = root || request.c( 'GridSettingData' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'prefab')
  request.r(i1745[2], i1745[3], 0, i1744, 'size')
  return i1744
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1746 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1747 = data
  i1746.m_GlyphIndex = i1747[0]
  i1746.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1747[1], i1746.m_GlyphValueRecord)
  return i1746
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1748 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1749 = data
  i1748.m_XPlacement = i1749[0]
  i1748.m_YPlacement = i1749[1]
  i1748.m_XAdvance = i1749[2]
  i1748.m_YAdvance = i1749[3]
  return i1748
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.TMP_Settings' )
  var i1751 = data
  i1750.m_enableWordWrapping = !!i1751[0]
  i1750.m_enableKerning = !!i1751[1]
  i1750.m_enableExtraPadding = !!i1751[2]
  i1750.m_enableTintAllSprites = !!i1751[3]
  i1750.m_enableParseEscapeCharacters = !!i1751[4]
  i1750.m_EnableRaycastTarget = !!i1751[5]
  i1750.m_GetFontFeaturesAtRuntime = !!i1751[6]
  i1750.m_missingGlyphCharacter = i1751[7]
  i1750.m_warningsDisabled = !!i1751[8]
  request.r(i1751[9], i1751[10], 0, i1750, 'm_defaultFontAsset')
  i1750.m_defaultFontAssetPath = i1751[11]
  i1750.m_defaultFontSize = i1751[12]
  i1750.m_defaultAutoSizeMinRatio = i1751[13]
  i1750.m_defaultAutoSizeMaxRatio = i1751[14]
  i1750.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1751[15], i1751[16] )
  i1750.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1751[17], i1751[18] )
  i1750.m_autoSizeTextContainer = !!i1751[19]
  i1750.m_IsTextObjectScaleStatic = !!i1751[20]
  var i1753 = i1751[21]
  var i1752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 1, i1752, '')
  }
  i1750.m_fallbackFontAssets = i1752
  i1750.m_matchMaterialPreset = !!i1751[22]
  request.r(i1751[23], i1751[24], 0, i1750, 'm_defaultSpriteAsset')
  i1750.m_defaultSpriteAssetPath = i1751[25]
  i1750.m_enableEmojiSupport = !!i1751[26]
  i1750.m_MissingCharacterSpriteUnicode = i1751[27]
  i1750.m_defaultColorGradientPresetsPath = i1751[28]
  request.r(i1751[29], i1751[30], 0, i1750, 'm_defaultStyleSheet')
  i1750.m_StyleSheetsResourcePath = i1751[31]
  request.r(i1751[32], i1751[33], 0, i1750, 'm_leadingCharacters')
  request.r(i1751[34], i1751[35], 0, i1750, 'm_followingCharacters')
  i1750.m_UseModernHangulLineBreakingRules = !!i1751[36]
  return i1750
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'spriteSheet')
  var i1757 = i1755[2]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.add(request.d('TMPro.TMP_Sprite', i1757[i + 0]));
  }
  i1754.spriteInfoList = i1756
  var i1759 = i1755[3]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1754.fallbackSpriteAssets = i1758
  i1754.hashCode = i1755[4]
  request.r(i1755[5], i1755[6], 0, i1754, 'material')
  i1754.materialHashCode = i1755[7]
  i1754.m_Version = i1755[8]
  i1754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1755[9], i1754.m_FaceInfo)
  var i1761 = i1755[10]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('TMPro.TMP_SpriteCharacter', i1761[i + 0]));
  }
  i1754.m_SpriteCharacterTable = i1760
  var i1763 = i1755[11]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('TMPro.TMP_SpriteGlyph', i1763[i + 0]));
  }
  i1754.m_SpriteGlyphTable = i1762
  return i1754
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1766 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.hashCode = i1767[1]
  i1766.unicode = i1767[2]
  i1766.pivot = new pc.Vec2( i1767[3], i1767[4] )
  request.r(i1767[5], i1767[6], 0, i1766, 'sprite')
  i1766.id = i1767[7]
  i1766.x = i1767[8]
  i1766.y = i1767[9]
  i1766.width = i1767[10]
  i1766.height = i1767[11]
  i1766.xOffset = i1767[12]
  i1766.yOffset = i1767[13]
  i1766.xAdvance = i1767[14]
  i1766.scale = i1767[15]
  return i1766
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1772 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1773 = data
  i1772.m_Name = i1773[0]
  i1772.m_HashCode = i1773[1]
  i1772.m_ElementType = i1773[2]
  i1772.m_Unicode = i1773[3]
  i1772.m_GlyphIndex = i1773[4]
  i1772.m_Scale = i1773[5]
  return i1772
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1776 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'sprite')
  i1776.m_Index = i1777[2]
  i1776.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1777[3], i1776.m_Metrics)
  i1776.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1777[4], i1776.m_GlyphRect)
  i1776.m_Scale = i1777[5]
  i1776.m_AtlasIndex = i1777[6]
  i1776.m_ClassDefinitionType = i1777[7]
  return i1776
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1778 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1779 = data
  var i1781 = i1779[0]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.add(request.d('TMPro.TMP_Style', i1781[i + 0]));
  }
  i1778.m_StyleList = i1780
  return i1778
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1784 = root || request.c( 'TMPro.TMP_Style' )
  var i1785 = data
  i1784.m_Name = i1785[0]
  i1784.m_HashCode = i1785[1]
  i1784.m_OpeningDefinition = i1785[2]
  i1784.m_ClosingDefinition = i1785[3]
  i1784.m_OpeningTagArray = i1785[4]
  i1784.m_ClosingTagArray = i1785[5]
  i1784.m_OpeningTagUnicodeArray = i1785[6]
  i1784.m_ClosingTagUnicodeArray = i1785[7]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1787 = data
  var i1789 = i1787[0]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1789[i + 0]) );
  }
  i1786.files = i1788
  i1786.componentToPrefabIds = i1787[1]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1793 = data
  i1792.path = i1793[0]
  request.r(i1793[1], i1793[2], 0, i1792, 'unityObject')
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1795 = data
  var i1797 = i1795[0]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1797[i + 0]) );
  }
  i1794.scriptsExecutionOrder = i1796
  var i1799 = i1795[1]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1799[i + 0]) );
  }
  i1794.sortingLayers = i1798
  var i1801 = i1795[2]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1801[i + 0]) );
  }
  i1794.cullingLayers = i1800
  i1794.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1795[3], i1794.timeSettings)
  i1794.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1795[4], i1794.physicsSettings)
  i1794.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1795[5], i1794.physics2DSettings)
  i1794.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1795[6], i1794.qualitySettings)
  i1794.enableRealtimeShadows = !!i1795[7]
  i1794.enableAutoInstancing = !!i1795[8]
  i1794.enableStaticBatching = !!i1795[9]
  i1794.enableDynamicBatching = !!i1795[10]
  i1794.lightmapEncodingQuality = i1795[11]
  i1794.desiredColorSpace = i1795[12]
  var i1803 = i1795[13]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( i1803[i + 0] );
  }
  i1794.allTags = i1802
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.value = i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1811 = data
  i1810.id = i1811[0]
  i1810.name = i1811[1]
  i1810.value = i1811[2]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1815 = data
  i1814.id = i1815[0]
  i1814.name = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1817 = data
  i1816.fixedDeltaTime = i1817[0]
  i1816.maximumDeltaTime = i1817[1]
  i1816.timeScale = i1817[2]
  i1816.maximumParticleTimestep = i1817[3]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1819 = data
  i1818.gravity = new pc.Vec3( i1819[0], i1819[1], i1819[2] )
  i1818.defaultSolverIterations = i1819[3]
  i1818.bounceThreshold = i1819[4]
  i1818.autoSyncTransforms = !!i1819[5]
  i1818.autoSimulation = !!i1819[6]
  var i1821 = i1819[7]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1821[i + 0]) );
  }
  i1818.collisionMatrix = i1820
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.layerId = i1825[1]
  i1824.otherLayerId = i1825[2]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1827 = data
  request.r(i1827[0], i1827[1], 0, i1826, 'material')
  i1826.gravity = new pc.Vec2( i1827[2], i1827[3] )
  i1826.positionIterations = i1827[4]
  i1826.velocityIterations = i1827[5]
  i1826.velocityThreshold = i1827[6]
  i1826.maxLinearCorrection = i1827[7]
  i1826.maxAngularCorrection = i1827[8]
  i1826.maxTranslationSpeed = i1827[9]
  i1826.maxRotationSpeed = i1827[10]
  i1826.baumgarteScale = i1827[11]
  i1826.baumgarteTOIScale = i1827[12]
  i1826.timeToSleep = i1827[13]
  i1826.linearSleepTolerance = i1827[14]
  i1826.angularSleepTolerance = i1827[15]
  i1826.defaultContactOffset = i1827[16]
  i1826.autoSimulation = !!i1827[17]
  i1826.queriesHitTriggers = !!i1827[18]
  i1826.queriesStartInColliders = !!i1827[19]
  i1826.callbacksOnDisable = !!i1827[20]
  i1826.reuseCollisionCallbacks = !!i1827[21]
  i1826.autoSyncTransforms = !!i1827[22]
  var i1829 = i1827[23]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1829[i + 0]) );
  }
  i1826.collisionMatrix = i1828
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.layerId = i1833[1]
  i1832.otherLayerId = i1833[2]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1837[i + 0]) );
  }
  i1834.qualityLevels = i1836
  var i1839 = i1835[1]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( i1839[i + 0] );
  }
  i1834.names = i1838
  i1834.shadows = i1835[2]
  i1834.anisotropicFiltering = i1835[3]
  i1834.antiAliasing = i1835[4]
  i1834.lodBias = i1835[5]
  i1834.shadowCascades = i1835[6]
  i1834.shadowDistance = i1835[7]
  i1834.shadowmaskMode = i1835[8]
  i1834.shadowProjection = i1835[9]
  i1834.shadowResolution = i1835[10]
  i1834.softParticles = !!i1835[11]
  i1834.softVegetation = !!i1835[12]
  i1834.activeColorSpace = i1835[13]
  i1834.desiredColorSpace = i1835[14]
  i1834.masterTextureLimit = i1835[15]
  i1834.maxQueuedFrames = i1835[16]
  i1834.particleRaycastBudget = i1835[17]
  i1834.pixelLightCount = i1835[18]
  i1834.realtimeReflectionProbes = !!i1835[19]
  i1834.shadowCascade2Split = i1835[20]
  i1834.shadowCascade4Split = new pc.Vec3( i1835[21], i1835[22], i1835[23] )
  i1834.streamingMipmapsActive = !!i1835[24]
  i1834.vSyncCount = i1835[25]
  i1834.asyncUploadBufferSize = i1835[26]
  i1834.asyncUploadTimeSlice = i1835[27]
  i1834.billboardsFaceCameraPosition = !!i1835[28]
  i1834.shadowNearPlaneOffset = i1835[29]
  i1834.streamingMipmapsMemoryBudget = i1835[30]
  i1834.maximumLODLevel = i1835[31]
  i1834.streamingMipmapsAddAllCameras = !!i1835[32]
  i1834.streamingMipmapsMaxLevelReduction = i1835[33]
  i1834.streamingMipmapsRenderersPerFrame = i1835[34]
  i1834.resolutionScalingFixedDPIFactor = i1835[35]
  i1834.streamingMipmapsMaxFileIORequests = i1835[36]
  i1834.currentQualityLevel = i1835[37]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1845 = data
  i1844.weight = i1845[0]
  i1844.vertices = i1845[1]
  i1844.normals = i1845[2]
  i1844.tangents = i1845[3]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1849 = data
  i1848.mode = i1849[0]
  i1848.parameter = i1849[1]
  i1848.threshold = i1849[2]
  return i1848
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1851 = data
  i1850.xPlacement = i1851[0]
  i1850.yPlacement = i1851[1]
  i1850.xAdvance = i1851[2]
  i1850.yAdvance = i1851[3]
  return i1850
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"133":[134],"135":[134],"136":[134],"137":[134],"138":[134],"139":[134],"140":[141],"142":[65],"143":[80],"144":[80],"145":[80],"146":[80],"147":[80],"148":[80],"149":[80],"150":[151],"152":[151],"153":[151],"154":[151],"155":[151],"156":[151],"157":[151],"158":[151],"159":[151],"160":[151],"161":[151],"162":[151],"163":[151],"164":[65],"165":[75],"166":[167],"168":[167],"1":[0],"66":[65],"6":[1,3,4],"49":[1,3,4],"169":[1,3,4],"51":[1,3,4],"170":[1,3,4],"171":[1,3,4],"44":[1,3,4],"172":[84],"173":[16],"174":[84],"175":[16],"176":[177],"178":[7],"37":[8],"179":[8],"180":[8],"58":[57],"181":[0],"182":[0],"3":[1],"8":[22,0],"183":[0],"91":[1],"48":[0],"184":[0],"39":[0],"185":[0],"186":[0],"187":[0],"47":[0],"188":[0],"189":[0],"190":[22,0],"191":[0],"192":[0],"193":[0],"55":[0],"177":[22,0],"194":[0],"195":[121],"196":[121],"197":[121],"198":[121],"199":[65],"200":[65],"122":[121],"201":[1],"202":[65],"203":[204],"205":[0],"206":[22,0],"84":[75],"16":[22,0],"207":[62,75],"208":[75],"209":[75,73],"210":[80],"211":[151],"212":[204],"213":[214],"27":[0,22],"215":[0],"83":[75,0],"7":[0,22],"216":[0],"217":[22,0],"218":[75],"219":[22,0],"220":[0]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","TheBeginning.UI.GameplayPopup","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","LevelModeData","VirtueSky.Events.EventNoParam","VirtueSky.Events.FloatEvent","VirtueSky.Variables.BooleanVariable","VirtueSky.Variables.IntegerVariable","VirtueSky.Audio.PlayMusicEvent","VirtueSky.Audio.SoundData","Spine.Unity.SkeletonGraphic","UnityEngine.GameObject","VirtueSky.Events.BooleanEvent","LevelAdditionalTime","VirtueSky.Events.IntegerEvent","VirtueSky.Audio.PlaySfxEvent","UnityEngine.CanvasRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Coffee.UIExtensions.UIParticle","UnityEngine.Transform","UnityEngine.Sprite","VirtueSky.Component.SafeAreaComponent","CoinUpdater","VirtueSky.Events.GameObjectEvent","TMPro.TMP_FontAsset","TimingController","VirtueSky.Variables.FloatVariable","VirtueSky.Audio.StopSfxEvent","VirtueSky.UIButton.ButtonUI","VirtueSky.Events.ClickButtonEvent","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","ButtonCTA","UnityEngine.Shader","UnityEngine.Texture2D","TheBeginning.UI.WinPopup","GameSettings","AnimatorUIControl","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","TheBeginning.UI.LosePopup","HeartData","TheBeginning.UI.SettingPopupInGame","VirtueSky.Audio.SfxVolumeChange","VirtueSky.Audio.MusicVolumeChange","GraphicsQualitySettingUI","UnityEngine.UI.Slider","GraphicsQualitySetting","UnityEngine.AudioSource","VirtueSky.Audio.SoundComponent","CoinGenerate","VirtueSky.Events.Vector3Event","VirtueSky.Component.RotateComponent","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","StarGenerate","UnityEngine.Camera","CameraSystem","TouchSystem","VirtueSky.TouchInput.InputEventTouchBegin","VirtueSky.TouchInput.InputEventTouchEnd","MapSystem","GridSystem","Plane","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.SpriteRenderer","CellGrid","FreezeSystem","UnityEngine.Rigidbody","Wall","UnityEngine.BoxCollider","TMPro.TextMeshPro","Spine.Unity.SkeletonAnimation","GridSetting","VirtueSky.Variables.Vector3Variable","ColorConfig","FreezePrefab","PooledParticleCallback","UnityEngine.AudioListener","UnityEngine.UI.CanvasScaler","VirtueSky.Component.ResizeMatchCanvasScalerComponent","Coffee.UIExtensions.UIParticleRenderer","TheBeginning.UI.PopupManager","TheBeginning.UI.PopupSettings","TheBeginning.Services.PoolInitialization","TheBeginning.Services.VibrationInitialization","TheBeginning.Services.RuntimeInitialization","TheBeginning.LevelSystem.LevelLoader","TheBeginning.LevelSystem.LevelSettings","TheBeginning.LevelSystem.EventLoadLevel","TheBeginning.LevelSystem.EventGetCurrentLevel","TheBeginning.LevelSystem.EventGetPreviousLevel","VirtueSky.Audio.AudioManager","VirtueSky.Audio.StopMusicEvent","VirtueSky.Audio.PauseMusicEvent","VirtueSky.Audio.ResumeMusicEvent","VirtueSky.Audio.PauseSfxEvent","VirtueSky.Audio.ResumeSfxEvent","VirtueSky.Audio.FinishSfxEvent","VirtueSky.Audio.StopAllSfxEvent","VirtueSky.TouchInput.TouchInputManager","VirtueSky.TouchInput.InputEventTouchMove","VirtueSky.TouchInput.InputEventTouchStationary","VirtueSky.TouchInput.InputEventTouchCancel","VirtueSky.TouchInput.InputPreventTouchVariable","CoinSystem","StarSystem","GamePlayableManager","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioClip","LevelTypeData","ImmortalData","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TheBeginning.UI.SettingPopup","TheBeginning.UI.UpdatePopup","TheBeginning.UI.UIPopup","VirtueSky.Component.AnimationSkeletonComponent","VirtueSky.Component.AnimationSkeletonUIComponent","VirtueSky.Component.SkinSkeletonComponent","VirtueSky.Component.SkinSkeletonUIComponent","VirtueSky.UIButton.ButtonText","UnityEngine.UI.Text","VirtueSky.UIButton.ButtonTMP","VirtueSky.UIButton.ButtonUI_Text","VirtueSky.UIButton.ButtonUI_TMP","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","ToonyColorsPro.Runtime.TCP2_CameraDepth","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.54f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "2.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "2103";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3853";

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

Deserializers.buildID = "9be213e0-e979-4d71-9b37-148048bccd4d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Serialization","DefaultPropertyBagInitializer","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["EditorInitializer","RuntimeEditorInitialize"],["VirtueSky","Core","RuntimeInitialize","AutoInitialize"]],[["$BurstDirectCallInitializer","Initialize"]],[],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["Unity","Serialization","Json","JsonObject","RegisterPropertyBag"],["Unity","Serialization","Json","JsonArray","RegisterPropertyBag"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

