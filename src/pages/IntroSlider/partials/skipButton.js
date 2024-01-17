import { Dimensions } from "react-native"
import { View, Text } from "react-native-web"
import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({
    center:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        position: 'absolute',
        bottom: Dimensions.get('screen').height/1.085
        
    },
    text:{
        fontSize: 20,
        color: '#f00',
        textAlign: 'center',
        fontWeight: '500'
    }
})

export default function button(){
    return(
        <View style={styles.center}>
            <Text style={styles.text}>Pular</Text>
        </View>
    )
}


