import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'TaskMaster',
    template: '%s | TaskMaster',
  },
  description: "The AI-powered task manager for high-performance teams.",
  keywords: ["AI", "Task Management", "SaaS", "Productivity"],
  openGraph: {
    title: 'TaskMaster',
    description: 'The AI-powered task manager for high-performance teams.',
    type: 'website',
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
