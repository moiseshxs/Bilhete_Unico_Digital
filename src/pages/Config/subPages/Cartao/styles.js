import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaCartoes: {
        flex: 3,
        padding: 20,
    },
    cartao: {
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 20,
        height: 120,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textCartao: {
        fontSize: 20,
    },
    bandeira: {
        height: 25,
        width: 45,
        objectFit: 'contain',
    },

    areaBotao: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 45,
        borderRadius: 50,
    },
    textBotao: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    modalEdit: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      containerModalEdit: {
        flex: 0.2,
        width: "90%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
      },
      headerModalEdit: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      textHeaderModal: {
        color: 'grey',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    
      flexModal: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textModal:{
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
      },
      botaoModal:{
        flex: 0.2,
        borderWidth: 2,
        borderColor: 'black',
      },
      boxBotaoModal:{
        flex: 2,
        borderWidth: 2,
        flexDirection:'row',
        borderColor: 'black',
        justifyContent: 'space-evenly',
        alignItems:'center'
      }
});