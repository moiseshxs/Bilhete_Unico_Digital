import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor: '#fff',
        
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
        marginBottom:10,
    },
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },textAviso:{
        color: 'red',
        fontSize: 20,
        fontWeight: '500',
        textAlign:'center'
    },
    titleArea:{
        width: '90%',
        height:'24%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        gap:20
    },
    title:{
        fontSize: 26,
        fontWeight: '500',
        marginTop:20,
    },
    inputGroup:{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'40%',
        gap: 35,
    },
    buttonArea:{
        height: '20%',
        
        justifyContent:'flex-end',

    },
    desc:{
        fontSize:14,
        color:'#7b7b7b',
        fontWeight:'500'
    }
})

export default styles