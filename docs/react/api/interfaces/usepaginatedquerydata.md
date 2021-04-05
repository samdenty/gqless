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

Current arguments used in the query

Defined in: [react/src/query/usePaginatedQuery.ts:67](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L67)

---

### called

• **called**: _boolean_

Has the function been called

Defined in: [react/src/query/usePaginatedQuery.ts:97](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L97)

---

### data

• **data**: _undefined_ \| TData

Query Data

Defined in: [react/src/query/usePaginatedQuery.ts:63](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L63)

---

### fetchMore

• **fetchMore**: (`newArgs?`: TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs, `fetchPolicy?`: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)) => TData \| _Promise_<TData\>

Main function to be used

If new args are not specified, the previous or initial args are used

In the second parameter you can override the `"fetchPolicy"`, for example you can set it to `"network-only"` to do a refetch.

#### Type declaration:

▸ (`newArgs?`: TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs, `fetchPolicy?`: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)): TData \| _Promise_<TData\>

#### Parameters:

| Name           | Type                                                                                           |
| :------------- | :--------------------------------------------------------------------------------------------- |
| `newArgs?`     | TArgs \| (`data`: [_FetchMoreCallbackArgs_](fetchmorecallbackargs.md)<TData, TArgs\>) => TArgs |
| `fetchPolicy?` | [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)                         |

**Returns:** TData \| _Promise_<TData\>

Defined in: [react/src/query/usePaginatedQuery.ts:79](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L79)

---

### isLoading

• **isLoading**: _boolean_

Network fetch is loading

Defined in: [react/src/query/usePaginatedQuery.ts:71](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L71)
