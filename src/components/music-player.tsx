'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

type Track = {
  id: number;
  title: string;
  artist: string;
  filename: string;
};

export default function MusicPlayer() {
  // State
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    fetch("/music-tracks.json")
      .then((res) => res.json())
      .then((data: Track[]) => setTracks(data))
      .catch((err) => console.error("Failed to load tracks:", err));
  }, []);

  // Handlers
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      return;
    }
    audioRef.current.play().catch((err) => {
      console.error("Playback failed:", err);
    });
  };

  const handleNext = () => {
    if (!tracks.length) return;
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (!tracks.length) return;
    setCurrentTrackIndex((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleTrackEnd = () => {
    // Auto-advance to next track (loop playlist)
    handleNext();
  };

  // Load new track when index changes
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    audio.load();

    // If we should be playing, wait for the track to load then play
    if (isPlaying) {
      const playWhenReady = () => {
        audio.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      };
      audio.addEventListener('canplay', playWhenReady, { once: true });
      return () => audio.removeEventListener('canplay', playWhenReady);
    }
  }, [currentTrackIndex, isPlaying]);

  // Play/pause without reloading the track
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Keep UI state in sync with the audio element
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div className="flex items-center h-full">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack ? `/music/${currentTrack.filename}` : undefined}
        onEnded={handleTrackEnd}
        onPlay={handlePlay}
        onPause={handlePause}
        onError={(e) => console.error('Audio error:', e)}
      />

      {isExpanded && currentTrack ? (
        // Expanded view
        <div className="flex items-center gap-3 h-full transition-all duration-300 ease-in-out">
          {/* Song info */}
          <div className="flex flex-col justify-center text-right">
            <p className="text-tx-2 text-sm leading-tight font-satoshi">
              {currentTrack.title}
            </p>
            <p className="text-tx-2/60 text-xs leading-tight font-satoshi">
              {currentTrack.artist}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 h-full">
            <button onClick={handlePrevious} aria-label="Previous track">
              <SkipBack className="w-5 h-5 text-tx-2" />
            </button>
            <button onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ?
                <Pause className="w-6 h-6 text-tx-2" /> :
                <Play className="w-6 h-6 text-tx-2" />
              }
            </button>
            <button onClick={handleNext} aria-label="Next track">
              <SkipForward className="w-5 h-5 text-tx-2" />
            </button>
          </div>

          {/* Jukebox */}
          <button onClick={() => setIsExpanded(false)} aria-label="Collapse player">
            <Image
              src="/music/jukebox.png"
              alt="Music player"
              width={50}
              height={50}
            />
          </button>
        </div>
      ) : (
        // Collapsed view
        <button
          onClick={() => {
            setIsExpanded(true);
            if (!isPlaying) handlePlayPause();
          }}
          aria-label="Open music player"
        >
          <Image
            src="/music/jukebox.png"
            alt="Music player"
            width={50}
            height={50}
          />
        </button>
      )}
    </div>
  );
}
