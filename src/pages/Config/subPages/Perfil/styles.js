import { Dimensions, StyleSheet, View } from "react-native";

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
        width:'100%',
        height:'20%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#FF0000',
       
        
        
        // paddingVertical:30,
    },
    boxInicio:{
      width:'100%',
      flexDirection:'row',
      justifyContent: 'space-evenly',
      alignItems:'center',
    },
   dadosPessoais:{
    fontSize:24,
     fontWeight:'bold',
   },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    titleEscolha:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    desc:{
        fontSize:16,
        color:'#7b7b7b',
        paddingHorizontal:30,
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
        
    },
    ViewModalEdit:{
      flex:1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalEdit: {
      flex: 0.30,
      width:'100%',
      height:'100%',
    },
    modalEditEscolha: {
      flex: 0.30,
      width:'100%',
      height:'100%',
    },
      containerModalEdit: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

      },
      containerModalEditEscolha: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent:'center',

      },
      botaoModal:{
        height: 30,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      boxBotaoModal:{
        flex: 1,
        flexDirection:'row',
        borderColor: 'black',
        justifyContent: 'space-evenly',
        alignItems:'center',
      },
      boxTitle:{
        flex: 0.3,
        width:'100%',

      },
      boxTitleEscolha:{
        width:'100%',
        height:'20%',
        alignItems:'center',
        justifyContent: 'center',
      },
      boxInput:{
        flex: 0.4,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent: 'space-evenly',
      },
      containerBoxBotoes:{
        flex:0.3,
        alignSelf:'flex-end',
        width:'50%',
      },
      boxBotoes:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        height:'100%',
        gap:10,
      },
      erroTelefone:{
        color:'red',
        textAlign:'center'
      },
      boxBotoesEscolha:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        height:'80%',
        gap:5,
      },
      inputModal:{
        borderBottomColor:'red',
        borderBottomWidth:2,
        width:'80%',
        padding:10,
      },
      botoesModal:{
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
      },
      botoesModalEscolha:{
        justifyContent:'center',
        alignItems:'center',
      },
      titleModal:{
        color:'black',
        fontSize: 19,
        fontWeight: '400',
        marginBottom:20,
      },
      titleModalEscolha:{
        textAlign:'center',
        fontSize: 24,
        fontWeight:'bold',
      }

    
});