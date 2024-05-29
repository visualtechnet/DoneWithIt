import { SafeAreaView, StyleSheet } from "react-native"

import Constants from "expo-constants"

function LayoutScreen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

export default LayoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
})
