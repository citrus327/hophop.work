import { NotionPage } from "@/app/components/notion-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPageInfo(slug: string) {
  return await fetch(`https://workers.hophop.work/blog/page/${slug}`).then(
    (res) => res.json()
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageInfo = await getPageInfo((await params).slug);
  return {
    title: pageInfo.title,
    description: pageInfo.description,
  };
}

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const pageInfo = await getPageInfo(slug);
  if (!pageInfo.pageId) {
    notFound();
  }
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(pageInfo.pageId);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{pageInfo.title}</h1>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
