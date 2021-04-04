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

Defined in: [react/src/query/usePaginatedQuery.ts:48](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L48)

---

### sortBy

• **sortBy**: <TNode\>(`list`: TNode[], `cb`: (`node`: TNode) => _number_ \| _string_, `order`: _asc_ \| _desc_) => TNode[]

#### Type declaration:

▸ <TNode\>(`list`: TNode[], `cb`: (`node`: TNode) => _number_ \| _string_, `order?`: _asc_ \| _desc_): TNode[]

#### Type parameters:

| Name    |
| :------ |
| `TNode` |

#### Parameters:

| Name    | Type                                    | Default value |
| :------ | :-------------------------------------- | :------------ |
| `list`  | TNode[]                                 | -             |
| `cb`    | (`node`: TNode) => _number_ \| _string_ | -             |
| `order` | _asc_ \| _desc_                         | 'asc'         |

**Returns:** TNode[]

Defined in: [react/src/query/usePaginatedQuery.ts:28](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L28)

Defined in: [react/src/query/usePaginatedQuery.ts:53](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L53)

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

Defined in: [react/src/query/usePaginatedQuery.ts:14](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L14)

Defined in: [react/src/query/usePaginatedQuery.ts:52](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L52)
