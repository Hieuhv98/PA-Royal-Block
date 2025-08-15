using System;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(menuName = "Game/Level/Config/Texture", fileName = "Texture Config", order = 0)]
public class TextureConfig : ScriptableObject
{
    [SerializeField] List<TextureData> textures = new List<TextureData>();

    public List<TextureData> Textures => textures;
    public TextureData GetData(ETextureType type) => textures.Find(x => x.Type == type);
    public Texture2D GetTexture(ETextureType type) => GetData(type).Texture;
}

[Serializable]
public class TextureData 
{
    [SerializeField] ETextureType type;
    [SerializeField] Texture2D texture;
    [SerializeField] Vector2 tiling = Vector2.one;
    [SerializeField] Vector2 offset = Vector2.zero;

    public Texture2D Texture => texture;
    public ETextureType Type => type;
    public Vector2 Tiling => tiling;
    public Vector2 Offset => offset;
}
public enum ETextureType 
{
    NONE,
    STAR,
}