import { Button, Modal, Pressable, Text, View } from 'react-native'
import { useState } from 'react'

export default function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <Button title='Press me' onPress={() => setIsModalVisible(true)} />
     <Modal visible={isModalVisible}
     onRequestClose={() => setIsModalVisible(false)}
     animationType='slide'
     presentationStyle='pageSheet'
     >
      <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        backgroundColor: 'plum',
      }}
      >
        <Text>Modal content</Text>
        <Button title='Close' color="midnightblue" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}
