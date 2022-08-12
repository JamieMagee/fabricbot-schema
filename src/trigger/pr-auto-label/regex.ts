import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  configs: Type.Array(
    Type.Object({
      labelReplacement: Type.String({
        title: "Label",
        description:
          "This expects the same format (and supports the same features) as the 2nd argument of `String.prototype.replace`. Use tokens such as `$1` to reference match groups.",
      }),
      matchRegex: Type.String({
        title: "Regular expression",
        description:
          "This should be a JavaScript regular expression. Match groups can then be referenced in the label.",
        format: "regex",
      }),
      exclude: Type.Array(
        Type.String({
          title: "Exclude",
          description:
            "This is a simple string match - no globs or regex are supported. Match is done by comparing the file modified (as reflected in GitHub's PR interface in list of files changed) and seeing if it starts with the paths configured here.",
        })
      ),
    })
  ),
});

export const RegexSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("PrAutoLabel"),
  subCapability: Type.Literal("Regex"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
