import React, { useContext, useState } from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, Pressable, Alert} from 'react-native';
import styles from './styles';
import MyContext from '../../Context/context';
import Passageiro from '../../Services/api/Passageiro';
import Loading from '../Loading';
import ModalErro from '../../components/ModalErro';
export default function QrCode() {


    const[loading, setLoading] = useState(false)
    const{passageiro,bilhete, token} = useContext(MyContext)
    const[modalErro, setModalErro] = useState(false)
    const[iconModal, setIconModal] = useState('')
    const[textModal, setTextModal] = useState('')
    const consumir = async () =>{
        setLoading(true)
        let p = new Passageiro()
        try {
            const response = await p.storeConsumo(passageiro.id, token, bilhete.id);
            if (response.message !== undefined) {
                Alert.alert('Consumo', response.message, [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    }
                ]);
            }
        } catch (error) {
            setModalErro(true);
            setIconModal('error-outline');
            setTextModal('Falha no servidor. Por favor, tente novamente mais tarde.');
        }
        setLoading(false);
    }
    if(!loading){
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

                
            <Pressable style={styles.areaQrcode} onPress={() => consumir()}>
                <Image 
                    source={bilhete.qrCodeBilhete == 'pendente' ? require('../../../assets/img/qrcode/qrcode.png') : {uri: bilhete.qrCodeBilhete}} 
                    style={styles.qrcode}
                />
            </Pressable>
                

            <View style={styles.areaOffline}>
                <Text style={styles.subText}>Para usar offline é só tirar print da tela e utilizar como de costume</Text>
            </View>

            <View style={styles.alal}>
                
            </View>
            <ModalErro visible={modalErro} icon={iconModal} text={textModal} />
        </SafeAreaView>
    );
    }else{
        return(
            <Loading/>
        )
    }
}