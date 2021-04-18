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

Defined in: [react/src/mutation/useMutation.ts:30](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L30)

---

### noCache

• `Optional` **noCache**: _boolean_

Defined in: [react/src/mutation/useMutation.ts:12](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L12)

---

### nonSerializableVariables

• `Optional` **nonSerializableVariables**: _boolean_

Activate special handling of non-serializable variables,
for example, files uploading

**`default`** false

Defined in: [react/src/mutation/useMutation.ts:41](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L41)

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

Defined in: [react/src/mutation/useMutation.ts:13](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L13)

---

### onError

• `Optional` **onError**: [_OnErrorHandler_](../modules.md#onerrorhandler)

Defined in: [react/src/mutation/useMutation.ts:14](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L14)

---

### refetchQueries

• `Optional` **refetchQueries**: _unknown_[]

Refetch specific queries after mutation completion.

You can give functions or parts of the schema to be refetched

Defined in: [react/src/mutation/useMutation.ts:26](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L26)

---

### retry

• `Optional` **retry**: RetryOptions

Retry behaviour

**`default`** false

Defined in: [react/src/mutation/useMutation.ts:20](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L20)

---

### suspense

• `Optional` **suspense**: _boolean_

Enable suspense behavior

Defined in: [react/src/mutation/useMutation.ts:34](https://github.com/gqless/gqless/blob/master/packages/react/src/mutation/useMutation.ts#L34)
