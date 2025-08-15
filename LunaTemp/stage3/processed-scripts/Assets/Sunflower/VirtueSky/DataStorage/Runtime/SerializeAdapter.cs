using UnityEngine;

namespace VirtueSky.DataStorage
{
    public static class SerializeAdapter
    {
        /// <summary>
        /// Serializes the object to JSON string and converts it to byte array.
        /// </summary>
        public static byte[] ToBinary<T>(T obj)
        {
            string json = JsonUtility.ToJson(obj);
            return System.Text.Encoding.UTF8.GetBytes(json);
        }

        /// <summary>
        /// Deserializes the byte array (JSON string) to the specified type.
        /// </summary>
        public static T FromBinary<T>(byte[] serializedBytes)
        {
            string json = System.Text.Encoding.UTF8.GetString(serializedBytes);
            return JsonUtility.FromJson<T>(json);
        }
    }
}