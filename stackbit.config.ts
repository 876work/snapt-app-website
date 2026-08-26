import { readFileSync } from "node:fs";
import { join } from "node:path";
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const homeContent = JSON.parse(
  readFileSync(join(__dirname, "content/home.json"), "utf8"),
) as Record<string, string>;

const imageFields = new Set([
  "heroMaskImage",
  "heroAppScreenshot",
  "occasion1Image",
  "occasion2Image",
  "occasion3Image",
  "occasion4Image",
  "occasion5Image",
  "occasion6Image",
  "occasion7Image",
  "path1Image",
  "path2Image",
]);

const labelFor = (name: string) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^faq/i, "FAQ")
    .replace(/\bcta\b/gi, "CTA")
    .replace(/^./, (char) => char.toUpperCase());

const fields = Object.keys(homeContent)
  .filter((name) => name !== "type")
  .map((name) => ({
    name,
    label: labelFor(name),
    type: imageFields.has(name) ? ("image" as const) : ("string" as const),
  })) as any[];

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "22",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "HomePage",
          label: "Snapt homepage",
          type: "page",
          urlPath: "/home",
          filePath: "content/home.json",
          fields,
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "assets",
        publicPath: "/",
      },
    }),
  ],
});
