---
id: 'buildandfetchselections'
title: 'Interface: BuildAndFetchSelections'
sidebar_label: 'BuildAndFetchSelections'
custom_edit_url: null
hide_title: true
---

# Interface: BuildAndFetchSelections

## Callable

▸ **BuildAndFetchSelections**<TData\>(`selections`: _undefined_ \| [_Selection_](../classes/selection.md)[], `type`: `"query"` \| `"mutation"`, `cache?`: CacheInstance, `options?`: FetchResolveOptions, `lastTryParam?`: _boolean_): _Promise_<undefined \| `null` \| TData\>

#### Type parameters:

| Name    | Default   |
| :------ | :-------- |
| `TData` | _unknown_ |

#### Parameters:

| Name            | Type                                                    |
| :-------------- | :------------------------------------------------------ |
| `selections`    | _undefined_ \| [_Selection_](../classes/selection.md)[] |
| `type`          | `"query"` \| `"mutation"`                               |
| `cache?`        | CacheInstance                                           |
| `options?`      | FetchResolveOptions                                     |
| `lastTryParam?` | _boolean_                                               |

**Returns:** _Promise_<undefined \| `null` \| TData\>

Defined in: [packages/gqless/src/Client/resolvers.ts:171](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/resolvers.ts#L171)
