import { View,  Image, Text } from "react-native"
import styles from "../styles"
import logo from "../../../../assets/img/logo/logovermelha.png"





export default function renderSlides({ item }){
    
    return(
    <View style={styles.container}>
        <View style={styles.skipArea}></View>
        <Image
            source={logo}
            style={styles.logo} 
        />
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={styles.desc}>{ item.text }</Text>
        <Image
            source={item.image}
            style={styles.image}
        />
        <View style={styles.espaco}></View>
    </View>
    )
}