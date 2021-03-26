---
id: 'gqlessclient'
title: 'Interface: GqlessClient<GeneratedSchema>'
sidebar_label: 'GqlessClient'
custom_edit_url: null
hide_title: true
---

# Interface: GqlessClient<GeneratedSchema\>

## Type parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `GeneratedSchema`              | _object_ |
| `GeneratedSchema.mutation`     | _object_ |
| `GeneratedSchema.query`        | _object_ |
| `GeneratedSchema.subscription` | _object_ |

## Hierarchy

- _PersistenceHelpers_

  ↳ **GqlessClient**

## Properties

### accessorCache

• **accessorCache**: [_AccessorCache_](accessorcache.md)

Defined in: [packages/gqless/src/Client/client.ts:159](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L159)

---

### assignSelections

• **assignSelections**: [_AssignSelections_](assignselections.md)

Defined in: [packages/gqless/src/Client/client.ts:165](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L165)

---

### buildAndFetchSelections

• **buildAndFetchSelections**: [_BuildAndFetchSelections_](buildandfetchselections.md)

Defined in: [packages/gqless/src/Client/client.ts:160](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L160)

---

### buildSelection

• **buildSelection**: [_BuildSelection_](buildselection.md)

Defined in: [packages/gqless/src/Client/client.ts:167](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L167)

---

### cache

• **cache**: [_CacheType_](../modules.md#cachetype)

Defined in: [packages/gqless/src/Client/client.ts:155](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L155)

---

### eventHandler

• **eventHandler**: [_EventHandler_](../classes/eventhandler.md)

Defined in: [packages/gqless/src/Client/client.ts:161](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L161)

---

### hydrateCache

• **hydrateCache**: [_HydrateCache_](hydratecache.md)

Defined in: [packages/gqless/src/Client/client.ts:163](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L163)

---

### interceptorManager

• **interceptorManager**: [_InterceptorManager_](interceptormanager.md)

Defined in: [packages/gqless/src/Client/client.ts:156](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L156)

---

### mutate

• **mutate**: [_Mutate_](mutate.md)<GeneratedSchema\>

Defined in: [packages/gqless/src/Client/client.ts:166](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L166)

---

### mutation

• **mutation**: GeneratedSchema[*mutation*]

Defined in: [packages/gqless/src/Client/client.ts:152](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L152)

---

### prefetch

• **prefetch**: [_Prefetch_](prefetch.md)<GeneratedSchema\>

Defined in: [packages/gqless/src/Client/client.ts:169](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L169)

---

### prepareRender

• **prepareRender**: [_PrepareRender_](preparerender.md)

Defined in: [packages/gqless/src/Client/client.ts:164](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L164)

---

### query

• **query**: GeneratedSchema[*query*]

Defined in: [packages/gqless/src/Client/client.ts:151](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L151)

---

### refetch

• **refetch**: [_Refetch_](refetch.md)

Defined in: [packages/gqless/src/Client/client.ts:158](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L158)

---

### resolved

• **resolved**: [_Resolved_](resolved.md)

Defined in: [packages/gqless/src/Client/client.ts:154](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L154)

---

### scheduler

• **scheduler**: [_Scheduler_](scheduler.md)

Defined in: [packages/gqless/src/Client/client.ts:157](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L157)

---

### setCache

• **setCache**: [_SetCache_](setcache.md)

Defined in: [packages/gqless/src/Client/client.ts:162](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L162)

---

### subscription

• **subscription**: GeneratedSchema[*subscription*]

Defined in: [packages/gqless/src/Client/client.ts:153](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L153)

---

### subscriptionsClient

• **subscriptionsClient**: _undefined_ \| [_SubscriptionsClient_](subscriptionsclient.md)

Defined in: [packages/gqless/src/Client/client.ts:168](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L168)

## Methods

### backupPersistence

▸ **backupPersistence**(`version?`: _string_): _string_

#### Parameters:

| Name       | Type     |
| :--------- | :------- |
| `version?` | _string_ |

**Returns:** _string_

Inherited from: void

Defined in: [packages/gqless/src/Cache/persistence.ts:9](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/persistence.ts#L9)

---

### restorePersistence

▸ **restorePersistence**(`backup`: () => _Promise_<unknown\>, `expectedVersion?`: _string_): _Promise_<boolean\>

#### Parameters:

| Name               | Type                      |
| :----------------- | :------------------------ |
| `backup`           | () => _Promise_<unknown\> |
| `expectedVersion?` | _string_                  |

**Returns:** _Promise_<boolean\>

Inherited from: void

Defined in: [packages/gqless/src/Cache/persistence.ts:11](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/persistence.ts#L11)

▸ **restorePersistence**(`backup`: _undefined_ \| _null_ \| _string_, `expectedVersion?`: _string_): _boolean_

#### Parameters:

| Name               | Type                              |
| :----------------- | :-------------------------------- |
| `backup`           | _undefined_ \| _null_ \| _string_ |
| `expectedVersion?` | _string_                          |

**Returns:** _boolean_

Inherited from: void

Defined in: [packages/gqless/src/Cache/persistence.ts:15](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/persistence.ts#L15)
