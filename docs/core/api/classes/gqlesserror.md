---
id: 'gqlesserror'
title: 'Class: gqlessError'
sidebar_label: 'gqlessError'
custom_edit_url: null
hide_title: true
---

# Class: gqlessError

## Hierarchy

- _Error_

  ↳ **gqlessError**

## Constructors

### constructor

\+ **new gqlessError**(`message`: _string_, `__namedParameters?`: { `caller?`: Function ; `graphQLErrors?`: readonly _GraphQLError_[] ; `otherError?`: _unknown_ }): [_gqlessError_](gqlesserror.md)

#### Parameters:

| Name                               | Type                      |
| :--------------------------------- | :------------------------ |
| `message`                          | _string_                  |
| `__namedParameters`                | _object_                  |
| `__namedParameters.caller?`        | Function                  |
| `__namedParameters.graphQLErrors?` | readonly _GraphQLError_[] |
| `__namedParameters.otherError?`    | _unknown_                 |

**Returns:** [_gqlessError_](gqlesserror.md)

Overrides: void

Defined in: [packages/gqless/src/Error/index.ts:5](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L5)

## Properties

### graphQLErrors

• `Optional` **graphQLErrors**: readonly _GraphQLError_[]

Defined in: [packages/gqless/src/Error/index.ts:4](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L4)

---

### message

• **message**: _string_

Inherited from: void

Defined in: node_modules/.pnpm/typescript@4.2.3/node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: _string_

Inherited from: void

Defined in: node_modules/.pnpm/typescript@4.2.3/node_modules/typescript/lib/lib.es5.d.ts:973

---

### otherError

• `Optional` **otherError**: _unknown_

Defined in: [packages/gqless/src/Error/index.ts:5](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L5)

---

### stack

• `Optional` **stack**: _string_

Inherited from: void

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

Defined in: node_modules/.pnpm/@types/node@14.14.35/node_modules/@types/node/globals.d.ts:11

Inherited from: void

Defined in: node_modules/.pnpm/@types/node@14.14.35/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: _number_

Inherited from: void

Defined in: node_modules/.pnpm/@types/node@14.14.35/node_modules/@types/node/globals.d.ts:13

## Methods

### toJSON

▸ **toJSON**(): _object_

**Returns:** _object_

| Name            | Type                                     |
| :-------------- | :--------------------------------------- |
| `graphQLErrors` | _undefined_ \| readonly _GraphQLError_[] |
| `message`       | _string_                                 |
| `otherError`    | _unknown_                                |

Defined in: [packages/gqless/src/Error/index.ts:29](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L29)

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

Inherited from: void

Defined in: node_modules/.pnpm/@types/node@14.14.35/node_modules/@types/node/globals.d.ts:4

---

### create

▸ `Static`**create**(`error`: _unknown_, `caller?`: Function): [_gqlessError_](gqlesserror.md)

#### Parameters:

| Name      | Type      |
| :-------- | :-------- |
| `error`   | _unknown_ |
| `caller?` | Function  |

**Returns:** [_gqlessError_](gqlesserror.md)

Defined in: [packages/gqless/src/Error/index.ts:37](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L37)

---

### fromGraphQLErrors

▸ `Static`**fromGraphQLErrors**(`errors`: readonly _GraphQLError_[]): [_gqlessError_](gqlesserror.md)

#### Parameters:

| Name     | Type                      |
| :------- | :------------------------ |
| `errors` | readonly _GraphQLError_[] |

**Returns:** [_gqlessError_](gqlesserror.md)

Defined in: [packages/gqless/src/Error/index.ts:55](https://github.com/gqless/new_gqless/blob/master/packages/gqless/src/Error/index.ts#L55)
