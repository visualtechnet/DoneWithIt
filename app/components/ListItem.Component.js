import { Image, StyleSheet, Text, View } from "react-native"

function ListItem({ seller, totalListings, sellerPhoto }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: sellerPhoto }} style={styles.sellerPhoto} />
      <View style={styles.sellerInfo}>
        <Text style={styles.sellerText}>{seller}</Text>
        <Text>{totalListings} Listings</Text>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    margin: 10,
  },
  sellerInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sellerText: {
    fontSize: 21,
  },
  sellerPhoto: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
})
