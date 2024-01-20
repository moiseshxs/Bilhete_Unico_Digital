import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Cartao() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaCartoes}>

            </View>

            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegistrarCartao')}>
                        <Text style={styles.textBotao}>Adicionar cartão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}