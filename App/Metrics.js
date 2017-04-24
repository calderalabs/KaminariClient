import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  baseMargin: 10,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54
}

export default metrics
