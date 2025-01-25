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
    <section className="py-12">
      <div className=" mx-20 px-4 text-center">
        <div className="flex flex-col items-center justify-around">
          <div>
            <h3 className="text-sm text-blue-600 font-medium">OUR TEAM</h3>
            <h2 className="text-3xl font-bold mt-2">
              Core strengths in{" "}
              <span className="text-gray-800">industrial innovation</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
              <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
