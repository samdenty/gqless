import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Box, Spinner, Stack } from '@chakra-ui/react';

const EmbedSpinner = () => {
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
  );
};

export interface StackBlitzProps {
  file: string;
  initialPath: string;
}

export function StackBlitzEmbed({ file, initialPath }: StackBlitzProps) {
  const { height } = useWindowSize(0, 400);

  return (
    <Stack height="100%" width="100%">
      <EmbedSpinner />

      <Box
        as="iframe"
        width="100%"
        height={height - 120}
        minHeight={height - 120}
        src={`https://stackblitz.com/edit/stackblitz-gqless?embed=1&file=${file}&initialpath=${initialPath}`}
      />
    </Stack>
  );
}
