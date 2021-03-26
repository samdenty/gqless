---
id: 'eventhandler'
title: 'Class: EventHandler'
sidebar_label: 'EventHandler'
custom_edit_url: null
hide_title: true
---

# Class: EventHandler

## Constructors

### constructor

\+ **new EventHandler**(): [_EventHandler_](eventhandler.md)

**Returns:** [_EventHandler_](eventhandler.md)

## Properties

### hasFetchSubscribers

• **hasFetchSubscribers**: _boolean_= false

Defined in: [packages/gqless/src/Events/index.ts:31](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L31)

---

### onCacheChangeListeners

• `Private` **onCacheChangeListeners**: _Set_<OnCacheChangeEventFn\>

Defined in: [packages/gqless/src/Events/index.ts:34](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L34)

---

### onFetchListeners

• `Private` **onFetchListeners**: _Set_<OnFetchEventFn\>

Defined in: [packages/gqless/src/Events/index.ts:32](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L32)

## Methods

### onCacheChangeSubscribe

▸ **onCacheChangeSubscribe**(`fn`: OnCacheChangeEventFn): _function_

#### Parameters:

| Name | Type                 |
| :--- | :------------------- |
| `fn` | OnCacheChangeEventFn |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Events/index.ts:47](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L47)

---

### onFetchSubscribe

▸ **onFetchSubscribe**(`fn`: OnFetchEventFn): _function_

#### Parameters:

| Name | Type           |
| :--- | :------------- |
| `fn` | OnFetchEventFn |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Events/index.ts:57](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L57)

---

### sendCacheChange

▸ **sendCacheChange**(`data`: CacheChangeEventData): _void_

#### Parameters:

| Name   | Type                 |
| :----- | :------------------- |
| `data` | CacheChangeEventData |

**Returns:** _void_

Defined in: [packages/gqless/src/Events/index.ts:36](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L36)

---

### sendFetchPromise

▸ **sendFetchPromise**(`data`: _Promise_<FetchEventData\>, `selections`: [_Selection_](selection.md)[]): _void_

#### Parameters:

| Name         | Type                          |
| :----------- | :---------------------------- |
| `data`       | _Promise_<FetchEventData\>    |
| `selections` | [_Selection_](selection.md)[] |

**Returns:** _void_

Defined in: [packages/gqless/src/Events/index.ts:40](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L40)
