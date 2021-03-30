import React from 'react';

import {
  HStack,
  Icon,
  Link,
  LinkProps,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import DocusaurusLink from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

interface NavLinkProps extends LinkProps {
  label: string;
  icon?: any;
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, label, href, ...rest } = props;
  const { pathname } = useLocation();

  const isActive = pathname === href;

  return (
    <Link
      as={DocusaurusLink}
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="sm"
      userSelect="none"
      textDecor="none !important"
      href={href}
      to={href}
      aria-current={isActive ? 'page' : undefined}
      color={mode('gray.700', 'gray.400')}
      _hover={{
        bg: mode('gray.100', 'gray.700'),
        color: mode('gray.900', 'white'),
      }}
      _activeLink={{
        bg: mode('gray.200', 'gray.700'),
        color: 'inherit',
      }}
      {...rest}
    >
      <HStack spacing="4">
        <Icon as={icon} fontSize="lg" opacity={0.64} />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  );
};
