import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { createReactTestClient } from './utils';

test('Basic Non-Suspense', async () => {
  const { query, graphql } = await createReactTestClient();

  const Comp = graphql(
    () => {
      return <p>{query.hello}</p>;
    },
    {
      suspense: false,
    }
  );

  const { container } = render(<Comp />);

  expect(container).not.toBeEmptyDOMElement();

  expect(container).toHaveTextContent('');

  await waitFor(() => {
    expect(container).toHaveTextContent('hello world');
  });
});

test('Basic Suspense', async () => {
  const { query, graphql } = await createReactTestClient();

  const Comp = graphql(
    () => {
      return <p>{query.hello}</p>;
    },
    {
      suspense: {
        fallback: 'Loading...',
      },
    }
  );

  const { container } = render(<Comp />);

  expect(container).toHaveTextContent('Loading...');

  await waitFor(() => {
    expect(container).toHaveTextContent('hello world');
  });

  expect(container).not.toHaveTextContent('Loading...');
});
