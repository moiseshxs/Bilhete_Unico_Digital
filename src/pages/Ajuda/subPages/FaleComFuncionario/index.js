import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';




export default function FaleComFuncionario() {

    const navigation = useNavigation();
    const [assunto, setAssunto] = useState()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.section}>
                        <View style={styles.boxAssunto}>

                            <Text style={styles.assunto}> Qual é o erro?</Text>
                            <Text style={styles.textAssunto}>Nos informe detalhes sobre o erro e
                                anexe prints do erro para te ajudar</Text>
                        </View>
                        <FloatingLabelInput
                            label='Informe o erro'
                            staticLabel
                            hintTextColor='#aaa'
                            multiline={true}
                            numberOfLines={10}
                            value={assunto}
                            placeholder='Escrever e-mail'
                            containerStyles={{
                                borderWidth: 2,
                                minWidth: Dimensions.get('screen').width / 1.15,
                                paddingHorizontal: 10,
                                borderColor: '#f00',
                                borderRadius: 40,
                            }}
                            customLabelStyles={{
                                fontSizeFocused: 12,
                                color: '#9B9B9B',
                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight: 15,
                                fontSize: 16,
                                fontWeight: '500'
                            }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                outline: 'none',
                                paddingHorizontal: 10,
                                fontSize: 16
                            }}

                            onChangeText={value => {setAssunto(value)}}
                   
                        />
                        <View style={styles.boxButton}>

                            <View style={styles.buttonArea}>
                                
                                    <TouchableOpacity style={styles.buttonAjuda}>
                                        <Ionicons name="document-text-outline" size={30}></Ionicons>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonAjuda}>
                                        <Ionicons name="camera-outline" size={30}></Ionicons>
                                    </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.buttonAjuda}>
                                    <Ionicons name="paper-plane-outline" size={30}></Ionicons>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}