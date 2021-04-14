---
id: 'inlineresolveoptions'
title: 'Interface: InlineResolveOptions<TData>'
sidebar_label: 'InlineResolveOptions'
custom_edit_url: null
hide_title: true
---

# Interface: InlineResolveOptions<TData\>

## Type parameters

| Name    |
| :------ |
| `TData` |

## Properties

### onCacheData

• `Optional` **onCacheData**: (`data`: TData) => _void_

On valid cache data found callback

#### Type declaration:

▸ (`data`: TData): _void_

#### Parameters:

| Name   | Type  |
| :----- | :---- |
| `data` | TData |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:212](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L212)

Defined in: [packages/gqless/src/Client/resolvers.ts:212](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L212)

---

### onEmptyResolve

• `Optional` **onEmptyResolve**: () => _void_

#### Type declaration:

▸ (): _void_

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:204](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L204)

Defined in: [packages/gqless/src/Client/resolvers.ts:204](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L204)

---

### onSelection

• `Optional` **onSelection**: (`selection`: [_Selection_](../classes/selection.md)) => _void_

Get every selection intercepted in the specified function

#### Type declaration:

▸ (`selection`: [_Selection_](../classes/selection.md)): _void_

#### Parameters:

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `selection` | [_Selection_](../classes/selection.md) |

**Returns:** _void_

Defined in: [packages/gqless/src/Client/resolvers.ts:208](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L208)

Defined in: [packages/gqless/src/Client/resolvers.ts:208](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L208)

---

### refetch

• `Optional` **refetch**: _boolean_

Defined in: [packages/gqless/src/Client/resolvers.ts:203](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Client/resolvers.ts#L203)
