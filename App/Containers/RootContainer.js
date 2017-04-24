import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import NavigationRouter from '../NavigationRouter'

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <NavigationRouter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  }
})

export default RootContainer
