import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    areaChat: {
        flex: 7,
    },
    areaChatRobo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 7,
        padding: 20, 
    },

    mensagemRobo: {
        height: 100,
        width: '90%',
        backgroundColor: '#d3d3d3',
        padding: 15,
        borderRadius: 15,
    },

    textBold: {
        fontWeight: 'bold',
    },
    areaOpcoes: {
        width: '90%',
        gap: 7,
    },
    opcoes: {
        backgroundColor: 'red',
        height: 40,
        width: '100%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOpcoes: {
        fontWeight: 'bold',
        color: '#FFF',
    },

    areaTeclado: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: '70%',
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#d3d3d3',
        paddingHorizontal: 20,
    },
    icone: {
        position: 'absolute',
        right: 35,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
  
});