import { Static, Type } from "@sinclair/typebox";
import { scheduledSearch } from "./scheduled/scheduled-search/scheduled-search";

const task = Type.Union([scheduledSearch]);

const config = Type.Object({
  version: Type.Union([Type.Literal("1.0")]),
  tasks: Type.Array(task),
});

let a: Static<typeof config> = {
  version: "1.0",
  tasks: [
    {
      taskType: "scheduled",
      capabilityId: "ScheduledSearch",
      subCapabilityId: "ScheduledSearch",
      config: {
        searchTerms: [],
      },
      version: "1.0",
    },
  ],
};
