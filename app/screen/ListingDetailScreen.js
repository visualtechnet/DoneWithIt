import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import ListItem from "../components/ListItem.Component"
import colors from "../config/colors"

function ListingDetailScreen({
  title,
  subtitle,
  imageSource,
  description,
  seller,
  totalListings,
  sellerPhoto,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={{ uri: imageSource }} style={styles.imageContent} />
          <View style={styles.detailContent}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <ListItem
            seller={seller}
            totalListings={totalListings}
            sellerPhoto={sellerPhoto}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListingDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContent: {
    width: "100%",
    height: 300,
  },
  detailContent: {
    padding: 20,
  },
  header: {
    fontSize: 36,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 24,
    color: colors.secondary,
  },
  description: {
    fontSize: 18,
    color: colors.dark,
    marginVertical: 20,
    height: 200,
  },
})
