import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Cartao() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Cartao</Text></View>
        </SafeAreaView>
    );
}