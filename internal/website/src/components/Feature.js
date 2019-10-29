import styled from '@emotion/styled'
import useBaseUrl from '@docusaurus/useBaseUrl'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Overflow } from './Overflow'

const easeInOutCubic = [0.645, 0.045, 0.355, 1]

const StyledFeature = styled(motion.div)`
  color: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
`

const Image = styled(motion.img)`
  height: 10rem;
  width: 10rem;
  margin-bottom: 1.5rem;
`

const Title = styled(motion.h3)`
  width: 100%;
`

const Description = styled(motion.p)`
  width: 100%;
  margin: 0;
  text-decoration: none !important;
`

export const Feature = ({ title, imageUrl, children }) => {
  const baseUrl = useBaseUrl() || ''

  return (
    <StyledFeature
      variants={{
        hidden: {
          opacity: 0,
          translateY: '-100%',
        },
        visible: {
          opacity: 1,
          translateY: 0,
          transition: {
            translateY: { type: 'spring', mass: 0.7, stiffness: 200 },
            delayChildren: 0.5,
            staggerChildren: 0.45,
          },
        },
      }}
      transition={{
        backgroundColor: { duration: 0.25 },
        scale: { type: 'spring', mass: 0.5, stiffness: 300 },
      }}
      whileHover={{
        scale: 0.85,
        backgroundColor: 'rgba(224, 0, 151, 0.1)',
      }}
    >
      <Overflow>
        <Image src={baseUrl + imageUrl} alt={title} />
        <Title
          variants={{
            hidden: { translateX: '-100%' },
            visible: { translateX: 0 },
          }}
          transition={{ ease: easeInOutCubic, duration: 0.8 }}
        >
          {title}
        </Title>

        <Overflow>
          <Description
            variants={{
              hidden: { translateY: '-100%', opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ ease: easeInOutCubic, duration: 0.6 }}
          >
            {children}
          </Description>
        </Overflow>
      </Overflow>
    </StyledFeature>
  )
}
