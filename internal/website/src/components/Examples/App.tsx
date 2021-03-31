import React, { ReactNode, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Sidebar } from './Sidebar';

const Topbar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      display={{ base: 'flex', md: 'none' }}
      borderBottomWidth="1px"
    >
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent shadow="none" position="relative" maxW="64">
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="blue.500"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

function useSyncThemes() {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];

    const observer = new MutationObserver((mutations) => {
      for (const _m of mutations.filter(
        (v) => v.attributeName === 'data-theme'
      )) {
        setColorMode(htmlElement.getAttribute('data-theme'));
      }
    });

    observer.observe(htmlElement, {
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [setColorMode]);
}

type AppChildren = ReactNode | ReactNode[];

const App = ({ children }: { children?: AppChildren }) => {
  useSyncThemes();
  return (
    <Flex flexDirection="column">
      <Topbar />
      <Flex flex="1" overflow="hidden" h="calc(100vh - 80px)" m="2px">
        <Sidebar display={{ base: 'none', md: 'flex' }} />

        <Box
          overflowY="auto"
          borderWidth="2px"
          p="1rem"
          h="full"
          w="full"
          children={children}
        />
      </Flex>
    </Flex>
  );
};

const useMobileMenuState = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  useEffect(() => {
    if (isMobile == false) {
      onClose();
    }
  }, [isMobile, onClose]);
  return { isOpen, onClose, onOpen };
};

const theme = extendTheme({
  styles: {
    global: {
      body: null,
    },
  },
});

export function ExamplesPage({
  children,
  title,
}: {
  children?: AppChildren;

  title: string;
}) {
  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;
  return (
    <Layout title={title} description={siteConfig.tagline}>
      <ChakraProvider theme={theme} resetCSS={false}>
        <App children={children} />
      </ChakraProvider>
    </Layout>
  );
}
