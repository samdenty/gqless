// @ts-nocheck
import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  EnumNode,
  InputNode,
  InputNodeField,
} from 'gqless'

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get object() {
          return new FieldNode(schema.Object, undefined, false)
        },
        get string() {
          return new FieldNode(schema.String, undefined, false)
        },
        get arrayOfObjects() {
          return new FieldNode(
            new ArrayNode(schema.Object, false),
            new Arguments({
              get string() {
                return new ArgumentsField(schema.String, true)
              },
              get input() {
                return new ArgumentsField(schema.Input, true)
              },
            }),
            false
          )
        },
        get arrayOfString() {
          return new FieldNode(
            new ArrayNode(schema.String, false),
            undefined,
            false
          )
        },
        get query() {
          return new FieldNode(schema.Query, undefined, false)
        },
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query }
    )
  },
  get Object() {
    return new ObjectNode(
      {
        get string() {
          return new FieldNode(schema.String, undefined, false)
        },
        get int() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get enum() {
          return new FieldNode(schema.Enum, undefined, false)
        },
        get overriddenString() {
          return new FieldNode(schema.String, undefined, false)
        },
        get overriddenInt() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      { name: 'Object', extension: ((extensions as any) || {}).Object }
    )
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    })
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    })
  },
  get Enum() {
    return new EnumNode({ name: 'Enum' })
  },
  get Input() {
    return new InputNode(
      {
        get string() {
          return new InputNodeField(schema.String, false)
        },
      },
      { name: 'Input' }
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
