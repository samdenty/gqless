---
id: 'usetransactionquery'
title: 'Interface: UseTransactionQuery<GeneratedSchema>'
sidebar_label: 'UseTransactionQuery'
custom_edit_url: null
hide_title: true
---

# Interface: UseTransactionQuery<GeneratedSchema\>

## Type parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `GeneratedSchema`       | _object_ |
| `GeneratedSchema.query` | _object_ |

## Callable

▸ **UseTransactionQuery**<TData, TVariables\>(`fn`: (`query`: GeneratedSchema[``"query"``], `variables`: TVariables) => TData, ...`__namedParameters`: _undefined_ _extends_ TVariables ? [UseTransactionQueryOptions<TData, TVariables\>?] : [[_UseTransactionQueryOptions_](../modules.md#usetransactionqueryoptions)<TData, TVariables\>]): [_UseTransactionQueryState_](usetransactionquerystate.md)<TData\>

#### Type parameters:

| Name         | Default     |
| :----------- | :---------- |
| `TData`      | -           |
| `TVariables` | _undefined_ |

#### Parameters:

| Name                   | Type                                                                                                                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fn`                   | (`query`: GeneratedSchema[``"query"``], `variables`: TVariables) => TData                                                                                                             |
| `...__namedParameters` | _undefined_ _extends_ TVariables ? [UseTransactionQueryOptions<TData, TVariables\>?] : [[_UseTransactionQueryOptions_](../modules.md#usetransactionqueryoptions)<TData, TVariables\>] |

**Returns:** [_UseTransactionQueryState_](usetransactionquerystate.md)<TData\>

Defined in: [react/src/query/useTransactionQuery.ts:124](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useTransactionQuery.ts#L124)
