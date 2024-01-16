import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Config() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Config</Text></View>
        </SafeAreaView>
    );
}