import { StyleSheet, Image} from 'react-native';

export default function ImageViewer (placeholderImageSource) {

    return (
        <Image source={require("../assets/background.png")} style={styles.image} />

    )
}

const styles = StyleSheet.create({
    image: {
        width: 280,
        height: 360,
        borderRadius: 18
      }
})