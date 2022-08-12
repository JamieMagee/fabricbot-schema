import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
});

export const CodeFlowLinkSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("CodeFlowLink"),
  subCapability: Type.Literal("CodeFlowLink"),
  version: Type.Literal("1.0"),
  config: Config,
});
