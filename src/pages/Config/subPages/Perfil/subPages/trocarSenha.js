import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useState,useContext } from "react"
import { FloatingLabelInput } from "react-native-floating-label-input"
import AuthPassageiro from '../../../../../Controllers/AuthPassageiro'
import MyContext from "../../../../../Context/context"
export default function TrocarSenha({navigation}){
const {passageiro,password} = useContext(MyContext);
   
    function changeColor(input){
        if(input == 'senhaAtual'){
            setBorderColor('#f00')
            setBorderColor2('#7b7b7b')
            setBorderColor3('#7b7b7b')
        }
        if(input == 'senha'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#f00')
            setBorderColor3('#7b7b7b')
        }if(input == 'confirma'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#7b7b7b')
            setBorderColor3('#f00')
        }
   
    
    }
    const [texto,setTexto] = useState("")
    const [senhaAtual, setSenhaAtual] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    const [borderColor3, setBorderColor3] = useState('#7b7b7b')

    let aP = new AuthPassageiro();
    const updateSenha = async() =>{
    if(newPassword == '' || passwordConfirm == ''){
            setTexto('Campos vazios')
    }
    if(password == senhaAtual){
        if(newPassword=== passwordConfirm){
           if(password!=newPassword){
            console.log(passageiro.id)
            const response = await aP.updateSenhaPassageiro(passageiro.id,newPassword)
            console.log(response)
            setTexto("É sua senha atual")
            navigation.navigate('Home');
           }
           if(password==newPassword){
            setTexto("É sua senha atual")
            console.log(texto)
           }
        }
        if(password != passwordConfirm){
        setTexto("Senhas não conferem")
        console.log(texto)
        }
    }
    if(password != senhaAtual){
        setTexto("Senha atual não confere")
        console.log(texto)
    }
   
}

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Trocar senha:</Text>
                <Text style={styles.desc}>Esta senha será utilizada para entrar no aplicativo, não se preocupe seus dados da sptrans não serão modificados!</Text>
            </View>
            <View style={styles.inputGroup}> 
            <FloatingLabelInput
                    label='Senha Atual'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    
                    value={senhaAtual}
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
                    onChangeText={value => {setSenhaAtual(value)}}
                    onFocus={() => changeColor('senhaAtual')}
                    isFocused
                    />
            <FloatingLabelInput
                    label='Nova Senha'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    
                    value={newPassword}
                    containerStyles={{
                        borderWidth: 2,
                        width: Dimensions.get('screen').width/1.15,
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
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
                    onChangeText={value => {setNewPassword(value)}}
                    onFocus={() => changeColor('senha')}
                    isFocused
                    />

                <FloatingLabelInput
                    label='Confirme a nova senha'
                    staticLabel
                    hintTextColor='#aaa'
                    isPassword
                    
                    
                    value={passwordConfirm}
                    containerStyles={{
                        borderWidth: 2,
                        width: Dimensions.get('screen').width/1.15,
                        paddingHorizontal: 10,
                        borderColor: borderColor3,
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
                    onChangeText={value => {setPasswordConfirm(value)}}
                    onFocus={() => changeColor('confirma')}
                    isFocused
                    />
                    
            </View>
                    <Text style={{fontSize:16, color:'#f00'}} onPress={() => navigation.navigate('FormaRecuperarSenha')}>Esqueci a senha</Text>
            <View style={styles.buttonArea}>

            <TouchableOpacity
                    onPress={updateSenha}>
                        <Text style={styles.textAviso}>{texto}</Text>
                        <View style={styles.button}>
                        <Text style={styles.textButton}>Trocar</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}