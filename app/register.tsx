import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={styles.main}>
      <Text>register</Text>
      <Link href={'/'}>Index</Link>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
})
