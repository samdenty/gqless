---
id: 'gqlesserror'
title: 'Class: GQlessError'
sidebar_label: 'GQlessError'
custom_edit_url: null
hide_title: true
---

# Class: GQlessError

## Hierarchy

- _Error_

  ↳ **GQlessError**

## Constructors

### constructor

\+ **new GQlessError**(`message`: _string_, `__namedParameters?`: { `caller?`: Function ; `graphQLErrors?`: readonly _GraphQLError_[] ; `otherError?`: _unknown_ }): [_GQlessError_](gqlesserror.md)

#### Parameters:

| Name                               | Type                      | Default value |
| :--------------------------------- | :------------------------ | :------------ |
| `message`                          | _string_                  | -             |
| `__namedParameters`                | _object_                  | {}            |
| `__namedParameters.caller?`        | Function                  | -             |
| `__namedParameters.graphQLErrors?` | readonly _GraphQLError_[] | -             |
| `__namedParameters.otherError?`    | _unknown_                 | -             |

**Returns:** [_GQlessError_](gqlesserror.md)

Overrides: Error.constructor

Defined in: [packages/gqless/src/Error/index.ts:5](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L5)

## Properties

### graphQLErrors

• `Optional` **graphQLErrors**: readonly _GraphQLError_[]

Defined in: [packages/gqless/src/Error/index.ts:4](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L4)

---

### message

• **message**: _string_

Inherited from: Error.message

Defined in: node_modules/.pnpm/typescript@4.2.3/node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_

Inherited from: Error.name

Defined in: node_modules/.pnpm/typescript@4.2.3/node_modules/typescript/lib/lib.es5.d.ts:973

---

### otherError

• `Optional` **otherError**: _unknown_

Defined in: [packages/gqless/src/Error/index.ts:5](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L5)

---

### stack

• `Optional` **stack**: _string_

Inherited from: Error.stack

Defined in: node_modules/.pnpm/typescript@4.2.3/node_modules/typescript/lib/lib.es5.d.ts:975

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => _any_

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): _any_

#### Parameters:

| Name          | Type       |
| :------------ | :--------- |
| `err`         | Error      |
| `stackTraces` | CallSite[] |

**Returns:** _any_

Defined in: node_modules/.pnpm/@types+node@14.14.37/node_modules/@types/node/globals.d.ts:11

Inherited from: Error.prepareStackTrace

Defined in: node_modules/.pnpm/@types+node@14.14.37/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

Inherited from: Error.stackTraceLimit

Defined in: node_modules/.pnpm/@types+node@14.14.37/node_modules/@types/node/globals.d.ts:13

## Methods

### toJSON

▸ **toJSON**(): _object_

**Returns:** _object_

| Name            | Type                                     |
| :-------------- | :--------------------------------------- |
| `graphQLErrors` | _undefined_ \| readonly _GraphQLError_[] |
| `message`       | _string_                                 |
| `otherError`    | _unknown_                                |

Defined in: [packages/gqless/src/Error/index.ts:29](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L29)

---

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: _object_, `constructorOpt?`: Function): _void_

Create .stack property on a target object

#### Parameters:

| Name              | Type     |
| :---------------- | :------- |
| `targetObject`    | _object_ |
| `constructorOpt?` | Function |

**Returns:** _void_

Inherited from: Error.captureStackTrace

Defined in: node_modules/.pnpm/@types+node@14.14.37/node_modules/@types/node/globals.d.ts:4

---

### create

▸ `Static`**create**(`error`: _unknown_, `caller?`: Function): [_GQlessError_](gqlesserror.md)

#### Parameters:

| Name      | Type      |
| :-------- | :-------- |
| `error`   | _unknown_ |
| `caller?` | Function  |

**Returns:** [_GQlessError_](gqlesserror.md)

Defined in: [packages/gqless/src/Error/index.ts:37](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L37)

---

### fromGraphQLErrors

▸ `Static`**fromGraphQLErrors**(`errors`: readonly _GraphQLError_[]): [_GQlessError_](gqlesserror.md)

#### Parameters:

| Name     | Type                      |
| :------- | :------------------------ |
| `errors` | readonly _GraphQLError_[] |

**Returns:** [_GQlessError_](gqlesserror.md)

Defined in: [packages/gqless/src/Error/index.ts:55](https://github.com/gqless/gqless/blob/41c894a/packages/gqless/src/Error/index.ts#L55)
