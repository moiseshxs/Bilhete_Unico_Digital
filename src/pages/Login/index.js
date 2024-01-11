import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Login</Text></View>
        </SafeAreaView>
    );
}