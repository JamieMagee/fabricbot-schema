import type { Static } from "@sinclair/typebox";
import type { config } from "../src";

// @ts-ignore
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
    {
      taskType: "trigger",
      capabilityId: "IssueResponder",
      subCapabilityId: "IssuesOnlyResponder",
      config: {
        conditions: {
          operator: "and",
          operands: [
            {
              name: "",
              parameters: {},
            },
            {
              operator: "or",
              operands: [
                {
                  name: "",
                  parameters: {},
                },
              ],
            },
          ],
        },
      },
      version: "1.0",
    },
  ],
};
