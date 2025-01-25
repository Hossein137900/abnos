import Image from "next/image";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ClientTestimonial = () => {
  return (
    <div className=" py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/assets/images/clientSay.jpeg" // Replace with your image path
            alt="Engineer with robotic arm"
            className="rounded-2xl shadow-lg object-cover w-full"
            width={2000}
            height={2000}
          />
        </div>

        {/* Testimonial Section */}
        <div>
          <p className="text-[#6FBDF5] uppercase font-semibold text-sm">
            Our Client Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            What our satisfied clients{" "}
            <span className="text-[#6FBDF5]">are saying</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            The team’s attention to detail and commitment to quality exceeded
            our expectations. They delivered on time, and their innovative
            solutions improved our production efficiency by 30%. Highly
            recommended!
          </p>
          <div className="flex items-center mt-6">
            <Image
              src="/assets/images/logo.png" // Replace with your image path
              alt="Client Avatar"
              className="w-12 h-12 rounded-full object-cover shadow-lg"
              width={48}
              height={48}
            />
            <div className="ml-4">
              <p className="text-gray-800 font-medium">Brooklyn Simmons</p>
              <p className="text-gray-500 text-sm">Homeowner</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              className="p-3 rounded-full bg-blue-100 text-[#6FBDF5] hover:bg-blue-200"
              aria-label="Previous Testimonial"
            >
              <MdChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
              aria-label="Next Testimonial"
            >
              <MdChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center mt-12 gap-6 ">
        {[1, 2, 3, 4, 5].map((logo, index) => (
          <Image
            key={index}
            src={`/assets/images/company.png`}
            alt={`Logo ${logo}`}
            className="h-10 object-contain"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonial;
