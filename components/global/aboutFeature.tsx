// pages/index.js
import Image from "next/image";

export default function AboutFeature() {
  return (
    <div className="relative bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-start gap-6">
          <div className="relative flex items-center">
            {/* <div className="absolute inset-0 z-0 border-4 border-blue-200 rounded-xl"></div> */}
            <Image
              src="/assets/images/about.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded-xl  shadow-md z-10 relative"
            />
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4 md:block absolute -right-44 bg-transparent p-6 rounded-xl">
              <p className="text-6xl font-semibold text-[#6FBDF5]">+25 </p>
              <p className="text-lg font-semibold text-gray-500">
                Years Of Experience
              </p>
            </div>
          </div>

          <div className="rounded-xl p-4 w-3/4 -mt-12 ml-auto">
            <Image
              src="/assets/images/about2.jpg"
              alt="about"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <h3 className="text-[#6FBDF5] uppercase font-bold text-sm">
            About Us
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Building quality through{" "}
            <span className="text-[#6FBDF5]">industrial innovation</span>
          </h2>
          <p className="text-gray-600 mt-4">
            At the heart of our operations is a commitment to delivering
            superior products through cutting-edge technology and innovative
            processes.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="h-6 w-6 flex items-center justify-center bg-blue-100 rounded-full text-[#6FBDF5]">
                ✓
              </span>
              <span className="ml-4 text-gray-700">
                Sustainable Manufacturing
              </span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 flex items-center justify-center bg-blue-100 rounded-full text-[#6FBDF5]">
                ✓
              </span>
              <span className="ml-4 text-gray-700">Advanced Automation</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 flex items-center justify-center bg-blue-100 rounded-full text-[#6FBDF5]">
                ✓
              </span>
              <span className="ml-4 text-gray-700">
                Efficient Production Processes
              </span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 flex items-center justify-center bg-blue-100 rounded-full text-[#6FBDF5]">
                ✓
              </span>
              <span className="ml-4 text-gray-700">
                Reliable Delivery Services
              </span>
            </li>
          </ul>
          <div className="mt-8 flex items-center">
            <div className="rounded-xl shadow-lg p-4 bg-gray-100">
              <p className="text-lg font-bold text-gray-900">
                15.5K Genuine Rating
              </p>
              <div className="flex items-center space-x-1 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center gap-2 items-center text-white mx-auto shadow-xl text-lg bg-[#6FBDF5] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#6FBDF5] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
             Learn More
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-200 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-[#fff] group-hover:fill-[#6FBDF5]"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
