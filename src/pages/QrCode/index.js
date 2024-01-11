import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function QrCode() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>QrCode</Text></View>
        </SafeAreaView>
    );
}