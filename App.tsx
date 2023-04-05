import { Home } from '@screens'
import theme from '@theme'

import {
  // eslint-disable-next-line camelcase
  NunitoSans_400Regular,
  // eslint-disable-next-line camelcase
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

// eslint-disable-next-line no-undef
if (__DEV__) {
  require('react-devtools')
}

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    NunitoSans_400Regular,
    // eslint-disable-next-line camelcase
    NunitoSans_700Bold,
  })

  if (!fontsLoaded) return <ActivityIndicator />

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
