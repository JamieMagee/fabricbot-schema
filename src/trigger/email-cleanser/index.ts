import { Type } from "@sinclair/typebox";

import { EmailCleanserSubCapability } from "./email-cleanser.js";

export const EmailCleanserCapability = Type.Union([EmailCleanserSubCapability]);
