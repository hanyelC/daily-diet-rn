import { Avatar, Container } from './styles'

import Logo from '@assets/logo.svg'
import kermit from '@assets/kermit.jpg'

export const Header = () => {
  return (
    <Container>
      <Logo />

      <Avatar source={kermit} alt="" />
    </Container>
  )
}
