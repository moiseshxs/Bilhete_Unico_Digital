import { StyleSheet, Dimensions } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: Width / 40,
        flexDirection: 'column',
        backgroundColor: '#fff',

    },
    center: {
        width: Width / 2.3,
        margin: Width / 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
    header: {
        flex: 0.075,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Height / 40
    },
    boxTitulo: {
        paddingHorizontal: 20,
        gap: Height / 30
    },
    subTitulo: {

        fontWeight: 'bold',
        fontSize: 28,
        width: Width / 1.35,
        gap: Height / 2

    },
    caminho: {
        fontWeight: 'bold',
    },

    boxQuestionario: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    artigoUtil: {
        marginVertical: Width / 50,
        fontSize: 17,
    },
    buttonAjuda: {
        height: Height / 20,
        width: Width / 5.3,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#000',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    linha: {
        borderBottomWidth: 1,
        borderColor: '#000',
        display: 'flex',
        justifyContent: 'space-between'
    }
});