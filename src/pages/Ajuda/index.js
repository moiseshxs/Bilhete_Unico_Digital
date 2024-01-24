import React from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';


export default function Ajuda() {

    const navigation = useNavigation();

    return ( 
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <View style={styles.boxTitulo}>
                        <Text style={styles.titulo}>Central de ajuda</Text>
                    </View>
                    <View style={styles.sectionPesquisa}>
                        <View style={styles.boxSubTitulo}>
                            <Text style={styles.subTitulo}>Como podemos te ajudar?</Text>
                        </View>

                        <View style={styles.boxInput}>
                            <TextInput placeholder='Buscar'
                                //value={}
                                //onChangeText={() => 
                                style={styles.input}>
                            </TextInput>
                            <TouchableOpacity>
                                <Ionicons name='search-outline' size={30} color={'black'} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.boxDuvida}>
                        <View style={styles.BoxsubTituloDuvida}>
                            <Text style={styles.subTituloDuvida}>Dúvidas frenquentes</Text>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.boxResposta}>

                                <Text style={styles.tituloArtigo}>Como utilizar o QR Code?</Text>

                                <View style={styles.respostaDuvida}>
                                    <AntDesign name="right" size={20} color="#9b9b9b" />
                                </View>
                                <View style={styles.linha} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.boxResposta}>

                                <Text style={styles.tituloArtigo}>Como utilizar sensor NFC?</Text>

                                <View style={styles.respostaDuvida}>
                                    <AntDesign name="right" size={20} color="#9b9b9b" />
                                </View>
                                <View style={styles.linha} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.boxResposta} onPress={() => navigation.navigate('ArtigosBilhete')}>

                                <Text style={styles.tituloArtigo}>Como trocar de bilhete?</Text>

                                <View style={styles.respostaDuvida}>
                                    <AntDesign name="right" size={20} color="#9b9b9b" />
                                </View>
                                <View style={styles.linha} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                        <View>
                        <View style={styles.BoxsubTituloDuvida}>
                            <Text style={styles.subTituloDuvida}>Ainda precisa de ajuda?</Text>

                        </View>
                        <View style={styles.centralizar}>

                            <View style={styles.circuloBorda}>
                            <TouchableOpacity style={styles.buttonAjuda} onPress={() => navigation.navigate('Chat')}>
                                <Ionicons style={styles.centralizar} name="chatbubble-ellipses-outline"  size={60} color={'black'}></Ionicons>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
