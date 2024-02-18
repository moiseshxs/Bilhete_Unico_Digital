import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, Pressable, Dimensions } from "react-native";
import styles from './styles'
import { useEffect, useState } from 'react';
import Api from '../../../../Services/api/Api';
import Loading from '../../../Loading';

export default function ConfirmarCadastro({navigation, route}){
    
    
    const[email, setEmail] = useState('');
    const[numTel, setNumTel] = useState('');
    const[dados, setDados] = useState('')
    const[loading, setLoading] = useState(false)
    

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
            setLoading(true)
            const response = await api.requireCod(forma, dado)
            if(response){
                setTimeout(() => setLoading(false), 1000)
                navigation.navigate('CodigoCadastro', {
                    id: dados.id,   
                    forma: forma
                })
            }

        }
    if(!loading){
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
                            <Text numberOfLines={1} style={{fontSize:16, fontWeight:'500', color:'#000', width:Dimensions.get('screen').width/2}}>{email}</Text>
                        </View>
                    </View>

                </Pressable>


          </View>
          
        </SafeAreaView>
    )
}else{
    return(
        <Loading obs="Isso pode demorar um pouco.."/>
    )
}
}