import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text>Component Demo</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
});