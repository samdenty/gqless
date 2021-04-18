---
id: 'corehelpers'
title: 'Interface: CoreHelpers'
sidebar_label: 'CoreHelpers'
custom_edit_url: null
hide_title: true
---

# Interface: CoreHelpers

## Properties

### castNotSkeleton

• **castNotSkeleton**: <T\>(`v`: T) => _NotSkeleton_<T\>

#### Type declaration:

▸ <T\>(`v`: T): _NotSkeleton_<T\>

#### Type parameters:

| Name |
| :--- |
| `T`  |

#### Parameters:

| Name | Type |
| :--- | :--- |
| `v`  | T    |

**Returns:** _NotSkeleton_<T\>

Defined in: gqless/dist/Helpers/casters.d.ts:21

Defined in: [react/src/common.ts:520](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L520)

---

### castNotSkeletonDeep

• **castNotSkeletonDeep**: <T\>(`v`: T) => _NotSkeletonDeep_<T\>

#### Type declaration:

▸ <T\>(`v`: T): _NotSkeletonDeep_<T\>

#### Type parameters:

| Name |
| :--- |
| `T`  |

#### Parameters:

| Name | Type |
| :--- | :--- |
| `v`  | T    |

**Returns:** _NotSkeletonDeep_<T\>

Defined in: gqless/dist/Helpers/casters.d.ts:17

Defined in: [react/src/common.ts:521](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L521)

---

### getArrayFields

• **getArrayFields**: <TArrayValue, TArray, TArrayValueKeys\>(`accessorArray`: TArray, ...`keys`: TArrayValueKeys[]) => TArray

#### Type declaration:

▸ <TArrayValue, TArray, TArrayValueKeys\>(`accessorArray`: TArray, ...`keys`: TArrayValueKeys[]): TArray

#### Type parameters:

| Name              | Type                                   |
| :---------------- | :------------------------------------- |
| `TArrayValue`     | _undefined_ \| `null` \| _object_      |
| `TArray`          | _undefined_ \| `null` \| TArrayValue[] |
| `TArrayValueKeys` | _string_ \| _number_ \| _symbol_       |

#### Parameters:

| Name            | Type              |
| :-------------- | :---------------- |
| `accessorArray` | TArray            |
| `...keys`       | TArrayValueKeys[] |

**Returns:** TArray

Defined in: gqless/dist/Helpers/getFields.d.ts:2

Defined in: [react/src/common.ts:518](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L518)

---

### getFields

• **getFields**: <TAccesorData, TAccesorKeys\>(`accessor`: TAccesorData, ...`keys`: TAccesorKeys[]) => TAccesorData

#### Type declaration:

▸ <TAccesorData, TAccesorKeys\>(`accessor`: TAccesorData, ...`keys`: TAccesorKeys[]): TAccesorData

#### Type parameters:

| Name           | Type                              |
| :------------- | :-------------------------------- |
| `TAccesorData` | _undefined_ \| `null` \| _object_ |
| `TAccesorKeys` | _string_ \| _number_ \| _symbol_  |

#### Parameters:

| Name       | Type           |
| :--------- | :------------- |
| `accessor` | TAccesorData   |
| `...keys`  | TAccesorKeys[] |

**Returns:** TAccesorData

Defined in: gqless/dist/Helpers/getFields.d.ts:1

Defined in: [react/src/common.ts:517](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L517)

---

### prepass

• **prepass**: <T\>(`v`: T, ...`keys`: (_string_ \| (_string_ \| PrepassObjKey)[])[]) => T

#### Type declaration:

▸ <T\>(`v`: T, ...`keys`: (_string_ \| (_string_ \| PrepassObjKey)[])[]): T

#### Type parameters:

| Name | Type                              |
| :--- | :-------------------------------- |
| `T`  | _undefined_ \| `null` \| _object_ |

#### Parameters:

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `v`       | T                                             |
| `...keys` | (_string_ \| (_string_ \| PrepassObjKey)[])[] |

**Returns:** T

Defined in: gqless/dist/Helpers/prepass.d.ts:5

Defined in: [react/src/common.ts:516](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L516)

---

### selectFields

• **selectFields**: <A\>(`accessor`: A, `fields?`: `"*"` \| (_string_ \| _number_)[], `recursionDepth?`: _number_) => A

#### Type declaration:

▸ <A\>(`accessor`: A, `fields?`: `"*"` \| (_string_ \| _number_)[], `recursionDepth?`: _number_): A

#### Type parameters:

| Name | Type                              |
| :--- | :-------------------------------- |
| `A`  | _undefined_ \| `null` \| _object_ |

#### Parameters:

| Name              | Type                              |
| :---------------- | :-------------------------------- |
| `accessor`        | A                                 |
| `fields?`         | `"*"` \| (_string_ \| _number_)[] |
| `recursionDepth?` | _number_                          |

**Returns:** A

Defined in: gqless/dist/Helpers/selectFields.d.ts:1

Defined in: [react/src/common.ts:519](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L519)
