import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  prReply: Type.String({ title: "Pull request reply" }),
  issueReply: Type.String({ title: "Issue reply" }),
  packageRegex: Type.String({
    title: "Package name and version regular expression",
    description:
      "This should be a JavaScript regular expression that uses capture groups to extract the package name and version from the release title.",
    default: "(.+)\\\\s(v.*)",
  }),
  packageNameGroup: Type.Optional(
    Type.Number({
      title: "Package name capture group",
      description:
        'Capture group in the package name and version regular expression that matches the package name, where 1 is the first capture group in the regular expression.\n\nFor example, in the regular expression `(.+)\\s(v.*)`\n\n * Capture group 1 is `(.+)`\n* Capture group 2 is `(v.*)`\n\n When the regular expression is executed on the string "packageName v1.0"\n\n * Capture group 1 will match "packageName"\n * Capture group 2 will match "v1.0"',
      default: 1,
    })
  ),
  packageVersionGroup: Type.Optional(
    Type.Number({
      title: "Package version capture group",
      description:
        'Capture group in the package name and version regular expression that matches the package version, where 1 is the first capture group in the regular expression.\n\nFor example, in the regular expression `(.+)\\s(v.*)`\n\n * Capture group 1 is `(.+)`\n* Capture group 2 is `(v.*)`\n\n When the regular expression is executed on the string "packageName v1.0"\n\n * Capture group 1 will match "packageName"\n * Capture group 2 will match "v1.0"',
      default: 2,
    })
  ),
  referencedPrsRegex: Type.Optional(
    Type.String({
      title: "Pull request regular expression",
      description:
        "This should be a JavaScript regular expression that uses a capture group to extract the number of each pull request from the release body.",
      default: "\\\\(.*by.*pr.*\\\\#([0-9]+).*?\\\\)",
    })
  ),
  referencedPrsGroup: Type.Optional(
    Type.Number({
      title: "Pull request number capture group",
      description:
        'Capture group in the pull request regular expression that matches the pull request number, where 1 is the first capture group in the regular expression.\n\nFor example, in the regular expression `\\(.*by.*pr.*\\#([0-9]+).*?\\)`\n\n * Capture group 1 is `([0-9]+)`\n\n When the regular expression is executed on the string "(commit by testUser, pr #1234)"\n\n * Capture group 1 will match "1234"',
      default: 1,
    })
  ),
  conditionalPrReplies: Type.Optional(
    Type.Array(
      Type.Object({
        reply: Type.String({ title: "Reply" }),
        condition: Type.Object({
          placeholder: Type.String(),
          operator: Type.Union([
            Type.Literal("equals"),
            Type.Literal("notEquals"),
          ]),
          value: Type.String(),
        }),
      })
    )
  ),
  conditionalIssueReplies: Type.Optional(
    Type.Array(
      Type.Object({
        reply: Type.String({ title: "Reply" }),
        condition: Type.Object({
          placeholder: Type.String(),
          operator: Type.Union([
            Type.Literal("equals"),
            Type.Literal("notEquals"),
          ]),
          value: Type.String(),
        }),
      })
    )
  ),
});

export const ReleaseAnnouncementSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("ReleaseAnnouncement"),
  subCapability: Type.Literal("ReleaseAnnouncement"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
