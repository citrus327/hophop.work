import type { MetadataRoute } from "next";
import { Page } from "./types";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type SitemapItem = ArrayElement<MetadataRoute.Sitemap>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetch(`https://workers.hophop.work/blog/pages`).then(
    (res) => res.json()
  );
  const sitemap = pages.publishedPages.map((o: Page) => {
    return {
      url: `https://hophop.work/pages/${o.slug}`,
      lastModified: new Date(o.lastEditedTime),
      priority: 0.7,
      changeFrequency: "daily",
    } as SitemapItem;
  });
  return [
    {
      url: "https://hophop.work",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    } as SitemapItem,
    {
      url: "https://hophop.work/about",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    } as SitemapItem,
    ...sitemap,
  ];
}
