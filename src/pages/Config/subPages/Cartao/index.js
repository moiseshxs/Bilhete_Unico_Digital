import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import visa from '../../../../../assets/img/cartao/visa.png';
import mastercard from '../../../../../assets/img/cartao/mastercard.png';
import styles from './styles';
import CartaoPassageiro from '../../../../Controllers/CartaoPassageiro';
import MyContext from '../../../../Context/context';
import { Ionicons } from '@expo/vector-icons';
import ModalErro from '../../../../components/ModalErro';

const DATA = [
    {
        id: '1',
        numero: '**** 2546',
        bandeira: visa,
    },
    {
        id: '2',
        numero: '**** 4278',
        bandeira: mastercard,
    },
];

export default function Cartao({ navigation, route }) {

    const [cartao, setCartao] = useState();
    const [idCartao, setIdCartao] = useState();
    const { passageiro, token } = useContext(MyContext);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalErro, setModalErro] = useState(false)
    const [iconModal, setIconModal] = useState('')
    const [textModal, setTextModal] = useState('')
    const [closeButton, setCloseButton] = useState(false)
    let cP = new CartaoPassageiro();

    useEffect(() => {
        const getCartoesPassageiro = async () => {
            const response = await cP.getCartaoPassageiro(passageiro.id, token)
            setCartao(response)

        }

        getCartoesPassageiro();
        navigation.setParams({ novoCartaoAdicionado: false })
    }, [route.params?.novoCartaoAdicionado]);


    const destroyCartao = async (id) => {
        try {
            const response = await cP.destroyCartaoPassageiro(id, token);
            console.log(response, "PPPPP")
            if (response === true) {
                const updatedCartao = cartao.filter(item => item.id !== id);
                setCartao(updatedCartao);
            }else{
                setModalErro(true);
                setTextModal('Erro ao excluir Cartão. Por favor, tente novamente mais tarde.');
                setIconModal('error-outline');
                setCloseButton(false);
            }
        } catch (error) {
            console.error('Erro ao excluir cartão:', error);
            setModalErro(true);
            setTextModal('Erro ao excluir Cartão. Por favor, tente novamente mais tarde.');
            setIconModal('error-outline');
            setCloseButton(false);
        }
    };
    const modalId = (id) => {
        setIdCartao(id);
        setModalEdit(true)
    }
    const modalDestroy = () => {
        destroyCartao(idCartao)
        setModalEdit(false)
    }

    const Item = ({ id, numero, bandeira }) => (
        <View>
            <View style={styles.cartao}>
                <Text style={styles.textCartao}>{numero}</Text>
                <Image
                    source={bandeira}
                    style={styles.bandeira}
                />
                <TouchableOpacity onPress={() => modalId(id)}>
                    <Ionicons name="trash-outline" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );





    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaCartoes}>
                <FlatList
                    data={cartao}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            numero={item.numeroCartao}
                            bandeira={item.bandeira}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />

            </View>
            <Modal transparent visible={modalEdit}>
                <View style={styles.modalEdit}>
                    <View style={styles.containerModalEdit}>
                        <View style={styles.headerModalEdit}>
                            <Text style={styles.textHeaderModal}>Deseja excluir este cartão?</Text>
                        </View>
                        <View style={styles.boxBotaoModal}>
                            <Pressable style={styles.botaoModal} onPress={() => setModalEdit(false)}>
                                <Text style={styles.textModal}>Não</Text>
                            </Pressable>
                            <Pressable style={[styles.botaoModal, styles.botaoModalSim]} onPress={modalDestroy}>
                                <Text style={[styles.textModal, styles.textModalSim]}>Excluir</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegistrarCartao')}>
                        <Text style={styles.textBotao}>Adicionar cartão</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
        </SafeAreaView>
    );
}