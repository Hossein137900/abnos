import Sidebar from "../../components/static/sidebar";
import Benefits from "../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";

export default function Manufacturing() {
  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including...",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team through...",
    },
    {
      question: "What are your business hours?",
      answer: "We are available 24/7...",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds within 30 days...",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 2-3 business days...",
    },
  ];
  
  return (
    <div>
      <HeroSection
        title="Robotics Services"
        description="Our robotics services are designed to bring innovation and professionalism to your operations. We provide cutting-edge solutions for automation, customized manufacturing systems, and more."
        videoUrl="/assets/video/video.mp4"
      />

      <div className="grid md:grid-cols-3 pt-12 mt-8 gap-6 lg:mx-20 mx-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Hero Section */}
          <section className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4 text-[#6FBDF5]">
              Robotics Services
            </h1>
            <p className="text-gray-700">
              Our robotics services are designed to bring innovation and
              professionalism to your operations. We provide cutting-edge
              solutions for automation, customized manufacturing systems, and
              more.
            </p>
          </section>

          {/* Benefits Section */}
          <Benefits />

          {/* Planning Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-[#6FBDF5]">
              Planning & Strategy
            </h2>
            <p className="text-gray-700 mb-4">
              Our team helps design and implement robotics programming to ensure
              that your business can benefit from sustainable solutions.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Image
                src="/assets/images/manifacture2.jpeg"
                alt="Robotics Planning"
                className="rounded-lg shadow"
                width={400}
                height={400}
              />
              <Image
                src="/assets/images/manifacture.jpeg"
                alt="Robotics Planning"
                className="rounded-lg shadow"
                width={400}
                height={400}
              />
            </div>
          </section>
        </div>
      </div>
      <CollapseFaq title="FAQ" faqItems={faqItems} />
    </div>
  );
}
