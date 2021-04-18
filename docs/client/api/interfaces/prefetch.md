---
id: 'prefetch'
title: 'Interface: Prefetch<GeneratedSchema>'
sidebar_label: 'Prefetch'
custom_edit_url: null
hide_title: true
---

# Interface: Prefetch<GeneratedSchema\>

## Type parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `GeneratedSchema`       | _object_ |
| `GeneratedSchema.query` | _object_ |

## Callable

▸ **Prefetch**<TData\>(`fn`: (`query`: GeneratedSchema[``"query"``]) => TData): TData \| _Promise_<TData\> & { `schedulerPromise`: _Promise_<SchedulerPromiseValue\> }

#### Type parameters:

| Name    |
| :------ |
| `TData` |

#### Parameters:

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `fn` | (`query`: GeneratedSchema[``"query"``]) => TData |

**Returns:** TData \| _Promise_<TData\> & { `schedulerPromise`: _Promise_<SchedulerPromiseValue\> }

Defined in: [packages/gqless/src/Helpers/prefetch.ts:8](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/prefetch.ts#L8)
