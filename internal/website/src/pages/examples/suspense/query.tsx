import React from 'react';

import { Heading, Text } from '@chakra-ui/react';
import Link from '@docusaurus/Link';

import { ExamplesPage } from '../../../components/Examples/App';
import { StackBlitzEmbed } from '../../../components/Examples/StackblitzEmbed';

export default function Page() {
  return (
    <ExamplesPage title="Example React Suspense Query">
      <Heading>GraphQL Queries in React Suspense</Heading>
      <Text>
        In this example you can see some usage examples of{' '}
        <Link to="/react/query#usequery">useQuery</Link> and{' '}
        <Link to="/react/query#graphql-hoc">graphql HOC</Link>.
      </Text>
      <StackBlitzEmbed file="src/components/Hello.tsx" initialPath="/" />
    </ExamplesPage>
  );
}
