# @gqless/cli

## 0.0.1-alpha.31

### Patch Changes

- 9fa1421: add globby to dependencies
- Updated dependencies [9fa1421]
  - @gqless/schema@0.0.1-alpha.30

## 0.0.1-alpha.30

### Patch Changes

- fix got

## 0.0.1-alpha.29

### Patch Changes

- Fix cosmiconfig

## 0.0.1-alpha.28

### Patch Changes

- Release packages
- Updated dependencies [undefined]
  - gqless@0.0.1-alpha.27
  - @gqless/schema@0.0.1-alpha.28

## 0.0.1-alpha.27

### Patch Changes

- da2ae6e: re-release
- Updated dependencies [da2ae6e]
  - gqless@0.0.1-alpha.26
  - @gqless/schema@0.0.1-alpha.27

## 0.0.1-alpha.26

### Patch Changes

- 689ebdb: **Cache**

  - Support for Keys
    - They can now be used circularly
  - Support for partial merging

  **Optimizations**

  - Heavily reduced cost of merging to cache
  - Extension instances are now shared
  - Internal lazy intialized & memoized changes

  **Fixes**

  - Scheduler is now smarter, works reliably with concurrent mode
  - Fragments containing selections with arguments now work- Updated dependencies [689ebdb]
  - gqless@0.0.1-alpha.25
  - @gqless/schema@0.0.1-alpha.26
