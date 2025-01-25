import React from "react";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialMedia = [
    {
      name: "Instagram",
      icon: (
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z" />
      ),
      description: "Follow our latest designs",
      href: "#",
    },
    {
      name: "Telegram",
      icon: (
        <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444z" />
      ),
      description: "Join our channel",
      href: "#",
    },
    {
      name: "Contact",
      icon: (
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      description: "Get in touch with us",
      href: "#",
    },
  ];
  const products = [
    "Architectural Glass",
    "Tempered Glass",
    "Decorative Glass",
    "Safety Glass",
  ];

  const services = [
    "Custom Fabrication",
    "Installation",
    "Consulting",
    "Maintenance",
  ];

  const company = [
    "About Us",
    "Manufacturing Process",
    "Sustainability",
    "Careers",
  ];

  const footerLinks = ["Terms & Conditions", "Privacy Policy", "Sitemap"];

  return (
    <footer className="bg-[#000814]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center sm:justify-start">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <span className="text-2xl font-bold">Crystal Glass Works</span>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start mt-4 lg:mt-0">
            <div className="flex items-center ">
              <span className="text-sm text-wrap text-center lg:text-justify text-white/70 font-bold">
                {" "}
                Crafting excellence in glass <br /> manufacturing since 1990.
                Your premier destination for premium <br /> glass solutions and
                innovative designs.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-50">Products</p>
            <ul className="mt-8 space-y-4 text-sm">
              {products.map((item) => (
                <li key={item}>
                  <Link
                    className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                    href="#"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-50">Services</p>
            <ul className="mt-8 space-y-4 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                    href="#"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-50">Company</p>
            <ul className="mt-8 space-y-4 text-sm">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                    href="#"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-3">
            <p className="text-lg font-bold text-gray-50">Connect With Us</p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-6">
              {socialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col items-center p-2 lg:p-4 border border-gray-600 hover:border-gray-800 rounded-lg hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className="text-[#6FBDF5] mb-3">
                    <svg
                      className="lg:h-8 lg:w-8 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex flex-col sm:justify-center sm:text-left">
            <p className="text-sm mb-4 text-gray-400 text-center">
              Crystal Glass Works © {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <div className="my-6 flex justify-center gap-6 sm:mt-0">
              {footerLinks.map((link) => (
                <Link
                  key={link}
                  className="text-gray-400 transition hover:text-blue-500"
                  href="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
