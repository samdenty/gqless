---
id: 'preparedquery'
title: 'Interface: PreparedQuery<GeneratedSchema, TFunction>'
sidebar_label: 'PreparedQuery'
custom_edit_url: null
hide_title: true
---

# Interface: PreparedQuery<GeneratedSchema, TFunction\>

## Type parameters

| Name                    | Type                                                        |
| :---------------------- | :---------------------------------------------------------- |
| `GeneratedSchema`       | _object_                                                    |
| `GeneratedSchema.query` | _object_                                                    |
| `TFunction`             | (`query`: GeneratedSchema[*query*], `args`: _any_) => _any_ |

## Properties

### callback

• **callback**: TFunction

Defined in: [react/src/query/preparedQuery.ts:40](https://github.com/gqless/gqless/blob/master/packages/react/src/query/preparedQuery.ts#L40)

## Methods

### preload

▸ **preload**(...`__namedParameters`: _undefined_ _extends_ _Parameters_<TFunction\>[*1*] ? [Parameters<TFunction\>["1"]?] : [_Parameters_<TFunction\>[*1*]]): _Promise_<ReturnType<TFunction\>\>

#### Parameters:

| Name                   | Type                                                                                                                   |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `...__namedParameters` | _undefined_ _extends_ _Parameters_<TFunction\>[*1*] ? [Parameters<TFunction\>["1"]?] : [_Parameters_<TFunction\>[*1*]] |

**Returns:** _Promise_<ReturnType<TFunction\>\>

Defined in: [react/src/query/preparedQuery.ts:21](https://github.com/gqless/gqless/blob/master/packages/react/src/query/preparedQuery.ts#L21)

---

### refetch

▸ **refetch**(...`__namedParameters`: _undefined_ _extends_ _Parameters_<TFunction\>[*1*] ? [Parameters<TFunction\>["1"]?] : [_Parameters_<TFunction\>[*1*]]): _Promise_<ReturnType<TFunction\>\>

#### Parameters:

| Name                   | Type                                                                                                                   |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `...__namedParameters` | _undefined_ _extends_ _Parameters_<TFunction\>[*1*] ? [Parameters<TFunction\>["1"]?] : [_Parameters_<TFunction\>[*1*]] |

**Returns:** _Promise_<ReturnType<TFunction\>\>

Defined in: [react/src/query/preparedQuery.ts:26](https://github.com/gqless/gqless/blob/master/packages/react/src/query/preparedQuery.ts#L26)

---

### usePrepared

▸ **usePrepared**(`opts?`: [_UsePreparedQueryOptions_](usepreparedqueryoptions.md)): _object_

#### Parameters:

| Name    | Type                                                    |
| :------ | :------------------------------------------------------ |
| `opts?` | [_UsePreparedQueryOptions_](usepreparedqueryoptions.md) |

**Returns:** _object_

| Name           | Type                                    |
| :------------- | :-------------------------------------- |
| `called`       | _boolean_                               |
| `data`         | _undefined_ \| _ReturnType_<TFunction\> |
| `error`?       | _gqlessError_                           |
| `isLoading`    | _boolean_                               |
| `isRefetching` | _boolean_                               |

Defined in: [react/src/query/preparedQuery.ts:31](https://github.com/gqless/gqless/blob/master/packages/react/src/query/preparedQuery.ts#L31)
