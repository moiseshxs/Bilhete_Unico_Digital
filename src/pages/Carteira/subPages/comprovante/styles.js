import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaEfetuada: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'flex-start',
    },

    areaComprovante: {
        flex: 2,
        paddingHorizontal: 20,
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
});