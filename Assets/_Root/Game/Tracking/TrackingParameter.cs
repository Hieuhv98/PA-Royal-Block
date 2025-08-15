public class TrackingParameter
{
    public string Name { get; }
    public object Value { get; }

    public TrackingParameter(string name, string stringValue)
    {
        Name = name;
        Value = stringValue;
    }

    public TrackingParameter(string name, long longValue)
    {
        Name = name;
        Value = longValue;
    }

    public TrackingParameter(string name, double doubleValue)
    {
        Name = name;
        Value = doubleValue;
    }

    public TrackingParameter(string name, bool boolValue)
    {
        Name = name;
        Value = boolValue;
    }
}