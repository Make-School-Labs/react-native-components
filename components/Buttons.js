import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Slider, Switch } from 'react-native'

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue: 0, 
      switchOn: false
    }
  }
  render() {
    const { sliderValue, switchOn } = this.state
    const rowStyle = this.state.switchOn ? styles.row : styles.rowDark
    const textStyle = this.state.switchOn ? styles.text : styles.textLight

  return (
    <View style={rowStyle}>

      <Text style={textStyle}>Button Example</Text>

      <View style={[styles.container, styles.horizontal]}>
        <View style={{flexDirection:'column'}}>

          <Button
            onPress={() => console.log('test')}
            title="Test Button"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

          <Text style={{textAlign:'center'}}>{sliderValue}</Text>

          <Slider 
            style={{width:300}} 
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={(value) => this.setState({ sliderValue: value })}
          />

          <Switch 
            style={{marginTop: 20}}
            value={switchOn}
            onValueChange={(value) => this.setState({ switchOn: value })}
          />
          
        </View>
      </View>
    </View>
  )
  }
}

export default Buttons

const styles = StyleSheet.create({
  row: {
    padding: 40,
    backgroundColor: '#eee'
  },
  rowDark: {
    padding: 40,
    backgroundColor: '#aaa'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }, 
  text: {
    textAlign: 'center'
  }, 
  textLight: {
    textAlign: 'center',
    color: '#fff'
  }
})