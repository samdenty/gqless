import {
  Arguments,
  ArgumentsField,
  ArrayNode,
  FieldNode,
  InputNode,
  InputNodeField,
  ObjectNode,
  ScalarNode
} from '../../src'

export const Scalar = new ScalarNode()

export const Fields = new ObjectNode(
  { scalar: new FieldNode(Scalar) },
  { name: 'Object' }
)

export const Query = new ObjectNode(
  {
    object: new FieldNode(Fields),
    scalar: new FieldNode(Scalar),
    arrayOfObjects: new FieldNode(
      new ArrayNode(Fields),
      new Arguments({
        scalar: new ArgumentsField(Scalar, true),
        input: new ArgumentsField(
          new InputNode(
            { scalar: new InputNodeField(Scalar) },
            { name: 'Input' }
          ),
          true
        ),
      })
    ),
    arrayOfScalar: new FieldNode(new ArrayNode(Scalar)),
    get query(): any {
      return new FieldNode(Query)
    },
  },
  { name: 'Query' }
)
