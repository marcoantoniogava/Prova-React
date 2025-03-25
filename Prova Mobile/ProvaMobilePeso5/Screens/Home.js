import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";


export default function Home() {
    return(
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover">
            </ImageBackground>
            <Text style={styles.txt1}>Olá, seja bem vindo ao app!</Text>
            <View style={styles.row}>
            <Image source={require('../assets/logocanva.jpg')} style={styles.img} />
            <Image source={require('../assets/photoshop.png')} style={styles.img} />
            </View>
            <View style={styles.row}>
            <Text style={styles.txt2}>Esse é o canva, onde você pode criar seus projetos!</Text>
            <Text style={styles.txt2}>E aqui está o photoshop, onde você pode editar suas imagens!</Text>
            </View>
            <View style={styles.row}>
            <Image style={styles.img} source={{uri:'https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format'}} />
            <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndeQOOtAM5vs2i9V4vs6BfKN731_aIku7Yw&s'}} />
            </View>
            <View style={styles.row}>
            <Text style={styles.txt2}>Com o figma, você pode criar protótipos e fazer suas ideias!</Text>
            <Text style={styles.txt2}>E com o adobe ilustrator, você pode criar suas imagens!</Text>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        width: "auto",
        height: 1080,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    txt1: {
        fontSize: 20,
        padding: 20,
        marginLeft : 40,
    },
    txt2: {
        fontSize: 15,
        width: 150,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 18,
    },
});
