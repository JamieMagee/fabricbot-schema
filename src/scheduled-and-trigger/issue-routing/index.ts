import { Type } from "@sinclair/typebox";

import { MentionSubCapability } from "./mention.js";

export const IssueRoutingCapability = Type.Union([MentionSubCapability]);
