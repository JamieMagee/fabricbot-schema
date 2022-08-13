import { Type } from "@sinclair/typebox";

const config = Type.Object({
  conditions: Type.Recursive(
    (condition) =>
      Type.Object({
        operator: Type.Union([Type.Literal("and"), Type.Literal("or")]),
        operands: Type.Array(
          Type.Union([
            Type.Object({ name: Type.String(), parameters: Type.Object({}) }),
            condition,
          ])
        ),
      }),
    { $id: "condition" }
  ),
});

export const issuesOnlyResponder = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("IssueResponder"),
  subCapabilityId: Type.Literal("IssuesOnlyResponder"),
  version: Type.Union([Type.Literal("1.0")]),
  config,
});
