import Link from "next/link";
import React from "react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

interface PricingProps {
  heading?: string;
  subheading?: string;
  plans: PricingPlan[];
}

const Pricing = ({
  heading = "Choose your best plan",
  subheading = "lorem ipsum dolor sit amet consectetur adipiscing elit nullam ac semper augue sed euismod magna",
  plans,
}: PricingProps) => {
  return (
    <section className="py-20  dark:text-gray-800">
      <div className="container px-4 mx-auto">
        <div className="  mb-16 text-center flex gap-4 lg:flex-row flex-col lg:justify-between items-center">
          <h2 className="text-3xl font-bold lg:text-5xl">{heading}</h2>
          <span className="font-bold w-full lg:w-1/2 tracking-wider text-sm lg:text-base text-gray-400">
            {subheading}
          </span>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
            >
              <div
                className={`group flex flex-grow flex-col mx-4 lg:mx-0 p-6 space-y-6 transition-all duration-200 ease-in-out hover:bg-[#6FBDF5] rounded-2xl shadow sm:p-8 ${
                  plan.highlighted ? "bg-[#6FBDF5] text-gray-50" : ":bg-gray-50"
                }`}
              >
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold group-hover:text-white transition-all duration-200 ease-in-out">
                    {plan.title}
                  </h4>
                  <span className="text-6xl font-bold group-hover:text-white transition-all duration-200 ease-in-out">
                    {plan.price}
                    {plan.period && (
                      <span className="text-sm group-hover:text-white transition-all duration-200 ease-in-out tracking-wide">
                        /{plan.period}
                      </span>
                    )}
                  </span>
                </div>
                <p
                  className={`leading-relaxed group-hover:text-white transition-all duration-200 ease-in-out ${
                    !plan.highlighted && "dark:text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <ul
                  className={`flex-1 space-y-2 ${
                    !plan.highlighted && "dark:text-gray-600"
                  }`}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`flex-shrink-0 w-6 h-6 group-hover:text-white ${
                          plan.highlighted ? "" : "text-[#6FBDF5]"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="group-hover:text-white transition-all duration-200 ease-in-out">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`inline-block w-full px-5 py-3 transition-all duration-200 ease-in-out font-semibold tracking-wider text-center rounded ${
                    plan.highlighted
                      ? "bg-gray-100 text-[#6FBDF5]"
                      : "bg-[#6FBDF5] text-gray-50"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
