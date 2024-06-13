import React, { useContext, useState } from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, Pressable, Alert, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import MyContext from '../../Context/context';
import Passageiro from '../../Services/api/Passageiro';
import Loading from '../Loading';
import ModalErro from '../../components/ModalErro';

export default function QrCode() {
    const [loading, setLoading] = useState(false);
    const { passageiro, bilhete, token } = useContext(MyContext);
    const [modalErro, setModalErro] = useState(false);
    const [iconModal, setIconModal] = useState('');
    const [textModal, setTextModal] = useState('');
    const [nomePassageiro] = useState(passageiro.nomePassageiro);
    const [dataPassageiro] = useState(passageiro.dataNascPassageiro);
    const [cpfPassageiro] = useState(passageiro.cpfPassageiro);
    const [tipoBilhete] = useState(bilhete.tipoBilhete);
    const [codigoBilhete] = useState(bilhete.numBilhete);
    const [showFullScreenModal, setShowFullScreenModal] = useState(false);

    const consumir = async () => {
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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.areaTitulo}>
                <Text style={styles.titulo}>QRCODE</Text>
            </View>
            <View style={styles.areaRecomedacao}>
                <Text style={styles.titulo}>Agora é só passar!</Text>
                <Text style={styles.subText}>Clique no QrCode e aproxime no leitor da catraca</Text>
            </View>
            <View style={styles.areaInfo1}>
                <View style={styles.areaFoto}>
                    <View style={styles.foto}>
                        <Image
                            source={require('../../../assets/img/global/defaultUser.png')}
                            style={styles.imagem}
                        />
                    </View>
                </View>
                <View style={styles.areaQrCode}>
                    <Pressable style={styles.fundoQrCode} onPress={() => setShowFullScreenModal(true)}>
                        <Image
                            source={bilhete.qrCodeBilhete == 'pendente' ? require('../../../assets/img/qrcode/qrcode.png') : { uri: bilhete.qrCodeBilhete }}
                            style={styles.qrcode}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.areaInfo2}>
                <View style={styles.areaDados}>
                    <View>
                        <Text style={styles.textNome}>{nomePassageiro}</Text>
                    </View>

                    <View>
                        <Text style={styles.textDados}>Cod. Bilhete: {codigoBilhete}</Text>
                        <Text style={styles.textDados}>Tipo bilhete: {tipoBilhete}</Text>
                        <Text style={styles.textDados}>CPF: {cpfPassageiro}</Text>
                        <Text style={styles.textDados}>Data Nasc: {dataPassageiro}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.areaNada}>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showFullScreenModal}
                onRequestClose={() => setShowFullScreenModal(false)}
            >
                <View style={styles.modalContainer}>

                    <Pressable style={styles.modalContent} onPress={() => setShowFullScreenModal(false)}>
                        <Image
                            source={bilhete.qrCodeBilhete == 'pendente' ? require('../../../assets/img/qrcode/qrcode.png') : { uri: bilhete.qrCodeBilhete }}
                            style={styles.qrcode}
                        />
                    </Pressable>

                </View>
            </Modal>

            <ModalErro visible={modalErro} icon={iconModal} text={textModal} />
            {loading && <Loading />}
        </SafeAreaView>
    );
}
