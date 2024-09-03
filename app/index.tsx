import { Text, View, StyleSheet , Alert } from "react-native";
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const placeholder = require("../assets/background.png")

export default function Index() {
  return (
    <View style={styles.container}>

        <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={placeholder}/>
        </View>
        <View style={styles.footerContainer}>
            <Button label="Escolha uma foto" />
            <Button label="Usar essa foto" />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

})