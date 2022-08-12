import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  configs: Type.Array(
    Type.Object({
      label: Type.String(),
      branchName: Type.String(),
    })
  ),
});

export const BranchSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("PrAutoLabel"),
  subCapability: Type.Literal("Branch"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
