import { Type } from "@sinclair/typebox";

import { BranchSubCapability } from "./branch.js";
import { PathSubCapability } from "./path.js";
import { RegexSubCapability } from "./regex.js";

export const PrAutoLabelCapability = Type.Union([
  BranchSubCapability,
  PathSubCapability,
  RegexSubCapability,
]);
