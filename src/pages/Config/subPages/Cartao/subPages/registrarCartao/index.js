import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useState, useContext } from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import CartaoPassageiro from '../../../../../../Controllers/CartaoPassageiro'
import MyContext from '../../../../../../Context/context';
export default function Cartao({navigation}) {


    const {passageiro, token} = useContext(MyContext);
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    let cartaoPassageiro = new CartaoPassageiro()

    function changeColor(input){
        if(input == 'numCartao'){
            setBorderColor('#F00E0E')
            setBorderColor2('#7b7b7b')
        }
        if( input =='validade'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
        if( input =='cvv'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
        if( input =='nome'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
    }



const storeCartao = async()=>{
    console.log(passageiro.id);
    console.log(token);
    await cartaoPassageiro.storeCartaoPassageiro( passageiro.id, token,numCartao,"visa", "c6 bank", cvv,"088988", "8999", validade,)
    
    return navigation.navigate("Cartao", { novoCartaoAdicionado: true })
}

    const [numCartao, setNumCartao] = useState('')
    const [validade, setValidade] = useState('')
    const [cvv, setCvv] = useState('')
    const [nome, setNome] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaTexto}>
                    <Text style={styles.text}>Dados do cartão</Text>
            </View>

            <View style={styles.areaInput}>
                <View style={styles.inputGroup}>
                    <FloatingLabelInput
                    label='Número do cartão'
                    staticLabel
                    hintTextColor='#aaa'
                    mask='000 000 000 00'
                    value={numCartao}

                    containerStyles={{
                        borderWidth: 2,
                      
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        colorFocused: '#F00E0E',
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        
                        
                      }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 8,
                        lineHeight:15,
                        fontSize: 16,
                        fontWeight: '500'
                        
                      }}
                    inputStyles={{
                        color: 'black',
                        borderColor: 'transparent',
                        outline: 'none',
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setNumCartao(value)}}
                    onFocus={() => changeColor('numCartao')}
                    isFocused
                    />

                    <FloatingLabelInput
                    label='Validade'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    value={validade}
                    containerStyles={{
                        borderWidth: 2,
                      
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        colorFocused: '#F00E0E',
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        
                        
                      }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 8,
                        lineHeight:15,
                        fontSize: 16,
                        fontWeight: '500'
                        
                      }}
                    inputStyles={{
                        color: 'black',
                        borderColor: 'transparent',
                        outline: 'none',
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setValidade(value)}}
                    onFocus={() => changeColor('Validade')}
                    />

                    <FloatingLabelInput
                    label='CVV'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    value={cvv}
                    containerStyles={{
                        borderWidth: 2,
                      
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        colorFocused: '#F00E0E',
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        
                        
                      }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 8,
                        lineHeight:15,
                        fontSize: 16,
                        fontWeight: '500'
                        
                      }}
                    inputStyles={{
                        color: 'black',
                        borderColor: 'transparent',
                        outline: 'none',
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setCvv(value)}}
                    onFocus={() => changeColor('CVV')}
                    />

                    <FloatingLabelInput
                    label='Nome titular'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    value={nome}
                    containerStyles={{
                        borderWidth: 2,
                      
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        colorFocused: '#F00E0E',
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        
                        
                      }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 8,
                        lineHeight:15,
                        fontSize: 16,
                        fontWeight: '500'
                        
                      }}
                    inputStyles={{
                        color: 'black',
                        borderColor: 'transparent',
                        outline: 'none',
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setNome(value)}}
                    onFocus={() => changeColor('nome')}
                    />

                    
                </View>
            </View>

            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={storeCartao}>
                        <Text style={styles.textBotao}>Adicionar cartão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}