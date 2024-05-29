import { StyleSheet, Text, TouchableOpacity } from "react-native"

import colors from "../config/colors"

function AppButton({ color = "primary", children }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "90%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.dark,
    shadowOffset: 2,
    shadowOpacity: 0.9,
    shadowRadius: 1,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: colors.light,
    textTransform: "uppercase",
    fontWeight: "700",
  },
})
