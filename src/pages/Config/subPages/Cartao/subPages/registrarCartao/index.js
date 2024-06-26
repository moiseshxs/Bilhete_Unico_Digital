import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import CartaoPassageiro from '../../../../../../Controllers/CartaoPassageiro'
import MyContext from '../../../../../../Context/context';
import ModalErro from '../../../../../../components/ModalErro';

export default function Cartao({ navigation }) {
    const { passageiro, token } = useContext(MyContext);
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    const [modalErro, setModalErro] = useState(false)
    const [iconModal, setIconModal] = useState('')
    const [textModal, setTextModal] = useState('')
    const [closeButton, setCloseButton] = useState(false)
    let cartaoPassageiro = new CartaoPassageiro()

    function changeColor(input) {
        if (input == 'numCartao') {
            setBorderColor('#F00E0E')
            setBorderColor2('#7b7b7b')
        }
        if (input == 'validade') {
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
        if (input == 'cvv') {
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
        if (input == 'nome') {
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
        if (input == 'cpf') {
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
    }



    const storeCartao = async () => {
        await new Promise(resolve => {
            setModalErro(false);

            setTimeout(resolve, 0);
        });
        if (cpf == '' || nome == '' || numCartao == '' || cvv == '' || validade == '') {
            setModalErro(true)
            setTextModal('Preencha os Campos')
            setIconModal('error-outline')
            setCloseButton(true)
        } else if (cpf.length !== 14 || numCartao.length !== 19 || cvv.length !== 3 || validade.length !== 5) {
            setModalErro(true)
            setTextModal('Dados inválidos. Por favor, preencha novamente.')
            setIconModal('error-outline')
            setCloseButton(true)
        } else {


            const response = await cartaoPassageiro.storeCartaoPassageiro(passageiro.id, token, nome, cpf, numCartao, "visa", "c6 bank", cvv, "088988", "8999", validade, nomeCartao);
            if (response) {
                return navigation.navigate("Cartao", { novoCartaoAdicionado: true });
            } else {
                setModalErro(true);
                setTextModal('Erro ao excluir Cartão. Por favor, tente novamente mais tarde.');
                setIconModal('error-outline');
                setCloseButton(false);
            }
        }




    }

    const onChangeTextNome = (value) => {
        // Verifica se o valor contém algum número
        if (!/\d/.test(value)) {
            setNome(value); // Atualiza o estado apenas se não houver números
        }
    }

    const [numCartao, setNumCartao] = useState('')
    const [validade, setValidade] = useState('')
    const [cvv, setCvv] = useState('')
    const [nome, setNome] = useState('')
    const [nomeCartao, setNomeCartao] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaCartao}>
                <View style={styles.cartao}>
                    <View style={styles.areaCimaCartao}>
                        <Text style={styles.textCartao}>{numCartao}</Text>
                    </View>
                    <View style={styles.areaBaixoCartao}>
                        <View>
                            <Text style={styles.textTitular}>{nome}</Text>
                            <Text style={styles.textNomeCartao}>{nomeCartao}</Text>
                        </View>
                        <FontAwesome name="cc-visa" size={30} color="white" />
                    </View>
                </View>
            </View>

            <View style={styles.areaInfos}>
                <View style={styles.areaForm}>
                    <View>
                        <FloatingLabelInput
                            label='Número do cartão'
                            staticLabel
                            hintTextColor='#aaa'
                            mask='0000 0000 0000 0000'
                            value={numCartao}

                            containerStyles={{
                                borderWidth: 2,

                                paddingHorizontal: 10,
                                borderColor: borderColor2,
                                borderRadius: 40,
                                height: 40,

                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',


                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight: 15,
                                fontSize: 16,
                                fontWeight: '500'

                            }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,

                            }}
                            onChangeText={value => { setNumCartao(value) }}
                            onFocus={() => changeColor('numCartao')}
                            isFocused
                        />
                    </View>

                    <View>
                        <FloatingLabelInput
                            label='Nome titular'
                            staticLabel
                            hintTextColor='#aaa'


                            value={nome}
                            containerStyles={{
                                borderWidth: 2,

                                paddingHorizontal: 10,
                                borderColor: borderColor2,
                                borderRadius: 40,
                                height: 40,

                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',


                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight: 15,
                                fontSize: 16,
                                fontWeight: '500'

                            }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,

                            }}
                            onChangeText={value => { onChangeTextNome(value) }}
                            onFocus={() => changeColor('nome')}
                        />
                    </View>

                    <View style={styles.doisInput}>
                        <View style={styles.doisInput1}>
                            <FloatingLabelInput
                                label='Validade'
                                staticLabel
                                hintTextColor='#aaa'
                                mask='00/00'
                                placeholder='mês/ano'
                                value={validade}
                                containerStyles={{
                                    borderWidth: 2,
                                    paddingHorizontal: 10,
                                    borderColor: borderColor2,
                                    borderRadius: 40,
                                    height: 40,
                                    width: 150


                                }}
                                customLabelStyles={{
                                    colorFocused: '#F00E0E',
                                    fontSizeFocused: 12,
                                    color: '#7B7B7B',


                                }}
                                labelStyles={{
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 8,
                                    lineHeight: 15,
                                    fontSize: 16,
                                    fontWeight: '500'

                                }}
                                inputStyles={{
                                    color: 'black',
                                    borderColor: 'transparent',
                                    paddingHorizontal: 10,


                                }}
                                onChangeText={value => { setValidade(value) }}
                                onFocus={() => changeColor('Validade')}
                            />
                        </View>
                        <View style={styles.doisInput1}>
                            <FloatingLabelInput
                                label='CVV'
                                staticLabel
                                hintTextColor='#aaa'
                                mask='000'

                                value={cvv}
                                containerStyles={{
                                    borderWidth: 2,
                                    width: 100,
                                    paddingHorizontal: 10,
                                    borderColor: borderColor2,
                                    borderRadius: 40,
                                    height: 40,

                                }}
                                customLabelStyles={{
                                    colorFocused: '#F00E0E',
                                    fontSizeFocused: 12,
                                    color: '#7B7B7B',


                                }}
                                labelStyles={{
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 8,
                                    lineHeight: 15,
                                    fontSize: 16,
                                    fontWeight: '500'

                                }}
                                inputStyles={{
                                    color: 'black',
                                    borderColor: 'transparent',
                                    paddingHorizontal: 10,


                                }}
                                onChangeText={value => { setCvv(value) }}
                                onFocus={() => changeColor('CVV')}
                            />
                        </View>
                    </View>


                    <View>
                        <FloatingLabelInput
                            label='CPF titular'
                            staticLabel
                            hintTextColor='#aaa'
                            mask='000.000.000-00'

                            value={cpf}
                            containerStyles={{
                                borderWidth: 2,

                                paddingHorizontal: 10,
                                borderColor: borderColor2,
                                borderRadius: 40,
                                height: 40,

                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',


                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight: 15,
                                fontSize: 16,
                                fontWeight: '500'

                            }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,

                            }}
                            onChangeText={value => { setCpf(value) }}
                            onFocus={() => changeColor('cpf')}
                        />
                    </View>


                    <View>
                        <FloatingLabelInput
                            label='Apelido do cartão'
                            staticLabel
                            hintTextColor='#aaa'


                            value={nomeCartao}
                            containerStyles={{
                                borderWidth: 2,

                                paddingHorizontal: 10,
                                borderColor: borderColor2,
                                borderRadius: 40,
                                height: 40,

                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',


                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight: 15,
                                fontSize: 16,
                                fontWeight: '500'

                            }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,

                            }}
                            onChangeText={value => { setNomeCartao(value) }}
                            onFocus={() => changeColor('nomeCartao')}
                        />
                    </View>
                </View>

                <View style={styles.areaBtn}>
                    <View style={styles.botao}>
                        <Pressable onPress={storeCartao}>
                            <Text style={styles.textBotao}>Adicionar cartão</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
        </SafeAreaView>
    );
}
