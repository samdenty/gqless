import {
  StringNode,
  NumberNode,
  ObjectNode,
  FieldNode,
  InputNode,
  Arguments,
  ArgumentsField,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  UnionNode,
  InterfaceNode,
  InputNodeField,
  DataProxy,
} from './src/new'

export const typesFaker = {
  get Query() {
    return new ObjectNode(
      {
        get me() {
          return new FieldNode(typesFaker.User, null, true)
        },
        get user() {
          return new FieldNode(typesFaker.User, null, true)
        },
        get users() {
          return new FieldNode(
            new ArrayNode(typesFaker.User, false),
            new Arguments({
              get limit() {
                return new ArgumentsField(typesFaker.Int, true)
              },
            }),
            false
          )
        },
        get a() {
          return new FieldNode(typesFaker.A, null, true)
        },
        get getUser() {
          return new FieldNode(
            typesFaker.User,
            new Arguments({
              get id() {
                return new ArgumentsField(typesFaker.ID, true)
              },
            }),
            true
          )
        },
        get getUsers() {
          return new FieldNode(
            new ArrayNode(typesFaker.User, false),
            new Arguments({
              get id() {
                return new ArgumentsField(typesFaker.ID, true)
              },
            }),
            false
          )
        },
        get testOrUser() {
          return new FieldNode(typesFaker.TestOrUser, null, true)
        },
        get test() {
          return new FieldNode(typesFaker.Test, null, true)
        },
        get testWithInput() {
          return new FieldNode(
            typesFaker.Int,
            new Arguments({
              get id() {
                return new ArgumentsField(typesFaker.String, true)
              },
              get ids() {
                return new ArgumentsField(
                  new ArrayNode(typesFaker.String, false),
                  false
                )
              },
              get input() {
                return new ArgumentsField(typesFaker.InputObj, true)
              },
            }),
            true
          )
        },
      },
      { name: 'Query' }
    )
  },
  get User() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(typesFaker.ID, null, false)
        },
        get name() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get age() {
          return new FieldNode(typesFaker.Int, null, true)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get avatarUrl() {
          return new FieldNode(
            typesFaker.String,
            new Arguments({
              get size() {
                return new ArgumentsField(typesFaker.Int, true)
              },
            }),
            true
          )
        },
        get profileUrl() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get b() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get c() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get d() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: 'User' }
    )
  },
  get ID() {
    return new StringNode({ name: 'ID' })
  },
  get String() {
    return new StringNode({ name: 'String' })
  },
  get Int() {
    return new NumberNode({ name: 'Int' })
  },
  get A() {
    return new ObjectNode(
      {
        get b() {
          return new FieldNode(typesFaker.B, null, true)
        },
      },
      { name: 'A' }
    )
  },
  get B() {
    return new ObjectNode(
      {
        get c() {
          return new FieldNode(typesFaker.Int, null, true)
        },
        get d() {
          return new FieldNode(typesFaker.Int, null, true)
        },
      },
      { name: 'B' }
    )
  },
  get TestOrUser() {
    return new UnionNode([typesFaker.User, typesFaker.TestB])
  },
  get TestB() {
    return new ObjectNode(
      {
        get a() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get b() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: 'TestB' }
    )
  },
  get Test() {
    return new InterfaceNode(
      {
        get a() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      [typesFaker.TestB, typesFaker.TestC],
      { name: 'Test' }
    )
  },
  get InputObj() {
    return new InputNode(
      {
        get a() {
          return new InputNodeField(typesFaker.String, false)
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
            typesFaker.Int,
            new Arguments({
              get id() {
                return new ArgumentsField(typesFaker.ID, false)
              },
            }),
            false
          )
        },
      },
      { name: 'Mutation' }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(typesFaker.__Type, false),
            null,
            false
          )
        },
        get queryType() {
          return new FieldNode(typesFaker.__Type, null, false)
        },
        get mutationType() {
          return new FieldNode(typesFaker.__Type, null, true)
        },
        get subscriptionType() {
          return new FieldNode(typesFaker.__Type, null, true)
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(typesFaker.__Directive, false),
            null,
            false
          )
        },
      },
      { name: '__Schema' }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(typesFaker.__TypeKind, null, false)
        },
        get name() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(typesFaker.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(typesFaker.Boolean, true)
              },
            }),
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(typesFaker.__Type, true),
            null,
            true
          )
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(typesFaker.__Type, true),
            null,
            true
          )
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(typesFaker.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(typesFaker.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(typesFaker.__InputValue, true),
            null,
            true
          )
        },
        get ofType() {
          return new FieldNode(typesFaker.__Type, null, true)
        },
      },
      { name: '__Type' }
    )
  },
  get __TypeKind() {
    return undefined
  },
  get Boolean() {
    return new BooleanNode({ name: 'Boolean' })
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(typesFaker.String, null, false)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(typesFaker.__InputValue, false),
            null,
            false
          )
        },
        get type() {
          return new FieldNode(typesFaker.__Type, null, false)
        },
        get isDeprecated() {
          return new FieldNode(typesFaker.Boolean, null, false)
        },
        get deprecationReason() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: '__Field' }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(typesFaker.String, null, false)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get type() {
          return new FieldNode(typesFaker.__Type, null, false)
        },
        get defaultValue() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: '__InputValue' }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(typesFaker.String, null, false)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get isDeprecated() {
          return new FieldNode(typesFaker.Boolean, null, false)
        },
        get deprecationReason() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: '__EnumValue' }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(typesFaker.String, null, false)
        },
        get description() {
          return new FieldNode(typesFaker.String, null, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(typesFaker.__DirectiveLocation, false),
            null,
            false
          )
        },
        get args() {
          return new FieldNode(
            new ArrayNode(typesFaker.__InputValue, false),
            null,
            false
          )
        },
        get onOperation() {
          return new FieldNode(typesFaker.Boolean, null, false)
        },
        get onFragment() {
          return new FieldNode(typesFaker.Boolean, null, false)
        },
        get onField() {
          return new FieldNode(typesFaker.Boolean, null, false)
        },
      },
      { name: '__Directive' }
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
          return new FieldNode(typesFaker.String, null, true)
        },
        get c() {
          return new FieldNode(typesFaker.String, null, true)
        },
      },
      { name: 'TestC' }
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
          return new InputNodeField(typesFaker.Int, true)
        },
        get green255() {
          return new InputNodeField(typesFaker.Int, true)
        },
        get blue255() {
          return new InputNodeField(typesFaker.Int, true)
        },
      },
      { name: 'fake__color' }
    )
  },
  get fake__options() {
    return new InputNode(
      {
        get useFullAddress() {
          return new InputNodeField(typesFaker.Boolean, true)
        },
        get minMoney() {
          return new InputNodeField(typesFaker.Float, true)
        },
        get maxMoney() {
          return new InputNodeField(typesFaker.Float, true)
        },
        get decimalPlaces() {
          return new InputNodeField(typesFaker.Int, true)
        },
        get imageWidth() {
          return new InputNodeField(typesFaker.Int, true)
        },
        get imageHeight() {
          return new InputNodeField(typesFaker.Int, true)
        },
        get imageCategory() {
          return new InputNodeField(typesFaker.fake__imageCategory, true)
        },
        get randomizeImageUrl() {
          return new InputNodeField(typesFaker.Boolean, true)
        },
        get emailProvider() {
          return new InputNodeField(typesFaker.String, true)
        },
        get passwordLength() {
          return new InputNodeField(typesFaker.Int, true)
        },
        get loremSize() {
          return new InputNodeField(typesFaker.fake__loremSize, true)
        },
        get dateFormat() {
          return new InputNodeField(typesFaker.String, true)
        },
        get baseColor() {
          return new InputNodeField(typesFaker.fake__color, true)
        },
        get minNumber() {
          return new InputNodeField(typesFaker.Float, true)
        },
        get maxNumber() {
          return new InputNodeField(typesFaker.Float, true)
        },
        get precisionNumber() {
          return new InputNodeField(typesFaker.Float, true)
        },
      },
      { name: 'fake__options' }
    )
  },
  get Float() {
    return new NumberNode({ name: 'Float' })
  },
  get examples__JSON() {
    return new ScalarNode({ name: 'examples__JSON' })
  },
}

export type Query = DataProxy<typeof typesFaker.Query>
export type User = DataProxy<typeof typesFaker.User>
export type ID = DataProxy<typeof typesFaker.ID>
export type String = DataProxy<typeof typesFaker.String>
export type Int = DataProxy<typeof typesFaker.Int>
export type A = DataProxy<typeof typesFaker.A>
export type B = DataProxy<typeof typesFaker.B>
export type TestOrUser = DataProxy<typeof typesFaker.TestOrUser>
export type TestB = DataProxy<typeof typesFaker.TestB>
export type Test = DataProxy<typeof typesFaker.Test>
export type InputObj = DataProxy<typeof typesFaker.InputObj>
export type Mutation = DataProxy<typeof typesFaker.Mutation>
export type __Schema = DataProxy<typeof typesFaker.__Schema>
export type __Type = DataProxy<typeof typesFaker.__Type>
export type __TypeKind = DataProxy<typeof typesFaker.__TypeKind>
export type Boolean = DataProxy<typeof typesFaker.Boolean>
export type __Field = DataProxy<typeof typesFaker.__Field>
export type __InputValue = DataProxy<typeof typesFaker.__InputValue>
export type __EnumValue = DataProxy<typeof typesFaker.__EnumValue>
export type __Directive = DataProxy<typeof typesFaker.__Directive>
export type __DirectiveLocation = DataProxy<
  typeof typesFaker.__DirectiveLocation
>
export type Episode = DataProxy<typeof typesFaker.Episode>
export type TestC = DataProxy<typeof typesFaker.TestC>
export type fake__Locale = DataProxy<typeof typesFaker.fake__Locale>
export type fake__Types = DataProxy<typeof typesFaker.fake__Types>
export type fake__imageCategory = DataProxy<
  typeof typesFaker.fake__imageCategory
>
export type fake__loremSize = DataProxy<typeof typesFaker.fake__loremSize>
export type fake__color = DataProxy<typeof typesFaker.fake__color>
export type fake__options = DataProxy<typeof typesFaker.fake__options>
export type Float = DataProxy<typeof typesFaker.Float>
export type examples__JSON = DataProxy<typeof typesFaker.examples__JSON>
