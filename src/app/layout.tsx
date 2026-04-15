import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-custom" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-custom" });

export const metadata: Metadata = {
  title: "Tushar Dhabariya",
  description: "Portfolio of Tushar Dhabariya - Machine Learning Engineer and Software Developer specializing in data-driven solutions, predictive modeling, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white relative`}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}