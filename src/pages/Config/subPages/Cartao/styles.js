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
});