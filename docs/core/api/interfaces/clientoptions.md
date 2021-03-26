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

Defined in: [packages/gqless/src/Client/client.ts:108](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L108)

---

### normalization

• `Optional` **normalization**: _boolean_ \| _NormalizationOptions_<ObjectTypesNames, SchemaObjectTypes\>

Defined in: [packages/gqless/src/Client/client.ts:110](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L110)

---

### queryFetcher

• **queryFetcher**: [_QueryFetcher_](../modules.md#queryfetcher)

Defined in: [packages/gqless/src/Client/client.ts:107](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L107)

---

### retry

• `Optional` **retry**: RetryOptions

Defined in: [packages/gqless/src/Client/client.ts:109](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L109)

---

### scalarsEnumsHash

• **scalarsEnumsHash**: [_ScalarsEnumsHash_](../modules.md#scalarsenumshash)

Defined in: [packages/gqless/src/Client/client.ts:106](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L106)

---

### schema

• **schema**: _Readonly_<[_Schema_](schema.md)\>

Defined in: [packages/gqless/src/Client/client.ts:105](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L105)

---

### subscriptionsClient

• `Optional` **subscriptionsClient**: [_SubscriptionsClient_](subscriptionsclient.md)

Defined in: [packages/gqless/src/Client/client.ts:113](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Client/client.ts#L113)
