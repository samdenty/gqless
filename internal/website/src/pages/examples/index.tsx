import React from 'react';
import { FaCircle, FaReact } from 'react-icons/fa';

import { Heading, Stack, Text } from '@chakra-ui/react';
import Link from '@docusaurus/Link';

import { ExamplesPage } from '../../components/Examples/App';
import { NavLink } from '../../components/Examples/NavLink';

export default function Page() {
  return (
    <ExamplesPage title="Examples">
      <Stack maxW="75ch" textAlign="justify">
        <Heading as="h1">API</Heading>
        <Text>
          All the examples made here are around a playground API specially made
          to showcase usual usage of GraphQL APIs in <b>gqless</b>.
        </Text>
        <Text>
          You can also check it{' '}
          <Link to="http://examples-api.gqless.com">
            http://examples-api.gqless.com
          </Link>{' '}
          and play with it, since it also offers a playground using{' '}
          <Link to="https://altair.sirmuel.design/">Altair GraphQL Client</Link>{' '}
          and an interactive visualization of the schema using{' '}
          <Link to="https://github.com/APIs-guru/graphql-voyager">
            GraphQL Voyager
          </Link>
          .
        </Text>
        <Text>Feel free to suggest new specific features to offer in it.</Text>
        <Heading as="h2">Online Editor and Visualization</Heading>
        <Text>
          These examples are made using{' '}
          <Link to="http://stackblitz.io/">
            <b>StackBlitz</b>
          </Link>
          , which allows you to modify the examples and play with gqless{' '}
          <b>without installing anything</b>.
        </Text>
        <Heading as="h2">Examples</Heading>
        <Text>
          We are planning to add more examples about all the different expected
          usages of <b>gqless</b>.
        </Text>
        <Text>
          And we encourage you to{' '}
          <Link to="https://discord.gg/FjwyGQKYER">
            Join our Discord server
          </Link>{' '}
          or open a new{' '}
          <Link to="https://github.com/gqless/gqless/issues">GitHub issue</Link>{' '}
          to request some examples about specific issues you might have, and you
          will also be helping everyone.
        </Text>
        <br />
        <Text>For now, you can check some examples about:</Text>

        <Heading as="h3" fontSize="1.3em" display="flex" alignItems="center">
          <FaCircle fontSize="0.8rem" />{' '}
          <Text as="span" marginLeft="0.4rem">
            gqless in React Suspense
          </Text>
        </Heading>

        <Stack isInline spacing="1">
          <NavLink
            label="React Suspense Query"
            href="/examples/suspense/query"
            icon={FaReact}
          />
          <NavLink
            label="React Suspense Authentication"
            href="/examples/suspense/auth"
            icon={FaReact}
          />
        </Stack>
      </Stack>
    </ExamplesPage>
  );
}
