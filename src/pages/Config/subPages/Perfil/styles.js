import { Dimensions, StyleSheet } from "react-native";

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
        alignItems:'center',
        justifyContent:'center'
    
    },
    infos:{
        height:'100%',
        width:'95%',
        justifyContent:'center',
        alignItems:'center',
    },
    infoController:{
        width:'90%',
        height:'20%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#FF0000',
        paddingVertical:30,
    },
   
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    desc:{
        fontSize:16,
        color:'#7b7b7b',
        paddingHorizontal:30
    },

    modal:{
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    containerModal:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    areaModal:{
        width:'100%',
        height: '45%',
        backgroundColor: '#fff',
        elevation: 20,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,

    },
    closeArea:{
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    contArea:{
        height: '85%',
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textModal:{
        
        
        width: Dimensions.get('screen').width/1.27,
    },
    link:{
        color:'#f00'
    },
    descModalArea:{
        height:'40%',
        width:'80%',
        justifyContent:'center',
        alignItems:'flex-start',
        
    },
    informe:{
        fontSize:20,
        color: '#7b7b7b'
    },
    buttonAlterar:{
        width: 180,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f00',
        borderRadius: 25,
    },
    textButton:{
        color:'#fff',
        fontSize:20
    },
    buttonArea:{
        height:'40%',
        justifyContent:'center',
        alignItems:'center',
        
    }
});