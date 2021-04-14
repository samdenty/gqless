---
'github-example': patch
'mercurius-example': patch
'react-example': patch
'test-utils': patch
'website': patch
'@gqless/cli': patch
'gqless': patch
'@gqless/logger': patch
'@gqless/react': patch
'@gqless/subscriptions': patch
---

- Rename `GqlessConfig` to `GQlessConfig` (so it's consistent with the new logo)
- Rename `gqlessError` to `GQlessError`
- Remove `endpoint` option from the configuration, and instead always defaults to introspection one
  - It's confusing why theres two of them, and the user can change it later by modifying the file anyway
