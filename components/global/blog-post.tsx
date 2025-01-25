import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPost = () => {
  return (
    <section className="py-6 sm:py-12 mx-20  text-gray-100">
      <div className=" space-y-8">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <Image
              src="/assets/images/icontop.png"
              className="inline w-4 h-4"
              alt="FAQ Icon"
              width={50}
              height={50}
            />
            <span className="text-[#6FBDF5] mx-2 font-semibold text-xs">
              Blogs
            </span>
            <h2 className="text-3xl font-bold text-black">
              Partem reprimique an pro
            </h2>
          </div>

          <p className=" text-sm text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col ">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover rounded-2xl w-full h-52 bg-gray-500"
                src="/assets/images/about.jpg"
                width={2000}
                height={2000}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-gray-400"
              >
                Convenire
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold text-black leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6FBDF5]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>

          <article className="flex flex-col ">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover rounded-2xl w-full h-52 bg-gray-500"
                src="/assets/images/about2.jpg"
                width={2000}
                height={2000}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-gray-400"
              >
                Convenire
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold text-black leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6FBDF5]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover rounded-2xl w-full h-52 bg-gray-500"
                src="/assets/images/bannerText.jpg"
                width={2000}
                height={2000}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-gray-400"
              >
                Convenire
              </Link>
              <h3 className="flex-1 py-2 text-lg font-semibold text-black leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6FBDF5]">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
