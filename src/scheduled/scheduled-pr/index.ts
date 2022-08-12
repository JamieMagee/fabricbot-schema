import { Type } from "@sinclair/typebox";

import { ScheduledPrSubCapability } from "./scheduled-pr.js";

export const ScheduledPrCapability = Type.Union([ScheduledPrSubCapability]);
