---
id: 'scheduler'
title: 'Interface: Scheduler'
sidebar_label: 'Scheduler'
custom_edit_url: null
hide_title: true
---

# Interface: Scheduler

## Properties

### errors

• **errors**: _object_

#### Type declaration:

| Name              | Type                                                                                                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `map`             | _Map_<[_Selection_](../classes/selection.md), [_GQlessError_](../classes/gqlesserror.md)\>                                                         |
| `removeErrors`    | (`selectionsCleaned`: [_Selection_](../classes/selection.md)[]) => _void_                                                                          |
| `retryPromise`    | (`retryPromise`: _Promise_<SchedulerPromiseValue\>, `selections`: _Set_<[_Selection_](../classes/selection.md)\>) => _void_                        |
| `subscribeErrors` | (`fn`: ErrorSubscriptionFn) => () => _void_                                                                                                        |
| `triggerError`    | (`newError`: [_GQlessError_](../classes/gqlesserror.md), `selections`: [_Selection_](../classes/selection.md)[], `isLastTry`: _boolean_) => _void_ |

Defined in: [packages/gqless/src/Scheduler/index.ts:42](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L42)

---

### isFetching

• **isFetching**: _boolean_

Defined in: [packages/gqless/src/Scheduler/index.ts:56](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L56)

---

### pendingSelectionsGroups

• **pendingSelectionsGroups**: _Set_<Set<[_Selection_](../classes/selection.md)\>\>

Defined in: [packages/gqless/src/Scheduler/index.ts:57](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L57)

---

### pendingSelectionsGroupsPromises

• **pendingSelectionsGroupsPromises**: _Map_<Set<[_Selection_](../classes/selection.md)\>, Promise<SchedulerPromiseValue\>\>

Defined in: [packages/gqless/src/Scheduler/index.ts:58](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L58)

---

### resolving

• **resolving**: `null` \| _DeferredPromise_<SchedulerPromiseValue\>

Defined in: [packages/gqless/src/Scheduler/index.ts:38](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L38)

---

### subscribeResolve

• **subscribeResolve**: (`fn`: (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_) => () => _void_

#### Type declaration:

▸ (`fn`: (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_): _function_

#### Parameters:

| Name | Type                                                                                                          |
| :--- | :------------------------------------------------------------------------------------------------------------ |
| `fn` | (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_ |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Scheduler/index.ts:39](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L39)

## Methods

### getResolvingPromise

▸ **getResolvingPromise**(`selections`: [_Selection_](../classes/selection.md) \| _Set_<[_Selection_](../classes/selection.md)\>): _void_ \| ResolvedLazyPromise

#### Parameters:

| Name         | Type                                                                                     |
| :----------- | :--------------------------------------------------------------------------------------- |
| `selections` | [_Selection_](../classes/selection.md) \| _Set_<[_Selection_](../classes/selection.md)\> |

**Returns:** _void_ \| ResolvedLazyPromise

Defined in: [packages/gqless/src/Scheduler/index.ts:62](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L62)
