import { Metadata } from "next";
import Link from "next/link";

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
interface Page {
  pageId: string;
  createdTime: string;
  lastEditedTime: string;
  title: string;
}

export default async function Blog() {
  const pages = await fetch(`https://workers.hophop.work/blog/pages`).then(
    (res) => res.json()
  );
  return (
    <div className="flex flex-col gap-2">
      {pages.publishedPages.map((page: Page, index: number) => (
        <div
          key={page.pageId}
          className="flex items-center gap-2 w-full hover:bg-gray-200 p-2 rounded-md cursor-pointer"
        >
          <i>
            {index + 1}. {"  "}
          </i>
          <Link href={`/pages/${page.pageId}?title=${page.title}`}>
            {page.title}
          </Link>

          <b className="ml-auto">
            {new Date(page.createdTime).toLocaleDateString()}
          </b>
        </div>
      ))}
    </div>
  );
}
