import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveed Latif | Full-Stack Developer & DevOps Engineer",
  description:
    "Full-Stack Developer specializing in the MERN ecosystem, Next.js, and modern frontend development. Building scalable web applications deployed on AWS.",
  keywords: [
    "Naveed Latif",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Naveed Latif" }],
  creator: "Naveed Latif",
  openGraph: {
    type: "website",
    title: "Naveed Latif | Full-Stack Developer & DevOps Engineer",
    description:
      "Full-Stack Developer specializing in the MERN ecosystem, Next.js, and modern frontend development.",
    siteName: "Naveed Latif",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Latif | Full-Stack Developer & DevOps Engineer",
    description: "Full-Stack Developer. MERN · Next.js · DevOps · AWS.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ede8dc",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full overflow-x-hidden w-full max-w-full`} style={{ background: "#ede8dc" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-parchment text-ink overflow-x-hidden w-full max-w-full" style={{ background: "#ede8dc" }}>
        {children}
      </body>
    </html>
  );
}
