import { Container } from './styles'

import { StyledComponentProps } from '@utils'

import React from 'react'
import { ViewProps } from 'react-native'

type Props = ViewProps & StyledComponentProps<typeof Container>

export const Box: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Box.displayName = 'Box'
