import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {
  const [location, setLocation] = useState()
  const [ok, setOk] = useState(true)

  const [city, setCity] = useState()

  const ask = async () => {
    // 앱 사용하는 중에만 위치 허용
    const { granted } = await Location.requestForegroundPermissionsAsync()
    if (!granted) setOk(false)

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    )
    setCity(location[0].city)
  }

  useEffect(() => {
    ask()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4facfe',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'black',
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
  },
  description: {
    fontSize: 50,
    marginTop: -30,
  },
})
