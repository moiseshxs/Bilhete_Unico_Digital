import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, View, Text } from "react-native";
import { useState } from 'react';
import { CodeField, Cursor,  useClearByFocusCell } from 'react-native-confirmation-code-field';
import styles from './styles'
import AuthPassageiro from '../../../../Controllers/AuthPassageiro';

export default function RecuperarSenha({navigation, route}){
    let authP = new AuthPassageiro()
    const CELL_COUNT = 4
    const [value, setValue] = useState('');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
    })
    const verCod = async(codigo) =>
    {
      setLoading(true)
      const response = await authP.verCodRecuperar(route.params.id,codigo)
      
      if(response == 'autorizado'){
        setTimeout(() => setLoading(false), 1000)
        navigation.navigate('DefinirSenha', {
          id: route.params.id 
        })
      }
      else if(response == 'incorreto'){
        setLoading(false)
        setError('Código Incorreto')
      }else{
        setLoading(false)
        Alert.alert('Erro', "Erro inesperado ao verificar código", [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK'
          },
        ]);
        
      }
    }


    if(value.length == 4){
      setTimeout(function(){
        // navigation.navigate('NovaSenha')
        setValue('')
        verCod(value);

      }, 200)
    }

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.returnArea}>  
            <Ionicons
                name='arrow-back'
                size={30} 
                style={{marginStart: 27}}
                onPress={() => navigation.navigate('Login') }/>
          </View>
          <View style={styles.texts}>

              <Text style={{fontSize:36, fontWeight: '600', width: '100%'}}>Informe o código de 4 digitos</Text>
              <Text style={{fontSize:20, color:'#7b7b7b', fontWeight: '500'}}>O código de recuperação foi enviado ao seu {route.params.forma}. Informe abaixo:</Text>
          </View>
          <CodeField 
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            renderCell={({index, symbol, isFocused}) => (
              <View style={[styles.celula, isFocused && styles.focusCell]}>
              <Text style={[styles.textCelula, isFocused && styles.focusTextCell]}
                key={index}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
              </View>
            )}
          />
        </SafeAreaView>
    )
}