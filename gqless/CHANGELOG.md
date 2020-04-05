# gqless

## 0.0.1-alpha.29

### Patch Changes

- ddf501c: Fix bug adding \_\_typename field selection for the fields of enum type

## 0.0.1-alpha.28

### Patch Changes

- 99750e2: New "resolved()" helper

## 0.0.1-alpha.27

### Patch Changes

- Release packages

## 0.0.1-alpha.26

### Patch Changes

- da2ae6e: re-release
- Updated dependencies [da2ae6e]
  - @gqless/utils@0.0.1-alpha.26

## 0.0.1-alpha.25

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
  - @gqless/utils@0.0.1-alpha.25
