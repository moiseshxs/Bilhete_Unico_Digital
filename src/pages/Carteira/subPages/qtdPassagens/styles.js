import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaTexto: {
        flex: 2,
        justifyContent: 'center',
        rowGap: 5,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    subText: {
        fontSize: 20,
        color:  'grey',
    },

    areaPassagens: {
        flex: 3,
        paddingHorizontal: 20,
        
    },

    bolinhas: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10, 
      },
      
    numPassagens: {
        width: 70,
        height: 70,
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center',
    },
    textPassagens: {
        fontSize: 40,
        color: 'grey',
    },  

    
    input: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 50,
        height: 50,
        alignItems: 'center',
        padding: 10,
        fontSize: 25,
    },

    areaBotao: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
    },
    botao: {
        backgroundColor: 'red',
        borderRadius: 50,
        height: 70,
        width: 70,

        justifyContent: 'center',
        alignItems: 'center',
    },
});