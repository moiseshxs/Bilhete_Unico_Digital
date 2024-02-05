import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';




export default function Chat() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.boxChat}>
            <View style={styles.questionario}>
                <Text style={styles.titleQuest}>Conseguiu resolver o seu problema?</Text>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttonAjuda} onPress={() => navigation.navigate('Ajuda')}>
                        <Text>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAjuda} onPress={() => navigation.navigate('FaleComFuncionario')}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <KeyboardAvoidingView
            style={styles.containerR}

        >
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
            />
            <View style={styles.circuloBordaChat}>
                <TouchableOpacity>
                    <Ionicons name="paper-plane" size={25} color={'white'} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>


    </SafeAreaView>
    );
}