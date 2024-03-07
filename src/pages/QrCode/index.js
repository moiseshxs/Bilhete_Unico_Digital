import React, { useContext, useState } from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, Pressable, Alert} from 'react-native';
import styles from './styles';
import MyContext from '../../Context/context';
import Passageiro from '../../Services/api/Passageiro';
import Loading from '../Loading';

export default function QrCode() {


    const[loading, setLoading] = useState(false)
    const{passageiro,bilhete, token} = useContext(MyContext)

    const consumir = async () =>{
        setLoading(true)
        let p = new Passageiro()
        const response = await p.storeConsumo(passageiro.id, token, bilhete.id)
        setLoading(false)
        if(response.message !== undefined){

        Alert.alert('Consumo', response.message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }else{
            Alert.alert('Erro', 'Estamos com problemas para efetuar essa transação, tente novamente mais tarde', [
                
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
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
                    source={require('../../../assets/img/qrcode/qrcode.png')} 
                    style={styles.qrcode}
                />
            </Pressable>
                

            <View style={styles.areaOffline}>
                <Text style={styles.subText}>Para usar offline é só tirar print da tela e utilizar como de costume</Text>
            </View>

            <View style={styles.alal}>
                
            </View>
        </SafeAreaView>
    );
    }else{
        return(
            <Loading/>
        )
    }
}