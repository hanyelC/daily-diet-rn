import { Container } from './styles'

import { Box, Header, Heading, Text } from '@components'

import React from 'react'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Box variant="success">
        <Heading size="lg">Heading LG</Heading>
        <Heading size="md">Heading MD</Heading>
        <Heading size="sm">Heading SM</Heading>
        <Heading size="xs">Heading XS</Heading>
        <Text size="md">Text MD</Text>
        <Text size="sm">Text SM</Text>
        <Text size="xs">Text XS</Text>
      </Box>
    </Container>
  )
}
