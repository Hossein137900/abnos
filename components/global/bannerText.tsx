import React from "react";
import Image from "next/image";

const BannerText = ({
  imageSrc,
  text,
  imageAlt,
  description,
}: {
  imageSrc: string;
  text: string;
  imageAlt: string;
  description: string;
}) => {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40">
        {" "}
        {/* Optional overlay for better text visibility */}
        <div className="container mx-auto h-full">
          <div className="flex flex-row items-center justify-between -mt-12 h-full px-8">
            <h2 className="text-4xl font-bold lg:w-1/2 text-white">{text}</h2>
            <p className="text-xl lg:w-1/2 font-light text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerText;
