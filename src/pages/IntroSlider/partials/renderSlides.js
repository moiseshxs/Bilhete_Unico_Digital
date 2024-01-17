import { View,  Image, Text } from "react-native-web"
import styles from "../styles"
import logo from "../../../../assets/img/logo/logovermelha.png"
import IntroSlider from "../index"

const skip = () => {
    return(
        <IntroSlider skip={true}/>
    )
}


export default function renderSlides({ item, navigation }){
    
    return(
    <View style={styles.container}>
        <View style={styles.skipArea}>
            
        </View>
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
    </View>
    )
}