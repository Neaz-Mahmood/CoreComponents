import { Button, Modal, Pressable, StatusBar, Text, View } from 'react-native'
import { useState } from 'react'

export default function StatusBarExample() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <Text>
        Test
      </Text>
    <StatusBar backgroundColor='midnightblue' barStyle='light-content' hidden />
    </View>
  )
}
