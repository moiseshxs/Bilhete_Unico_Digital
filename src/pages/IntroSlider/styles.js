import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    logo:{
        width: 120,
        height: 120
    },
    image:{
        height: Dimensions.get('screen').height/2.2,
        width: '80%'
    },
    desc:{
        fontSize: 18,
        marginTop: 8
    },
    skipArea:{
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
    },
    
})

export default styles