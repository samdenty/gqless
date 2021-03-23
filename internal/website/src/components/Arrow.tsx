import { motion } from 'framer-motion';
import * as React from 'react';

import styled from '@emotion/styled';

const easeInOutCubic = [0.645, 0.045, 0.355, 1];
const indicateEase = [0.65, -0.15, 0, 1.1];

const StyledArrow = styled(motion.svg)`
  fill: transparent;
  stroke: currentColor;
  overflow: visible;
`;

const INDICATE_DELAY = 0.4;

const loop = {
  repeat: Infinity,
  duration: 3,
  repeatDelay: 1,
};

export const Arrow = ({
  animate = 'visible',
  ...props
}: React.ComponentProps<typeof StyledArrow>) => (
  <StyledArrow
    viewBox="-1 0 18 15"
    initial="hidden"
    animate={animate}
    variants={{
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    }}
    {...props}
  >
    <motion.path
      d="M 1 0 L 10 7.5 L 1 15 z"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{
        hidden: {
          pathLength: 0,
        },
        visible: {
          pathLength: 1,
        },
      }}
      transition={{
        pathLength: { ease: easeInOutCubic, duration: 1 },
      }}
    />

    <motion.path
      d="M 8 1 L 16 7.5 L 8 14"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: { opacity: 1 },
      }}
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{
        delay: INDICATE_DELAY,
        ease: [0.55, 0.44, 0, 0.67],
        ...loop,
      }}
    />

    <motion.path
      d="M 8 1 L 16 7.5 L 8 14"
      variants={{
        hidden: {
          translateX: '0',
          opacity: 1,
          pathLength: 0,
        },
        visible: {
          translateX: '100%',
          opacity: 0,
          pathLength: 1,
        },
      }}
      transition={{
        delay: INDICATE_DELAY,
        ease: indicateEase,
        ...loop,
        pathLength: {
          ease: easeInOutCubic,
          duration: 0.6,
          delay: 0.2,
        },
      }}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledArrow>
);
