import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rehman | Full Stack Software Engineer",
  description:
    "Portfolio of Abdul Rehman, a passionate Full Stack Software Engineer specializing in Laravel, WordPress, React.js, and Node.js development.",
  keywords: [
    "Abdul Rehman",
    "Full Stack Engineer",
    "Laravel Developer",
    "WordPress Developer",
    "React.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman | Full Stack Software Engineer",
    description:
      "Building Fast, Scalable & Beautiful Web Applications with Laravel, WordPress, React, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050816] text-white selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
        {children}
      </body>
    </html>
  );
}
