import * as React from 'react'
import styled from 'styled-components'
import { ValueRef, types } from '../../connector'
import { ObjectValue } from './ObjectValue'
import { Box } from '../Box'

export interface ValueProps {
  value: ValueRef
}

export function Value({ value }: ValueProps) {
  return (
    <Box>
      {value.type instanceof types.ObjectType ? (
        <ObjectValue value={value as ValueRef<types.ObjectType>}></ObjectValue>
      ) : null}
    </Box>
  )
}
