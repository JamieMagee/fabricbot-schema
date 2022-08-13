# Fabricbot JSON Schema

Generate `fabricbot.schema.json` by running `npm run build`.

`fabricbot.json`:
```json
{
  "$schema": "https://.../fabricbot.schema.json",
  "version": "1.0",
  "tasks": [
    ...
  ]
}
```

## Repository Layout

```json
src
├── index.ts
└── taskType
    ├── index.ts
    ├── capability1
    │   ├── index.ts
    │   ├── subcapability1.ts 
    │   └── subCapability2.ts
    └── capability2
        ├── index.ts
        ├── subcapability1.ts
        └── subCapability2.ts
```

where a `taskType` `index.ts` contains:

```ts
import { Type } from "@sinclair/typebox";

import { Capability1 } from "./capability-1/index.js";
import { Capability2 } from "./capability-2/index.js";

export const TaskType = Type.Union([
  Capability1,
  Capability2
]);
```

and a `capability` `index.ts` contains:

```ts
import { Type } from "@sinclair/typebox";

import { SubCapability1 } from "./sub-capability-1.js";
import { SubCapability2 } from "./sub-capability-2.js";

export const Capability1 = Type.Union([
    SubCapability1,
    SubCapability2
]);
```

and a `subCapability` contains:

```ts
import { Type } from "@sinclair/typebox";

const Config = Type.Object({
  // ...
});

export const SubCapability1 = Type.Object({
  taskType: Type.Literal("taskType"),
  capabilityId: Type.Literal("Capability1"),
  subCapability: Type.Literal("SubCapability1"),
  version: Type.Literal("1.0"),
  config: Config,
});
```

## TODO

- [ ] `trigger`
  - [x] `AutoMerge`
    - [x] `AutoMerge`
  - [x] `CodeFlowLink`
    - [x] `CodeFlowLink`
  - [ ] `EmailCleanser`
    - [ ] `EmailCleanser`
  - [ ] `InPrLabel`
    - [ ] `InPrLabel`
  - [ ] `IssueResponder`
    - [ ] `IssuesOnlyResponder`
    - [ ] `IssueCommentResponder`
    - [ ] `PullRequestResponder`
    - [ ] `PullRequestCommentResponder`
    - [ ] `PullRequestReviewResponder`
  - [ ] `LabelSync`
    - [ ] `LabelSync`
  - [ ] `PrAutoLabel`
    - [ ] `Branch`
    - [ ] `Path`
    - [ ] `Regex`
  - [ ] `ReleaseAnnouncement`
    - [ ] `ReleaseAnnouncement` 
- [ ] `scheduled`
  - [ ] `ScheduledPR`
    - [ ] `ScheduledPR`
  - [ ] `ScheduledSearch`
    - [ ] `ScheduledSearch`
- [ ] `scheduledAndTrigger`
  - [ ] `IssueRouting`
    - [ ] `@Mention`

- [ ] Title and description for objects and properties
- [ ] Mark deprecated properties as deprecated
- [ ] Mark optional properties as optional
- [ ] 