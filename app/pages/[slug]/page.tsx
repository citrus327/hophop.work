import NotionPage from "@/app/components/notion-page";
import { NotionAPI } from "notion-client";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(slug);

  console.log("slug", recordMap);

  return <NotionPage recordMap={recordMap} />;
}
