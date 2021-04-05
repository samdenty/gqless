---
id: 'uselazyquery'
title: 'Interface: UseLazyQuery<GeneratedSchema>'
sidebar_label: 'UseLazyQuery'
custom_edit_url: null
hide_title: true
---

# Interface: UseLazyQuery<GeneratedSchema\>

## Type parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `GeneratedSchema`       | _object_ |
| `GeneratedSchema.query` | _object_ |

## Callable

▸ **UseLazyQuery**<TData, TArgs\>(`queryFn`: (`query`: GeneratedSchema[*query*], `args`: TArgs) => TData, `options?`: [_UseLazyQueryOptions_](uselazyqueryoptions.md)<TData\>): readonly [(...`opts`: _undefined_ _extends_ TArgs ? [object?] : [{ `args`: TArgs ; `fetchPolicy?`: [_LazyFetchPolicy_](../modules.md#lazyfetchpolicy) ; `fn?`: (`query`: GeneratedSchema[*query*], `args`: TArgs) => TData }]) => _Promise_<TData\>, [_UseLazyQueryState_](uselazyquerystate.md)<TData\>]

#### Type parameters:

| Name    | Default     |
| :------ | :---------- |
| `TData` | _unknown_   |
| `TArgs` | _undefined_ |

#### Parameters:

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `queryFn`  | (`query`: GeneratedSchema[*query*], `args`: TArgs) => TData |
| `options?` | [_UseLazyQueryOptions_](uselazyqueryoptions.md)<TData\>     |

**Returns:** readonly [(...`opts`: _undefined_ _extends_ TArgs ? [object?] : [{ `args`: TArgs ; `fetchPolicy?`: [_LazyFetchPolicy_](../modules.md#lazyfetchpolicy) ; `fn?`: (`query`: GeneratedSchema[*query*], `args`: TArgs) => TData }]) => _Promise_<TData\>, [_UseLazyQueryState_](uselazyquerystate.md)<TData\>]

Defined in: [react/src/query/useLazyQuery.ts:86](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L86)
