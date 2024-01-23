import React from 'react';
import { Text, View, SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


import styles from './styles';


export default function Ajuda() {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={{textAlign:'center',fontWeight:'bold'}}>Central de ajuda</Text>
                </View>
                <View>
                    <View>
                        <Text style={{textAlign:'center',fontWeight:'bold'}}>Como podemos te ajudar?</Text>
                    </View>
                    <View>
                        <View style={styles.boxInput}>
                            <TextInput placeholder='Buscar'
                                //value={}
                                //onChangeText={() => 
                                style={styles.input}>
                            </TextInput>
                            <TouchableOpacity>
                                <Ionicons name='search-outline' size={30} color={'black'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                    <View>
                        <View>
                            <Text style={{textAlign:'center',fontWeight:'bold'}}>Dúvidas frenquentes</Text>
                            
                        </View>
                        <View>
                            <TouchableOpacity //onPress={() => navigation.navigate('')}
                            >
                                <Text style={{textAlign:'center',fontWeight:'bold'}}>Como utilizar o QR Code?</Text>
                                <AntDesign name="right" size={20} color="black" />
                                <View style={styles.linha} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity //onPress={() => navigation.navigate('')}
                            >
                                <Text style={{textAlign:'center',fontWeight:'bold'}}>Como utilizar sensor NFC?</Text>
                                <AntDesign name="right" size={20} color="black" />
                                <View style={styles.linha} />
                            </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ArtigosBilhete')}
                            >
                                <Text style={{textAlign:'center',fontWeight:'bold'}}>Como trocar de bilhete?</Text>
                                <AntDesign name="right" size={20} color="black" />
                                <View style={styles.linha} />
                            </TouchableOpacity>    
                        </View>
                       
                    </View>
                <View>
                <View>
                        <Text style={{textAlign:'center',fontWeight:'bold'}}>Ainda precisa de ajuda?</Text>
                        <View style={styles.circuloBorda}>
                            <Ionicons style={styles.centralizar} name="chatbubble-ellipses-outline"  size={60} color={'black'}></Ionicons>
                        </View>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    );
}