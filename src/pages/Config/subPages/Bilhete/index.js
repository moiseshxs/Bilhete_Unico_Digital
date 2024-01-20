import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Bilhete() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Bilhete</Text></View>
        </SafeAreaView>
    );
}