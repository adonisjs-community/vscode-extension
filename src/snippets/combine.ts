const fs = require("fs");
const path = require("path");
const snippetFolders = ["adonis", "edge"];
const jsonCommentRegex = new RegExp(/(\n\s+\/\/.*)/, "gi");
const snippetsParentDir = path.join(__dirname, "../../src/snippets");

for (const snippetFolder of snippetFolders) {
  const snippets: any[] = [];
  const dir = path.join(snippetsParentDir, snippetFolder);

  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const json = fs
      .readFileSync(filePath)
      .toString("utf8")
      .replace(jsonCommentRegex, "")
      .trim();

    snippets.push(JSON.parse(json));
    const output = path.join(
      snippetsParentDir,
      "output",
      `${snippetFolder}.json`
    );
    fs.writeFileSync(output, JSON.stringify(snippets));
  }
}
