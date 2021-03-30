import React from 'react';
import { FaReact } from 'react-icons/fa';

import { Flex, FlexProps, Spacer, Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export const Sidebar = (props: FlexProps) => {
  return (
    <Flex direction="column" borderRightWidth="1px" width="64" {...props}>
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <NavLink
              label="React Suspense Query"
              href="/examples/suspense/query"
              icon={FaReact}
            />
          </Stack>
        </Stack>
        <Spacer />
      </Flex>
    </Flex>
  );
};
