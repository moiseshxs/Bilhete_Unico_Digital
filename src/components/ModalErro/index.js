import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import AuthPassageiro from '../../Controllers/AuthPassageiro';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function ModalErro({visible ,text, icon, closeButton}) {

    
    const [modal, setModal] =useState(false);
  
    
    useEffect(() => {
        setModal(visible);
      }, [visible]);
    //   const recarregar = async()=>{
             //por enquanto sem nada pois n sei como vou fazer :D
    //   }

    return (
            <Modal
            visible={modal}
            transparent={true}
            style={styles.modal}
            animationType='slide'>
                <SafeAreaView style={styles.containerModal}>
                    <View style={styles.areaModal}>
                        {closeButton?
                        <View style={styles.closeArea}>
                            <Ionicons
                            name='close' size={30} color={'black'} style={styles.icon}
                            onPress={() => setModal(false)}/>
                        </View>
                        :false
                        }
                        <View style={styles.contArea}>
                            <View style={styles.textModal}>
                            <Text style={styles.informe}>{text}</Text>
                            </View>
                            <MaterialIcons name={icon} size={80} color="red" />
                            
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
    );
}