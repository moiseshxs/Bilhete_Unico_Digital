import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaImagem:{
        flex: 2,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem:{
        height: 150,
        width: 150,
        objectFit: 'contain',

        borderRadius: 100,
    },

    areaOpcoes:{
        flex: 3,
        paddingHorizontal: 20,
    },
    areaBotao: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "thistle",
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    esquerda:{

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