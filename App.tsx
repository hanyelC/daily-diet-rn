import { Home } from '@screens'
import theme from '@theme'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'

// eslint-disable-next-line no-undef
if (__DEV__) {
  require('react-devtools')
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
