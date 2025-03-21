import React, { useState, useEffect } from "react";
import Image from "next/image";

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Don't render the loader if isLoading is false

  return (
    <div className="relative p-6 rounded-full">
      {/* Blurred background */}

      {/* SVG logo */}
      <div className="relative z-50">
        <Image
          src="/loader.png"
          alt="Loading Logo"
          width={80}
          height={80}
          className="w-20 h-20 brightness-0 invert"
        />
      </div>
    </div>
  );
};

export default Loader;
