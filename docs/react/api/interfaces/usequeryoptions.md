---
id: 'usequeryoptions'
title: 'Interface: UseQueryOptions<GeneratedSchema>'
sidebar_label: 'UseQueryOptions'
custom_edit_url: null
hide_title: true
---

# Interface: UseQueryOptions<GeneratedSchema\>

## Type parameters

| Name                    | Type     | Default |
| :---------------------- | :------- | :------ |
| `GeneratedSchema`       | _object_ | _never_ |
| `GeneratedSchema.query` | _object_ | -       |

## Properties

### onError

• `Optional` **onError**: [_OnErrorHandler_](../modules.md#onerrorhandler)

Defined in: [react/src/query/useQuery.ts:26](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useQuery.ts#L26)

---

### prepare

• `Optional` **prepare**: (`helpers`: _UseQueryPrepareHelpers_<GeneratedSchema\>) => _void_

#### Type declaration:

▸ (`helpers`: _UseQueryPrepareHelpers_<GeneratedSchema\>): _void_

#### Parameters:

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `helpers` | _UseQueryPrepareHelpers_<GeneratedSchema\> |

**Returns:** _void_

Defined in: [react/src/query/useQuery.ts:27](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useQuery.ts#L27)

---

### staleWhileRevalidate

• `Optional` **staleWhileRevalidate**: _null_ \| _string_ \| _number_ \| _boolean_ \| _object_

Defined in: [react/src/query/useQuery.ts:25](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useQuery.ts#L25)

---

### suspense

• `Optional` **suspense**: _boolean_

Defined in: [react/src/query/useQuery.ts:24](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useQuery.ts#L24)
