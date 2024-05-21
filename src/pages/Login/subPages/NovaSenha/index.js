import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import { useState,useContext } from "react"
import { FloatingLabelInput } from "react-native-floating-label-input"
import AuthPassageiro from '../../../../Controllers/AuthPassageiro'
import MyContext from "../../../../Context/context"

export default function NovaSenha({navigation,route}){
const {passageiro,password} = useContext(MyContext);
    let aP = new AuthPassageiro();
    const recuperaSenha = async() =>{
        console.log("chegou aqui")
        
        if(senha == '' || confirmSenha == ''){
            setTexto('Campos vazios')
        }
        if(senha == confirmSenha){
            if(password!=senha){
                console.log(route.params.id)
                console.log(passageiro.id)
             const response = await aP.updateSenhaPassageiro(route.params.id,senha)
             console.log(response)
             setTexto("É sua senha atual")
             navigation.navigate('Login');
            }
            if(password==senha){
             setTexto("É sua senha atual")
             console.log(texto)
            }
         }
         if(senha != confirmSenha){
         setTexto("Senhas não conferem")
         console.log(texto)
         }

    
    }
    function changeColor(input){
        if(input == 'senha'){
            setBorderColor('#f00')
            setBorderColor2('#7b7b7b')
        }else{
            setBorderColor('#7b7b7b')
            setBorderColor2('#f00')
        }
    }
    const [texto,setTexto] = useState("")
    const [senha, setSenha] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Digite sua nova senha:</Text>
                <Text style={styles.desc}>Digite e confirme sua senha para manter sua conta segura!</Text>
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
                    
                <Text style={styles.textAviso}>{texto}</Text>
            </View>
            <View style={styles.buttonArea}>
            <TouchableOpacity
                    onPress={recuperaSenha}>
                        <View style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}