import Image from "next/image";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      {/* Main Container */}
      <div className="max-w-7xl w-full px-6 lg:px-16 space-y-10">
        {/* Title Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Text Section */}
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-[#6FBDF5] font-semibold text-sm uppercase tracking-wide">
              Our Story
            </p>
            <h1 className="text-3xl lg:text-5xl font-light text-gray-900">
              Transforming industries
              <br />
              <span className="text-gray-700 font-bold">
                with{" "}
                <span className="font-bold text-black">
                  innovative efficient solutions
                </span>
              </span>
            </h1>
          </div>

          {/* Two Images in Row */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/assets/images/bannerText.jpg"}
              alt="Factory Workers"
              width={400}
              height={300}
              className="rounded-2xl h-full w-full object-cover"
            />
            <Image
              src={"/assets/images/herosection.jpg"}
              alt="Machinery"
              width={400}
              height={400}
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="">
            <Image
              src={"/assets/images/about.jpg"}
              alt="Workers"
              width={2000}
              height={2000}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <p className="text-gray-600 lg:text-justify text-center ml-auto ">
              We specialize in revolutionizing industries by delivering
              innovative, efficient solutions that enhance productivity and
              streamline processes. Through advanced technologies, precision
              engineering, and sustainable practices.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0 border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
                  <p className="text-gray-500 text-sm">Completed Project</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                  <p className="text-gray-500 text-sm">Satisfied Customer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
                  <p className="text-gray-500 text-sm">Year Of Mastery</p>
                </div>
              </div>
            </div>
            <div className="flex items-center  justify-center ">
              <Image
                src="/assets/images/logo.png"
                alt="Team"
                width={100}
                height={100}
                className="rounded-full mx-2"
              />
              <button className="flex items-center space-x-2 bg-[#6FBDF5] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                <span>Watch Intro</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
