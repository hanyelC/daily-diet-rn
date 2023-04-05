import { Container } from './styles'

import { StyledComponentProps } from '@utils'

import React from 'react'
import { TextProps } from 'react-native'

type Props = TextProps & StyledComponentProps<typeof Container>

export const Heading: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Heading.displayName = 'Heading'
