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
    <div className="container px-4 py-16">
      {/* Top Text Section */}
      <div className="flex flex-col md:flex-row mx-36 justify-between items-center mb-12">
        <h2 className="text-4xl text-black font-light mb-4 md:mb-0">
          Our Successful Works <br />{" "}
          <span className="font-bold">initiativies</span>{" "}
        </h2>
        <p className="text-gray-600 max-w-md text-center md:text-left">
          Discover our portfolio of successful projects and creative solutions
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter.toLowerCase())}
            className={`px-6 py-2 border-r rounded-full transition-all ${
              activeFilter === filter.toLowerCase()
                ? "bg-blue-600 text-white"
                : " hover:bg-gray-200 text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-36">
        {works.map((work) => (
          <div
            key={work.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <div className="relative h-64 w-full">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {work.title}
              </h3>
              <p className="text-gray-200">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
