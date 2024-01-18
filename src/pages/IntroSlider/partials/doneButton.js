import { View, Text } from "react-native"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    center:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    text: {
        backgroundColor: '#f00',
        color: '#fff',
        fontSize: 20,
        lineHeight: 35,
        height: 40,
        width: 250,
        textAlign: 'center',
        borderRadius: 25
    }
})

export default function button(){
    return(
        <View style={styles.center}>
            <Text style={styles.text}>Entrar</Text>
        </View>
    )
}


