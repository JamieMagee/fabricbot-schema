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

## TODO

- [ ] `trigger`
  - [x] `AutoMerge`
    - [x] `AutoMerge`
  - [ ] `CodeFlowLink`
    - [ ] `CodeFlowLink`
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