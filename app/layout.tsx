import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { sahel } from "@/next-persian-fonts/sahel";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { LanguageProvider } from "@/components/global/LanguageContext";
import LanguageIcon from "@/components/global/languageIcon";
import FontWrapper from "@/components/global/fontWrapper";
import ChatWidget from "@/components/global/ChatWidget";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sahel.className} antialiased relative`}
      >
        <LanguageProvider>
          <div className="fixed shadow-md shadow-[#6FBDF5]  rounded-full lg:top-7 lg:right-4 right-44 top-4 z-[9999]">
            <LanguageIcon />
          </div>

          <FontWrapper>
            <Navbar />
            {children}

            <ChatWidget />

            <Footer />
          </FontWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
