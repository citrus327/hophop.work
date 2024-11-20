import NotionPage from "@/app/components/notion-page";
import { Metadata } from "next";
import { NotionAPI } from "notion-client";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ title: string }>;
};
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: (await searchParams).title,
  };
}
export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(slug);

  return <NotionPage recordMap={recordMap} />;
}
