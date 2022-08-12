import { Type } from "@sinclair/typebox";
import { ReleaseAnnouncementSubCapability } from "./release-announcement.js";

export const ReleaseAnnouncementCapability = Type.Union([
  ReleaseAnnouncementSubCapability,
]);
