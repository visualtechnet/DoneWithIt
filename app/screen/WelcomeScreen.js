import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import AppButton from "../components/AppButton.Component"
import color from "../config/colors"

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode='cover'
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton>Login</AppButton>
        <AppButton color='secondary'>Register</AppButton>
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: color.dark,
    fontSize: 26,
    fontFamily: "Roboto",
    paddingTop: 12,
    fontWeight: "700",
  },
  buttonContainer: {
    alignItems: "center",
  },
})
