import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaTexto: {
        flex: 1,
        justifyContent: 'center',
        rowGap: 5,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
    },

    areaInput:{
        flex: 4,
        paddingHorizontal: 20,
    },
    
    inputGroup:{
        gap: 20,
    },

    areaBotao: {
        flex: 2,
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

    inputValidadeCvv:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    }
});