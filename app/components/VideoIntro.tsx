import React, { useState, useRef } from "react";

const VideoIntro: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle skipping the video
  const handleSkip = () => setShowVideo(false);

  // Handle video ending naturally
  const handleVideoEnd = () => setShowVideo(false);

  // Handle unmuting the video
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    // Ensuring the parent covers the full viewport height
    <div className="relative min-h-screen">
      {children}
      {showVideo && (
        // Using fixed positioning to keep the video overlay centered in the viewport
        <div className="fixed inset-0 flex items-center justify-center z-10">
          {/* Glass background container with rounded corners */}
          <div className="relative w-[80vw] max-w-[800px] rounded-xl overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
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
