import React from "react";
import Image from "next/image"; // Import Image component

interface CardsProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  learnMoreLink: string;
}

const Cards: React.FC<CardsProps> = ({
  imageSrc,
  title,
  description,
  technologies,
  learnMoreLink,
}) => {
  return (
    <div className="bg-black cursor-pointer rounded-xl overflow-hidden shadow-lg w-full max-w-[300px] sm:max-w-[350px] md:max-w-sm lg:max-w-md border transition-transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 sm:h-56">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
          width={500} // Set a width for the image
          height={300} // Set a height for the image
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <a
          href={learnMoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-white text-black font-semibold py-2 px-4 rounded-xl text-base transition hover:bg-gray-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Cards;
