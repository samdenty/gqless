import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Box, Spinner } from '@chakra-ui/react';

export function StackBlitzEmbed({ file }: { file: string }) {
  const { height } = useWindowSize();

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const timeout = setTimeout(() => {
      if (isMounted) setShowSpinner(false);
    }, 5000);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showSpinner && (
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
      )}

      <Box
        as="iframe"
        width="100%"
        height={height - 120}
        src={`https://stackblitz.com/edit/stackblitz-gqless?embed=1&file=${file}`}
      />
    </>
  );
}
