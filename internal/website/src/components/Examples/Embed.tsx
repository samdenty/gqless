import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Box, Spinner, Stack } from '@chakra-ui/react';

const EmbedSpinner = ({ frameHeight }: { frameHeight: number }) => {
  const [hideSpinner, setHideSpinner] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const timeout = setTimeout(() => {
      if (isMounted) setHideSpinner(true);
    }, 5000);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  if (hideSpinner) return null;

  return (
    <Box
      pos="absolute"
      width="100%"
      height={frameHeight}
      minHeight={frameHeight}
    >
      <Spinner
        size="xl"
        thickness="3px"
        position="absolute"
        left="50%"
        top="50%"
        zIndex={-1}
        emptyColor="gray.200"
        color="blue.500"
        speed="0.8s"
      />
    </Box>
  );
};

export interface EmbedProps {
  file: string;
  initialPath: string;
}

export function CodeSandboxEmbed({ file, initialPath }: EmbedProps) {
  const { height } = useWindowSize(0, 400);

  if (!file.startsWith('/')) file = '/' + file;

  const src = `https://codesandbox.io/embed/prod-framework-b3m2q?fontsize=14&hidenavigation=1&module=${encodeURIComponent(
    file
  )}&theme=dark&initialpath=${encodeURIComponent(initialPath)}`;

  const frameHeight = height - 150;

  return (
    <Stack height="100%" width="100%">
      <EmbedSpinner frameHeight={frameHeight} />

      <Box
        as="iframe"
        width="100%"
        height={frameHeight}
        minHeight={frameHeight}
        src={src}
        onMouseOver={() => {
          document.body.style.overflowY = 'hidden';
          document.body.style.overflowX = 'hidden';
        }}
        onMouseOut={() => {
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'auto';
        }}
      />
    </Stack>
  );
}
