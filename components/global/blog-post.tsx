"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const blogPosts = {
  en: [
    {
      title: "Latest Innovations in Smart Glass Technology",
      category: "Technology",
      description:
        "Discover how Abnos Glass is implementing cutting-edge smart glass solutions for modern architecture",
      date: "March 15, 2024",
      views: "2.1K",
      image: "/assets/images/about.jpg",
    },
    {
      title: "Energy Efficiency with Double Glazed Glass",
      category: "Products",
      description:
        "How our double glazing technology helps buildings maintain optimal temperature",
      date: "March 10, 2024",
      views: "1.8K",
      image: "/assets/images/about2.jpg",
    },
    {
      title: "Safety Standards in Tempered Glass Manufacturing",
      category: "Industry",
      description:
        "Understanding the rigorous safety standards in our tempered glass production",
      date: "March 5, 2024",
      views: "1.5K",
      image: "/assets/images/bannerText.jpg",
    },
  ],
  fa: [
    {
      title: "نوآوری‌های جدید در تکنولوژی شیشه هوشمند",
      category: "تکنولوژی",
      description:
        "با راهکارهای پیشرفته شیشه هوشمند آبنوس برای معماری مدرن آشنا شوید",
      date: "۲۵ اسفند ۱۴۰۲",
      views: "۲.۱ هزار",
      image: "/assets/images/about.jpg",
    },
    {
      title: "بهینه‌سازی مصرف انرژی با شیشه دوجداره",
      category: "محصولات",
      description:
        "چگونه تکنولوژی دوجداره ما به حفظ دمای مطلوب ساختمان‌ها کمک می‌کند",
      date: "۲۰ اسفند ۱۴۰۲",
      views: "۱.۸ هزار",
      image: "/assets/images/about2.jpg",
    },
    {
      title: "استانداردهای ایمنی در تولید شیشه سکوریت",
      category: "صنعت",
      description:
        "آشنایی با استانداردهای سختگیرانه ایمنی در تولید شیشه سکوریت",
      date: "۱۵ اسفند ۱۴۰۲",
      views: "۱.۵ هزار",
      image: "/assets/images/bannerText.jpg",
    },
  ],
};

const BlogPost = () => {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentPosts = blogPosts[state.currentLang === "en" ? "en" : "fa"];

  return (
    <section className={`py-6 sm:py-12 mx-20 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4" dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/icontop.png"
              className="inline w-4 h-4"
              alt="Blog Icon"
              width={50}
              height={50}
            />
            <span className="text-[#6FBDF5] mx-2 font-semibold text-xs">
              {isRTL ? "مقالات" : "Blogs"}
            </span>
            <h2 className="text-3xl font-bold text-black">
              {isRTL ? "آخرین اخبار و مقالات" : "Latest News & Articles"}
            </h2>
          </div>

          <p className="text-sm text-gray-400">
            {isRTL
              ? "آخرین اخبار و مقالات تخصصی صنعت شیشه"
              : "Latest news and specialized articles in glass industry"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <article key={index} className="flex flex-col">
              <Link href="#" className="relative block">
                <Image
                  alt={post.title}
                  className="object-cover rounded-2xl w-full h-52"
                  src={post.image}
                  width={2000}
                  height={2000}
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  href="#"
                  className={`text-xs tracking-wider uppercase hover:underline text-gray-400 ${isRTL ? "text-right" : "text-left"} `}
                >
                  {post.category}
                </Link>
                <h3 className={`flex-1 py-2 text-lg font-semibold text-black leading-snug ${isRTL ? "text-right" : "text-left"}`}>
                  {post.title}
                </h3>
                <p className={`text-sm text-gray-600 mb-4 ${isRTL ? "text-right" : "text-left"}`}>{post.description}</p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-[#6FBDF5]">
                  <span>{post.date}</span>
                  <span>
                    {post.views} {isRTL ? "بازدید" : "views"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
