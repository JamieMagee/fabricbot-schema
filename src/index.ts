import { writeFileSync } from "node:fs";
import { Type } from "@sinclair/typebox";
import prettier from "prettier";
import { Scheduled } from "./scheduled/index.js";
import { Trigger } from "./trigger/index.js";
import { ScheduledAndTrigger } from "./scheduled-and-trigger/index.js";

const Task = Type.Union([Scheduled, Trigger, ScheduledAndTrigger]);

export const FabricBotConfig = Type.Object(
  {
    $schema: Type.String(),
    version: Type.Union([Type.Literal("1.0")]),
    tasks: Type.Array(Task),
  },
  { title: "Fabric Bot JSON Configuration Schema", additionalProperties: false }
);

const jsonSchema = prettier.format(JSON.stringify(FabricBotConfig), {
  parser: "json",
  plugins: ["prettier-plugin-sort-json"],
});
writeFileSync("fabricbot.schema.json", jsonSchema);
