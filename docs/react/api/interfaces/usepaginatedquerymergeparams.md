---
id: 'usepaginatedquerymergeparams'
title: 'Interface: UsePaginatedQueryMergeParams<TData>'
sidebar_label: 'UsePaginatedQueryMergeParams'
custom_edit_url: null
hide_title: true
---

# Interface: UsePaginatedQueryMergeParams<TData\>

## Type parameters

| Name    |
| :------ |
| `TData` |

## Properties

### data

• **data**: _object_

#### Type declaration:

| Name       | Type                 |
| :--------- | :------------------- |
| `existing` | _undefined_ \| TData |
| `incoming` | TData                |

Defined in: [react/src/query/usePaginatedQuery.ts:22](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L22)

---

### sortBy

• **sortBy**: <TNode\>(`list`: TNode[], `cb`: (`node`: TNode) => _number_ \| _string_, `order`: `"asc"` \| `"desc"`) => TNode[]

#### Type declaration:

▸ <TNode\>(`list`: TNode[], `cb`: (`node`: TNode) => _number_ \| _string_, `order?`: `"asc"` \| `"desc"`): TNode[]

#### Type parameters:

| Name    |
| :------ |
| `TNode` |

#### Parameters:

| Name    | Type                                    | Default value |
| :------ | :-------------------------------------- | :------------ |
| `list`  | TNode[]                                 | -             |
| `cb`    | (`node`: TNode) => _number_ \| _string_ | -             |
| `order` | `"asc"` \| `"desc"`                     | 'asc'         |

**Returns:** TNode[]

Defined in: [react/src/common.ts:550](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L550)

Defined in: [react/src/query/usePaginatedQuery.ts:27](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L27)

---

### uniqBy

• **uniqBy**: <TNode\>(`list`: TNode[], `cb?`: (`node`: TNode) => _unknown_) => TNode[]

#### Type declaration:

▸ <TNode\>(`list`: TNode[], `cb?`: (`node`: TNode) => _unknown_): TNode[]

#### Type parameters:

| Name    |
| :------ |
| `TNode` |

#### Parameters:

| Name   | Type                         |
| :----- | :--------------------------- |
| `list` | TNode[]                      |
| `cb?`  | (`node`: TNode) => _unknown_ |

**Returns:** TNode[]

Defined in: [react/src/common.ts:533](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L533)

Defined in: [react/src/query/usePaginatedQuery.ts:26](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L26)
