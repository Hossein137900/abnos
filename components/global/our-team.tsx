import Image from "next/image";

// components/TeamSection.jsx
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ronald Richards",
      role: "Manufacturing Executive",
      image: "/assets/images/team1.jpeg",
    },
    {
      name: "Brooklyn Simmons",
      role: "Industrial Engineer",
      image: "/assets/images/team2.jpeg",
    },
    {
      name: "Cameron Williamson",
      role: "Production Supervisor",
      image: "/assets/images/team3.jpeg",
    },
    {
      name: "Darlene Robertson",
      role: "Manufacturing Executive",
      image: "/assets/images/team4.jpeg",
    },
  ];

  return (
    <section className="py-12 mx-20">
      <div className=" py-12 text-center">
        <div className="flex lg:flex-row gap-4 flex-col items-center justify-between">
          <div className="text-left">
            <h3 className="text-sm text-[#6FBDF5] font-medium">OUR TEAM</h3>
            <h2 className="text-3xl font-bold mt-2 text-[#6FBDF5]">
              Core strengths in{" "}
              <span className="text-gray-800">industrial innovation</span>
            </h2>
          </div>
          <button className="flex justify-center gap-2 items-center text-white shadow-xl text-lg bg-[#6FBDF5] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#6FBDF5] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-2 overflow-hidden  rounded-full group">
            All Members
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" rounded-lg p-4 hover:shadow-lg transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={500}
              />
              <h4 className="text-lg font-semibold text-[#6FBDF5] mt-4">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
