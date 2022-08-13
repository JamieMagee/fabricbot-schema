import { Type } from "@sinclair/typebox";
import prettier from "prettier";
import { scheduledSearch } from "./scheduled/scheduled-search/scheduled-search.js";
import { issuesOnlyResponder } from "./trigger/issue-responder/issues-only-responder.js";
import * as fs from "fs";

const task = Type.Union([scheduledSearch, issuesOnlyResponder]);

export const config = Type.Object({
  version: Type.Union([Type.Literal("1.0")]),
  tasks: Type.Array(task),
});

const jsonSchema = prettier.format(JSON.stringify(config), {
  parser: "json",
  plugins: ["prettier-plugin-sort-json"],
});
fs.writeFileSync("fabricbot.schema.json", jsonSchema);
