import { Container } from './styles'

import { Header } from '@components'

import React from 'react'
import { Text } from 'react-native'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Text>Home</Text>
    </Container>
  )
}
