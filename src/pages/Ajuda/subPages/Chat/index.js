import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
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
            <View style={styles.viewCompleta}>
                <View style={styles.boxInput}>
                    <TextInput placeholder='Digite sua dúvida...'
                        //value={}
                        //onChangeText={() => 
                        style={styles.input}>
                    </TextInput>
                    <View style={styles.circuloBordaChat}>

                        <TouchableOpacity>
                            <View>
                                <Ionicons name="paper-plane" size={25} color={'white'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}