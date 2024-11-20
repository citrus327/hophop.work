"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { ExtendedRecordMap } from "notion-types";

export default function NotionPage({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      className="!px-0"
      forceCustomImages
      previewImages={true}
    />
  );
}
