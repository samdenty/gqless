---
id: 'subscriptionsclient'
title: 'Interface: SubscriptionsClient'
sidebar_label: 'SubscriptionsClient'
custom_edit_url: null
hide_title: true
---

# Interface: SubscriptionsClient

## Methods

### close

▸ **close**(): _Promise_<void\>

**Returns:** _Promise_<void\>

Defined in: [packages/gqless/src/Client/client.ts:88](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L88)

---

### setConnectionParams

▸ **setConnectionParams**(`connectionParams`: _Record_<string, unknown\> \| () => _Record_<string, unknown\> \| _Promise_<Record<string, unknown\>\>, `restartClient?`: _boolean_): _void_

#### Parameters:

| Name               | Type                                                                                                   |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| `connectionParams` | _Record_<string, unknown\> \| () => _Record_<string, unknown\> \| _Promise_<Record<string, unknown\>\> |
| `restartClient?`   | _boolean_                                                                                              |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/client.ts:89](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L89)

---

### subscribe

▸ **subscribe**(`opts`: { `cacheKey?`: _string_ ; `events`: [_SubscribeEvents_](subscribeevents.md) \| (`ctx`: { `selections`: [_Selection_](../classes/selection.md)[] }) => [_SubscribeEvents_](subscribeevents.md) ; `query`: _string_ ; `selections`: [_Selection_](../classes/selection.md)[] ; `variables`: _undefined_ \| _Record_<string, unknown\> }): _Promise_<{ `unsubscribe`: () => _Promise_<void\> }\>

#### Parameters:

| Name              | Type                                                                                                                                                      |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `opts`            | _object_                                                                                                                                                  |
| `opts.cacheKey?`  | _string_                                                                                                                                                  |
| `opts.events`     | [_SubscribeEvents_](subscribeevents.md) \| (`ctx`: { `selections`: [_Selection_](../classes/selection.md)[] }) => [_SubscribeEvents_](subscribeevents.md) |
| `opts.query`      | _string_                                                                                                                                                  |
| `opts.selections` | [_Selection_](../classes/selection.md)[]                                                                                                                  |
| `opts.variables`  | _undefined_ \| _Record_<string, unknown\>                                                                                                                 |

**Returns:** _Promise_<{ `unsubscribe`: () => _Promise_<void\> }\>

Defined in: [packages/gqless/src/Client/client.ts:76](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L76)

---

### unsubscribe

▸ **unsubscribe**(`selections`: [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\>): _Promise_<void\>

#### Parameters:

| Name         | Type                                                                                       |
| :----------- | :----------------------------------------------------------------------------------------- |
| `selections` | [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\> |

**Returns:** _Promise_<void\>

Defined in: [packages/gqless/src/Client/client.ts:87](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L87)
