"use client";
import Image from "next/image";
import { useState } from "react";

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = ["All", "Branding", "Web Design", "Development", "Marketing"];
  const works = [
    {
      id: 1,
      title: "Modern Web Platform",
      description: "A cutting-edge web application with responsive design",
      image: "/assets/images/about.jpg",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Complete brand identity design for startup",
      image: "/assets/images/about2.jpg",
      category: "Branding",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/assets/images/about2.jpg",
      category: "Development",
    },
    {
      id: 4,
      title: "Digital Campaign",
      description: "Strategic digital marketing campaign",
      image: "/assets/images/about.jpg",
      category: "Marketing",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Top Text Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl text-black font-light mb-4 md:mb-0 text-center md:text-left">
          Our Successful Works <br />
          <span className="font-bold">initiativies</span>
        </h2>
        <p className="text-gray-600 max-w-md text-center md:text-left">
          Discover our portfolio of successful projects and creative solutions
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter.toLowerCase())}
            className={`px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-2 border rounded-full text-sm sm:text-base transition-all ${
              activeFilter === filter.toLowerCase()
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="group relative rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <div className="relative h-48 sm:h-56 lg:h-64 w-full">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                {work.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
