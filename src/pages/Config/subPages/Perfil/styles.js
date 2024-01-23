import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    fotoArea:{
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    
    foto:{
        width:150,
        height:150,
        objectFit:'contain',
        borderRadius:100
    },
    icon:{
        position:'absolute',
        right:'2%',
        top:'80%',
        color:'red',
        
        
        borderRadius:100
    },
    infosArea:{
        height:'45%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    alterarArea:{
        height:'15%',
        width:'90%',
        borderColor:'#7b7b7b',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:2,
    },
    infos:{
        height:'78%',
        width:'95%',
        borderColor:'#7b7b7b',
        borderWidth:2,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        
    },
    infoController:{
        width:'90%',
        height:'20%',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    dashArea:{
        width:'100%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
    },
    dashController:{
       width:'80%',
       flexDirection:'row',
       height:'100%',
       justifyContent:'space-around',
       alignItems:'center',
    },
    title:{
        fontSize:16,
        fontWeight:'500',
    },
    desc:{
        fontSize:14,
        color:'#7b7b7b'
    },
    quadrado:{
        justifyContent:'center',
        alignItems:'center',
        height:'70%',
        width:'40%',
        borderWidth:2,
        borderColor:'#7b7b7b',
        borderRadius:25,
        gap:8,
    },
    acao:{
        fontSize:18,
    },
    numero:{
        fontSize:16,
        fontWeight:'700'
    }
    
});