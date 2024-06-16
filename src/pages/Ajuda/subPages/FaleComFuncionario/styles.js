import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    areaHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    textHeader: {
        fontSize: 18,
        textAlign: 'center',
    },
    areaForm: {
        flex: 5,
        gap: 30,
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 2,
        marginTop: 6,
        borderRadius: 50,
    },
    textInput: {
        fontWeight: 'bold',
        marginLeft: 20,
    },
    inputMsg: {
        height: 120,
        width: '100%',
        borderWidth: 2,
        marginTop: 6,
        borderRadius: 20,
        borderBottomColor:'red',
        borderBottomWidth:2,
        padding:10,
    },

    areaBtn: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
    },
    btnEnviar: {
        backgroundColor: 'red',
        height: 50,
        width: '100%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputModal:{
        borderBottomColor:'red',
        borderBottomWidth:2,
        width:'80%',
        padding:10,
      },
});