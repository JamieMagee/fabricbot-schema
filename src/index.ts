import { writeFileSync } from "node:fs";
import { Type } from "@sinclair/typebox";
import prettier from "prettier";
import { Scheduled } from "./scheduled/index.js";
import { Trigger } from "./trigger/index.js";
import { ScheduledAndTrigger } from "./scheduled-and-trigger/index.js";

export const FabricBotConfig = Type.Object(
  {
    $schema: Type.String(),
    version: Type.Union([Type.Literal("1.0")]),
    tasks: Type.Array(Type.Union([Scheduled, Trigger, ScheduledAndTrigger])),
    userGroups: Type.Optional(Type.Array(Type.Object({}))),
  },
  {
    $schema: "https://json-schema.org/draft/2019-09/schema",
    title: "Fabric Bot JSON Configuration Schema",
    additionalProperties: false,
  }
);

const jsonSchema = prettier.format(JSON.stringify(FabricBotConfig), {
  parser: "json",
});
writeFileSync("fabricbot.schema.json", jsonSchema);
