import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Modal, Dimensions} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import Logo from '../../../assets/img/logo/logovermelha.png'
import Api from '../../Services/api/Api';
import MyContext from '../../Context/context';



export default function Login({navigation}) {
    
    const api = new Api()
    const{setPassageiro} = useContext(MyContext)
    const[error, setError] = useState('')
    

    const login = async(cpf, password) =>{
        const response = await api.login(cpf, password)
            
            if( response.usuario !== undefined){
            
            let nomes = response.usuario.nomePassageiro
            setPassageiro(response.usuario)
            
            navigation.navigate('ListaBilhetes')
        }else if(typeof response.message !== undefined){
            setError(response.message)
        }
            
           
            
        }
    
       
    

    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    const [borderColor3, setBorderColor3] = useState('#7b7b7b')
    
    
    const [modal, setModal] = useState(false)

    function changeColor(input){
        if(input == 'cpf'){
            setBorderColor('#F00E0E')
            setBorderColor2('#7b7b7b')
        }
         if(input =='recupera'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#7b7b7b')
            setBorderColor3('#f00e0e')
            
        }
         if( input =='senha'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
            console.log('pinto')
        }
        console.log(input)
    }

    const recuperarSenha =() =>{
        setModal(false)
        navigation.navigate('FormaRecuperarSenha')
    }

    const [cpfForm, setCpfForm] = useState('')
    const [senha, setSenha] = useState('')
    const [recuperaCpf, setRecuperaCpf] = useState('')
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
                    value={cpfForm}
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
                    onChangeText={value => {setCpfForm(value)}}
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
                    
                    />
                    
            <TouchableOpacity
            style={styles.forgetArea}
            onPress={() => setModal(true)}>
            
            <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
            <Text style={styles.forgetText}>{error}</Text>
            
            </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                    onPress={() => login(cpfForm, senha)}>
                        <View style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                        </View> 
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')}>
                        <View style={styles.buttonCad}>
                        <Text style={styles.textCad}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>



            <Modal
            visible={modal}
            transparent={true}
            style={styles.modal}
            animationType='slide'>
            <TouchableOpacity
            style={{flex: 1}}
            onPress={() => setModal(false)}>
                <SafeAreaView style={styles.containerModal}>
                    <View style={styles.areaModal}>
                        <View style={styles.closeArea}>
                            <Ionicons
                            name='close' size={30} color={'black'} style={styles.icon}
                            onPress={() => setModal(false)}/>
                        </View>
                        <View style={styles.contArea}>
                            <View style={styles.textModal}>
                            <Text style={styles.informe}>Informe seu CPF</Text>
                            </View>
                            <View style={{height:'10%'}}></View>
                            <FloatingLabelInput
                                        label='CPF'
                                        staticLabel
                                        hintTextColor='#aaa'
                                        mask='000.000.000-00'
                                        hint='123.456.789-10'
                                        value={recuperaCpf}
                                        style={styles.floating}
                                        containerStyles={{
                                            borderWidth: 2,
                                            maxWidth: Dimensions.get('screen').width/1.2,
                                            
                                            borderColor: borderColor3,
                                            borderRadius: 40,
                                            maxHeight: '35%'
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
                                        onChangeText={value => {setRecuperaCpf(value)}}
                                        onFocus={() => changeColor('recupera')}
                                        
                                        />
                            <TouchableOpacity
                                onPress={() => recuperarSenha()}>
                                <View style={styles.buttonRecuperar}>
                                    <Text style={styles.textButton}>Recuperar Senha</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>


            </Modal>
        </SafeAreaView>
    );
}
