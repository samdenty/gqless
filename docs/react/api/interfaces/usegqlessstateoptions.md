---
id: 'usegqlessstateoptions'
title: 'Interface: UseGqlessStateOptions<T>'
sidebar_label: 'UseGqlessStateOptions'
custom_edit_url: null
hide_title: true
---

# Interface: UseGqlessStateOptions<T\>

## Type parameters

| Name |
| :--- |
| `T`  |

## Properties

### filterSelections

• `Optional` **filterSelections**: _BuildSelections_<T\>

Defined in: [meta/useMetaState.ts:27](https://github.com/gqless/gqless/blob/master/packages/react/src/meta/useMetaState.ts#L27)

---

### onDoneFetching

• `Optional` **onDoneFetching**: () => _void_

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [meta/useMetaState.ts:17](https://github.com/gqless/gqless/blob/master/packages/react/src/meta/useMetaState.ts#L17)

---

### onError

• `Optional` **onError**: (`data`: { `isLastTry`: _boolean_ ; `newError`: _gqlessError_ ; `selections`: _Selection_[] }) => _void_

#### Type declaration:

▸ (`data`: { `isLastTry`: _boolean_ ; `newError`: _gqlessError_ ; `selections`: _Selection_[] }): _void_

#### Parameters:

| Name              | Type          |
| :---------------- | :------------ |
| `data`            | _object_      |
| `data.isLastTry`  | _boolean_     |
| `data.newError`   | _gqlessError_ |
| `data.selections` | _Selection_[] |

**Returns:** _void_

Defined in: [meta/useMetaState.ts:18](https://github.com/gqless/gqless/blob/master/packages/react/src/meta/useMetaState.ts#L18)

---

### onRetry

• `Optional` **onRetry**: (`data`: { `retryPromise`: _Promise_<SchedulerPromiseValue\> ; `selections`: _Set_<Selection\> }) => _void_

#### Type declaration:

▸ (`data`: { `retryPromise`: _Promise_<SchedulerPromiseValue\> ; `selections`: _Set_<Selection\> }): _void_

#### Parameters:

| Name                | Type                              |
| :------------------ | :-------------------------------- |
| `data`              | _object_                          |
| `data.retryPromise` | _Promise_<SchedulerPromiseValue\> |
| `data.selections`   | _Set_<Selection\>                 |

**Returns:** _void_

Defined in: [meta/useMetaState.ts:23](https://github.com/gqless/gqless/blob/master/packages/react/src/meta/useMetaState.ts#L23)

---

### onStartFetching

• `Optional` **onStartFetching**: () => _void_

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [meta/useMetaState.ts:16](https://github.com/gqless/gqless/blob/master/packages/react/src/meta/useMetaState.ts#L16)
