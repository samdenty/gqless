import React from 'react';
import { useWindowSize } from 'react-use';

import { Box } from '@chakra-ui/react';

export function StackBlitzEmbed({ file }: { file: string }) {
  const { height } = useWindowSize();

  return (
    <Box
      as="iframe"
      width="100%"
      height={height - 120}
      src={`https://stackblitz.com/edit/stackblitz-gqless?embed=1&file=${file}`}
    />
  );
}
