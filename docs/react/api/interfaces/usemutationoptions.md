---
id: 'usemutationoptions'
title: 'Interface: UseMutationOptions<TData>'
sidebar_label: 'UseMutationOptions'
custom_edit_url: null
hide_title: true
---

# Interface: UseMutationOptions<TData\>

## Type parameters

| Name    |
| :------ |
| `TData` |

## Properties

### awaitRefetchQueries

• `Optional` **awaitRefetchQueries**: _boolean_

Await refetch resolutions before calling the mutation actually complete

Defined in: [mutation/useMutation.ts:25](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L25)

---

### noCache

• `Optional` **noCache**: _boolean_

Defined in: [mutation/useMutation.ts:12](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L12)

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

Defined in: [mutation/useMutation.ts:13](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L13)

Defined in: [mutation/useMutation.ts:13](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L13)

---

### onError

• `Optional` **onError**: [_OnErrorHandler_](../modules.md#onerrorhandler)

Defined in: [mutation/useMutation.ts:14](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L14)

---

### refetchQueries

• `Optional` **refetchQueries**: _unknown_[]

Refetch specific queries after mutation completion.

You can give functions or parts of the schema to be refetched

Defined in: [mutation/useMutation.ts:21](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L21)

---

### retry

• `Optional` **retry**: RetryOptions

Defined in: [mutation/useMutation.ts:15](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L15)

---

### suspense

• `Optional` **suspense**: _boolean_

Defined in: [mutation/useMutation.ts:26](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L26)
