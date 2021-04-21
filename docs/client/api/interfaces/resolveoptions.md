---
id: 'resolveoptions'
title: 'Interface: ResolveOptions<TData>'
sidebar_label: 'ResolveOptions'
custom_edit_url: null
hide_title: true
---

# Interface: ResolveOptions<TData\>

## Type parameters

| Name    |
| :------ |
| `TData` |

## Properties

### noCache

• `Optional` **noCache**: _boolean_

Ignore the client cache

Defined in: [packages/gqless/src/Client/resolvers.ts:30](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L30)

---

### nonSerializableVariables

• `Optional` **nonSerializableVariables**: _boolean_

Activate special handling of non-serializable variables,
for example, files uploading

**`default`** false

Defined in: [packages/gqless/src/Client/resolvers.ts:37](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L37)

---

### onCacheData

• `Optional` **onCacheData**: (`data`: TData) => _boolean_

Middleware function that is called if valid cache is found
for all the data requirements, it should return `true` if the
the resolution and fetch should continue, and `false`
if you wish to stop the resolution, resolving the promise
with the existing cache data.

#### Type declaration:

▸ (`data`: TData): _boolean_

#### Parameters:

| Name   | Type  |
| :----- | :---- |
| `data` | TData |

**Returns:** _boolean_

Defined in: [packages/gqless/src/Client/resolvers.ts:45](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L45)

---

### onEmptyResolve

• `Optional` **onEmptyResolve**: () => _void_

Function called on empty resolution

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:81](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L81)

---

### onNoCacheFound

• `Optional` **onNoCacheFound**: () => _void_

On No Cache found

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:49](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L49)

---

### onSelection

• `Optional` **onSelection**: (`selection`: [_Selection_](../classes/selection.md)) => _void_

Get every selection intercepted in the specified function

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:53](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L53)

---

### onSubscription

• `Optional` **onSubscription**: (`event`: { `data`: TData ; `error?`: _undefined_ ; `type`: `"data"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: TData ; `error`: [_GQlessError_](../classes/gqlesserror.md) ; `type`: `"with-errors"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: _undefined_ ; `error?`: _undefined_ ; `type`: `"start"` \| `"complete"` ; `unsubscribe`: () => _Promise_<void\> }) => _void_

On subscription event listener

#### Type declaration:

▸ (`event`: { `data`: TData ; `error?`: _undefined_ ; `type`: `"data"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: TData ; `error`: [_GQlessError_](../classes/gqlesserror.md) ; `type`: `"with-errors"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: _undefined_ ; `error?`: _undefined_ ; `type`: `"start"` \| `"complete"` ; `unsubscribe`: () => _Promise_<void\> }): _void_

#### Parameters:

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                               |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event` | { `data`: TData ; `error?`: _undefined_ ; `type`: `"data"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: TData ; `error`: [_GQlessError_](../classes/gqlesserror.md) ; `type`: `"with-errors"` ; `unsubscribe`: () => _Promise_<void\> } \| { `data?`: _undefined_ ; `error?`: _undefined_ ; `type`: `"start"` \| `"complete"` ; `unsubscribe`: () => _Promise_<void\> } |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:57](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L57)

---

### refetch

• `Optional` **refetch**: _boolean_

Set to `true` to refetch the data requirements

Defined in: [packages/gqless/src/Client/resolvers.ts:26](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L26)

---

### retry

• `Optional` **retry**: RetryOptions

Retry strategy

Defined in: [packages/gqless/src/Client/resolvers.ts:86](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L86)
