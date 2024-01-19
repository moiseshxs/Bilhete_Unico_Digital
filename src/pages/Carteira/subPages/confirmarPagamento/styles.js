import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    recarregando: {
        flex: 1,
        justifyContent: 'center',
        rowGap: 5,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    valor: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 60,
    },

    infos: {
        flex: 2,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    passagens: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "thistle",
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    esquerda:{
        gap: 10,
    },
    titulo: {
        color: 'grey',
        fontSize: 20,
    },
    conteudo: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    direita: {

    },
    textEditar: {
        color:'red',
    },

    cartao: {
        flex: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },

    data: {
        flex: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },

    areaBotao: {
        flex: 2,
        paddingHorizontal: 20,
        alignContent: 'center',
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