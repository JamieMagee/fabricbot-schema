import { Type } from "@sinclair/typebox";

import { AutoMergeSubCapability } from "./auto-merge.js";

export const AutoMergeCapability = Type.Union([AutoMergeSubCapability]);
