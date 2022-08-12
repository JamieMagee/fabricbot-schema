import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.String(),
  label: Type.String(),
  silentMode: Type.Boolean(),
  minMinutesOpen: Type.String(),
  mergeType: Type.Union([
    Type.Literal("merge"),
    Type.Literal("squash"),
    Type.Literal("rebase"),
  ]),
  deleteBranches: Type.Boolean(),
  allowAutoMergeInstructionsWithoutLabel: Type.Boolean(),
  enforceDMPAsStatus: Type.Boolean(),
  removeLabelOnPush: Type.Boolean(),
  usePrDescriptionAsCommitMessage: Type.Boolean(),
  conditionalMergeTypes: Type.Array(
    Type.Object({
      mergeType: Type.Union([
        Type.Literal("merge"),
        Type.Literal("squash"),
        Type.Literal("rebase"),
      ]),
      condition: Type.Union([
        Type.Object({
          placeholder: Type.Literal("labels"),
          operator: Type.Union([
            Type.Literal("contains"),
            Type.Literal("notContains"),
          ]),
          label_name: Type.String(),
        }),
        Type.Object({
          placeholder: Type.Literal("author"),
          operator: Type.Union([
            Type.Literal("equals"),
            Type.Literal("notEquals"),
            Type.Literal("contains"),
            Type.Literal("notContains"),
          ]),
          value: Type.String({
            title: "Username",
            description:
              "This should be the username of the pull request author.",
          }),
        }),
        Type.Object({
          placeholder: Type.Literal("branch"),
          operator: Type.Union([
            Type.Literal("equals"),
            Type.Literal("notEquals"),
          ]),
          value: Type.String({ title: "Branch" }),
        }),
      ]),
    }),
    {
      title: "Custom merge strategy",
      description:
        "For pull requests that fulfill a certain condition, override the merge strategy configured above.",
    }
  ),
});

export const AutoMergeSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("AutoMerge"),
  subCapability: Type.Literal("AutoMerge"),
  version: Type.Literal("1.0"),
  config: Config,
});
