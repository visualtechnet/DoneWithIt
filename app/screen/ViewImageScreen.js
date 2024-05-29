import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"

function ViewImageScreen(props) {
  return (
    <View>
      <MaterialCommunityIcons name='close' size={35} />
      <MaterialCommunityIcons name='trash-can-outline' size={35} />
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
