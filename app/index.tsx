import { Text, View, StyleSheet, Image } from "react-native";

const placeholderImage = require("../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={placeholderImage} style={styles.image}/>
      </View>
      <Text style={{color: "#fff"}}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

})
