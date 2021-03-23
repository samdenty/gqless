import { AnimationProps, motion } from 'framer-motion';
import * as React from 'react';

import styled from '@emotion/styled';

const easeInOutCubic = [0.645, 0.045, 0.355, 1];

const StyledExample = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  .prism-code {
    padding: 0;
    background: none !important;
  }
`;

const Title = styled(motion.h3)`
  font-weight: 500;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  color: #e976c3;
  margin-bottom: 0.8rem;
`;

const Content = styled(motion.div)``;

export const Example = ({
  title,
  children,
  animate = 'visible',
  initial = 'hidden',
}: {
  title: string;
  children: React.ReactNode;
  animate: AnimationProps['animate'];
  initial?: 'hidden' | 'visible';
}) => (
  <StyledExample initial={initial} animate={animate}>
    <Title
      variants={{
        hidden: {
          translateX: '-100%',
        },
        visible: {
          translateX: '0%',
        },
      }}
      transition={{
        ease: easeInOutCubic,
        duration: 0.6,
      }}
    >
      {title}
    </Title>

    <Content
      variants={{
        hidden: {
          translateX: '-100%',
        },
        visible: {
          translateX: '0%',
        },
      }}
      transition={{
        ease: easeInOutCubic,
        delay: 0.1,
        duration: 0.4,
      }}
    >
      {children}
    </Content>
  </StyledExample>
);
