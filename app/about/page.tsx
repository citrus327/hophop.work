import { NotionAPI } from "notion-client";
import { NotionPage } from "../components/notion-page";

export const revalidate = 60;

export default async function About() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("b646be73efea4f8a95ed7d50343d34b1");

  return (
    <div className="mt-[-2rem] sm:mt-[-1rem]">
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
