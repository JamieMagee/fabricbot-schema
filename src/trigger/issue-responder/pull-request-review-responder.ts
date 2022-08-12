import { Type } from "@sinclair/typebox";

const Config = Type.Object({});

export const PullRequestReviewResponderSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("IssueResponder"),
  subCapability: Type.Literal("PullRequestReviewResponder"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
