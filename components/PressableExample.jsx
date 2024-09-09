import { Button, Pressable, Text, View } from 'react-native'

export default function PressableExamle() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <Button title='Press me' onPress={() => alert('Button pressed!')} />
      <Pressable
        onPress={() => console.log('Presed')}
        onLongPress={() => console.log('Long pressed')}
        onPressIn={() => console.log('Press in')}
        onPressOut={() => console.log('Press out')}
      >
        <Text>
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio.
          Donec nec odio. Donec nec odio. Donec nec odio. Donec nec odio. Donec
          nec odio. Donec nec odio. Donec nec odio. Donec nec odio. Donec nec
          odio.
        </Text>
      </Pressable>
    </View>
  )
}
