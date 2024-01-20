import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Perfil() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Perfil</Text></View>
        </SafeAreaView>
    );
}