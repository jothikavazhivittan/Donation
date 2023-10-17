import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './navigation/MainNavigation'
import {NavigationContainer} from "@react-navigation/native"
import { Provider } from 'react-redux'
import Store ,{persistor}from './redux/reducers/Store'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
       <Provider store={Store}>
        <PersistGate persistor={persistor} loading={null}>
    <NavigationContainer>
           <MainNavigation/>
     </NavigationContainer>
     </PersistGate>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})