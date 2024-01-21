import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    areaTitulo: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    areaRecomedacao: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },

    areaQrcode: {
        padding: 20,
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    qrcode: {
        height: '100%',
        width: '100%',
        resizeMode:'center',
        flex: 1
    },

    areaOffline: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subText: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',
    },
});