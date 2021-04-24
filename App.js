import React from 'react'
import { StyleSheet } from 'react-native';
import {createStore} from 'redux'
import middleware from './middleware'
import reducer from './reducers'
import {Provider as StoreProvider} from 'react-redux'
import {NavigationContainer, DarkTheme as NavigationDarkTheme} from '@react-navigation/native'
import MainView from './components/MainView'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper'

export default function App() {
  const store = createStore(reducer, middleware)

  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
  }

  return (
    <StoreProvider store={store} style={styles.container}>
      <PaperProvider theme={CombinedDarkTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={CombinedDarkTheme}>
            <MainView/>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
