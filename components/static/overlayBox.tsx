import {
  MdPrecisionManufacturing,
  MdSmartToy,
  MdDesignServices,
  MdBuildCircle,
} from "react-icons/md";

export default function FeaturesSection() {
  const features = [
    {
      icon: MdPrecisionManufacturing,
      title: "Custom Manufacturing Solution",
    },
    {
      icon: MdSmartToy,
      title: "Industrial Automation And Robotics",
    },
    {
      icon: MdDesignServices,
      title: "Product Design And Prototyping",
    },
    {
      icon: MdBuildCircle,
      title: "Equipment Maintenance Support",
    },
  ];

  return (
    <div className="py-16 bg-white shadow-md rounded-3xl lg:-mt-36 z-[9999]">
      <div className="container mx-auto lg:max-w-5xl px-6">
        <div className="flex lg:flex-row flex-col">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-transparent border-l p-6 flex flex-col items-center justify-between "
            >
              <feature.icon className="h-16 w-16 mr-auto text-[#6FBDF5]" />

              <h3 className="text-lg text-left font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <button className="bg-gray-200 group  hover:bg-[#6FBDF5] text-gray-400 hover:text-[#ffffff] rounded-full p-2">
                <span className="sr-only">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:rotate-180 duration-300 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.293l3.293 3.293a1 1 0 01-1.414 1.414L10 9.414l-2.879 2.88a1 1 0 11-1.414-1.414L9 7.707a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
