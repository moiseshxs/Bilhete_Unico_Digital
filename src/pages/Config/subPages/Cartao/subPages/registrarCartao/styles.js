

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaCartao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    cartao: {
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 20,
        height: 180,
        width: '100%',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#000',
    },
    areaCimaCartao: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    areaBaixoCartao: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textCartao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    textNomeCartao: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    textTitular: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    bandeira: {
        height: 25,
        width: 45,
        objectFit: 'contain',
    },

    areaInfos: {
        flex: 2,
    },
    areaForm: {
        flex: 3,
        paddingHorizontal: 20,
        gap: 20,
        justifyContent: 'center'
    },
    doisInput: {
        flexDirection: 'row',
        gap: 20,
    },
    doisInput1: {
        flex: 1,
    },

    areaBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 45,
        width: '100%',
        borderRadius: 50,
    },
    textBotao: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
});