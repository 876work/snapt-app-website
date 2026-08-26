import { readFileSync } from "node:fs";
import { join } from "node:path";
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const readContent = (fileName: string) =>
  JSON.parse(readFileSync(join(__dirname, `content/${fileName}`), "utf8")) as Record<string, string>;

const homeContent = readContent("home.json");
const exploreContent = readContent("explore.json");

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
  "portfolio1Image",
  "portfolio2Image",
  "portfolio3Image",
  "portfolio4Image",
  "portfolio5Image",
  "creatorsImage",
  "fan1Image",
  "fan2Image",
  "fan3Image",
  "fan4Image",
  "fan5Image",
  "row1Image",
  "row2Image",
  "row3Image",
  "row4Image",
  "row5Image",
  "row6Image",
]);

const labelFor = (name: string) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^faq/i, "FAQ")
    .replace(/\bcta\b/gi, "CTA")
    .replace(/^./, (char) => char.toUpperCase());

const fieldsFor = (content: Record<string, string>) =>
  Object.keys(content)
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
          fields: fieldsFor(homeContent),
        },
        {
          name: "ExplorePage",
          label: "Explore the app",
          type: "page",
          urlPath: "/explore",
          filePath: "content/explore.json",
          fields: fieldsFor(exploreContent),
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
