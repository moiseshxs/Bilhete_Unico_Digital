import React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';

export default function QrCode() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.areaTitulo}>
                <Text style={styles.titulo}>QRCODE</Text>
            </View>

            <View style={styles.areaRecomedacao}>
                <Text style={styles.titulo}>Agora é só passar!</Text>
                <Text style={styles.subText}>Deixe o brilho do celular no máximo e aproxime no leitor QRCode da catraca</Text>
            </View>

            <View style={styles.areaQrcode}>
                <Image 
                    source={require('../../../assets/img/qrcode/qrcode.png')} 
                    style={styles.qrcode}
                />
            </View>

            <View style={styles.areaOffline}>
                <Text style={styles.subText}>Para usar offline é só tirar print da tela e utilizar como de costume</Text>
            </View>
        </SafeAreaView>
    );
}