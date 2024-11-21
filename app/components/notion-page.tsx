"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import dynamic from "next/dynamic";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  {
    ssr: true,
  }
);

export function NotionPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      className="!px-0"
      rootDomain="https://hophop.work"
      mapPageUrl={(pageId) => `/pages/${pageId}`}
      components={{
        Code,
        Collection: () => null,
      }}
    />
  );
}
