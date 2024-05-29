import { StyleSheet, View } from "react-native"
import colors from "../config/colors"

function ListItemSeparator() {
  return <View style={styles.container} />
}

export default ListItemSeparator

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.lightGreen,
    marginVertical: 50,
  },
})
