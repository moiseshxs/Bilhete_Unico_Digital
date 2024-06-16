import { Dimensions } from "react-native"
import { View, Text } from "react-native"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    center:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Dimensions.get('screen').height/1.15
    },
    text:{
        fontSize: 20,
        color: '#f00',
        textAlign: 'center',
        fontWeight: '500',
        position: 'absolute',
        left: '87%'
    }
})

export default function button(){
    return(
        <View style={styles.center}>
            <Text style={styles.text}>Pular</Text>
        </View>
    )
}


