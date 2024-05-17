import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import AuthPassageiro from '../../Controllers/AuthPassageiro';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function ModalErro({visible ,error}) {

    
    const [modal, setModal] =useState(false);
    const [errorMessage, setErrorMessage]= useState('')
    const [icon, setIcon]= useState('')
    useEffect(() => {
        setModal(visible);
        if(error===500){
  
            setErrorMessage('Erro Interno de Servidor');
              setIcon('error-outline')
          }if(error ===404){
            setErrorMessage('Verifique Sua Internet');
              setIcon('wifi-off')
  
        }
      }, [visible, error]);
      const recarregar = async()=>{
        //por enquanto sem nada pois n sei como vou fazer :D
      }

    return (
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
                            <Text style={styles.informe}>{errorMessage}</Text>
                            </View>
                            <MaterialIcons name={icon} size={80} color="red" />
                            <TouchableOpacity
                               style={styles.buttonArea}
                               onPress={() => recarregar()} >
                                <View style={styles.buttonAlterar}>
                                    <Text style={styles.textButton}>Recarregar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
            </Modal>
    );
}