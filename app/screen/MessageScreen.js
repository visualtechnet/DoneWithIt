import { useState } from "react"
import { FlatList } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import ListItemDeleteAction from "../components/ListItemDeleteAction"
import ListItemSeparator from "../components/ListItemSeparator"
import ListingDetailScreen from "./ListingDetailScreen"

function MessageScreen({ list }) {
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {}

  return (
    <FlatList
      data={list}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <GestureHandlerRootView>
          <ListingDetailScreen
            title={item.title}
            subtitle={item.subtitle}
            imageSource={item.imageSource}
            description={item.description}
            key={item.id}
            seller={item.seller}
            sellerPhoto={item.sellerPhoto}
            totalListings={item.totalListings}
            onPress={() => console.log("asdfasfd")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={handleDelete} />
            )}
          />
        </GestureHandlerRootView>
      )}
      ItemSeparatorComponent={<ListItemSeparator />}
      refreshing={refreshing}
      onRefresh={() => console.log("adsfsaf")}
    />
  )
}

export default MessageScreen
