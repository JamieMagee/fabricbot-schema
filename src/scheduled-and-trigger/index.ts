import { Type } from "@sinclair/typebox";

import { IssueRoutingCapability } from "./issue-routing/index.js";

export const ScheduledAndTrigger = Type.Union([IssueRoutingCapability]);
