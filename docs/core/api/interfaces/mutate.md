---
id: 'mutate'
title: 'Interface: Mutate<GeneratedSchema>'
sidebar_label: 'Mutate'
custom_edit_url: null
hide_title: true
---

# Interface: Mutate<GeneratedSchema\>

## Type parameters

| Name                       | Type     |
| :------------------------- | :------- |
| `GeneratedSchema`          | _object_ |
| `GeneratedSchema.mutation` | _object_ |
| `GeneratedSchema.query`    | _object_ |

## Callable

▸ **Mutate**<T\>(`fn`: (`mutation`: GeneratedSchema[*mutation*]) => T, `opts?`: { `onComplete?`: (`data`: T, `helpers`: [_MutateHelpers_](mutatehelpers.md)<GeneratedSchema\>) => _void_ ; `onError?`: (`error`: [_gqlessError_](../classes/gqlesserror.md), `helpers`: [_MutateHelpers_](mutatehelpers.md)<GeneratedSchema\>) => _void_ }): _Promise_<T\>

#### Type parameters:

| Name | Default |
| :--- | :------ |
| `T`  | _any_   |

#### Parameters:

| Name               | Type                                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `fn`               | (`mutation`: GeneratedSchema[*mutation*]) => T                                                                                    |
| `opts?`            | _object_                                                                                                                          |
| `opts.onComplete?` | (`data`: T, `helpers`: [_MutateHelpers_](mutatehelpers.md)<GeneratedSchema\>) => _void_                                           |
| `opts.onError?`    | (`error`: [_gqlessError_](../classes/gqlesserror.md), `helpers`: [_MutateHelpers_](mutatehelpers.md)<GeneratedSchema\>) => _void_ |

**Returns:** _Promise_<T\>

Defined in: [packages/gqless/src/Client/client.ts:131](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L131)
