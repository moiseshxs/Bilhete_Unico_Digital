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
                    <View style={styles.section}>
                        <TextInput style={styles.assunto} placeholder='Assunto' />
                        <TextInput
                            multiline={true}
                            numberOfLines={30}
                            placeholder='Escrever e-mail'
                            style={styles.inputArea}
                        />
                        <View style={styles.buttonArea}>
                            <View style={styles.arquivo}>
                                <TouchableOpacity style={styles.buttonAjuda}>
                                    <Ionicons name="document-text-outline" size={30}></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonAjuda}>
                                    <Ionicons name="camera-outline" size={30}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.buttonAjuda}>
                                <Ionicons name="paper-plane-outline" size={30}></Ionicons>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}