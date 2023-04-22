import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.main}>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
})
