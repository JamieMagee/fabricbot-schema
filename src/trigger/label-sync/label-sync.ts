import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  labelPatterns: Type.Array(Type.Object({ pattern: Type.String() })),
});

export const LabelSyncSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("LabelSync"),
  subCapability: Type.Literal("LabelSync"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
