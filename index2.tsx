import {
  StringNode,
  NumberNode,
  ObjectNode,
  ObjectNodeField,
  InputNode,
  InputNodeField,
  Arguments,
  ArgumentsField,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  UScalarNode,
} from './src/new'
import { Schema, SchemaType, Type, SchemaFieldArgs } from './src'
import { Codegen } from './src/new/Codegen'

export const test = (schema: Schema) => {
  const query = null
  const resolvedTypes = new Map<
    keyof Schema['types'],
    ObjectNode<any> | UScalarNode
  >()

  const getType = (name: string) => {
    if (!resolvedTypes.has(name)) {
      if (!schema.types.hasOwnProperty(name)) return null

      resolvedTypes.set(name, createNode(schema.types[name]))
    }

    return resolvedTypes.get(name)
  }
  Object.assign(window, {
    getType,
    resolvedTypes,
    schema,
  })

  const resolveType = (type: Type) =>
    type.kind === 'LIST'
      ? new ArrayNode(query, resolveType(type.ofType), type.nullable)
      : getType(type.name)

  const resolveArgs = (args?: SchemaFieldArgs) => {
    if (!args) return null

    const inputs = {}
    for (const [name, arg] of Object.entries(args)) {
      Object.defineProperty(inputs, name, {
        get() {
          return resolveType(arg)
        },
        configurable: true,
      })
    }

    return new Arguments(query, inputs)
  }

  const createNode = (type: SchemaType) => {
    if (type.kind === 'SCALAR') {
      return type.name === 'Int' || type.name === 'Float'
        ? new NumberNode(query, { name: type.name })
        : type.name === 'ID' || type.name === 'String'
        ? new StringNode(query, { name: type.name })
        : type.name === 'Boolean'
        ? new BooleanNode(query, { name: type.name })
        : new ScalarNode(query, { name: type.name })
    }

    if (type.kind === 'OBJECT') {
      const fields = {}

      for (const field of Object.values(type.fields)) {
        Object.defineProperty(fields, field.name, {
          get() {
            return new ObjectNodeField(
              query,
              resolveType(field.type),
              resolveArgs(field.args),
              field.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new ObjectNode(query, fields, { name: type.name })
    }

    if (type.kind === 'INPUT_OBJECT') {
      const inputs = {}

      for (const inputField of Object.values(type.inputFields)) {
        Object.defineProperty(inputs, inputField.name, {
          get() {
            return new InputNodeField(
              query,
              resolveType(inputField.type),
              inputField.type.nullable
            )
          },
          configurable: true,
        })
      }

      return new InputNode(query, inputs, { name: type.name })
    }
  }

  getType(schema.queryType)
  const codegen = new Codegen(schema)

  console.log(codegen.generate())

  console.log(resolvedTypes)

  // console.log(Query)
  // console.log(schema)
}

console.time()
const query = null
const types = {
  get Query() {
    return new ObjectNode(
      query,
      {
        get user() {
          return new ObjectNodeField(query, types.User, null, true)
        },
        get users() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.User, false),
            null,
            false
          )
        },
        get users2() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, new ArrayNode(query, types.User, true), true),
            null,
            true
          )
        },
        get a() {
          return new ObjectNodeField(query, types.A, null, true)
        },
        get number() {
          return new ObjectNodeField(query, types.Int, null, true)
        },
        get getUser() {
          return new ObjectNodeField(
            query,
            types.User,
            new Arguments(query, {
              get id() {
                return new ArgumentsField(query, types.ID, true)
              },
            }),
            true
          )
        },
        get getUsers() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.User, false),
            new Arguments(query, {
              get id() {
                return new ArgumentsField(query, types.ID, true)
              },
            }),
            false
          )
        },
        get testOrUser() {
          return new ObjectNodeField(query, types.TestOrUser, null, true)
        },
        get test() {
          return new ObjectNodeField(query, types.Test, null, true)
        },
        get testWithInput() {
          return new ObjectNodeField(
            query,
            types.Int,
            new Arguments(query, {
              get id() {
                return new ArgumentsField(query, types.String, true)
              },
              get ids() {
                return new ArgumentsField(
                  query,
                  new ArrayNode(query, types.String, false),
                  false
                )
              },
              get input() {
                return new ArgumentsField(query, types.InputObj, true)
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
      query,
      {
        get id() {
          return new ObjectNodeField(query, types.ID, null, false)
        },
        get name() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get age() {
          return new ObjectNodeField(query, types.Int, null, true)
        },
        get b() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get c() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get d() {
          return new ObjectNodeField(query, types.String, null, true)
        },
      },
      { name: 'User' }
    )
  },
  get ID() {
    return new StringNode(query, { name: 'ID' })
  },
  get String() {
    return new StringNode(query, { name: 'String' })
  },
  get Int() {
    return new NumberNode(query, { name: 'Int' })
  },
  get A() {
    return new ObjectNode(
      query,
      {
        get b() {
          return new ObjectNodeField(query, types.B, null, true)
        },
      },
      { name: 'A' }
    )
  },
  get B() {
    return new ObjectNode(
      query,
      {
        get c() {
          return new ObjectNodeField(query, types.Int, null, true)
        },
        get d() {
          return new ObjectNodeField(query, types.Int, null, true)
        },
      },
      { name: 'B' }
    )
  },
  get TestOrUser() {
    return undefined
  },
  get TestB() {
    return new ObjectNode(
      query,
      {
        get a() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get b() {
          return new ObjectNodeField(query, types.String, null, true)
        },
      },
      { name: 'TestB' }
    )
  },
  get Test() {
    return undefined
  },
  get InputObj() {
    return new InputNode(
      query,
      {
        get a() {
          return new InputNodeField(query, types.String, false)
        },
      },
      { name: 'InputObj' }
    )
  },
  get Mutation() {
    return new ObjectNode(
      query,
      {
        get deleteUser() {
          return new ObjectNodeField(
            query,
            types.Int,
            new Arguments(query, {
              get id() {
                return new ArgumentsField(query, types.ID, false)
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
      query,
      {
        get types() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__Type, false),
            null,
            false
          )
        },
        get queryType() {
          return new ObjectNodeField(query, types.__Type, null, false)
        },
        get mutationType() {
          return new ObjectNodeField(query, types.__Type, null, true)
        },
        get subscriptionType() {
          return new ObjectNodeField(query, types.__Type, null, true)
        },
        get directives() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__Directive, false),
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
      query,
      {
        get kind() {
          return new ObjectNodeField(query, types.__TypeKind, null, false)
        },
        get name() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get description() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get fields() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__Field, true),
            new Arguments(query, {
              get includeDeprecated() {
                return new ArgumentsField(query, types.Boolean, true)
              },
            }),
            true
          )
        },
        get interfaces() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__Type, true),
            null,
            true
          )
        },
        get possibleTypes() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__Type, true),
            null,
            true
          )
        },
        get enumValues() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__EnumValue, true),
            new Arguments(query, {
              get includeDeprecated() {
                return new ArgumentsField(query, types.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__InputValue, true),
            null,
            true
          )
        },
        get ofType() {
          return new ObjectNodeField(query, types.__Type, null, true)
        },
      },
      { name: '__Type' }
    )
  },
  get __TypeKind() {
    return undefined
  },
  get Boolean() {
    return new BooleanNode(query, { name: 'Boolean' })
  },
  get __Field() {
    return new ObjectNode(
      query,
      {
        get name() {
          return new ObjectNodeField(query, types.String, null, false)
        },
        get description() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get args() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__InputValue, false),
            null,
            false
          )
        },
        get type() {
          return new ObjectNodeField(query, types.__Type, null, false)
        },
        get isDeprecated() {
          return new ObjectNodeField(query, types.Boolean, null, false)
        },
        get deprecationReason() {
          return new ObjectNodeField(query, types.String, null, true)
        },
      },
      { name: '__Field' }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      query,
      {
        get name() {
          return new ObjectNodeField(query, types.String, null, false)
        },
        get description() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get type() {
          return new ObjectNodeField(query, types.__Type, null, false)
        },
        get defaultValue() {
          return new ObjectNodeField(query, types.String, null, true)
        },
      },
      { name: '__InputValue' }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      query,
      {
        get name() {
          return new ObjectNodeField(query, types.String, null, false)
        },
        get description() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get isDeprecated() {
          return new ObjectNodeField(query, types.Boolean, null, false)
        },
        get deprecationReason() {
          return new ObjectNodeField(query, types.String, null, true)
        },
      },
      { name: '__EnumValue' }
    )
  },
  get __Directive() {
    return new ObjectNode(
      query,
      {
        get name() {
          return new ObjectNodeField(query, types.String, null, false)
        },
        get description() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get locations() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__DirectiveLocation, false),
            null,
            false
          )
        },
        get args() {
          return new ObjectNodeField(
            query,
            new ArrayNode(query, types.__InputValue, false),
            null,
            false
          )
        },
        get onOperation() {
          return new ObjectNodeField(query, types.Boolean, null, false)
        },
        get onFragment() {
          return new ObjectNodeField(query, types.Boolean, null, false)
        },
        get onField() {
          return new ObjectNodeField(query, types.Boolean, null, false)
        },
      },
      { name: '__Directive' }
    )
  },
  get __DirectiveLocation() {
    return undefined
  },
  get TestC() {
    return new ObjectNode(
      query,
      {
        get a() {
          return new ObjectNodeField(query, types.String, null, true)
        },
        get c() {
          return new ObjectNodeField(query, types.String, null, true)
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
      query,
      {
        get red255() {
          return new InputNodeField(query, types.Int, true)
        },
        get green255() {
          return new InputNodeField(query, types.Int, true)
        },
        get blue255() {
          return new InputNodeField(query, types.Int, true)
        },
      },
      { name: 'fake__color' }
    )
  },
  get fake__options() {
    return new InputNode(
      query,
      {
        get useFullAddress() {
          return new InputNodeField(query, types.Boolean, true)
        },
        get minMoney() {
          return new InputNodeField(query, types.Float, true)
        },
        get maxMoney() {
          return new InputNodeField(query, types.Float, true)
        },
        get decimalPlaces() {
          return new InputNodeField(query, types.Int, true)
        },
        get imageWidth() {
          return new InputNodeField(query, types.Int, true)
        },
        get imageHeight() {
          return new InputNodeField(query, types.Int, true)
        },
        get imageCategory() {
          return new InputNodeField(query, types.fake__imageCategory, true)
        },
        get randomizeImageUrl() {
          return new InputNodeField(query, types.Boolean, true)
        },
        get emailProvider() {
          return new InputNodeField(query, types.String, true)
        },
        get passwordLength() {
          return new InputNodeField(query, types.Int, true)
        },
        get loremSize() {
          return new InputNodeField(query, types.fake__loremSize, true)
        },
        get dateFormat() {
          return new InputNodeField(query, types.String, true)
        },
        get baseColor() {
          return new InputNodeField(query, types.fake__color, true)
        },
        get minNumber() {
          return new InputNodeField(query, types.Float, true)
        },
        get maxNumber() {
          return new InputNodeField(query, types.Float, true)
        },
        get precisionNumber() {
          return new InputNodeField(query, types.Float, true)
        },
      },
      { name: 'fake__options' }
    )
  },
  get Float() {
    return new NumberNode(query, { name: 'Float' })
  },
  get examples__JSON() {
    return new ScalarNode(query, { name: 'examples__JSON' })
  },
}
console.timeEnd()

if (window.__ASDASD_) {
  const String = new StringNode(null)
  const ID = new StringNode(null)
  const Int = new NumberNode(null)
  const Float = new NumberNode(null)

  const User = new ObjectNode(null, {
    name: new ObjectNodeField(null, String),
    id: new ObjectNodeField(null, ID),
    age: new ObjectNodeField(null, Int),
  })

  const Test = new InputNode(null, {
    test: new InputNodeField(null, String),
  })

  const Filter = new InputNode(null, {
    count: new InputNodeField(null, Int),
    before: new InputNodeField(null, ID),
    after: new InputNodeField(null, ID),
    array: new InputNodeField(null, new ArrayNode(null, ID), true),
  })

  type A = typeof Filter.a
  Filter.provide({
    after: '10',
    before: '10',
    count: 10,
    array: ['hello'],
  })

  // input.provide({
  //   id: 'hello',
  // })

  const a = new Arguments(null, {
    filter: new ArgumentsField(null, Filter),
  })
  a.provide({ filter: { after: '', before: '', count: 10 } })
  // a.delete.

  const Query = new ObjectNode(null, {
    user: new ObjectNodeField(null, User),
    users: new ObjectNodeField(null, new ArrayNode(null, User)),
    users2: new ObjectNodeField(
      null,
      new ArrayNode(null, new ArrayNode(null, User))
    ),
  })

  var q: ObjectNode<{
    a: number
    people: { name: string }[]
    user: {
      name: string
      a: { b: { c: number } }
    }
    $args: {
      user: { id: string }
    }
  }>

  // q.fields.people
  // q.fields.user.node.fields.name
  q.data.user({ id: 'hello' }).name
  q.data.user.name
  q.data.user.a.b.c
  q.data.people[0].name
  q.data.user.name

  Query.data.user.name
  Query.data.users[0].name
  Query.data.users2[0][0].name
  Query.data.user({ id: 10 })
}
