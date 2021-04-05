---
id: 'usepaginatedqueryoptions'
title: 'Interface: UsePaginatedQueryOptions<TData, TArgs>'
sidebar_label: 'UsePaginatedQueryOptions'
custom_edit_url: null
hide_title: true
---

# Interface: UsePaginatedQueryOptions<TData, TArgs\>

## Type parameters

| Name    |
| :------ |
| `TData` |
| `TArgs` |

## Properties

### fetchPolicy

• `Optional` **fetchPolicy**: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)

Fetch Policy behavior

If using `cache-and-network` and `merge`, we recomend using the `uniqBy` helper included inside the `merge` parameters.

Defined in: [react/src/query/usePaginatedQuery.ts:46](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L46)

---

### initialArgs

• **initialArgs**: TArgs

Initial arguments used on first request

Defined in: [react/src/query/usePaginatedQuery.ts:34](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L34)

---

### merge

• `Optional` **merge**: (`params`: [_UsePaginatedQueryMergeParams_](usepaginatedquerymergeparams.md)<TData\>) => _undefined_ \| _void_ \| TData

Custom merge function

#### Type declaration:

▸ (`params`: [_UsePaginatedQueryMergeParams_](usepaginatedquerymergeparams.md)<TData\>): _undefined_ \| _void_ \| TData

#### Parameters:

| Name     | Type                                                                      |
| :------- | :------------------------------------------------------------------------ |
| `params` | [_UsePaginatedQueryMergeParams_](usepaginatedquerymergeparams.md)<TData\> |

**Returns:** _undefined_ \| _void_ \| TData

Defined in: [react/src/query/usePaginatedQuery.ts:38](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L38)

---

### skip

• `Optional` **skip**: _boolean_

Skip initial query call

**`default`** false

Defined in: [react/src/query/usePaginatedQuery.ts:52](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L52)

---

### suspense

• `Optional` **suspense**: _boolean_

Activate suspense on first call

Defined in: [react/src/query/usePaginatedQuery.ts:56](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L56)
