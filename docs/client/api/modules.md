---
id: 'modules'
title: 'gqless'
sidebar_label: 'Table of contents'
custom_edit_url: null
hide_title: true
---

# gqless

## Table of contents

### Enumerations

- [SelectionType](enums/selectiontype.md)

### Classes

- [EventHandler](classes/eventhandler.md)
- [GQlessError](classes/gqlesserror.md)
- [Selection](classes/selection.md)

### Interfaces

- [AccessorCache](interfaces/accessorcache.md)
- [AssignSelections](interfaces/assignselections.md)
- [BuildAndFetchSelections](interfaces/buildandfetchselections.md)
- [BuildSelection](interfaces/buildselection.md)
- [ClientOptions](interfaces/clientoptions.md)
- [GQlessClient](interfaces/gqlessclient.md)
- [HydrateCache](interfaces/hydratecache.md)
- [HydrateCacheOptions](interfaces/hydratecacheoptions.md)
- [InlineResolveOptions](interfaces/inlineresolveoptions.md)
- [InlineResolved](interfaces/inlineresolved.md)
- [InnerClientState](interfaces/innerclientstate.md)
- [InterceptorManager](interfaces/interceptormanager.md)
- [Mutate](interfaces/mutate.md)
- [MutateHelpers](interfaces/mutatehelpers.md)
- [ParseSchemaTypeInfo](interfaces/parseschematypeinfo.md)
- [Prefetch](interfaces/prefetch.md)
- [PrepareRender](interfaces/preparerender.md)
- [PrepassObjKey](interfaces/prepassobjkey.md)
- [Refetch](interfaces/refetch.md)
- [ResolveOptions](interfaces/resolveoptions.md)
- [Resolved](interfaces/resolved.md)
- [Resolvers](interfaces/resolvers.md)
- [RetryConfigState](interfaces/retryconfigstate.md)
- [Scalars](interfaces/scalars.md)
- [Scheduler](interfaces/scheduler.md)
- [Schema](interfaces/schema.md)
- [SelectionManager](interfaces/selectionmanager.md)
- [SetCache](interfaces/setcache.md)
- [SubscribeEvents](interfaces/subscribeevents.md)
- [SubscriptionsClient](interfaces/subscriptionsclient.md)
- [Type](interfaces/type.md)

## Type aliases

### BuildSelectionInput

Ƭ **BuildSelectionInput**: [_query_ \| _mutation_ \| _subscription_, ...BuildSelectionValue[]]

Defined in: [packages/gqless/src/Selection/SelectionBuilder.ts:12](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Selection/SelectionBuilder.ts#L12)

---

### BuildSelectionValue

Ƭ **BuildSelectionValue**: _string_ \| _number_ \| [*string* \| *number*, object?]

Defined in: [packages/gqless/src/Selection/SelectionBuilder.ts:8](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Selection/SelectionBuilder.ts#L8)

---

### CacheType

Ƭ **CacheType**: _object_

#### Type declaration:

| Name            | Type                       |
| :-------------- | :------------------------- |
| `mutation`?     | _Record_<string, unknown\> |
| `query`?        | _Record_<string, unknown\> |
| `subscription`? | _Record_<string, unknown\> |

Defined in: [packages/gqless/src/Cache/dataCache.ts:6](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/dataCache.ts#L6)

---

### DeepPartial

Ƭ **DeepPartial**<T\>: T _extends_ Function ? T : T _extends_ _infer_ U[] ? _\_DeepPartialArray_<U\> : T _extends_ _object_ ? _\_DeepPartialObject_<T\> : T \| _undefined_

#### Type parameters:

| Name |
| :--- |
| `T`  |

Defined in: [packages/gqless/src/Schema/types.ts:64](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Schema/types.ts#L64)

---

### NotSkeleton

Ƭ **NotSkeleton**<T\>: T _extends_ _any_[] ? [_NotSkeleton_](modules.md#notskeleton)<T[*number*]\>[] : T _extends_ (...`args`: _any_[]) => _any_ ? (...`args`: _Parameters_<T\>) => [_NotUndefined_](modules.md#notundefined)<ReturnType<T\>\> : T _extends_ _object_ ? { [P in keyof T]: NotUndefined<T[P]\>} : [_NotUndefined_](modules.md#notundefined)<T\>

Remove all possible 'undefined' types in the first level.

#### Type parameters:

| Name |
| :--- |
| `T`  |

Defined in: [packages/gqless/src/Helpers/casters.ts:19](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/casters.ts#L19)

---

### NotSkeletonDeep

Ƭ **NotSkeletonDeep**<T\>: T _extends_ _any_[] ? [_NotUndefined_](modules.md#notundefined)<[_NotSkeletonDeep_](modules.md#notskeletondeep)<T[*number*]\>\>[] : T _extends_ (...`args`: _any_[]) => _any_ ? (...`args`: _Parameters_<T\>) => [_NotSkeletonDeep_](modules.md#notskeletondeep)<[_NotUndefined_](modules.md#notundefined)<ReturnType<T\>\>\> : T _extends_ _object_ ? { [P in keyof T]: NotUndefined<NotSkeletonDeep<T[P]\>\>} : [_NotUndefined_](modules.md#notundefined)<T\>

Remove all possible 'undefined' values recursively from an object

#### Type parameters:

| Name |
| :--- |
| `T`  |

Defined in: [packages/gqless/src/Helpers/casters.ts:6](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/casters.ts#L6)

---

### NotUndefined

Ƭ **NotUndefined**<T\>: T _extends_ _undefined_ ? _never_ : T

#### Type parameters:

| Name |
| :--- |
| `T`  |

Defined in: [packages/gqless/src/Helpers/casters.ts:1](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/casters.ts#L1)

---

### PossiblePromise

Ƭ **PossiblePromise**<T\>: _Promise_<T\> \| T

#### Type parameters:

| Name |
| :--- |
| `T`  |

Defined in: [packages/gqless/src/Client/client.ts:76](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L76)

---

### QueryFetcher

Ƭ **QueryFetcher**: (`query`: _string_, `variables?`: _Record_<string, any\>) => _Promise_<ExecutionResult\> \| ExecutionResult

#### Type declaration:

▸ (`query`: _string_, `variables?`: _Record_<string, any\>): _Promise_<ExecutionResult\> \| ExecutionResult

#### Parameters:

| Name         | Type                   |
| :----------- | :--------------------- |
| `query`      | _string_               |
| `variables?` | _Record_<string, any\> |

**Returns:** _Promise_<ExecutionResult\> \| ExecutionResult

Defined in: [packages/gqless/src/Schema/types.ts:25](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Schema/types.ts#L25)

---

### RetryOptions

Ƭ **RetryOptions**: { `maxRetries?`: _number_ ; `retryDelay?`: _number_ \| (`attemptIndex`: _number_) => _number_ } \| _boolean_ \| _number_

Defined in: [packages/gqless/src/Error/retry.ts:6](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L6)

---

### ScalarsEnumsHash

Ƭ **ScalarsEnumsHash**: _Record_<string, _true_\>

Defined in: [packages/gqless/src/Schema/types.ts:23](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Schema/types.ts#L23)

---

### SelectionConstructorArgs

Ƭ **SelectionConstructorArgs**: _object_

#### Type declaration:

| Name             | Type                                      |
| :--------------- | :---------------------------------------- |
| `alias`?         | _string_                                  |
| `argTypes`?      | _Record_<string, string\>                 |
| `args`?          | _Record_<string, unknown\>                |
| `id`             | _number_                                  |
| `key`            | _string_ \| _number_                      |
| `prevSelection`? | [_Selection_](classes/selection.md)       |
| `type`?          | [_SelectionType_](enums/selectiontype.md) |
| `unions`?        | _string_[]                                |

Defined in: [packages/gqless/src/Selection/selection.ts:7](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Selection/selection.ts#L7)

## Variables

### SchemaUnionsKey

• `Const` **SchemaUnionsKey**: _typeof_ [_SchemaUnionsKey_](modules.md#schemaunionskey)

Defined in: [packages/gqless/src/Schema/types.ts:8](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Schema/types.ts#L8)

## Functions

### castNotSkeleton

▸ `Const`**castNotSkeleton**<T\>(`v`: T): [_NotSkeleton_](modules.md#notskeleton)<T\>

Runtime no-op that removes all the undefined types in the first level

#### Type parameters:

| Name |
| :--- |
| `T`  |

#### Parameters:

| Name | Type |
| :--- | :--- |
| `v`  | T    |

**Returns:** [_NotSkeleton_](modules.md#notskeleton)<T\>

Defined in: [packages/gqless/src/Helpers/casters.ts:39](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/casters.ts#L39)

---

### castNotSkeletonDeep

▸ `Const`**castNotSkeletonDeep**<T\>(`v`: T): [_NotSkeletonDeep_](modules.md#notskeletondeep)<T\>

Runtime no-op that removes all the undefined types recursively

#### Type parameters:

| Name |
| :--- |
| `T`  |

#### Parameters:

| Name | Type |
| :--- | :--- |
| `v`  | T    |

**Returns:** [_NotSkeletonDeep_](modules.md#notskeletondeep)<T\>

Defined in: [packages/gqless/src/Helpers/casters.ts:34](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/casters.ts#L34)

---

### createClient

▸ **createClient**<GeneratedSchema, ObjectTypesNames, ObjectTypes\>(`__namedParameters`: [_ClientOptions_](interfaces/clientoptions.md)<ObjectTypesNames, ObjectTypes\>): [_GQlessClient_](interfaces/gqlessclient.md)<GeneratedSchema\>

#### Type parameters:

| Name                           | Type                     | Default |
| :----------------------------- | :----------------------- | :------ |
| `GeneratedSchema`              | _object_                 | _never_ |
| `GeneratedSchema.mutation`     | _object_                 | -       |
| `GeneratedSchema.query`        | _object_                 | -       |
| `GeneratedSchema.subscription` | _object_                 | -       |
| `ObjectTypesNames`             | _string_                 | _never_ |
| `ObjectTypes`                  | { [P in string]: object} | _never_ |

#### Parameters:

| Name                | Type                                                                           |
| :------------------ | :----------------------------------------------------------------------------- |
| `__namedParameters` | [_ClientOptions_](interfaces/clientoptions.md)<ObjectTypesNames, ObjectTypes\> |

**Returns:** [_GQlessClient_](interfaces/gqlessclient.md)<GeneratedSchema\>

Defined in: [packages/gqless/src/Client/client.ts:201](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L201)

---

### debounce

▸ **debounce**<T\>(`fn`: (...`args`: T) => _void_, `delay`: _number_): _function_

#### Type parameters:

| Name | Type        |
| :--- | :---------- |
| `T`  | _unknown_[] |

#### Parameters:

| Name    | Type                     |
| :------ | :----------------------- |
| `fn`    | (...`args`: T) => _void_ |
| `delay` | _number_                 |

**Returns:** (...`args`: T) => _void_

Defined in: [packages/gqless/src/Utils/debounce.ts:1](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Utils/debounce.ts#L1)

---

### doRetry

▸ **doRetry**(`options`: [_RetryOptions_](modules.md#retryoptions), `state`: [_RetryConfigState_](interfaces/retryconfigstate.md)): _void_

#### Parameters:

| Name      | Type                                                 |
| :-------- | :--------------------------------------------------- |
| `options` | [_RetryOptions_](modules.md#retryoptions)            |
| `state`   | [_RetryConfigState_](interfaces/retryconfigstate.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Error/retry.ts:54](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L54)

---

### getArrayFields

▸ **getArrayFields**<TArrayValue, TArray, TArrayValueKeys\>(`accessorArray`: TArray, ...`keys`: TArrayValueKeys[]): TArray

#### Type parameters:

| Name              | Type                                   |
| :---------------- | :------------------------------------- |
| `TArrayValue`     | _undefined_ \| _null_ \| _object_      |
| `TArray`          | _undefined_ \| _null_ \| TArrayValue[] |
| `TArrayValueKeys` | _string_ \| _number_ \| _symbol_       |

#### Parameters:

| Name            | Type              |
| :-------------- | :---------------- |
| `accessorArray` | TArray            |
| `...keys`       | TArrayValueKeys[] |

**Returns:** TArray

Defined in: [packages/gqless/src/Helpers/getFields.ts:15](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/getFields.ts#L15)

---

### getFields

▸ **getFields**<TAccesorData, TAccesorKeys\>(`accessor`: TAccesorData, ...`keys`: TAccesorKeys[]): TAccesorData

#### Type parameters:

| Name           | Type                              |
| :------------- | :-------------------------------- |
| `TAccesorData` | _undefined_ \| _null_ \| _object_ |
| `TAccesorKeys` | _string_ \| _number_ \| _symbol_  |

#### Parameters:

| Name       | Type           |
| :--------- | :------------- |
| `accessor` | TAccesorData   |
| `...keys`  | TAccesorKeys[] |

**Returns:** TAccesorData

Defined in: [packages/gqless/src/Helpers/getFields.ts:3](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/getFields.ts#L3)

---

### parseSchemaType

▸ **parseSchemaType**(`type`: _string_): [_ParseSchemaTypeInfo_](interfaces/parseschematypeinfo.md)

#### Parameters:

| Name   | Type     |
| :----- | :------- |
| `type` | _string_ |

**Returns:** [_ParseSchemaTypeInfo_](interfaces/parseschematypeinfo.md)

Defined in: [packages/gqless/src/Schema/types.ts:37](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Schema/types.ts#L37)

---

### prepass

▸ **prepass**<T\>(`v`: T, ...`keys`: (_string_ \| (_string_ \| [_PrepassObjKey_](interfaces/prepassobjkey.md))[])[]): T

#### Type parameters:

| Name | Type                              |
| :--- | :-------------------------------- |
| `T`  | _undefined_ \| _null_ \| _object_ |

#### Parameters:

| Name      | Type                                                                           |
| :-------- | :----------------------------------------------------------------------------- |
| `v`       | T                                                                              |
| `...keys` | (_string_ \| (_string_ \| [_PrepassObjKey_](interfaces/prepassobjkey.md))[])[] |

**Returns:** T

Defined in: [packages/gqless/src/Helpers/prepass.ts:12](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/prepass.ts#L12)

---

### selectFields

▸ **selectFields**<A\>(`accessor`: A, `fields?`: *\*\* \| (*string* \| *number*)[], `recursionDepth?`: *number\*): A

#### Type parameters:

| Name | Type                              |
| :--- | :-------------------------------- |
| `A`  | _undefined_ \| _null_ \| _object_ |

#### Parameters:

| Name             | Type                               | Default value |
| :--------------- | :--------------------------------- | :------------ |
| `accessor`       | A                                  | -             |
| `fields`         | *\*\* \| (*string* \| *number\*)[] | '\*'          |
| `recursionDepth` | _number_                           | 1             |

**Returns:** A

Defined in: [packages/gqless/src/Helpers/selectFields.ts:3](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Helpers/selectFields.ts#L3)
