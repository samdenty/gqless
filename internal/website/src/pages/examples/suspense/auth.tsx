import React, { useMemo } from 'react';

import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

import { ExamplesPage } from '../../../components/Examples/App';
import {
  CodeSandboxEmbed,
  EmbedProps,
} from '../../../components/Examples/Embed';

export default function Page() {
  const { hash } = useLocation();

  const { file, initialPath } = useMemo<EmbedProps>(() => {
    switch (hash) {
      case '#headers': {
        return {
          file: 'src/gqless/index.ts',
          initialPath: '/login',
        };
      }
      case '#currentUser':
        return {
          file: 'src/hooks/currentUser.ts',
          initialPath: '/login',
        };

      case '#register':
        return {
          file: 'src/components/Register.tsx',
          initialPath: '/register',
        };

      case '#login':
      default:
        return {
          file: 'src/components/Login.tsx',
          initialPath: '/login',
        };
    }
  }, [hash]);
  return (
    <ExamplesPage title="Example React Suspense Query">
      <Heading as="h1">GraphQL Authentication in React Suspense</Heading>

      <Text>
        In this example you can check some examples of{' '}
        <Link to="/react/mutations">useMutation</Link> inside a authentication
        inside GraphQL Flow.
      </Text>
      <Stack>
        <Heading as="h2" fontSize="1rem">
          Relevant files:
        </Heading>
        <UnorderedList>
          <ListItem>
            Handling of authorization headers in fetch:{' '}
            <Link to="#headers">src/gqless/index.ts</Link>
          </ListItem>
          <ListItem>
            Login: <Link to="#login">src/Components/Login.tsx</Link>
          </ListItem>
          <ListItem>
            Register: <Link to="#register">src/Components/Register.tsx</Link>
          </ListItem>
          <ListItem>
            Checking if user is authenticated:{' '}
            <Link to="#currentUser">src/hooks/currentUser.ts</Link>
          </ListItem>
        </UnorderedList>
      </Stack>
      <CodeSandboxEmbed file={file} initialPath={initialPath} />
    </ExamplesPage>
  );
}
