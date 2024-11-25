import Link from "next/link";
import { Page } from "./types";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export default async function Blog() {
  const pages = await fetch(`https://workers.hophop.work/blog/pages`).then(
    (res) => res.json()
  );
  return (
    <div className="flex flex-col gap-2">
      {pages.publishedPages.map((page: Page) => (
        <div
          key={page.pageId}
          className={cn(
            "flex items-center gap-16 w-full p-2 rounded-md cursor-pointer",
            "hover:bg-gray-200 transition-colors duration-100 ease-linear"
          )}
        >
          <Link href={`/pages/${page.slug}`} title={`${page.title}`}>
            <div className="flex items-center gap-2">
              <div>-</div>
              <div className="text-gray-700">{page.title}</div>
            </div>
          </Link>

          <span className="ml-auto hidden sm:block">
            {Intl.DateTimeFormat().format(new Date(page.createdTime))}
          </span>
        </div>
      ))}
    </div>
  );
}
