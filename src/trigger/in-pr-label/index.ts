import { Type } from "@sinclair/typebox";

import { InPrLabelSubCapability } from "./in-pr-label.js";

export const InPrLabelCapability = Type.Union([InPrLabelSubCapability]);
