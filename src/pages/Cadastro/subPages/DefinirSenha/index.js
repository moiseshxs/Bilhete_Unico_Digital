import { View, Text, Dimensions, TouchableOpacity, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useState } from "react"
import { FloatingLabelInput } from "react-native-floating-label-input"
import AuthPassageiro from "../../../../Controllers/AuthPassageiro"
import ModalErro from '../../../../components/ModalErro';
import Loading from "../../../Loading"

export default function NovaSenha({navigation, route}){

    const[modalErro, setModalErro] = useState(false)
    const[iconModal, setIconModal] = useState('')
    const[textModal, setTextModal] = useState('')
    const[loading, setLoading] = useState(false)

    function changeColor(input){
        if(input == 'senha'){
            setBorderColor('#f00')
            setBorderColor2('#7b7b7b')
        }else{
            setBorderColor('#7b7b7b')
            setBorderColor2('#f00')
        }
    }
    let authP = new AuthPassageiro()
    const register = async(senha, confirmaSenha) => {
        await new Promise(resolve => {
            setModalErro(false);
            
            setTimeout(resolve, 0);
        });
        if(senha == '' || confirmSenha == ''){
            setModalErro(true)
            setTextModal('Preencha os Campos')
            setIconModal('error-outline')
        }
        else if(senha != confirmaSenha){
            setModalErro(true)
            setTextModal('As senhas são diferentes')
            setIconModal('error-outline')
            setLoading(false)
            return false;
        }else{
        setLoading(true)

        if(await authP.register(route.params.id, senha)){
            setTimeout(() => setLoading(false), 1000)
            // Alert.alert('Erro', "Erro inesperado ao verificar código", [
            //     {
            //       text: 'Cancel',
            //       onPress: () => navigation.navigate('Login'),
            //       style: 'cancel',
            //     },
            //     {
            //       text: 'OK',
            //       onPress: ()=> navigation.navigate('Login')
            //     },
            //   ]);
            navigation.navigate('Login') //usar apenas no navegador
        }else{
            setModalErro(true)
            setTextModal('Erro ao Cadastrar')
            setIconModal('error-outline')
            return false
        }
    }
    }

    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    if(!loading){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Defina uma senha:</Text>
                <Text style={styles.desc}>Esta senha será utilizada para entrar no aplicativo, não se preocupe seus dados da sptrans não serão modificados!</Text>
            </View>
            <View style={styles.inputGroup}> 
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
                        borderColor: borderColor,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        colorFocused: '#F00E0E',
                        
                        
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
                        
                    }}
                    onChangeText={value => {setSenha(value)}}
                    onFocus={() => changeColor('senha')}
                    isFocused
                    />

                <FloatingLabelInput
                    label='Confirme a senha'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    
                    value={confirmSenha}
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
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setConfirmSenha(value)}}
                    onFocus={() => changeColor('confirma')}
                    isFocused
                    />
                
            </View>
            <View style={styles.buttonArea}>
            <TouchableOpacity
                    onPress={() => register(senha, confirmSenha)}>
                        <View style={styles.button}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                        </View>
                </TouchableOpacity>
            </View>
            <ModalErro visible={modalErro} icon={iconModal} text={textModal} />
        </SafeAreaView>
    )
}else{
    return (
        <Loading/>
    )
}
}