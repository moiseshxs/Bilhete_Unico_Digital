import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    bilheteArea:{
        flex: 2,
       
        justifyContent:'center',
        alignItems:'center'
    },
    infosArea:{
        flex:2,
        
        justifyContent: 'center',
        alignItems:'center'
    },
    infos1:{
        width: '90%',
        justifyContent:'space-around',
        alignItems:'flex-start',
        height:'50%',
    },
    miniTitle:{
        fontSize:20,
        color: '#7b7b7b'
    },
    desc:{
        fontSize:25,
        fontWeight:'500'
    },
    infos2:{
        width: '88%',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        height:'50%',
        gap: 50,
    },
    miniTitle2:{
        fontSize:20,
        color:'#7b7b7b'
    },
    desc2:{
        fontSize:25,
        fontWeight:'500'
    },
    buttonArea:{
        flex:1,
        
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonController:{
        width: '60%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    },
    legend:{
        textAlign:'center',
        fontSize:18
    }
});