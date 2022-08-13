import { Type } from "@sinclair/typebox";

import { LabelSyncSubCapability } from "./label-sync.js";

export const LabelSyncCapability = Type.Union([LabelSyncSubCapability]);
