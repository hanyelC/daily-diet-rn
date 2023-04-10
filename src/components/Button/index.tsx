import { Container } from './styles'

import { StyledComponentProps } from '@utils'

import React, { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps &
  Omit<StyledComponentProps<typeof Container>, 'isActive'>

export const Button: React.FC<Props> = ({ children, ...props }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      {...props}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      isActive={isActive}
      activeOpacity={1}
    >
      {children}
    </Container>
  )
}

Button.displayName = 'Button'
