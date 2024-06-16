import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    boxTipoBilhete:{
        flex:0.4,
    },
    boxRequisitosBilhete:{
        flex:0.4,
    },
    boxButton:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    button:{
        backgroundColor: '#f00',
        height: 40,
        width: 250,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    textBilhete:{
        marginTop:10,
        color:'gray',
        fontSize:24,
        fontWeight:'500'
    },
});