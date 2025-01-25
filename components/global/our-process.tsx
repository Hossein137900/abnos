import Image from "next/image";

const OurProcess = () => {
  const timelineItems = [
    {
      title: "Discovery Phase",
      description: "Initial consultation and project planning",
      number: "01",
    },
    {
      title: "Development",
      description: "Implementing solutions with precision",
      number: "02",
    },
    {
      title: "Delivery",
      description: "Final testing and project handover",
      number: "03",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      {/* Top Text Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16 mx-4 sm:mx-8 lg:mx-36">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-0">
          Our Process
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl text-center lg:text-left">
          We follow a systematic approach to deliver exceptional results for
          every project
        </p>
      </div>

      {/* Bottom Sections */}
      <div className="flex flex-col lg:flex-row gap-8 items-center mx-4 sm:mx-8 lg:mx-36">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/about2.jpg"
              alt="Team"
              width={2000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section - Timeline */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-8 sm:space-y-12 relative before:absolute before:left-4 before:top-0 before:h-full">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative  sm:pl-12">
                <div className="rounded-2xl sm:rounded-[3rem] group  hover:bg-[#6FBDF5] p-4 sm:p-6 lg:p-8 transition-all hover:shadow-xl relative flex items-center">
                  <span className="absolute -left-2 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full text-[#6FBDF5] text-2xl sm:text-3xl font-bold group-hover:text-[#ffffff]">
                    {item.number}
                  </span>
                  <div className="ml-6 sm:ml-8 flex-1 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
