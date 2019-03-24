import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const ActivityIndicatorExample = (props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Activity Indicator Component</Text>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#ff00ff" />
        <ActivityIndicator size="small" color="#4A90E2" />
        <ActivityIndicator size="large" color="#D0021B" />
        <ActivityIndicator size="small" color="#9013FE" />
      </View>
    </View>
  )
}

export default ActivityIndicatorExample

const styles = StyleSheet.create({
  row: {
    padding: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 40
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }, 
  text: {
    textAlign: 'center'
  }
})