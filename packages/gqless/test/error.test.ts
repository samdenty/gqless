import { GraphQLError } from 'graphql';

import { gqlessError } from '../src/Error';

test('error creation', () => {
  const a = new gqlessError('a');

  const b = gqlessError.create(Error('a'));

  const c = gqlessError.create(a);

  const d = gqlessError.create(123);

  const e = new gqlessError('abc', {
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
