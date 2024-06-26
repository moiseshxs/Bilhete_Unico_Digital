import { View, SafeAreaView, Text, Linking, Dimensions,  TouchableOpacity } from "react-native"
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState } from "react";
import AuthPassageiro from '../../Controllers/AuthPassageiro';
import ModalErro from '../../components/ModalErro';
import Loading from "../Loading";


export default function Cadastro({navigation}){

    const [cpf, setCpf] = useState('')
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const[modalErro, setModalErro] = useState(false)
    const[iconModal, setIconModal] = useState('')
    const[textModal, setTextModal] = useState('')
    const[closeButton, setCloseButton] = useState(false)
    const [loading, setLoading] = useState(false)

    //função de trocar a cor do input ao tocar
    const changeColor =(area) =>{
        if(area == 'cpf'){
            setBorderColor('#f00')
        }else{
            setBorderColor('#7b7b7b')
        }
    }

    //instancia api
    let authP = new AuthPassageiro()

    //função para chamar a api para consular se o cpf existe no banco
    const consultar = async(cpf) =>{

        await new Promise(resolve => {
            setModalErro(false);
            
            setTimeout(resolve, 0);
        });

        //validação
        if(cpf == ''){
            setModalErro(true)
            setTextModal('Preencha os Campos')
            setIconModal('error-outline')
            setCloseButton(true)
        }
        else if(cpf.length < 14){
            setModalErro(true)
            setTextModal('Cpf Inválido')
            setIconModal('error-outline')
            setCloseButton(true)
        }

        else{
        setLoading(true)    
        //requisição
        let response = await authP.getByCpf(cpf) 
        //resposta for true    
        if(response){ 

            if(response.message !== undefined){
                setModalErro(true)
                setTextModal(response.message)
                setIconModal('error-outline')
                setCloseButton(true)
                setLoading(false)
                return false
            }
            setTimeout(() => setLoading(false), 1000)
            setModalErro(false)
            navigation.navigate('ConfirmarCadastro', {
                dados: response.usuario
            })
        //resposta false
        }else{
            setModalErro(true)
                setTextModal('Erro ao carregar informações. Por favor, Tente novamente mais tarde')
                setIconModal('error-outline')
                setCloseButton(false)
            setLoading(false)
        }
    }
    }
    if(!loading){
    return(
        <SafeAreaView style={styles.container}
        onTouchMove={() => changeColor('view')}>
            <View style={{height: '5%'}}></View>
            <View style={styles.returnArea}>
                <Ionicons
                    name='arrow-back'
                    size={30}
                    style={{marginStart: 27}}
                    onPress={() => navigation.navigate('Login') }/>
            </View>
            <View style={styles.titleArea}> 
                <Text style={styles.title}>Informe seu CPF</Text>
            </View>
            <View style={{height: '5%'}}></View>
            <View style={styles.inputArea}>
            <FloatingLabelInput
                    label='CPF'
                    staticLabel
                    hintTextColor='#aaa'
                    mask='000.000.000-00'
                    hint='123.456.789-10'
                    value={cpf}
                    keyboardType="numeric"
                    containerStyles={{
                        borderWidth: 2,
                        minWidth: Dimensions.get('screen').width/1.15,
                        paddingHorizontal: 10,
                        borderColor: borderColor,
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
                        paddingHorizontal: 10,
                        fontSize: 16
                        
                    }}
                    onChangeText={value => {setCpf(value)}}
                    onFocus={() => changeColor('cpf')}
                    isFocused
                    />
            </View>
            <View style={{height: '2%'}}></View>
            <View style={styles.descArea}> 
                <Text style={styles.desc}>Nosso aplicativo funciona em conjunto a SPtrans, seus dados serão resgatados dos registros e serão utilizados no aplicativo. Ainda não possui um cadastro na Sptrans?<Text style={styles.link} onPress={() => Linking.openURL('https://scapub.sbe.sptrans.com.br/sa/acessoPublico/novoUsuario.action')}>Clique aqui</Text></Text>
                
            </View> 
            <View style={styles.buttonArea}> 
                <TouchableOpacity
                onPress={() => consultar(cpf)}>
                <View style={styles.button}>
                        <Text style={styles.textButton}>Consultar</Text>
                        </View>
                </TouchableOpacity>
                </View>
                <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
        </SafeAreaView>
    )
    }else{
        return(
            <Loading/>
        )
    }
}