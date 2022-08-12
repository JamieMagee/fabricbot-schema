import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
});

export const EmailCleanserSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("EmailCleanser"),
  subCapability: Type.Literal("EmailCleanser"),
  version: Type.Literal("1.0"),
  config: Config,
});
