---
id: 'preparequery'
title: 'Interface: PrepareQuery<GeneratedSchema>'
sidebar_label: 'PrepareQuery'
custom_edit_url: null
hide_title: true
---

# Interface: PrepareQuery<GeneratedSchema\>

## Type parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `GeneratedSchema`       | _object_ |
| `GeneratedSchema.query` | _object_ |

## Callable

▸ **PrepareQuery**<TFunction\>(`fn`: TFunction): [_PreparedQuery_](preparedquery.md)<GeneratedSchema, TFunction\>

#### Type parameters:

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `TFunction` | (`query`: GeneratedSchema[*query*], `args`: _any_) => _any_ |

#### Parameters:

| Name | Type      |
| :--- | :-------- |
| `fn` | TFunction |

**Returns:** [_PreparedQuery_](preparedquery.md)<GeneratedSchema, TFunction\>

Defined in: [query/preparedQuery.ts:47](https://github.com/gqless/new_gqless/blob/master/packages/react/src/query/preparedQuery.ts#L47)
