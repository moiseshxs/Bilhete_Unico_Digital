import { View, Text } from "react-native"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    center:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        backgroundColor: '#f00',
        height: 40,
        width: 250,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    }
})

export default function button(){
    return(
        <View style={styles.center}>
            <View style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
            </View>
        </View>
    )
}


