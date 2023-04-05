import { Avatar, Container } from './styles'

import kermit from '@assets/kermit.jpg'
import Logo from '@assets/logo.svg'
import React from 'react'
import { ViewProps } from 'react-native'

type Props = ViewProps

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <Logo />

      <Avatar source={kermit} alt="" />
    </Container>
  )
}

Header.displayName = 'Header'
