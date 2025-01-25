import CollapseFaq from "@/components/global/collapse";
import HeroSection from "@/components/global/heroSection";
import ClientTestimonial from "@/components/global/our-client";
import TeamSection from "@/components/global/our-team";
import React from "react";

const About = () => {
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
    <main>
      <HeroSection
        title="Welcome to Abnos About"
        description="Your vision, our innovation"
        videoUrl="/assets/video/video.mp4"
      />
      <TeamSection />
      <ClientTestimonial />
      <CollapseFaq title="Frequently Asked Questions" faqItems={faqItems} />
    </main>
  );
};

export default About;
