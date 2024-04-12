import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Modal, Dimensions} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';
import Logo from '../../../assets/img/logo/logovermelha.png'
import AuthPassageiro from '../../Controllers/AuthPassageiro';
import MyContext from '../../Context/context';
import Loading from '../Loading';


export default function Login({navigation}) {
    
    const authP = new AuthPassageiro()
    //Uso do context para ter acesso aos estados globais
    const{setPassageiro, setToken,setPassword} = useContext(MyContext) 

    //estado sera utilizado para mostrar erros ao usuario
    const[error, setError] = useState('')
    //estado de loading
    const[loading, setLoading] = useState(false)
    //função para chamar a função de consumo da api para fazer login
    const login = async(cpf, password) =>{
        
        if(cpf  == '' || password == ''){
            
            setError('Campos vazios')
        }
        else if(cpf.length < 14){
            setError('CPF invalido')
        }else{
            setLoading(true)
        const response = await authP.login(cpf, password)
            

            if(!response){
                setError("Falha ao carregar informações!")
                setLoading(false)
                return false
            }
            if(response.message === undefined){
                setPassageiro(response.usuario)
                setToken(response.token_de_acesso)
                setPassword(senha)
                console.log(senha)
                setTimeout(() => setLoading(false), 1000)
                navigation.navigate('ListaBilhetes')
            }else{
                setLoading(false)
                setError("CPF ou senha incorretos!")
            }

    }
            
           
            
        }
        const consultar = async(cpf) =>{
            //validação
            if(cpf == ''){
                setError('Campo vazio')
            }
            else if(cpf.length < 14){
                setError('CPF invalido')
            }
    
            else{
            setLoading(true)    
            //requisição
            let response = await authP.getByCpfRecuperar(cpf) 
            console.log(response)
            //resposta for true    
            if(response){ 
    
                if(response.message !== undefined){
                    setError("CPF não encontrado!")
                    setLoading(false)
                    return false
                }
                setTimeout(() => setLoading(false), 1000)
                setModal(false)
      
                navigation.navigate('FormaRecuperarSenha', {
                    dados: response.usuario
                })
            //resposta false
            }else{
                setError("Erro ao carregar informações")
                setLoading(false)
            }
        }
        }
        


    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    const [borderColor3, setBorderColor3] = useState('#7b7b7b')
    
    
    const [modal, setModal] = useState(false)
    //função para mudar a cor da borda dos inputs ao clicar neles    
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
            
        }
        
    }

    const [cpfForm, setCpfForm] = useState('')
    const [senha, setSenha] = useState('')

    const [recuperaCpf, setRecuperaCpf] = useState('')
    if(loading == false){
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
                    keyboardType='numeric'
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
            <View style={styles.feedback}>
            <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
            
            <Text style={styles.forgetText}>{error}</Text>
            </View>
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
                                onPress={() => consultar(recuperaCpf)}>
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
    }else{
        return(
            
                <Loading/>
            
        )

    }
}
