import NotebookConversionContext from "../../types/NotebookConversionContext";
import * as fs from "fs";
import * as path from "path";

const readPageData = (context: NotebookConversionContext): string[] => {
  const pageDataString = fs.readFileSync(
    path.join(context.baseDir, context.notebookId + ".pagedata"),
    { encoding: "utf-8" }
  );

  return pageDataString
    .split("\n")
    .filter((entry) => entry.length)
    .map((entry) => path.join(context.templateDir, entry + ".png"));
};

export default readPageData;
