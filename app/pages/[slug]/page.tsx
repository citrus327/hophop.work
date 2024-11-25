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
    keywords: "blog, personal blog, frontend, web",
    openGraph: {
      title: pageInfo.title,
      description: pageInfo.description,
      type: "website",
      locale: "en_US",
      url: `https://hophop.work/pages/${pageInfo.slug}`,
      siteName: "hophop.work",
    },
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
    <>
      <h1 className="text-3xl font-bold mb-2">{pageInfo.title}</h1>
      <div>
        <NotionPage recordMap={recordMap} />
      </div>
    </>
  );
}
