---
id: 'retryconfigstate'
title: 'Interface: RetryConfigState'
sidebar_label: 'RetryConfigState'
custom_edit_url: null
hide_title: true
---

# Interface: RetryConfigState

## Properties

### attemptIndex

• `Optional` `Private` **attemptIndex**: _number_

Error incremental attempt index

You shouldn't set it manually

**`default`** 0

Defined in: [packages/gqless/src/Error/retry.ts:43](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L43)

---

### onLastTry

• `Optional` **onLastTry**: (`attemptIndex`: _number_) => _Promise_<void\>

Function to be executed on the last try

#### Type declaration:

▸ (`attemptIndex`: _number_): _Promise_<void\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `attemptIndex` | _number_ |

**Returns:** _Promise_<void\>

Defined in: [packages/gqless/src/Error/retry.ts:51](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L51)

Defined in: [packages/gqless/src/Error/retry.ts:51](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L51)

---

### onRetry

• **onRetry**: (`attemptIndex`: _number_) => _Promise_<void\>

Function to be executed on approved retry attempt

#### Type declaration:

▸ (`attemptIndex`: _number_): _Promise_<void\>

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `attemptIndex` | _number_ |

**Returns:** _Promise_<void\>

Defined in: [packages/gqless/src/Error/retry.ts:47](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L47)

Defined in: [packages/gqless/src/Error/retry.ts:47](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Error/retry.ts#L47)
