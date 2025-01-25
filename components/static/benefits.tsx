import { FiSettings } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
export default function Benefits() {
  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Streamline operations to reduce time and cost.",
      icon: FiSettings,
    },
    {
      title: "Advanced Technology",
      description: "Adopt cutting-edge tools to stay ahead.",
      icon: BsLightbulb,
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies to meet specific needs.",
      icon: FaWrench,
    },
    {
      title: "Sustainability",
      description: "Focus on eco-friendly production.",
      icon: FaLeaf,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-[#6FBDF5]">
        Why choose robotics services
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border rounded-lg shadow"
          >
            <benefit.icon className="text-2xl text-[#6FBDF5]" />
            <div>
              <h3 className="font-semibold text-black">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
