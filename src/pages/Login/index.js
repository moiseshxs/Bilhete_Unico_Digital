import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions} from 'react-native';
import { useState } from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import Logo from '../../../assets/img/logo/logovermelha.png'



export default function Login({navigation}) {
    
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')

    function changeColor(input){
        if(input == 'cpf'){
            setBorderColor('#F00E0E')
            setBorderColor2('#7b7b7b')
        }else{
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
    }

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputArea}>
                <Image
                source={Logo}
                style={styles.logo}/>
                <View style={styles.inputGroup}>
                    <FloatingLabelInput
                    label='CPF'
                    staticLabel
                    hintTextColor='#aaa'
                    mask='000.000.000-00'
                    hint='123.456.789-10'
                    value={cpf}
                    containerStyles={{
                        borderWidth: 2,
                        width: Dimensions.get('screen').width/1.15,
                        paddingHorizontal: 10,
                        borderColor: borderColor,
                        borderRadius: 40,
                        height: 55
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
                        fontSize: 16
                        
                    }}
                    onChangeText={value => {setCpf(value)}}
                    onFocus={() => changeColor('cpf')}
                    isFocused
                    />

                <FloatingLabelInput
                    label='Senha'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    
                    value={senha}
                    containerStyles={{
                        borderWidth: 2,
                        width: Dimensions.get('screen').width/1.15,
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
                    onChangeText={value => {setSenha(value)}}
                    onFocus={() => changeColor('senha')}
                    isFocused
                    />
                    
                </View>
            </View>
            <TouchableOpacity
            style={styles.forgetArea}>

            <Text style={styles.forgetText}>Esqueceu sua senha?</Text>

            </TouchableOpacity>
            <View style={styles.buttonArea}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                        <View style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonCad}>
                        <Text style={styles.textCad}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
