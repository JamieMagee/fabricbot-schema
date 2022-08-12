import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  label_inPr: Type.String(),
  fixedLabelEnabled: Type.Optional(
    Type.Boolean({
      title: "Enable 'Fixed' label",
      description:
        "If enabled, the bot will add a 'Fixed' label when:\\n1. There's no open PR targeting the issue via closing keyword, and\\n2. The last PR targeting the issue has been merged.",
    })
  ),
  label_fixed: Type.Optional(Type.String({ title: "'Fixed' label" })),
});

export const InPrLabelSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("InPrLabel"),
  subCapability: Type.Literal("InPrLabel"),
  version: Type.Literal("1.0"),
  config: Config,
});
