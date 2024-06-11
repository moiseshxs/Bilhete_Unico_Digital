import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, FlatList, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import visa from '../../../../../assets/img/cartao/visa.png';
import mastercard from '../../../../../assets/img/cartao/mastercard.png';
import styles from './styles';
import CartaoPassageiro from '../../../../Controllers/CartaoPassageiro';
import MyContext from '../../../../Context/context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ModalErro from '../../../../components/ModalErro';

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
            } else {
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
    function formataçãoNumero(n) {
     
      
     
        const primeiros4 = n.slice(0, 4);
      
      
        const ultimos4 = n.slice(-4);
      
      
        return `${primeiros4} **** **** ${ultimos4}`;
      }
      

      

    const Item = ({ id, numero, bandeira, apelidoCartao }) => (
        <View>
            <View style={styles.cartao}>
                <View style={styles.areaCimaCartao}>
                    <Text style={styles.textCartao}>{formataçãoNumero(numero)}</Text>

                    <Pressable onPress={() => modalId(id)}>
                        <Ionicons name="trash-outline" size={30} color="white"/>
                    </Pressable>
                </View>
                <View style={styles.areaBaixoCartao}>
                    <Text style={styles.textNomeCartao}>{apelidoCartao}</Text>
                    <FontAwesome name="cc-visa" size={30} color="white" />
                </View>
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
                            apelidoCartao={item.apelidoCartao}
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
                    <Pressable onPress={() => navigation.navigate('RegistrarCartao')}>
                        <Text style={styles.textBotao}>Adicionar cartão</Text>
                    </Pressable>
                </View>
            </View>
            <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
        </SafeAreaView>
    );
}