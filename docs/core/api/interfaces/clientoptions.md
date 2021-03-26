---
id: 'clientoptions'
title: 'Interface: ClientOptions<ObjectTypesNames, SchemaObjectTypes>'
sidebar_label: 'ClientOptions'
custom_edit_url: null
hide_title: true
---

# Interface: ClientOptions<ObjectTypesNames, SchemaObjectTypes\>

## Type parameters

| Name                | Type                               | Default |
| :------------------ | :--------------------------------- | :------ |
| `ObjectTypesNames`  | _string_                           | _never_ |
| `SchemaObjectTypes` | { [P in ObjectTypesNames]: object} | _never_ |

## Properties

### catchSelectionsTimeMS

• `Optional` **catchSelectionsTimeMS**: _number_

Defined in: [packages/gqless/src/Client/client.ts:116](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L116)

---

### normalization

• `Optional` **normalization**: _boolean_ \| _NormalizationOptions_<ObjectTypesNames, SchemaObjectTypes\>

Defined in: [packages/gqless/src/Client/client.ts:118](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L118)

---

### queryFetcher

• **queryFetcher**: [_QueryFetcher_](../modules.md#queryfetcher)

Defined in: [packages/gqless/src/Client/client.ts:115](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L115)

---

### retry

• `Optional` **retry**: RetryOptions

Defined in: [packages/gqless/src/Client/client.ts:117](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L117)

---

### scalarsEnumsHash

• **scalarsEnumsHash**: [_ScalarsEnumsHash_](../modules.md#scalarsenumshash)

Defined in: [packages/gqless/src/Client/client.ts:114](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L114)

---

### schema

• **schema**: _Readonly_<[_Schema_](schema.md)\>

Defined in: [packages/gqless/src/Client/client.ts:113](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L113)

---

### subscriptionsClient

• `Optional` **subscriptionsClient**: [_SubscriptionsClient_](subscriptionsclient.md)

Defined in: [packages/gqless/src/Client/client.ts:121](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L121)
