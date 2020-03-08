import * as React from 'react'
import styled from 'styled-components'
import { types } from '../../connector'
import { ObjectView } from './ObjectView'
import { Box, BoxHeader } from '../Box'

const TypeName = styled.span`
  color: rgb(211, 130, 245);
  font-weight: 700;
`

const View = styled.div`
  margin-left: 1em;
`

const Bracket = styled.span`
  font-size: 1.9rem;
  font-weight: 600;
  color: rgb(68, 80, 154);
`

export interface TypeProps {
  type: types.ObjectType
}

export function Type({ type }: TypeProps) {
  return (
    <Box>
      <BoxHeader>
        type <TypeName>{type.name}</TypeName>
        <Bracket>{` {`}</Bracket>
      </BoxHeader>
      <View>
        <ObjectView object={type}></ObjectView>
      </View>
      <Bracket>{`}`}</Bracket>
    </Box>
  )
}
