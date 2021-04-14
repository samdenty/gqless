---
id: 'interceptormanager'
title: 'Interface: InterceptorManager'
sidebar_label: 'InterceptorManager'
custom_edit_url: null
hide_title: true
---

# Interface: InterceptorManager

## Properties

### addSelection

• **addSelection**: (`selection`: [_Selection_](../classes/selection.md)) => _void_

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:48](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L48)

Defined in: [packages/gqless/src/Interceptor/index.ts:48](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L48)

---

### addSelectionCache

• **addSelectionCache**: (`selection`: [_Selection_](../classes/selection.md)) => _void_

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:49](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L49)

Defined in: [packages/gqless/src/Interceptor/index.ts:49](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L49)

---

### addSelectionCacheRefetch

• **addSelectionCacheRefetch**: (`selection`: [_Selection_](../classes/selection.md)) => _void_

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:50](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L50)

Defined in: [packages/gqless/src/Interceptor/index.ts:50](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L50)

---

### addSelections

• **addSelections**: (`selection`: [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\>) => _void_

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\>): _void_

#### Parameters:

| Name        | Type                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\> |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:51](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L51)

Defined in: [packages/gqless/src/Interceptor/index.ts:51](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L51)

---

### createInterceptor

• **createInterceptor**: () => _Interceptor_

#### Type declaration:

▸ (): _Interceptor_

**Returns:** _Interceptor_

Defined in: [packages/gqless/src/Interceptor/index.ts:46](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L46)

Defined in: [packages/gqless/src/Interceptor/index.ts:46](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L46)

---

### globalInterceptor

• **globalInterceptor**: _Interceptor_

Defined in: [packages/gqless/src/Interceptor/index.ts:45](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L45)

---

### interceptors

• **interceptors**: _Set_<Interceptor\>

Defined in: [packages/gqless/src/Interceptor/index.ts:44](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L44)

---

### removeInterceptor

• **removeInterceptor**: (`interceptor`: _Interceptor_) => _void_

#### Type declaration:

▸ (`interceptor`: _Interceptor_): _void_

#### Parameters:

| Name          | Type          |
| :------------ | :------------ |
| `interceptor` | _Interceptor_ |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:47](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L47)

Defined in: [packages/gqless/src/Interceptor/index.ts:47](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L47)

---

### removeSelections

• **removeSelections**: (`selections`: [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\>) => _void_

#### Type declaration:

▸ (`selections`: [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\>): _void_

#### Parameters:

| Name         | Type                                                                                       |
| :----------- | :----------------------------------------------------------------------------------------- |
| `selections` | [_Selection_](../classes/selection.md)[] \| _Set_<[_Selection_](../classes/selection.md)\> |

**Returns:** _void_

Defined in: [packages/gqless/src/Interceptor/index.ts:52](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L52)

Defined in: [packages/gqless/src/Interceptor/index.ts:52](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Interceptor/index.ts#L52)
