import Link from "next/link";

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
          <Link href={`/pages/${page.pageId}`}>{page.title}</Link>

          <b className="ml-auto">
            {new Date(page.createdTime).toLocaleDateString()}
          </b>
        </div>
      ))}
    </div>
  );
}
