import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, Pressable } from "react-native";
import styles from './styles'

export default function ConfirmarCadastro({navigation}){
    
    

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
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>** ****-**10</Text>
                        </View>
                    </View>

                </Pressable>
                <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('CodigoCadastro', {forma: "Email"})}>
                     <View style={styles.controller}>
                        <View style={styles.icon}>
                            <Ionicons name='mail' size={80}/>
                        </View>
                        <View style={styles.desc}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#7b7b7b'}}>Via Email:</Text>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>******ro12@gmail.com</Text>
                        </View>
                    </View>

                </Pressable>


          </View>
          
        </SafeAreaView>
    )
}