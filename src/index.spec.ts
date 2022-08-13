import { readFileSync } from "node:fs";
import { TypeCheck, TypeCompiler } from "@sinclair/typebox/compiler";
import { FabricBotConfig } from "../src";

describe("fabricbot.schema.json", () => {
  let typeCompiler: TypeCheck<typeof FabricBotConfig>;

  beforeAll(() => {
    typeCompiler = TypeCompiler.Compile(FabricBotConfig);
  });

  it("works", () => {
    const fabricBotConfig = JSON.parse(
      readFileSync("./src/__fixtures__/fabricbot.1.json", "utf8")
    );
    const isValid = typeCompiler.Check(fabricBotConfig);
    expect(isValid).toBe(true);
  });
});
