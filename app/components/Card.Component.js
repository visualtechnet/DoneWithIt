import color from "../config/colors"

const { View, StyleSheet, Text, Image } = require("react-native")

function Card({ title, subtitle, imageSource, backgroundColor }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.imageContent} />
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    margin: 10,
    borderTopLeftRadius: "20%",
    borderTopRightRadius: "20%",
    borderBottomLeftRadius: "20%",
    borderBottomRightRadius: "20%",
  },
  textWrapper: {
    padding: 20,
  },
  imageContent: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: "20%",
    borderTopRightRadius: "20%",
  },
  textTitle: {
    fontSize: 24,
    color: color.primary,
  },
  textSubtitle: {
    fontSize: 21,
    color: color.secondary,
  },
})
