import { Type } from "@sinclair/typebox";

const config = Type.Object({
  taskName: Type.String(),
  configs: Type.Array(
    Type.Object({ label: Type.String(), pathFilter: Type.Array(Type.String()) })
  ),
});

export const PathSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("PrAutoLabel"),
  subCapability: Type.Literal("Path"),
  version: Type.Union([Type.Literal("1.0")]),
  config,
});
