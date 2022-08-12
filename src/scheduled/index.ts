import { Type } from "@sinclair/typebox";

import { ScheduledSearchCapability } from "./scheduled-search/index.js";
import { ScheduledPrCapability } from "./scheduled-pr/index.js";

export const Scheduled = Type.Union([
  ScheduledSearchCapability,
  ScheduledPrCapability,
]);
