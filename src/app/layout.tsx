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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://planetlabsmetals.com"),
  title: {
    default: "Planet Labs & Metals | Commercial Space Station & Zero-Gravity Metallurgy",
    template: "%s | Planet Labs & Metals",
  },
  description: "Planet Labs & Metals is building era-defining space infrastructure: commercial space stations, zero-gravity metallurgy refineries, and lunar surface extraction platforms.",
  keywords: ["Planet Labs & Metals", "Space Station", "Zero-G Metallurgy", "Titanium Alloys", "Commercial Spaceflight", "Lunar Mining", "Microgravity Refineries"],
  openGraph: {
    title: "Planet Labs & Metals — Commercial Space Station & Zero-G Metallurgy",
    description: "Building era-defining space infrastructure: commercial space stations, zero-gravity metallurgy refineries, and orbital research platforms.",
    url: "https://planetlabsmetals.com",
    siteName: "Planet Labs & Metals",
    images: [
      {
        url: "/images/hero_space_station_hd.png",
        width: 1200,
        height: 630,
        alt: "Planet Labs & Metals Commercial Space Station",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Labs & Metals — Commercial Space Station & Zero-G Metallurgy",
    description: "Building era-defining space infrastructure: commercial space stations, zero-gravity metallurgy refineries, and orbital research platforms.",
    images: ["/images/hero_space_station_hd.png"],
  },
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
