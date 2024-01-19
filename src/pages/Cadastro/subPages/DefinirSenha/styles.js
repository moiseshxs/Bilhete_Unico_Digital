import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor: '#fff',
        gap: 20,
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
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    titleArea:{
        width: '90%',
        
        justifyContent:'center',
        alignItems:'flex-start',
        gap:35
    },
    title:{
        fontSize: 26,
        fontWeight: '500'
    },
    inputGroup:{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:'10%',
        gap: 35,
    },
    buttonArea:{
        height: '20%',
        marginTop:'40%',
        justifyContent:'flex-end',

    },
    desc:{
        fontSize:14,
        color:'#7b7b7b',
        fontWeight:'500'
    }
})

export default styles