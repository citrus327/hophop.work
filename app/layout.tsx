import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import clsx from "clsx";
import { poppins } from "./fonts";
import { logoFont } from "./fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "HopHop | Personal Blog",
  description:
    "Explore articles about frontend and the web. Find insights, tutorials, and thoughts about the web.",
  keywords: "blog, personal blog, frontend, web",
  openGraph: {
    title: "HopHop | Personal Blog",
    description:
      "Explore articles about frontend and the web. Find insights, tutorials, and thoughts about the web.",
    type: "website",
    locale: "en_US",
    url: "https://hophop.work",
    siteName: "HopHop",
  },
  twitter: {
    card: "summary_large_image",
    title: "HopHop | Personal Blog",
    description:
      "Explore articles about frontend and the web. Find insights, tutorials, and thoughts about the web.",
    creator: "@_citrus327", // Your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hophop.work",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto py-8 px-8 sm:px-auto">
        <nav
          className={clsx(
            logoFont.className,
            "text-2xl flex items-start gap-12"
          )}
        >
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
        <main className={clsx(poppins.className, "mt-12")}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
