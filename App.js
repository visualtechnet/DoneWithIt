import { StyleSheet } from "react-native"
import LayoutScreen from "./app/screen/LayoutScreen"
import MessageScreen from "./app/screen/MessageScreen"

export default function App() {
  const list = [
    {
      title: "Enim",
      subtitle: "Et cillum quis magna",
      imageSource: "https://picsum.photos/200/300",
      description:
        "Amet deserunt sint ex fugiat amet veniam magna cupidatat sit officia quis. Duis minim et mollit ullamco ex ullamco. In voluptate excepteur fugiat ex nostrud eiusmod cillum cupidatat. Occaecat duis consequat irure velit id et dolor cupidatat ut. Fugiat irure reprehenderit excepteur enim est laboris. Esse sint ut laborum ullamco dolore labore anim magna laborum duis.",
      id: 1,
      seller: "Cupidatat",
      sellerPhoto: "https://picsum.photos/75/75",
      totalListings: 2,
    },
    {
      title: "Anim",
      subtitle: "Fugiat nostrud",
      imageSource: "https://picsum.photos/200/300",
      description:
        "Aute in amet tempor laborum cillum cillum quis esse esse amet minim. Voluptate commodo duis ad nisi enim ad cillum nisi veniam et irure officia dolor. Lorem nostrud cillum excepteur incididunt non irure dolore Lorem Lorem incididunt voluptate proident est. Id aute adipisicing veniam mollit in consectetur proident qui elit ad consectetur ex non deserunt.",
      id: 2,
      seller: "Cupidatat",
      sellerPhoto: "https://picsum.photos/75/75",
      totalListings: 4,
    },
    {
      title: "Culpa incididunt",
      subtitle: "Fugiat aliqua",
      imageSource: "https://picsum.photos/200/300",
      description:
        "Eiusmod eiusmod ut nostrud nisi fugiat ullamco consectetur mollit sunt amet aliquip. Ut quis ad cillum excepteur excepteur sunt ipsum enim quis ipsum eu. Mollit mollit nisi exercitation esse nisi adipisicing aute aute. Ullamco voluptate fugiat officia cillum amet. In non cillum do tempor culpa id pariatur irure cillum. Ad ea nulla culpa occaecat duis magna proident nisi. Non non incididunt reprehenderit labore.",
      id: 3,
      seller: "Ex reprehenderit",
      sellerPhoto: "https://picsum.photos/75/75",
      totalListings: 2,
    },
    {
      title: "Dolore",
      subtitle: "Officia voluptate",
      imageSource: "https://picsum.photos/200/300",
      description:
        "Duis ex enim mollit cupidatat officia. Minim amet exercitation elit ullamco incididunt occaecat est. Adipisicing veniam nulla sunt pariatur reprehenderit. Est veniam cillum fugiat voluptate tempor elit ut id et excepteur. Est nostrud in sunt cillum eu irure anim.",
      id: 4,
      seller: "In esse exercitation",
      sellerPhoto: "https://picsum.photos/75/75",
      totalListings: 9,
    },
    {
      title: "Sunt ex non",
      subtitle: "Laboris consequat",
      imageSource: "https://picsum.photos/200/300",
      description:
        "Voluptate tempor nulla tempor do anim dolor ea amet. Elit sit et ad sunt et. Deserunt incididunt labore veniam aliqua nulla voluptate voluptate. Lorem enim cupidatat exercitation enim adipisicing dolor proident. Ipsum officia labore duis anim.",
      id: 5,
      seller: "Qui fugiat Lorem",
      sellerPhoto: "https://picsum.photos/75/75",
      totalListings: 10,
    },
  ]
  return (
    <LayoutScreen>
      {/* <WelcomeScreen /> */}
      {/* <Card
        title='Red Jacket Sale'
        subtitle='$100'
        imageSource='https://picsum.photos/200/300'
        backgroundColor='#f8f4f4'
      />
      <Card
        title='Couch in great condition'
        subtitle='$200'
        imageSource='https://picsum.photos/200/300'
        backgroundColor='#f8f4f4'
      /> */}
      {/* <ListingDetailScreen
          title='Red Jacket Sale'
          subtitle='$100'
          description='Proident laborum proident in quis ullamco enim consequat. Reprehenderit tempor eiusmod in proident non dolore consectetur ipsum. Ex dolore magna elit elit ullamco nostrud nulla nostrud Lorem exercitation pariatur do. Cupidatat nostrud est non eiusmod dolore et proident ullamco Lorem eiusmod in incididunt adipisicing et. Cillum officia et do qui Lorem cillum esse dolore ea tempor in. Cillum cupidatat aliqua incididunt voluptate laborum voluptate dolore esse cillum aute consequat est et.'
          imageSource='https://picsum.photos/200/300'
          seller='Quis Lorem'
          sellerPhoto='https://picsum.photos/75/75'
          totalListings={5}
        /> */}
      {/* <ListingDetailScreen /> */}
      {/* <ViewImageScreen /> */}
      <MessageScreen list={list} />
    </LayoutScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  wrapper: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "30%",
  },
  statusbar: {
    backgroundColor: "blue",
  },
})
