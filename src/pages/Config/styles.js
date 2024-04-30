import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaImagem:{
        flex: 3,
        paddingTop: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 15,
    },
    imagem:{
        height: 125,
        width: 125,
        objectFit: 'contain',

        borderRadius: 100,
    },
    nomeUsuario:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    areaPassagens:{
        flex: 1.7,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'thistle',
        backgroundColor:'#FF0000', 
        borderRadius:25,
        marginHorizontal:'22px',
        marginVertical:'18px',
        height:'100%'

    },
    areaEsq:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 3,
        borderColor: 'white',
        marginVertical:'10px'
    },
    areaDir:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPassagens:{
        fontSize: 15,
        color:'white',
        fontWeight: 'bold'
    },
    numPassagens:{
        fontSize: 32,
        color:'white'
    },


    areaOpcoes:{
       
        flex: 5,
        paddingHorizontal: 20,
    },
    areaBotao: {
        backgroundColor: '',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#FF0000",
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    esquerda:{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    direita: {

    },
    textEditar: {
        color:'red',
    },

    areaUltima: {
        marginBottom: 90,
    },

    areaSair:{
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
});