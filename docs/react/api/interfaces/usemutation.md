---
id: 'usemutation'
title: 'Interface: UseMutation<GeneratedSchema>'
sidebar_label: 'UseMutation'
custom_edit_url: null
hide_title: true
---

# Interface: UseMutation<GeneratedSchema\>

## Type parameters

| Name                       | Type     |
| :------------------------- | :------- |
| `GeneratedSchema`          | _object_ |
| `GeneratedSchema.mutation` | _object_ |

## Callable

▸ **UseMutation**<TData, TArgs\>(`mutationFn?`: (`mutation`: GeneratedSchema[*mutation*], `args`: TArgs) => TData, `options?`: [_UseMutationOptions_](usemutationoptions.md)<TData\>): readonly [(...`opts`: _undefined_ _extends_ TArgs ? [object?] : [{ `args`: TArgs ; `fn?`: (`mutation`: GeneratedSchema[*mutation*], `args`: TArgs) => TData }]) => _Promise_<TData\>, [_UseMutationState_](usemutationstate.md)<TData\>]

#### Type parameters:

| Name    | Default     |
| :------ | :---------- |
| `TData` | _unknown_   |
| `TArgs` | _undefined_ |

#### Parameters:

| Name          | Type                                                              |
| :------------ | :---------------------------------------------------------------- |
| `mutationFn?` | (`mutation`: GeneratedSchema[*mutation*], `args`: TArgs) => TData |
| `options?`    | [_UseMutationOptions_](usemutationoptions.md)<TData\>             |

**Returns:** readonly [(...`opts`: _undefined_ _extends_ TArgs ? [object?] : [{ `args`: TArgs ; `fn?`: (`mutation`: GeneratedSchema[*mutation*], `args`: TArgs) => TData }]) => _Promise_<TData\>, [_UseMutationState_](usemutationstate.md)<TData\>]

Defined in: [mutation/useMutation.ts:89](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L89)
