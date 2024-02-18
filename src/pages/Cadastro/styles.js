import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'column',
        width: '100%',
        
        backgroundColor:'#fff'
    },
    returnArea:{
        width: '100%',
        alignItems:'flex-start'
    },
    titleArea:{
        width: '80%',
        height:'10%',
        justifyContent:'center'
    },
    descArea:{
        width: '80%',
        height:'20%',
        justifyContent:'center',
        
    },
    error:{
        textAlign:'center',
        fontSize:14,
        color:'red'
    },
    title:{
        fontSize:30,
        fontWeight:'600'
    },
    desc:{
        fontSize:16,
        color:'#7b7b7b'
    },
    link:{
        color:'#f00'
    },
    buttonArea:{
        height: '40%',
        justifyContent:'flex-end'
    },
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    button:{
        width: Dimensions.get('screen').width/1.6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 50,
        backgroundColor: '#F00E0E',
        color: '#fff',
    },
    inputArea:{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 35,
        
        

    },

})

export default styles