import { Type } from "@sinclair/typebox";

import { ScheduledSearchSubCapability } from "./scheduled-search.js";

export const ScheduledSearchCapability = Type.Union([
  ScheduledSearchSubCapability,
]);
