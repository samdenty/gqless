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

Defined in: [packages/gqless/src/Events/index.ts:32](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L32)

---

### onCacheChangeListeners

• `Private` **onCacheChangeListeners**: _Set_<OnCacheChangeEventFn\>

Defined in: [packages/gqless/src/Events/index.ts:35](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L35)

---

### onFetchListeners

• `Private` **onFetchListeners**: _Set_<OnFetchEventFn\>

Defined in: [packages/gqless/src/Events/index.ts:33](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L33)

## Methods

### onCacheChangeSubscribe

▸ **onCacheChangeSubscribe**(`fn`: OnCacheChangeEventFn): _function_

#### Parameters:

| Name | Type                 |
| :--- | :------------------- |
| `fn` | OnCacheChangeEventFn |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Events/index.ts:48](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L48)

---

### onFetchSubscribe

▸ **onFetchSubscribe**(`fn`: OnFetchEventFn): _function_

#### Parameters:

| Name | Type           |
| :--- | :------------- |
| `fn` | OnFetchEventFn |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Events/index.ts:58](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L58)

---

### sendCacheChange

▸ **sendCacheChange**(`data`: CacheChangeEventData): _void_

#### Parameters:

| Name   | Type                 |
| :----- | :------------------- |
| `data` | CacheChangeEventData |

**Returns:** _void_

Defined in: [packages/gqless/src/Events/index.ts:37](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L37)

---

### sendFetchPromise

▸ **sendFetchPromise**(`data`: _Promise_<FetchEventData\>, `selections`: [_Selection_](selection.md)[]): _void_

#### Parameters:

| Name         | Type                          |
| :----------- | :---------------------------- |
| `data`       | _Promise_<FetchEventData\>    |
| `selections` | [_Selection_](selection.md)[] |

**Returns:** _void_

Defined in: [packages/gqless/src/Events/index.ts:41](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Events/index.ts#L41)
