import NotionPage from "@/app/components/notion-page";
import { NotionAPI } from "notion-client";

export default async function Blog() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("422d2c033c4e4349a0c286dbe9cc55f0");
  return <NotionPage recordMap={recordMap} />;
}
