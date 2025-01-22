import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaRobot, FaCheckCircle, FaCogs, FaLightbulb } from "react-icons/fa";

const serviceCards = [
  {
    id: 1,
    title: "Automation Solutions",
    description: "Streamlining processes through cutting-edge technology.",
    icon: FaRobot,
  },
  {
    id: 2,
    title: "Quality Control",
    description: "Ensuring product excellence through rigorous testing.",
    icon: FaCheckCircle,
  },
  {
    id: 3,
    title: "Process Engineering",
    description: "Ensuring product excellence through rigorous testing.",
    icon: FaCogs,
  },
  {
    id: 4,
    title: "Product Development",
    description: "Streamlining processes through cutting-edge technology.",
    icon: FaLightbulb,
  },
];

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: IconType;
}) => (
  <div className="bg-gray-800 p-6 rounded-2xl">
    <div className="text-[#6FBDF5] mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function WhatWeDo() {
  return (
    <div className="bg-black text-white min-h-screen flex gap-4 py-4 items-center justify-center">
      <div className="lg:flex flex-row-reverse lg:items-center">
        <div className="lg:w-1/2 mb-8 lg:mt-0 flex justify-center">
          <Image
            src="/assets/images/about2.jpg"
            alt="Team"
            width={2000}
            height={2000}
            className="mx-2"
          />
        </div>
        <div className="lg:w-1/2 space-y-6 px-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Innovative factory and industry <br />
            <span className="text-[#6FBDF5]">solutions today</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceCards.map((card) => (
              <ServiceCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>

          <p className="text-gray-400">
            Lets make something great work together.{" "}
            <Link href="#" className="text-blue-500 underline">
              Get Free Quote
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
