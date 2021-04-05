---
id: 'uselazyqueryoptions'
title: 'Interface: UseLazyQueryOptions<TData>'
sidebar_label: 'UseLazyQueryOptions'
custom_edit_url: null
hide_title: true
---

# Interface: UseLazyQueryOptions<TData\>

## Type parameters

| Name    |
| :------ |
| `TData` |

## Properties

### fetchPolicy

• `Optional` **fetchPolicy**: [_LazyFetchPolicy_](../modules.md#lazyfetchpolicy)

Defined in: [react/src/query/useLazyQuery.ts:18](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L18)

---

### onCompleted

• `Optional` **onCompleted**: (`data`: TData) => _void_

#### Type declaration:

▸ (`data`: TData): _void_

#### Parameters:

| Name   | Type  |
| :----- | :---- |
| `data` | TData |

**Returns:** _void_

Defined in: [react/src/query/useLazyQuery.ts:16](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L16)

---

### onError

• `Optional` **onError**: [_OnErrorHandler_](../modules.md#onerrorhandler)

Defined in: [react/src/query/useLazyQuery.ts:17](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L17)

---

### retry

• `Optional` **retry**: RetryOptions

Defined in: [react/src/query/useLazyQuery.ts:19](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L19)

---

### suspense

• `Optional` **suspense**: _boolean_

Defined in: [react/src/query/useLazyQuery.ts:20](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L20)
