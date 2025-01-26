"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../global/LanguageContext";

const ContactUs = () => {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      description:
        "Connect with Abnos Glass experts for premium glass solutions and technical consultation",
      contact: {
        phone: "+98 21 1234 5678",
        phoneLabel: "Contact",
        email: "info@abnosglass.com",
        emailLabel: "E-mail",
        address:
          "Tehran Province, Shahriar Industrial Zone, Glass Industry Blvd",
        addressLabel: "Our Address",
      },
      form: {
        title: "Contact",
        subtitle: "me",
        firstName: "Enter First Name",
        lastName: "Enter Last Name",
        email: "Enter your Email",
        phone: "Enter Your Phone no.",
        message: "Write Message",
        submit: "Submit Message",
      },
    },
    fa: {
      title: "تماس با ما",
      subtitle: "در تماس باشید",
      description:
        "با کارشناسان شیشه آبنوس برای راهکارهای شیشه با کیفیت و مشاوره فنی در ارتباط باشید",
      contact: {
        phone: "026 - 34706969",
        phoneLabel: "تماس",
        email: "info@abnosglass.com",
        emailLabel: "ایمیل",
        address:
          "کرج ، جنب پلیس راه کمالشهر ،خیابان عطا ، روبروی اردوگاه حقانی",
        addressLabel: "آدرس ما",
      },
      form: {
        title: "تماس با",
        subtitle: "ما",
        firstName: "نام",
        lastName: "نام خانوادگی",
        email: "ایمیل",
        phone: "شماره تماس",
        message: "پیام شما",
        submit: "ارسال پیام",
      },
    },
  };

  const currentContent = content[state.currentLang === "en" ? "en" : "fa"];

  return (
    <div
      className={`py-10 flex justify-center items-center flex-col-reverse lg:flex-row relative mx-4 `}
      dir={`${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-md w-full flex flex-col justify-end items-center gap-4 p-4 rounded-md" >
        <div className={`flex flex-row items-center gap-2 text-left ${isRTL ? "ml-auto" : "mr-auto"} `} dir={`${isRTL ? "rtl" : "ltr"}`} >
          <svg
            className="w-4 h-4 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            height="10px"
            viewBox="0 -960 960 960"
            width="10px"
            fill="#5985E1"
          >
            <path d="m403-96-22-114q-23-9-44.5-21T296-259l-110 37-77-133 87-76q-2-12-3-24t-1-25q0-13 1-25t3-24l-87-76 77-133 110 37q19-16 40.5-28t44.5-21l22-114h154l22 114q23 9 44.5 21t40.5 28l110-37 77 133-87 76q2 12 3 24t1 25q0 13-1 25t-3 24l87 76-77 133-110-37q-19 16-40.5 28T579-210L557-96H403Zm59-72h36l19-99q38-7 71-26t57-48l96 32 18-30-76-67q6-17 9.5-35.5T696-480q0-20-3.5-38.5T683-554l76-67-18-30-96 32q-24-29-57-48t-71-26l-19-99h-36l-19 99q-38 7-71 26t-57 48l-96-32-18 30 76 67q-6 17-9.5 35.5T264-480q0 20 3.5 38.5T277-406l-76 67 18 30 96-32q24 29 57 48t71 26l19 99Zm18-168q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42Zm0-144Z" />
          </svg>
          <span className="text-xs font-semibold">{currentContent.title}</span>
        </div>
        <div className={`text-4xl flex gap-2 ${isRTL ? "ml-auto" : "mr-auto"}`}>
          <p>{currentContent.subtitle}</p>
        </div>
        <p className="text-xs text-[#81848A]">{currentContent.description}</p>

        {/* Contact Info */}
        <div className="flex flex-row items-center gap-2 mr-auto pb-5 border-b border-b-gray-200 w-full">
          <svg
            className="w-10 h-10 rounded-lg text-white p-2 bg-[#6FBDF5]"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#ffffff"
          >
            <path d="M744-481q0-109-77.5-186.5T480-745v-72q70 0 131.13 26.6 61.14 26.6 106.4 71.87 45.27 45.26 71.87 106.4Q816-551 816-481h-72Zm-144 0q0-50-35-85t-85-35v-72q80 0 136 56.16T672-481h-72Zm163 336q-121-9-229.5-59.5T339-341q-86-86-136-194.5T144-765q-2-21 12.29-36.5Q170.57-817 192-817h136q17 0 29.5 10.5T374-780l24 107q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-75H218q5 38 14 74t23 71Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
          </svg>
          <div className="flex flex-col">
            <span>{currentContent.contact.phoneLabel}</span>
            <span className="text-xs text-[#81848A]">
              {currentContent.contact.phone}
            </span>
          </div>
        </div>

        {/* Email Info */}
        <div className="flex flex-row items-center gap-2 mr-auto pb-5 border-b border-b-gray-200 w-full">
          <svg
            className="w-10 h-10 rounded-lg text-white p-2 bg-[#6FBDF5]"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
          </svg>
          <div className="flex flex-col">
            <span>{currentContent.contact.emailLabel}</span>
            <span className="text-xs text-[#81848A]">
              {currentContent.contact.email}
            </span>
          </div>
        </div>

        {/* Address Info */}
        <div className="flex flex-row items-center gap-2 mr-auto pb-5 w-full">
          <svg
            className="w-10 h-10 rounded-lg text-white p-2 bg-[#6FBDF5]"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <div className="flex flex-col">
            <span>{currentContent.contact.addressLabel}</span>
            <span className="text-xs text-[#81848A]">
              {currentContent.contact.address}
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-md p-5 rounded-3xl shadow-xl border-t z-[9999] bg-white/10 backdrop-blur-[2px]">
        <h1 className="text-3xl mb-5">
          {currentContent.form.title}{" "}
          <span className="font-extrabold">{currentContent.form.subtitle}</span>
        </h1>
        <form>
          <div className="mb-4 flex gap-4 w-full">
            <input
              type="text"
              placeholder={currentContent.form.firstName}
              required
              className="w-full p-2 border border-gray-200 rounded"
            />
            <input
              type="text"
              placeholder={currentContent.form.lastName}
              required
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={currentContent.form.email}
              required
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder={currentContent.form.phone}
              required
              className={`w-full p-2 border border-gray-300 rounded ${isRTL ? "text-right" : "text-left"}`}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder={currentContent.form.message}
              required
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 border-2 border-[#6FBDF5] hover:text-white transition-all duration-300 ease-in-out rounded hover:bg-[#6FBDF5]"
          >
            {currentContent.form.submit}
          </button>
        </form>
      </div>

      <Image
        src={"/assets/images/BGtrans.png"}
        width={200}
        height={200}
        alt="map"
        className="w-[659px] z-0 absolute -bottom-5 left-0 fill-slate-50 opacity-5"
      />
    </div>
  );
};

export default ContactUs;
