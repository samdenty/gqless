import { GraphQLError } from 'graphql';

import { GQlessError } from '../src/Error';

test('error creation', () => {
  const a = new GQlessError('a');

  const b = GQlessError.create(Error('a'));

  const c = GQlessError.create(a);

  const d = GQlessError.create(123);

  const e = new GQlessError('abc', {
    graphQLErrors: [new GraphQLError('gql error')],
  });

  expect(a).toStrictEqual(b);

  expect(a).toBe(c);

  expect(d.message).toBe('Unexpected error type');
  expect(d.otherError).toBe(123);

  expect(JSON.stringify(e)).toBe(
    `{"message":"abc","graphQLErrors":[{"message":"gql error"}]}`
  );

  expect(e).toEqual(
    Object.assign(Error('abc'), {
      graphqlErrors: [new GraphQLError('gql error')],
    })
  );
});
