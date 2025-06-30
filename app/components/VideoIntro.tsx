import React, { useState, useRef, useEffect } from "react";

const VideoIntro: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state based on localStorage (only show video if not seen before)
  const [showVideo, setShowVideo] = useState<boolean>(() => {
    if (typeof window === "undefined") return false; // SSR safety, assume seen
    return !localStorage.getItem("introSeen");
  });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When video is skipped or ends, mark as seen
  const markSeen = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("introSeen", "true");
    }
    setShowVideo(false);
  };

  const handleSkip = () => markSeen();
  const handleVideoEnd = () => markSeen();

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  // If localStorage changes externally, ensure the intro respects it
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === "introSeen" && event.newValue === "true") {
        setShowVideo(false);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="relative min-h-screen">
      {children}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="relative w-[80vw] max-w-[800px] rounded-xl overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 49%",
                }}
              >
                <source src="/video/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <button
              onClick={handleSkip}
              className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded hover:bg-black/70 cursor-pointer"
              aria-label="Skip video intro"
            >
              Skip
            </button>
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 text-white rounded hover:bg-black/70 cursor-pointer"
                aria-label="Unmute video"
              >
                Unmute
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoIntro;
