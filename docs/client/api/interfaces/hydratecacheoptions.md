---
id: 'hydratecacheoptions'
title: 'Interface: HydrateCacheOptions'
sidebar_label: 'HydrateCacheOptions'
custom_edit_url: null
hide_title: true
---

# Interface: HydrateCacheOptions

## Properties

### cacheSnapshot

• **cacheSnapshot**: _string_

Cache snapshot, returned from `prepareRender`

Defined in: [packages/gqless/src/Helpers/ssr.ts:10](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Helpers/ssr.ts#L10)

---

### shouldRefetch

• `Optional` **shouldRefetch**: _number_ \| _boolean_

If it should refetch everything after

Specify a number greater than `0` to delay the refetch that amount in ms

**`default`**
false

Defined in: [packages/gqless/src/Helpers/ssr.ts:19](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Helpers/ssr.ts#L19)
