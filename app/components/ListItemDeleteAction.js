import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import colors from "../config/colors"

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={30} />
      </View>
    </TouchableOpacity>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 100,
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
})
