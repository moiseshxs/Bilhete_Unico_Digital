import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function Chat() {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
           
                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.buttonAjuda} onPress={() => navigation.navigate('Ajuda')}>
                                <AntDesign name="left" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                            <View style={styles.circuloBorda}>
                                <Ionicons style={styles.center} name="headset" size={30}/>
                            </View>
                        <View style={styles.center}>
                            <Text style={styles.titulo}>
                                Suporte
                            </Text>
                        </View>
                    </View>
                    
                    
                    <View>
                        
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
                                <Ionicons name="paper-plane"  size={25} color={'white'}/>
                            </View>    
                        </TouchableOpacity>
                            </View>
                        </View> 
                    </View>

        </SafeAreaView>
    );
}