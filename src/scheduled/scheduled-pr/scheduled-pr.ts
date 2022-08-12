import { Type } from "@sinclair/typebox";

const isOpen = Type.Object({
  name: Type.Literal("isOpen"),
  parameters: Type.Optional(Type.Object({})),
});

const Config = Type.Object({
  taskName: Type.Optional(Type.String()),
  frequency: Type.Array(
    Type.Object({
      weekDay: Type.Number({ minimum: 1, maximum: 7 }),
      hours: Type.Array(Type.Number({ minimum: 0, maximum: 23 }), {
        maxItems: 24,
      }),
      restrictions: Type.Array(
        Type.Object({
          name: Type.Literal("isLastInMonth"),
          parameters: Type.Object({}),
        })
      ),
    })
  ),
  searchTerms: Type.Union([isOpen]),
});

export const ScheduledPrSubCapability = Type.Object({
  taskType: Type.Literal("scheduled"),
  capabilityId: Type.Literal("ScheduledPR"),
  subCapability: Type.Literal("ScheduledPR"),
  version: Type.Literal("1.0"),
  id: Type.Optional(Type.String({ deprecated: true })),
  config: Config,
});
