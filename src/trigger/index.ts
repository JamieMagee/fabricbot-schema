import { Type } from "@sinclair/typebox";

import { AutoMergeCapability } from "./auto-merge/index.js";
import { CodeFlowLinkCapability } from "./code-flow-link/index.js";
import { EmailCleanserCapability } from "./email-cleanser/index.js";
import { IssueResponderCapability } from "./issue-responder/index.js";
import { LabelSyncCapability } from "./label-sync/index.js";
import { PrAutoLabelCapability } from "./pr-auto-label/index.js";
import { ReleaseAnnouncementCapability } from "./release-announcement/index.js";

export const Trigger = Type.Union([
  AutoMergeCapability,
  CodeFlowLinkCapability,
  EmailCleanserCapability,
  IssueResponderCapability,
  LabelSyncCapability,
  PrAutoLabelCapability,
  ReleaseAnnouncementCapability,
]);
