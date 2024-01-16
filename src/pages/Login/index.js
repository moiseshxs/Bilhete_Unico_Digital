import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';



export default function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                    <Text>Logi</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
