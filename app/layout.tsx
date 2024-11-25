import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import clsx from "clsx";
import { poppins } from "./fonts";
import { logoFont } from "./fonts";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.min.css";
import Metrics from "./components/metrics";

export const metadata: Metadata = {
  title: "hophop.work",
  description: "The place that I share and create.",
  keywords: "blog, personal blog, frontend, web",
  openGraph: {
    title: "hophop.work",
    description: "The place that I share and create.",
    type: "website",
    locale: "en_US",
    url: "https://hophop.work",
    siteName: "hophop.work",
  },
  twitter: {
    card: "summary_large_image",
    title: "hophop.work",
    description: "The place that I share and create.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="container mx-auto p-6">
        <nav
          className={clsx(
            logoFont.className,
            "text-2xl flex gap-12",
            "justify-center"
          )}
        >
          <Link href="/">{`<Home />`}</Link>
          <Link href="/about">{`<About />`}</Link>
        </nav>
        <main className={clsx(poppins.className, "mt-6 md:mt-8")}>
          {children}
        </main>
        <Metrics />
      </body>
    </html>
  );
}
