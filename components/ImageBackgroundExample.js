import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'

const flowersJPG = require('../assets/flowers.jpg')

const ImageBackgroundExample = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.image}
        source={flowersJPG} 
      >
      <Text style={styles.text}>Image Background Example</Text>
      </ImageBackground>
    </View>
  )
}

export default ImageBackgroundExample

// Get dimensions object
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30
  },
  container: {
    width, 
    height: 200
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})