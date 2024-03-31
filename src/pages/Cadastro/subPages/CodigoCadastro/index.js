import { Ionicons } from '@expo/vector-icons';
import {  View, Text, TouchableOpacity } from "react-native";
import {  useState } from 'react';
import { CodeField, Cursor,  useClearByFocusCell } from 'react-native-confirmation-code-field';
import styles from './styles'

import Loading from '../../../Loading';
import Animated from 'react-native-reanimated';
import AuthPassageiro from '../../../../Controllers/AuthPassageiro';

export default function RecuperarSenha({navigation, route}){
    const CELL_COUNT = 4
    const [value, setValue] = useState('');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
    })
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)
    let authP = new AuthPassageiro()

    const verCod = async(codigo) =>
    {
      setLoading(true)
      const response = await authP.verCod(route.params.id,codigo)
      
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
      verCod(value)
      setValue('')
    }


    
    if(!loading){
    return(
        <Animated.View style={styles.container}
        sharedTransitionTag="tag">
          <View style={styles.returnArea}>  
            <Ionicons
                name='arrow-back'
                size={30}
                style={{marginStart: 27}}
                onPress={() => navigation.navigate('ConfirmarCadastro') }/>
          </View>
          <View style={styles.texts}>

              <Text style={{fontSize:36, fontWeight: '600', width: '100%'}}>Informe o código de 4 digitos</Text>
              <Text style={{fontSize:20, color:'#7b7b7b', fontWeight: '500'}}>O código de confirmação foi enviado ao seu {route.params.forma}. Informe abaixo:</Text>
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
          <View style={styles.messageView}>
              <TouchableOpacity>
            <Text>Não recebeu o código? 
              <Text style={styles.reenviar}> Reenviar</Text>
              </Text>
              </TouchableOpacity>
              <Text style={styles.error}>{error}</Text>
          </View>
        </Animated.View>
    )
  }else{
    return (
      <Loading/>
    )
  }
}