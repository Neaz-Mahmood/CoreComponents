import { Button, Text, View, StyleSheet } from 'react-native'
import { useState } from 'react'
import Box from './components/Box'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: 'red', paddingVertical: 100 }}>Box 1</Box>
      <Box style={{ backgroundColor: 'blue' }}>Box 2</Box>
      <Box style={{ backgroundColor: 'red' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "blue"}} >Box 4</Box> 
      <Box style={{ backgroundColor: "red"}} >Box 5</Box> 
      <Box style={{ backgroundColor: "blue"}} >Box 6</Box>  */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 50,
    borderWidth: 6,
    borderColor: 'black',
  },
})
