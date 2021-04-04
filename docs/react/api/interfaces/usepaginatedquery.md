---
id: 'usepaginatedquery'
title: 'Interface: UsePaginatedQuery<GeneratedSchema>'
sidebar_label: 'UsePaginatedQuery'
custom_edit_url: null
hide_title: true
---

# Interface: UsePaginatedQuery<GeneratedSchema\>

## Type parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `GeneratedSchema`              | _object_ |
| `GeneratedSchema.mutation`     | _object_ |
| `GeneratedSchema.query`        | _object_ |
| `GeneratedSchema.subscription` | _object_ |

## Callable

▸ **UsePaginatedQuery**<TData, TArgs\>(`fn`: (`query`: GeneratedSchema[*query*], `args`: TArgs, `helpers`: [_CoreHelpers_](corehelpers.md)) => TData, `options`: [_UsePaginatedQueryOptions_](usepaginatedqueryoptions.md)<TData, TArgs\>): [_UsePaginatedQueryData_](usepaginatedquerydata.md)<TData, TArgs\>

#### Type parameters:

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `TData` | -                                              |
| `TArgs` | _string_ \| _number_ \| _Record_<string, any\> |

#### Parameters:

| Name      | Type                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------ |
| `fn`      | (`query`: GeneratedSchema[*query*], `args`: TArgs, `helpers`: [_CoreHelpers_](corehelpers.md)) => TData |
| `options` | [_UsePaginatedQueryOptions_](usepaginatedqueryoptions.md)<TData, TArgs\>                                |

**Returns:** [_UsePaginatedQueryData_](usepaginatedquerydata.md)<TData, TArgs\>

Defined in: [react/src/query/usePaginatedQuery.ts:173](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L173)
