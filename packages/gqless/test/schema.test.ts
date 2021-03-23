import { parseSchemaType, ParseSchemaTypeInfo } from '../src/Schema';

describe('parseSchemaType', () => {
  test('nullable type', () => {
    const info = parseSchemaType('String');

    expect(info).toEqual<ParseSchemaTypeInfo>({
      pureType: 'String',
      isNullable: true,
      nullableItems: true,
      isArray: false,
    });
  });

  test('non-nullable type', () => {
    const info = parseSchemaType('String!');

    expect(info).toEqual<ParseSchemaTypeInfo>({
      pureType: 'String',
      isNullable: false,
      nullableItems: true,
      isArray: false,
    });
  });
  test('nullable array with nullable items', () => {
    const info = parseSchemaType('[String]');

    expect(info).toEqual<ParseSchemaTypeInfo>({
      pureType: 'String',
      isNullable: true,
      nullableItems: true,
      isArray: true,
    });
  });

  test('nullable array with non-nullable items', () => {
    const info = parseSchemaType('[String!]');

    expect(info).toEqual<ParseSchemaTypeInfo>({
      pureType: 'String',
      isNullable: true,
      nullableItems: false,
      isArray: true,
    });
  });
});
