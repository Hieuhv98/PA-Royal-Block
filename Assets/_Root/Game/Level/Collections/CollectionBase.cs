using System;
using System.Collections.Generic;
using UnityEngine;

public class CollectionBase<T> : ScriptableObject
{
    [NonSerialized] List<T> collections = new List<T>();

    public Action<T> OnAdd, OnRemove;
    public List<T> List => collections;
    public int Count => collections.Count;
    public void Add(T item)
    {
        collections.Add(item);
        OnAdd?.Invoke(item);
    }
    public void Remove(T item)
    {
        if (collections.Equals(item))
        {
            collections.Remove(item);
            OnRemove?.Invoke(item);
        }
    }
    public void Clear() { collections.Clear(); }
}
