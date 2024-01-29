import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function FaleComFuncionario() {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Ajuda')}>
                                <AntDesign name="left" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.circuloBorda}>
                            <Ionicons style={styles.center} name="headset" size={30} />
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.titulo}>
                                Fale Conosco
                            </Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <TextInput style={styles.assunto} placeholder='Assunto'/>
                        <TextInput
                            multiline={true}
                            numberOfLines={30}
                            style={styles.inputArea}
                         />

                         <View style={styles.buttonArea}>
                                <TouchableOpacity style={styles.buttonAjuda}>
                                    <Text style={styles.buttonText}>Enviar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonAjuda}>
                                    <Text style={styles.buttonText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}