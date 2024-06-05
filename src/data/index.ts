import fs from "fs/promises"
import fm from "front-matter"
import path from "path"
import { marked } from "marked"

interface FrontMatterAttributes {
  [key: string]: any;
}

interface FrontMatterContent {
  attributes: FrontMatterAttributes;
  body: string;
  html: string;
}

interface Result {
  [key: string]: FrontMatterContent;
}

export async function getData(): Promise<Result> {
  const dataDir = path.join(process.cwd(), "src/data/")
  const files = await fs.readdir(dataDir)

  const result: Result = {}

  for (const file of files) {
    if (path.extname(file) === ".md") {
      const filePath = path.join(dataDir, file)
      const data = await fs.readFile(filePath, "utf8")
      const content = fm<FrontMatterAttributes>(data)
      const fileNameWithoutExt = path.basename(file, ".md")
      const html = await marked(content.body)
      result[fileNameWithoutExt] = {
        attributes: content.attributes,
        body: content.body,
        html,
      }
    }
  }

  return result
}

export default getData
