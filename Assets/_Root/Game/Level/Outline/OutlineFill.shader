Shader "Custom/Outline Fill"
{
    Properties
    {
        [Enum(UnityEngine.Rendering.CompareFunction)] _ZTest("ZTest", Float) = 4 // Default to LEqual
        _OutlineColor("Outline Color", Color) = (1, 1, 1, 1)
        _OutlineWidth("Outline Width", Range(0, 10)) = 2
        _OutlineAlpha("Outline Alpha", Range(0, 1)) = 1
        [Toggle]_UseDistanceScaling("Scale With Distance", Float) = 1
    }

    SubShader
    {
        Tags
        {
            "Queue" = "Overlay"
            "RenderType" = "Transparent"
            "DisableBatching" = "True"
        }

        // --- PASS 1: MASK OBJECT INTO STENCIL BUFFER ---
        Pass
        {
            Name "Mask"
            Cull Off
            ZTest [_ZTest]
            ZWrite Off
            ColorMask 0

            Stencil
            {
                Ref 1
                Pass Replace
            }
        }

        // --- PASS 2: RENDER OUTLINE ONLY OUTSIDE MASKED AREA ---
        Pass
        {
            Name "Outline"
            Cull Off
            ZTest [_ZTest]
            ZWrite Off
            Blend SrcAlpha OneMinusSrcAlpha
            ColorMask RGBA

            Stencil
            {
                Ref 1
                Comp NotEqual
                Pass Keep
            }

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.0

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct v2f
            {
                float4 position : SV_POSITION;
                fixed4 color : COLOR;
                UNITY_VERTEX_OUTPUT_STEREO
            };

            fixed4 _OutlineColor;
            float _OutlineWidth;
            float _OutlineAlpha;
            float _UseDistanceScaling;

            v2f vert(appdata v)
            {
                v2f o;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);

                float3 worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                float3 worldNormal = normalize(mul((float3x3)unity_ObjectToWorld, v.normal));

                float thickness = _OutlineWidth * 0.02;

                if (_UseDistanceScaling > 0.5)
                {
                    float dist = distance(_WorldSpaceCameraPos, worldPos);
                    thickness *= dist;
                }

                worldPos += worldNormal * thickness;

                o.position = UnityWorldToClipPos(float4(worldPos, 1.0));
                o.color = fixed4(_OutlineColor.rgb, _OutlineAlpha);

                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                return i.color;
            }
            ENDCG
        }
    }
}
