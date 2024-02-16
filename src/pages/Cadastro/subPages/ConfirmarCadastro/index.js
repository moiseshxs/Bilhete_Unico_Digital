import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, Pressable } from "react-native";
import styles from './styles'
import { useEffect, useState } from 'react';
import Api from '../../../../Services/api/Api';
import api from '../../../../Services/api/teste';

export default function ConfirmarCadastro({navigation, route}){
    
    
    const[email, setEmail] = useState('');
    const[numTel, setNumTel] = useState('');
    const[dados, setDados] = useState('')

    if(route.params !== undefined){
        let emailPassageiro = route.params.dados.emailPassageiro
        let numTelPassageiro = route.params.dados.numTelPassageiro
        useEffect(() => {
        setEmail(emailPassageiro)
        setNumTel(numTelPassageiro)
        setDados(route.params.dados)

    })

}
        let api = new Api()
        const requireCod = async(forma, dado) =>{
            const response = await api.requireCod(forma, dado)
            if(response){
                navigation.navigate('CodigoCadastro', {
                    id: dados.id,   
                    forma: forma
                })
            }

        }
    
    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.returnArea}>  
            <Ionicons
                name='arrow-back'
                size={30}
                style={{marginStart: 27}}
                onPress={() => navigation.navigate('Cadastro') }/>
          </View>
          <View style={styles.texts}>

              <Text style={{fontSize:40, fontWeight: '600', width: '100%'}}>Confirme sua identidade</Text>
              <Text style={{fontSize:20, color:'#7b7b7b', fontWeight: '500'}}>Selecione por qual opção de contato você deseja confirmar sua identidade:</Text>
          </View>
          <View style={styles.optionsArea}>
                <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('CodigoCadastro', {forma: "numero de celular"})}>
                    <View style={styles.controller}>
                        <View style={styles.icon}>
                            <Ionicons name='phone-portrait' size={80}/>
                        </View>
                        <View style={styles.desc}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#7b7b7b'}}>Via SMS:</Text>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>{numTel}</Text>
                        </View>
                    </View>

                </Pressable>
                <Pressable
                style={styles.pressable}
                onPress={() => requireCod("email", email)}>
                     <View style={styles.controller}>
                        <View style={styles.icon}>
                            <Ionicons name='mail' size={80}/>
                        </View>
                        <View style={styles.desc}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#7b7b7b'}}>Via Email:</Text>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>{email}</Text>
                        </View>
                    </View>

                </Pressable>


          </View>
          
        </SafeAreaView>
    )
}