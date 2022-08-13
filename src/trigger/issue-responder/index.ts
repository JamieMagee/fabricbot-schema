import { Type } from "@sinclair/typebox";

import { IssueCommentResponderSubCapability } from "./issue-comment-responder.js";
import { IssuesOnlyResponderSubCapability } from "./issues-only-responder.js";
import { PullRequestCommentResponderSubCapability } from "./pull-request-comment-responder.js";
import { PullRequestResponderSubCapability } from "./pull-request-responder.js";
import { PullRequestReviewResponderSubCapability } from "./pull-request-review-responder.js";

export const IssueResponderCapability = Type.Union([
  IssueCommentResponderSubCapability,
  IssuesOnlyResponderSubCapability,
  PullRequestCommentResponderSubCapability,
  PullRequestResponderSubCapability,
  PullRequestReviewResponderSubCapability,
]);
