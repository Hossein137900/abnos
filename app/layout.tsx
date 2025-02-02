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
          <div className="fixed border-[#6FBDF5] shadow-md shadow-[#6FBDF5] border-2 rounded-full lg:bottom-8 lg:right-4 right-40 bottom-4 z-[9999]">
            <LanguageIcon />
          </div>
         
          <FontWrapper>
            
              <Navbar />
              {children}
          
            
            <Footer />
          </FontWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
