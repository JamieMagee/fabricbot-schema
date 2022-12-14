import { Type } from "@sinclair/typebox";

const searchTerm = Type.Union([
  Type.Object({
    name: Type.String(),
    parameters: Type.Object({}),
  }),
]);

const searchTerms = Type.Array(searchTerm);

export const ScheduledSearchSubCapability = Type.Object({
  taskType: Type.Literal("scheduled"),
  capabilityId: Type.Literal("ScheduledSearch"),
  subCapability: Type.Literal("ScheduledSearch"),
  version: Type.Union([Type.Literal("1.0")]),
  config: Type.Object({ searchTerms }),
});
