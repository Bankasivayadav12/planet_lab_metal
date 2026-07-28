import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "@/context/ContentContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { MissionModal } from "@/components/MissionModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planet Labs & Metals | Commercial Space Station & Zero-Gravity Titanium Refineries",
  description: "Planet Labs & Metals is building era-defining space infrastructure: commercial space stations, zero-gravity metallurgy refineries, and lunar surface extraction platforms.",
  keywords: ["Planet Labs & Metals", "Space Station", "Zero-G Metallurgy", "Titanium Alloys", "Commercial Spaceflight", "Lunar Mining", "Microgravity Refineries"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-blue-600 selection:text-white`} suppressHydrationWarning>
        <ContentProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <SearchModal />
          <MissionModal />
        </ContentProvider>
      </body>
    </html>
  );
}
