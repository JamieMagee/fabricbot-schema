import { Type } from "@sinclair/typebox";

const config = Type.Object({
  taskName: Type.String(),
});

export const PullRequestResponderSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("PrAutoLabel"),
  subCapability: Type.Literal("Path"),
  version: Type.Union([Type.Literal("1.0")]),
  config,
});
