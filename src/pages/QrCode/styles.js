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
        flex: 0.5,
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
    subText: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',
    },

    areaInfo1: {
        flex: 1.5,
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 10,
    },
    areaFoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    foto: {
        height: '80%',
        width: '100%',
        backgroundColor: 'rgba(200, 200, 200, 1)',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    imagem: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
    },
    areaQrCode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundoQrCode: {
        height: '80%',
        width: '100%',
        backgroundColor: 'rgba(200, 200, 200, 1)',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    qrcode: {
        height: '100%',
        width: '100%',
        resizeMode: 'center',
        objectFit: 'contain',
    },

    areaInfo2: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaDados: {
        width: '100%',
        height: 180,
        backgroundColor: 'rgba(200, 200, 200, 1)',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,

    },
    textNome: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textDados: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    areaNada: {
        flex: 0.5,
    },

    modalContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        flex: 0.5,
    },
    fullScreenQrcode: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    // areaQrcode: {
    //     padding: 20,
    //     flex: 4,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // qrcode: {
    //     height: '100%',
    //     width: '100%',
    //     resizeMode:'center',
    //     objectFit: 'contain',
    // },

    // areaOffline: {
    //     paddingHorizontal: 20,
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },


    // alal:{
    //     flex:1
    // }
});