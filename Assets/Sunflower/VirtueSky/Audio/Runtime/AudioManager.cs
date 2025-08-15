using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using VirtueSky.Core;
using VirtueSky.ObjectPooling;

namespace VirtueSky.Audio
{
    public class AudioManager : BaseMono
    {
        [Space] [SerializeField] private bool isDontDestroyOnLoad;
        [SerializeField] private SoundComponent soundComponentPrefab;

        [SerializeField] private Transform audioHolder;

        [Space] [SerializeField]
        private PlayMusicEvent eventPlayMusic;

        [SerializeField] private StopMusicEvent eventStopMusic;
        [SerializeField] private PauseMusicEvent eventPauseMusic;
        [SerializeField] private ResumeMusicEvent eventResumeMusic;

        [Space][SerializeField]
        private PlaySfxEvent eventPlaySfx;

        [SerializeField] private StopSfxEvent eventStopSfx;
        [SerializeField] private PauseSfxEvent eventPauseSfx;
        [SerializeField] private ResumeSfxEvent eventResumeSfx;
        [SerializeField] private FinishSfxEvent eventFinishSfx;
        [SerializeField] private StopAllSfxEvent eventStopAllSfx;

        [Space][SerializeField]
        private MusicVolumeChange musicVolume;

        [SerializeField] SfxVolumeChange sfxVolume;

        private SoundComponent music;

        [SerializeField] private List<SoundComponent> listCacheSfx = new List<SoundComponent>();

        private int key = 0;

        private void Awake()
        {
            if (isDontDestroyOnLoad)
            {
                DontDestroyOnLoad(this.gameObject);
            }

            sfxVolume.AddListener(OnSfxVolumeChanged);
            musicVolume.AddListener(OnMusicVolumeChanged);
        }

        public override void OnEnable()
        {
            base.OnEnable();
            eventPlaySfx.AddListener(PlaySfx);
            eventStopSfx.AddListener(StopSfx);
            eventFinishSfx.AddListener(FinishSfx);
            eventResumeSfx.AddListener(ResumeSfx);
            eventPauseSfx.AddListener(PauseSfx);
            eventStopAllSfx.AddListener(StopAllSfx);

            eventPlayMusic.AddListener(PlayMusic);
            eventPauseMusic.AddListener(PauseMusic);
            eventResumeMusic.AddListener(ResumeMusic);
            eventStopMusic.AddListener(StopMusic);
        }

        public override void OnDisable()
        {
            base.OnDisable();
            eventPlaySfx.RemoveListener(PlaySfx);
            eventStopSfx.RemoveListener(StopSfx);
            eventFinishSfx.RemoveListener(FinishSfx);
            eventResumeSfx.RemoveListener(ResumeSfx);
            eventPauseSfx.RemoveListener(PauseSfx);
            eventStopAllSfx.RemoveListener(StopAllSfx);

            eventPlayMusic.RemoveListener(PlayMusic);
            eventPauseMusic.RemoveListener(PauseMusic);
            eventResumeMusic.RemoveListener(ResumeMusic);
            eventStopMusic.RemoveListener(StopMusic);
        }

        void OnMusicVolumeChanged(float volume)
        {
            if (music != null)
            {
                music.Volume = volume;
            }
        }

        void OnSfxVolumeChanged(float volume)
        {
            for (var i = 0; i < listCacheSfx.Count; i++)
            {
                listCacheSfx[i].Volume = volume;
            }
        }

        #region Sfx

        private SoundCache PlaySfx(SoundData soundData)
        {
            var sfxComponent = soundComponentPrefab.Spawn(audioHolder);
            sfxComponent.PlayAudioClip(soundData.GetAudioClip(), soundData.loop, soundData.volume * sfxVolume.Value);
            if (!soundData.loop) sfxComponent.OnCompleted += OnFinishPlayingAudio;
            SoundCache soundCache = GetSoundCache(soundData);
            sfxComponent.Key = key;
            listCacheSfx.Add(sfxComponent);
            return soundCache;
        }

        private void StopSfx(SoundCache soundCache)
        {
            var soundComponent = GetSoundComponent(soundCache);
            if (soundComponent == null) return;
            StopAndCleanAudioComponent(soundComponent);
        }

        private void PauseSfx(SoundCache soundCache)
        {
            var soundComponent = GetSoundComponent(soundCache);
            if (soundComponent == null || !soundComponent.IsPlaying) return;
            soundComponent.Pause();
        }

        private void ResumeSfx(SoundCache soundCache)
        {
            var soundComponent = GetSoundComponent(soundCache);
            if (soundComponent == null || soundComponent.IsPlaying) return;
            soundComponent.Resume();
        }

        private void FinishSfx(SoundCache soundCache)
        {
            var soundComponent = GetSoundComponent(soundCache);
            if (soundComponent == null || !soundComponent.IsPlaying) return;
            soundComponent.Finish();
            soundComponent.OnCompleted += OnFinishPlayingAudio;
        }

        private void StopAllSfx()
        {
            var listTemp = listCacheSfx.ToList();
            for (int i = 0; i < listTemp.Count; i++)
            {
                StopAndCleanAudioComponent(listTemp[i]);
            }

            listCacheSfx.Clear();
            listTemp.Clear();

            key = 0;
        }

        #endregion

        #region Music

        private void PlayMusic(SoundData soundData)
        {
            if (music == null || !music.IsPlaying)
            {
                music = soundComponentPrefab.Spawn(audioHolder);
            }

            music.FadePlayMusic(soundData.GetAudioClip(), soundData.loop, soundData.volume * musicVolume.Value,
                soundData.isMusicFadeVolume, soundData.fadeOutDuration, soundData.fadeInDuration);
            music.OnCompleted += StopAudioMusic;
        }

        private void StopMusic()
        {
            if (music != null && music.IsPlaying)
            {
                music.Stop();
                music.gameObject.DeSpawn();
            }
        }

        private void PauseMusic()
        {
            if (music != null && music.IsPlaying)
            {
                music.Pause();
            }
        }

        private void ResumeMusic()
        {
            if (music != null && !music.IsPlaying)
            {
                music.Resume();
            }
        }

        #endregion


        void OnFinishPlayingAudio(SoundComponent soundComponent)
        {
            StopAndCleanAudioComponent(soundComponent);
        }

        void StopAndCleanAudioComponent(SoundComponent soundComponent)
        {
            if (!soundComponent.IsLooping)
            {
                soundComponent.OnCompleted -= OnFinishPlayingAudio;
            }

            soundComponent.Stop();
            soundComponent.gameObject.DeSpawn();
            if (listCacheSfx.Contains(soundComponent)) listCacheSfx.Remove(soundComponent);
        }

        void StopAudioMusic(SoundComponent soundComponent)
        {
            soundComponent.OnCompleted -= StopAudioMusic;
            soundComponent.gameObject.DeSpawn();
        }

        SoundComponent GetSoundComponent(SoundCache soundCache)
        {
            if (soundCache == null) return null;
            for (var i = 0; i < listCacheSfx.Count; i++)
            {
                if (soundCache.key == listCacheSfx[i].Key) return listCacheSfx[i];
            }

            return null;
        }


        SoundCache GetSoundCache(SoundData soundData)
        {
            key++;
            return new SoundCache(key, soundData);
        }
    }
}