// @ts-nocheck
import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  InterfaceNode,
  ScalarNode,
  EnumNode,
  UnionNode,
  InputNode,
  InputNodeField,
} from 'gqless'

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get m() {
          return new FieldNode(schema.M, undefined, true)
        },
        get me() {
          return new FieldNode(schema.User, undefined, true)
        },
        get user() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true)
              },
            }),
            true
          )
        },
        get users() {
          return new FieldNode(
            new ArrayNode(schema.User, false),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get stringArray() {
          return new FieldNode(
            new ArrayNode(new ArrayNode(schema.String, true), false),
            undefined,
            false
          )
        },
        get a() {
          return new FieldNode(schema.A, undefined, true)
        },
        get getUser() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true)
              },
            }),
            true
          )
        },
        get getUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, false),
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true)
              },
            }),
            false
          )
        },
        get testOrUser() {
          return new FieldNode(schema.TestOrUser, undefined, false)
        },
        get test() {
          return new FieldNode(schema.Test, undefined, true)
        },
        get testWithInput() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, true)
              },
              get ids() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, false),
                  false
                )
              },
              get input() {
                return new ArgumentsField(schema.InputObj, true)
              },
            }),
            true
          )
        },
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query }
    )
  },
  get M() {
    return new InterfaceNode(
      {
        get b() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get b() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
      },
      [schema.O1, schema.O2],
      { name: 'M', extension: ((extensions as any) || {}).M }
    )
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    })
  },
  get User() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get test() {
          return new FieldNode(
            schema.MyEnum,
            new Arguments({
              get enum() {
                return new ArgumentsField(schema.MyEnum, true)
              },
            }),
            true
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get age() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get avatarUrl() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get profileUrl() {
          return new FieldNode(schema.String, undefined, true)
        },
        get following() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get followers() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get b() {
          return new FieldNode(schema.String, undefined, true)
        },
        get c() {
          return new FieldNode(schema.String, undefined, true)
        },
        get d() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'User', extension: ((extensions as any) || {}).User }
    )
  },
  get ID() {
    return new ScalarNode({
      name: 'ID',
      extension: ((extensions as any) || {}).ID,
    })
  },
  get MyEnum() {
    return new EnumNode({ name: 'MyEnum' })
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    })
  },
  get A() {
    return new ObjectNode(
      {
        get b() {
          return new FieldNode(schema.B, undefined, true)
        },
      },
      { name: 'A', extension: ((extensions as any) || {}).A }
    )
  },
  get B() {
    return new ObjectNode(
      {
        get c() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get d() {
          return new FieldNode(schema.Int, undefined, true)
        },
      },
      { name: 'B', extension: ((extensions as any) || {}).B }
    )
  },
  get TestOrUser() {
    return new UnionNode([schema.User, schema.TestB])
  },
  get TestB() {
    return new ObjectNode(
      {
        get a() {
          return new FieldNode(schema.String, undefined, true)
        },
        get b() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'TestB', extension: ((extensions as any) || {}).TestB }
    )
  },
  get Test() {
    return new InterfaceNode(
      {
        get a() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      [schema.TestB, schema.TestC],
      { name: 'Test', extension: ((extensions as any) || {}).Test }
    )
  },
  get InputObj() {
    return new InputNode(
      {
        get a() {
          return new InputNodeField(schema.String, false)
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
            schema.Int,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false)
                },
              },
              true
            ),
            false
          )
        },
      },
      { name: 'Mutation', extension: ((extensions as any) || {}).Mutation }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          )
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          )
        },
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          )
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type }
    )
  },
  get __TypeKind() {
    return new EnumNode({ name: '__TypeKind' })
  },
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean,
    })
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue,
      }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue,
      }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          )
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive,
      }
    )
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: '__DirectiveLocation' })
  },
  get Episode() {
    return new EnumNode({ name: 'Episode' })
  },
  get TestC() {
    return new ObjectNode(
      {
        get a() {
          return new FieldNode(schema.String, undefined, true)
        },
        get c() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'TestC', extension: ((extensions as any) || {}).TestC }
    )
  },
  get O1() {
    return new ObjectNode(
      {
        get b() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get b() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get o1() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'O1', extension: ((extensions as any) || {}).O1 }
    )
  },
  get O2() {
    return new ObjectNode(
      {
        get b() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get b() {
                return new ArgumentsField(schema.String, true)
              },
              get a() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get o2() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'O2', extension: ((extensions as any) || {}).O2 }
    )
  },
  get fake__Locale() {
    return new EnumNode({ name: 'fake__Locale' })
  },
  get fake__Types() {
    return new EnumNode({ name: 'fake__Types' })
  },
  get fake__imageCategory() {
    return new EnumNode({ name: 'fake__imageCategory' })
  },
  get fake__loremSize() {
    return new EnumNode({ name: 'fake__loremSize' })
  },
  get fake__color() {
    return new InputNode(
      {
        get red255() {
          return new InputNodeField(schema.Int, true)
        },
        get green255() {
          return new InputNodeField(schema.Int, true)
        },
        get blue255() {
          return new InputNodeField(schema.Int, true)
        },
      },
      { name: 'fake__color' }
    )
  },
  get fake__options() {
    return new InputNode(
      {
        get useFullAddress() {
          return new InputNodeField(schema.Boolean, true)
        },
        get minMoney() {
          return new InputNodeField(schema.Float, true)
        },
        get maxMoney() {
          return new InputNodeField(schema.Float, true)
        },
        get decimalPlaces() {
          return new InputNodeField(schema.Int, true)
        },
        get imageWidth() {
          return new InputNodeField(schema.Int, true)
        },
        get imageHeight() {
          return new InputNodeField(schema.Int, true)
        },
        get imageCategory() {
          return new InputNodeField(schema.fake__imageCategory, true)
        },
        get randomizeImageUrl() {
          return new InputNodeField(schema.Boolean, true)
        },
        get emailProvider() {
          return new InputNodeField(schema.String, true)
        },
        get passwordLength() {
          return new InputNodeField(schema.Int, true)
        },
        get loremSize() {
          return new InputNodeField(schema.fake__loremSize, true)
        },
        get dateFormat() {
          return new InputNodeField(schema.String, true)
        },
        get baseColor() {
          return new InputNodeField(schema.fake__color, true)
        },
        get minNumber() {
          return new InputNodeField(schema.Float, true)
        },
        get maxNumber() {
          return new InputNodeField(schema.Float, true)
        },
        get precisionNumber() {
          return new InputNodeField(schema.Float, true)
        },
      },
      { name: 'fake__options' }
    )
  },
  get Float() {
    return new ScalarNode({
      name: 'Float',
      extension: ((extensions as any) || {}).Float,
    })
  },
  get examples__JSON() {
    return new ScalarNode({
      name: 'examples__JSON',
      extension: ((extensions as any) || {}).examples__JSON,
    })
  },
}

lazyGetters(schema)
