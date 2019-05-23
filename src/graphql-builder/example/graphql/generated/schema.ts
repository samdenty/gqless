import { typeOptions } from '../typeOptions'
import { lazyGetters } from '@graphql-builder/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  StringNode,
  NumberNode,
  UnionNode,
  InterfaceNode,
  InputNode,
  InputNodeField,
  BooleanNode,
  ScalarNode,
  DataProxy,
  IScalarNodeOptions,
  Node,
  IObjectNodeOptions,
  IInterfaceNodeOptions,
} from 'graphql-builder'

export const types = {
  get Query() {
    return new ObjectNode(
      {
        /**
         * Current signed in user
         */
        get me() {
          return new FieldNode(types.User, undefined, true)
        },
        /**
         * Fetch a user by ID
         */
        get user() {
          return new FieldNode(
            types.User,
            new Arguments({
              get id() {
                return new ArgumentsField(types.ID, true)
              },
            }),
            true
          )
        },
        /**
         * All users stored in the database
         */
        get users() {
          return new FieldNode(
            new ArrayNode(types.User, false),
            new Arguments({
              get limit() {
                return new ArgumentsField(types.Int, true)
              },
            }),
            false
          )
        },
        get a() {
          return new FieldNode(types.A, undefined, true)
        },
        /**
         * @deprecated use the user field instead
         */
        get getUser() {
          return new FieldNode(
            types.User,
            new Arguments({
              get id() {
                return new ArgumentsField(types.ID, true)
              },
            }),
            true
          )
        },
        /**
         * @deprecated use the users field instead
         */
        get getUsers() {
          return new FieldNode(
            new ArrayNode(types.User, false),
            new Arguments({
              get id() {
                return new ArgumentsField(types.ID, true)
              },
            }),
            false
          )
        },
        get testOrUser() {
          return new FieldNode(types.TestOrUser, undefined, true)
        },
        get test() {
          return new FieldNode(types.Test, undefined, true)
        },
        get testWithInput() {
          return new FieldNode(
            types.Int,
            new Arguments({
              get id() {
                return new ArgumentsField(types.String, true)
              },
              get ids() {
                return new ArgumentsField(
                  new ArrayNode(types.String, false),
                  false
                )
              },
              get input() {
                return new ArgumentsField(types.InputObj, true)
              },
            }),
            true
          )
        },
      },
      { name: 'Query', ...((typeOptions as any).Query as {}) }
    )
  },
  get User() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(types.ID, undefined, false)
        },
        get name() {
          return new FieldNode(types.String, undefined, true)
        },
        get age() {
          return new FieldNode(types.Int, undefined, true)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get avatarUrl() {
          return new FieldNode(
            types.String,
            new Arguments({
              get size() {
                return new ArgumentsField(types.Int, true)
              },
            }),
            true
          )
        },
        get profileUrl() {
          return new FieldNode(types.String, undefined, true)
        },
        get following() {
          return new FieldNode(new ArrayNode(types.User, true), undefined, true)
        },
        get followers() {
          return new FieldNode(new ArrayNode(types.User, true), undefined, true)
        },
        get b() {
          return new FieldNode(types.String, undefined, true)
        },
        get c() {
          return new FieldNode(types.String, undefined, true)
        },
        get d() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: 'User', ...((typeOptions as any).User as {}) }
    )
  },
  get ID() {
    return new StringNode({ name: 'ID', ...((typeOptions as any).ID as {}) })
  },
  get String() {
    return new StringNode({
      name: 'String',
      ...((typeOptions as any).String as {}),
    })
  },
  get Int() {
    return new NumberNode({ name: 'Int', ...((typeOptions as any).Int as {}) })
  },
  get A() {
    return new ObjectNode(
      {
        get b() {
          return new FieldNode(types.B, undefined, true)
        },
      },
      { name: 'A', ...((typeOptions as any).A as {}) }
    )
  },
  get B() {
    return new ObjectNode(
      {
        get c() {
          return new FieldNode(types.Int, undefined, true)
        },
        get d() {
          return new FieldNode(types.Int, undefined, true)
        },
      },
      { name: 'B', ...((typeOptions as any).B as {}) }
    )
  },
  get TestOrUser() {
    return new UnionNode([types.User, types.TestB])
  },
  get TestB() {
    return new ObjectNode(
      {
        get a() {
          return new FieldNode(types.String, undefined, true)
        },
        get b() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: 'TestB', ...((typeOptions as any).TestB as {}) }
    )
  },
  get Test() {
    return new InterfaceNode(
      {
        get a() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      [types.TestB, types.TestC],
      { name: 'Test', ...((typeOptions as any).Test as {}) }
    )
  },
  get InputObj() {
    return new InputNode(
      {
        get a() {
          return new InputNodeField(types.String, false)
        },
      },
      { name: 'InputObj' }
    )
  },
  get Mutation() {
    return new ObjectNode(
      {
        get deleteUser() {
          return new FieldNode(
            types.Int,
            new Arguments({
              get id() {
                return new ArgumentsField(types.ID, false)
              },
            }),
            false
          )
        },
      },
      { name: 'Mutation', ...((typeOptions as any).Mutation as {}) }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        /**
         * A list of all types supported by this server.
         */
        get types() {
          return new FieldNode(
            new ArrayNode(types.__Type, false),
            undefined,
            false
          )
        },
        /**
         * The type that query operations will be rooted at.
         */
        get queryType() {
          return new FieldNode(types.__Type, undefined, false)
        },
        /**
         * If this server supports mutation, the type that mutation operations will be rooted at.
         */
        get mutationType() {
          return new FieldNode(types.__Type, undefined, true)
        },
        /**
         * If this server support subscription, the type that subscription operations will be rooted at.
         */
        get subscriptionType() {
          return new FieldNode(types.__Type, undefined, true)
        },
        /**
         * A list of all directives supported by this server.
         */
        get directives() {
          return new FieldNode(
            new ArrayNode(types.__Directive, false),
            undefined,
            false
          )
        },
      },
      { name: '__Schema', ...((typeOptions as any).__Schema as {}) }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(types.__TypeKind, undefined, false)
        },
        get name() {
          return new FieldNode(types.String, undefined, true)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(types.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(types.Boolean, true)
              },
            }),
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(types.__Type, true),
            undefined,
            true
          )
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(types.__Type, true),
            undefined,
            true
          )
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(types.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(types.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(types.__InputValue, true),
            undefined,
            true
          )
        },
        get ofType() {
          return new FieldNode(types.__Type, undefined, true)
        },
      },
      { name: '__Type', ...((typeOptions as any).__Type as {}) }
    )
  },
  get __TypeKind() {
    return undefined
  },
  get Boolean() {
    return new BooleanNode({
      name: 'Boolean',
      ...((typeOptions as any).Boolean as {}),
    })
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(types.String, undefined, false)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(types.__InputValue, false),
            undefined,
            false
          )
        },
        get type() {
          return new FieldNode(types.__Type, undefined, false)
        },
        get isDeprecated() {
          return new FieldNode(types.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: '__Field', ...((typeOptions as any).__Field as {}) }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(types.String, undefined, false)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get type() {
          return new FieldNode(types.__Type, undefined, false)
        },
        /**
         * A GraphQL-formatted string representing the default value for this input value.
         */
        get defaultValue() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: '__InputValue', ...((typeOptions as any).__InputValue as {}) }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(types.String, undefined, false)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(types.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: '__EnumValue', ...((typeOptions as any).__EnumValue as {}) }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(types.String, undefined, false)
        },
        get description() {
          return new FieldNode(types.String, undefined, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(types.__DirectiveLocation, false),
            undefined,
            false
          )
        },
        get args() {
          return new FieldNode(
            new ArrayNode(types.__InputValue, false),
            undefined,
            false
          )
        },
        /**
         * @deprecated Use `locations`.
         */
        get onOperation() {
          return new FieldNode(types.Boolean, undefined, false)
        },
        /**
         * @deprecated Use `locations`.
         */
        get onFragment() {
          return new FieldNode(types.Boolean, undefined, false)
        },
        /**
         * @deprecated Use `locations`.
         */
        get onField() {
          return new FieldNode(types.Boolean, undefined, false)
        },
      },
      { name: '__Directive', ...((typeOptions as any).__Directive as {}) }
    )
  },
  get __DirectiveLocation() {
    return undefined
  },
  get Episode() {
    return undefined
  },
  get TestC() {
    return new ObjectNode(
      {
        get a() {
          return new FieldNode(types.String, undefined, true)
        },
        get c() {
          return new FieldNode(types.String, undefined, true)
        },
      },
      { name: 'TestC', ...((typeOptions as any).TestC as {}) }
    )
  },
  get fake__Locale() {
    return undefined
  },
  get fake__Types() {
    return undefined
  },
  get fake__imageCategory() {
    return undefined
  },
  get fake__loremSize() {
    return undefined
  },
  get fake__color() {
    return new InputNode(
      {
        get red255() {
          return new InputNodeField(types.Int, true)
        },
        get green255() {
          return new InputNodeField(types.Int, true)
        },
        get blue255() {
          return new InputNodeField(types.Int, true)
        },
      },
      { name: 'fake__color' }
    )
  },
  get fake__options() {
    return new InputNode(
      {
        get useFullAddress() {
          return new InputNodeField(types.Boolean, true)
        },
        get minMoney() {
          return new InputNodeField(types.Float, true)
        },
        get maxMoney() {
          return new InputNodeField(types.Float, true)
        },
        get decimalPlaces() {
          return new InputNodeField(types.Int, true)
        },
        get imageWidth() {
          return new InputNodeField(types.Int, true)
        },
        get imageHeight() {
          return new InputNodeField(types.Int, true)
        },
        get imageCategory() {
          return new InputNodeField(types.fake__imageCategory, true)
        },
        get randomizeImageUrl() {
          return new InputNodeField(types.Boolean, true)
        },
        get emailProvider() {
          return new InputNodeField(types.String, true)
        },
        get passwordLength() {
          return new InputNodeField(types.Int, true)
        },
        get loremSize() {
          return new InputNodeField(types.fake__loremSize, true)
        },
        get dateFormat() {
          return new InputNodeField(types.String, true)
        },
        get baseColor() {
          return new InputNodeField(types.fake__color, true)
        },
        get minNumber() {
          return new InputNodeField(types.Float, true)
        },
        get maxNumber() {
          return new InputNodeField(types.Float, true)
        },
        get precisionNumber() {
          return new InputNodeField(types.Float, true)
        },
      },
      { name: 'fake__options' }
    )
  },
  get Float() {
    return new NumberNode({
      name: 'Float',
      ...((typeOptions as any).Float as {}),
    })
  },
  get examples__JSON() {
    return new ScalarNode({
      name: 'examples__JSON',
      ...((typeOptions as any).examples__JSON as {}),
    })
  },
}

lazyGetters(types)

export type Query = DataProxy<typeof types.Query>
export type User = DataProxy<typeof types.User>
export type ID = DataProxy<typeof types.ID>
export type String = DataProxy<typeof types.String>
export type Int = DataProxy<typeof types.Int>
export type A = DataProxy<typeof types.A>
export type B = DataProxy<typeof types.B>
export type TestOrUser = DataProxy<typeof types.TestOrUser>
export type TestB = DataProxy<typeof types.TestB>
export type Test = DataProxy<typeof types.Test>
export type InputObj = DataProxy<typeof types.InputObj>
export type Mutation = DataProxy<typeof types.Mutation>
export type __Schema = DataProxy<typeof types.__Schema>
export type __Type = DataProxy<typeof types.__Type>
export type __TypeKind = DataProxy<typeof types.__TypeKind>
export type Boolean = DataProxy<typeof types.Boolean>
export type __Field = DataProxy<typeof types.__Field>
export type __InputValue = DataProxy<typeof types.__InputValue>
export type __EnumValue = DataProxy<typeof types.__EnumValue>
export type __Directive = DataProxy<typeof types.__Directive>
export type __DirectiveLocation = DataProxy<typeof types.__DirectiveLocation>
export type Episode = DataProxy<typeof types.Episode>
export type TestC = DataProxy<typeof types.TestC>
export type fake__Locale = DataProxy<typeof types.fake__Locale>
export type fake__Types = DataProxy<typeof types.fake__Types>
export type fake__imageCategory = DataProxy<typeof types.fake__imageCategory>
export type fake__loremSize = DataProxy<typeof types.fake__loremSize>
export type fake__color = DataProxy<typeof types.fake__color>
export type fake__options = DataProxy<typeof types.fake__options>
export type Float = DataProxy<typeof types.Float>
export type examples__JSON = DataProxy<typeof types.examples__JSON>

type NodeOptions<T extends Node<any>> = T extends ScalarNode<any>
  ? IScalarNodeOptions
  : T extends ObjectNode<any, any, any>
    ? IObjectNodeOptions<T>
    : T extends InterfaceNode<any, any, any, infer Typename>
      ? IInterfaceNodeOptions<Typename>
      : never

export type ITypeOptions = {
  [K in keyof typeof types]?: NodeOptions<typeof types[K]>
}
