---
id: 'subscribeevents'
title: 'Interface: SubscribeEvents'
sidebar_label: 'SubscribeEvents'
custom_edit_url: null
hide_title: true
---

# Interface: SubscribeEvents

## Properties

### onComplete

• `Optional` **onComplete**: () => _void_

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [packages/gqless/src/Client/client.ts:68](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L68)

Defined in: [packages/gqless/src/Client/client.ts:68](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L68)

---

### onData

• **onData**: (`data`: _Record_<string, unknown\>) => _void_

#### Type declaration:

▸ (`data`: _Record_<string, unknown\>): _void_

#### Parameters:

| Name   | Type                       |
| :----- | :------------------------- |
| `data` | _Record_<string, unknown\> |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/client.ts:62](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L62)

Defined in: [packages/gqless/src/Client/client.ts:62](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L62)

---

### onError

• **onError**: (`payload`: { `data`: _null_ \| _Record_<string, unknown\> ; `error`: [_gqlessError_](../classes/gqlesserror.md) }) => _void_

#### Type declaration:

▸ (`payload`: { `data`: _null_ \| _Record_<string, unknown\> ; `error`: [_gqlessError_](../classes/gqlesserror.md) }): _void_

#### Parameters:

| Name            | Type                                       |
| :-------------- | :----------------------------------------- |
| `payload`       | _object_                                   |
| `payload.data`  | _null_ \| _Record_<string, unknown\>       |
| `payload.error` | [_gqlessError_](../classes/gqlesserror.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/client.ts:63](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L63)

Defined in: [packages/gqless/src/Client/client.ts:63](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L63)

---

### onStart

• `Optional` **onStart**: () => _void_

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [packages/gqless/src/Client/client.ts:67](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L67)

Defined in: [packages/gqless/src/Client/client.ts:67](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L67)
