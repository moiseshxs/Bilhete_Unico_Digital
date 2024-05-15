import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

export default function ModalErro({error}) {

    
    const [modal, setModal] =useState(true);
    const errorMessage = error === 404 ? 'Erro de Conexão' : 'Erro desconhecido';
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
                            <Image source={require('../../../assets/img/modalErro/wifi 1.png')} 
                            style={styles.metodo} />
                            <TouchableOpacity
                               style={styles.buttonArea}
                               onPress={() => trocarSenha()} >
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