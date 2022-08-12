import { Type } from "@sinclair/typebox";

const isLabeled = Type.Object({
  name: Type.Literal("isLabeled"),
  parameters: Type.Optional(Type.Object({})),
});

const activitySenderHasAssociation = Type.Object({
  name: Type.Literal("activitySenderHasAssociation"),
  parameters: Type.Object({
    association: Type.Union([
      Type.Literal("OWNER"),
      Type.Literal("MEMBER"),
      Type.Literal("CONTRIBUTOR"),
      Type.Literal("COLLABORATOR"),
      Type.Literal("FIRST_TIME_CONTRIBUTOR"),
      Type.Literal("FIRST_TIMER"),
      Type.Literal("NONE"),
    ]),
  }),
});

const activitySenderHasPermissions = Type.Object({
  name: Type.Literal("activitySenderHasPermissions"),
  parameters: Type.Object({
    permissions: Type.Union([
      Type.Literal("admin"),
      Type.Literal("write"),
      Type.Literal("read"),
      Type.Literal("none"),
    ]),
  }),
});

const isActivitySender = Type.Object({
  name: Type.Literal("isActivitySender"),
  parameters: Type.Object({
    user: Type.Union([
      Type.Object({ type: Type.Literal("author") }),
      Type.String(),
    ]),
  }),
});

const isLocked = Type.Object({
  name: Type.Literal("isLocked"),
  parameters: Type.Optional(Type.Object({})),
});

const isOpen = Type.Object({
  name: Type.Literal("isOpen"),
  parameters: Type.Optional(Type.Object({})),
});

const removedFromMilestone = Type.Object({
  name: Type.Literal("removedFromMilestone"),
  parameters: Type.Object({
    milestoneName: Type.Optional(Type.String()),
  }),
});

const addedToMilestoneCondition = Type.Object({
  name: Type.Literal("addedToMilestone"),
  parameters: Type.Object({
    milestoneName: Type.Optional(Type.String()),
  }),
});

const addedToProjectColumnCondition = Type.Object({
  name: Type.Literal("addedToProjectColumn"),
  parameters: Type.Object({
    projectName: Type.String(),
    columnName: Type.Optional(Type.String()),
  }),
});

const labelRemovedCondition = Type.Object({
  name: Type.Literal("labelRemoved"),
  parameters: Type.Object({
    label: Type.String(),
  }),
});

const labelAddedCondition = Type.Object({
  name: Type.Literal("labelAdded"),
  parameters: Type.Object({
    label: Type.String(),
  }),
});

const isActionCondition = Type.Object({
  name: Type.Literal("isAction"),
  parameters: Type.Object({
    action: Type.Union([
      Type.Literal("opened", { description: "Opened" }),
      Type.Literal("closed"),
      Type.Literal("reopened"),
      Type.Literal("edited"),
      Type.Literal("assigned"),
      Type.Literal("unassigned"),
      Type.Literal("labeled"),
      Type.Literal("unlabeled"),
      Type.Literal("created", { description: "Project card created" }),
      Type.Literal("moved", { description: "Project card moved" }),
      Type.Literal("deleted", { description: "Project card deleted" }),
    ]),
  }),
});

const conditions = Type.Union([
  isActionCondition,
  labelAddedCondition,
  labelRemovedCondition,
  addedToProjectColumnCondition,
  addedToMilestoneCondition,
  removedFromMilestone,
  isOpen,
  isLocked,
  isActivitySender,
  activitySenderHasPermissions,
  activitySenderHasAssociation,
  isLabeled,
]);

const Config = Type.Object({
  conditions: Type.Recursive(
    (condition) =>
      Type.Object({
        operator: Type.Union([
          Type.Literal("and"),
          Type.Literal("or"),
          Type.Literal("not"),
        ]),
        operands: Type.Array(Type.Union([conditions, condition])),
      }),
    { $id: "condition" }
  ),
});

export const IssuesOnlyResponderSubCapability = Type.Object({
  taskType: Type.Literal("trigger"),
  capabilityId: Type.Literal("IssueResponder"),
  subCapability: Type.Literal("IssuesOnlyResponder"),
  version: Type.Union([Type.Literal("1.0")]),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
