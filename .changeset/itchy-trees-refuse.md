---
'react-github': patch
'gqless': patch
'@gqless/cli': patch
'@gqless/logger': patch
'@gqless/react': patch
'@gqless/schema': patch
'@gqless/utils': patch
---

**Cache**

- Support for Keys
  - They can now be used circularly
- Support for partial merging

**Optimizations**

- Heavily reduced cost of merging to cache
- Extension instances are now shared
- Internal lazy intialized & memoized changes

**Fixes**

- Scheduler is now smarter, works reliably with concurrent mode
- Fragments containing selections with arguments now work
