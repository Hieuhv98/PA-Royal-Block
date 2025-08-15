using VirtueSky.Vibration;

namespace TheBeginning.Services
{
    public class VibrationInitialization : ServiceInitialization
    {
        public override void Initialization()
        {
            Vibration.Init();
        }
    }
}