using DG.Tweening;
using System;
using System.Linq;
using UnityEngine;
using UnityEngine.Assertions;
using Object = UnityEngine.Object;
using Random = UnityEngine.Random;

public static partial class Extension
{
    public static Vector3 CanvasToWorldPosition(Camera camera, Canvas canvas, RectTransform rectTransform)
    {
        Vector3 screenPosition = RectTransformUtility.WorldToScreenPoint(canvas.worldCamera, rectTransform.position);
        var position =
            camera.ScreenToWorldPoint(new Vector3(screenPosition.x, screenPosition.y,
                Mathf.Abs(camera.transform.position.z)));
        return position;
    }

    public static Vector3 WorldToCanvasPosition(Camera camera, Canvas canvas, Vector3 position)
    {
        Vector3 screenPosition = RectTransformUtility.WorldToScreenPoint(camera, position);
        Vector2 canvasPosition;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvas.GetComponent<RectTransform>(), screenPosition,
            canvas.worldCamera, out canvasPosition);
        return canvasPosition;
    }

    public static int GetNumberFromText(this string text)
    {
        var numberPart = "";
        foreach (var t in text)
            if (char.IsNumber(t))
                numberPart += t;

        return int.Parse(numberPart);
    }

    public static string GetTextValueFromNumber(this int value)
    {
        if (value >= 1000000000)
            return $"{value / 1000_000000f:0.#}B";
        if (value >= 1_000_000)
            return $"{value / 1000000f:0.#}M";
        if (value >= 10_000)
            return $"{value / 1000f:0.#}K";
        return value.ToString();
    }

    public static void Clear(this Transform transform)
    {
        for (var i = 0; i < transform.childCount; i++) Object.Destroy(transform.GetChild(i).gameObject);
    }

    public static Sequence Jump(this Transform target, Vector3 endValue, float duration, float height, int numJumps = 1)
    {
        var sequence = DOTween.Sequence();
        var jumpsSequence = DOTween.Sequence();

        Vector3 startPos = target.position;
        float jumpDuration = duration / numJumps;

        for (int i = 0; i < numJumps; i++)
        {
            float t0 = (float)i / numJumps;
            float t1 = (float)(i + 1) / numJumps;

            float fromY = Mathf.Lerp(startPos.y, endValue.y, t0);
            float toY = Mathf.Lerp(startPos.y, endValue.y, t1);

            float peakY;
            if (height > 0)
                peakY = Mathf.Max(fromY, toY) + Mathf.Abs(height);
            else
                peakY = Mathf.Min(fromY, toY) - Mathf.Abs(height);

            jumpsSequence.Append(target.DOMoveY(peakY, jumpDuration * 0.5f).SetEase(Ease.OutQuad));
            jumpsSequence.Append(target.DOMoveY(toY, jumpDuration * 0.5f).SetEase(Ease.InQuad));
        }

        if (!Mathf.Approximately(startPos.x, endValue.x))
            sequence.Join(target.DOMoveX(endValue.x, duration).SetEase(Ease.Linear));
        if (!Mathf.Approximately(startPos.z, endValue.z))
            sequence.Join(target.DOMoveZ(endValue.z, duration).SetEase(Ease.Linear));

        sequence.Join(jumpsSequence);
        return sequence;
    }

    public static Sequence ArcMove(this Transform target, Vector3 endValue, float duration, float height, int numSteps = 20)
    {
        var sequence = DOTween.Sequence();
        Vector3 startPos = target.position;

        float stepDuration = duration / numSteps;

        for (int i = 1; i <= numSteps; i++)
        {
            float t = (float)i / numSteps;

            Vector3 targetPos = Vector3.Lerp(startPos, endValue, t);

            float curveWidth = Mathf.Lerp(height, 0, Mathf.Pow(t, 2));

            targetPos.x += curveWidth;
            targetPos.y += Mathf.Sin(t * Mathf.PI) * curveWidth;

            sequence.Append(target.DOMove(targetPos, stepDuration).SetEase(Ease.Linear));
        }

        return sequence;
    }

    public static Sequence FlyToTarget(this RectTransform target, Vector3 endValue, float durationFlightUp,
        float durationFlightDown, float height,
        float widthRange, Action complete, Vector3 scaleEnd = default)
    {
        var getRandomRangeX = Random.Range(-widthRange / 2, widthRange / 2);
        var targetPos = target.anchoredPosition3D;
        var posFlight = new Vector3(targetPos.x + getRandomRangeX, targetPos.y + height, targetPos.z);

        var flySequence = DOTween.Sequence()
            .Append(target.DOAnchorPos3D(posFlight, durationFlightUp).SetEase(Ease.OutCubic))
            .Append(target.DOAnchorPos3D(endValue, durationFlightDown).SetEase(Ease.InCirc))
            .Join(target.DOScale(scaleEnd, durationFlightDown).SetEase(Ease.InCubic))
            .OnComplete(() => { complete?.Invoke(); });

        return flySequence;
    }
}