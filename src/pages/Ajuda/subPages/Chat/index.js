import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';




export default function Chat() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaChat}>
                <View style={styles.areaChatRobo}>
                    <View style={styles.mensagemRobo}>
                        <Text style={styles.textBold}>Atendimento automatico</Text>
                        <Text>Olá, Hugo Botinha. Esse é o atendimento automatico.</Text>
                    </View>
                    <View style={styles.mensagemRobo}>
                        <Text>Escolha uma das opções a seguir ou clique em outros e escreva em poucas palavras chaves qual é a sua dúvida.</Text>
                    </View>
                    <View style={styles.areaOpcoes}>
                        <Pressable style={styles.opcoes}>
                            <Text style={styles.textOpcoes}>Como trocar de bilhete</Text>
                        </Pressable>
                        <Pressable style={styles.opcoes}>
                            <Text style={styles.textOpcoes}>Como solicitar bilhete</Text>
                        </Pressable>
                        <Pressable style={styles.opcoes}>
                            <Text style={styles.textOpcoes}>Como pagar via PIX</Text>
                        </Pressable>
                        <Pressable style={styles.opcoes}>
                            <Text style={styles.textOpcoes}>Como alterar email</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.areaTeclado}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua mensagem...'
                />
                <Pressable style={styles.icone} onPress={() => navigation.navigate("FaleComFuncionario")}>
                    <FontAwesome name="send" size={24} color="red" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}