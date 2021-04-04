---
id: 'usepaginatedquerydata'
title: 'Interface: UsePaginatedQueryData<TData, TArgs>'
sidebar_label: 'UsePaginatedQueryData'
custom_edit_url: null
hide_title: true
---

# Interface: UsePaginatedQueryData<TData, TArgs\>

## Type parameters

| Name    |
| :------ |
| `TData` |
| `TArgs` |

## Properties

### args

• **args**: TArgs

Defined in: [react/src/query/usePaginatedQuery.ts:155](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L155)

---

### called

• **called**: _boolean_

Defined in: [react/src/query/usePaginatedQuery.ts:164](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L164)

---

### data

• **data**: _undefined_ \| TData

Defined in: [react/src/query/usePaginatedQuery.ts:154](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L154)

---

### fetchMore

• **fetchMore**: (`newArgs?`: TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs, `fetchPolicy?`: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)) => TData \| _Promise_<TData\>

#### Type declaration:

▸ (`newArgs?`: TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs, `fetchPolicy?`: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)): TData \| _Promise_<TData\>

#### Parameters:

| Name           | Type                                                                                           |
| :------------- | :--------------------------------------------------------------------------------------------- |
| `newArgs?`     | TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs |
| `fetchPolicy?` | [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)                         |

**Returns:** TData \| _Promise_<TData\>

Defined in: [react/src/query/usePaginatedQuery.ts:157](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L157)

---

### isLoading

• **isLoading**: _boolean_

Defined in: [react/src/query/usePaginatedQuery.ts:156](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L156)
