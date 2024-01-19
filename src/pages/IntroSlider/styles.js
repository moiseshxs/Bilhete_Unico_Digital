import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        display:'flex',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('screen').height,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        
        
    },
    
    logo:{
        width: 150,
        height:150,
    },
    image:{
        height: '40%',
        width: '80%'
    },
    desc:{
        fontSize: 18,
        
    },
    
    
})

export default styles