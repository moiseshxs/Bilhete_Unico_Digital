import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import styles from './styles';

export default function Carteira() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.nav}>
                    <Text>Carteira</Text>
                </View>

                <View style={styles.recarga}>
                    <Text>Carteira</Text>
                </View>
            </ScrollView>
            <StatusBar barStyle="light-conten"/>
        </SafeAreaView>
    );
}