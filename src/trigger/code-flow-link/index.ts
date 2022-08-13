import { Type } from "@sinclair/typebox";

import { CodeFlowLinkSubCapability } from "./code-flow-link.js";

export const CodeFlowLinkCapability = Type.Union([CodeFlowLinkSubCapability]);
