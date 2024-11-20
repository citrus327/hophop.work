import { Metadata } from "next";

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

export default function About() {
  return (
    <div className="flex">
      <span className="animate-pulse">The site is under construction...</span>
    </div>
  );
}
