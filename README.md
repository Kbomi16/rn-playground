# rn-playground

https://reactnative.dev/docs/components-and-apis

## react-native 규칙

```js
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
  },
})
```

1. react-native는 웹사이트가 아님. div 못 씀! -> View를 쓰자.
2. 모든 text는 Text 컴포넌트에 쓰자.
3. View에 style이 있고, 원하는대로 styles 가능. 이건 웹의 react.js에서 할 수 있는 것과 비슷함. (but 전부는 아님.. 1px green solid 같은..)
4. StyleSheet.create는 object를 생성하는 데 사용함. (자동 완성 기능 제공, 거대한 style 방지)
5. status bar(상태표시줄)는 다음 강의에 (시계, 인터넷, 배터리 등을 표시, 운영체제와 소통하는 component라는 증거)
