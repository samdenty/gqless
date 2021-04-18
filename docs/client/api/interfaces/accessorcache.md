---
id: 'accessorcache'
title: 'Interface: AccessorCache'
sidebar_label: 'AccessorCache'
custom_edit_url: null
hide_title: true
---

# Interface: AccessorCache

## Properties

### addAccessorChild

• **addAccessorChild**: (`parent`: ProxyAccessor, `child`: `null` \| ProxyAccessor) => _void_

#### Type declaration:

▸ (`parent`: ProxyAccessor, `child`: `null` \| ProxyAccessor): _void_

#### Parameters:

| Name     | Type                    |
| :------- | :---------------------- |
| `parent` | ProxyAccessor           |
| `child`  | `null` \| ProxyAccessor |

**Returns:** _void_

Defined in: [packages/gqless/src/Cache/accessorCache.ts:30](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L30)

---

### addSelectionToAccessorHistory

• **addSelectionToAccessorHistory**: (`accessor`: ProxyAccessor, `selection`: [_Selection_](../classes/selection.md)) => _void_

#### Type declaration:

▸ (`accessor`: ProxyAccessor, `selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `accessor`  | ProxyAccessor                          |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Cache/accessorCache.ts:23](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L23)

---

### getAccessor

• **getAccessor**: (`selection`: [_Selection_](../classes/selection.md), `cacheValue`: _unknown_, `proxyFactory`: () => ProxyAccessor) => ProxyAccessor

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md), `cacheValue`: _unknown_, `proxyFactory`: () => ProxyAccessor): ProxyAccessor

#### Parameters:

| Name           | Type                                   |
| :------------- | :------------------------------------- |
| `selection`    | [_Selection_](../classes/selection.md) |
| `cacheValue`   | _unknown_                              |
| `proxyFactory` | () => ProxyAccessor                    |

**Returns:** ProxyAccessor

Defined in: [packages/gqless/src/Cache/accessorCache.ts:11](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L11)

---

### getArrayAccessor

• **getArrayAccessor**: (`selection`: [_Selection_](../classes/selection.md), `reference`: _unknown_[], `proxyFactory`: () => ProxyAccessor) => ProxyAccessor

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md), `reference`: _unknown_[], `proxyFactory`: () => ProxyAccessor): ProxyAccessor

#### Parameters:

| Name           | Type                                   |
| :------------- | :------------------------------------- |
| `selection`    | [_Selection_](../classes/selection.md) |
| `reference`    | _unknown_[]                            |
| `proxyFactory` | () => ProxyAccessor                    |

**Returns:** ProxyAccessor

Defined in: [packages/gqless/src/Cache/accessorCache.ts:16](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L16)

---

### getProxySelection

• **getProxySelection**: (`proxy`: ProxyAccessor) => _undefined_ \| [_Selection_](../classes/selection.md)

#### Type declaration:

▸ (`proxy`: ProxyAccessor): _undefined_ \| [_Selection_](../classes/selection.md)

#### Parameters:

| Name    | Type          |
| :------ | :------------ |
| `proxy` | ProxyAccessor |

**Returns:** _undefined_ \| [_Selection_](../classes/selection.md)

Defined in: [packages/gqless/src/Cache/accessorCache.ts:22](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L22)

---

### getSelectionSetHistory

• **getSelectionSetHistory**: (`accessor`: ProxyAccessor) => _undefined_ \| _Set_<[_Selection_](../classes/selection.md)\>

#### Type declaration:

▸ (`accessor`: ProxyAccessor): _undefined_ \| _Set_<[_Selection_](../classes/selection.md)\>

#### Parameters:

| Name       | Type          |
| :--------- | :------------ |
| `accessor` | ProxyAccessor |

**Returns:** _undefined_ \| _Set_<[_Selection_](../classes/selection.md)\>

Defined in: [packages/gqless/src/Cache/accessorCache.ts:27](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L27)

---

### isProxy

• **isProxy**: (`obj`: _any_) => obj is ProxyAccessor

#### Type declaration:

▸ (`obj`: _any_): obj is ProxyAccessor

#### Parameters:

| Name  | Type  |
| :---- | :---- |
| `obj` | _any_ |

**Returns:** obj is ProxyAccessor

Defined in: [packages/gqless/src/Cache/accessorCache.ts:21](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Cache/accessorCache.ts#L21)
