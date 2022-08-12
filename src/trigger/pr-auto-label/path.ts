import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.String(),
  configs: Type.Array(
    Type.Object({
      label: Type.String(),
      pathFilter: Type.Array(Type.String()),
      exclude: Type.Array(Type.String()),
    })
  ),
});

export const PathSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("PrAutoLabel"),
  subCapability: Type.Literal("Path"),
  version: Type.Union([Type.Literal("1.0")]),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
