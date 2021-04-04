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

Defined in: [react/src/query/usePaginatedQuery.ts:70](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L70)

---

### initialArgs

• **initialArgs**: TArgs

Initial arguments used on first request

Defined in: [react/src/query/usePaginatedQuery.ts:60](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L60)

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

Defined in: [react/src/query/usePaginatedQuery.ts:64](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L64)

---

### skip

• `Optional` **skip**: _boolean_

Skip initial query call

**`default`** false

Defined in: [react/src/query/usePaginatedQuery.ts:76](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L76)

---

### suspense

• `Optional` **suspense**: _boolean_

Activate suspense on first call

Defined in: [react/src/query/usePaginatedQuery.ts:80](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L80)
