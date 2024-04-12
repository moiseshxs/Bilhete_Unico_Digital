import React, { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, FlatList, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MyContext from '../../Context/context';
import search from '../../Controllers/Ajuda';

import styles from './styles';


export default function Ajuda({navigation}) {
    const [filtro, setFiltro] = useState('')
    const [result, setResult] = useState([])
    const { token } = useContext(MyContext)
    const searchAjuda = async () => {
        let ajuda = new search();

        const response = await ajuda.search(token, filtro.trim() || '');
        setResult(response);

    };
    const resultSearchData = result.map(item => ({
        id: item.id,
        tituloAjuda: item.tituloAjuda,
        caminhoAjuda: item.caminhoAjuda,
        descAjuda: item.descAjuda
        
    }));
    console.log(resultSearchData)
    useEffect(() => {
        searchAjuda();
        if (filtro != '') {
            result.filter((item) => {
                return item.tituloAjuda ? item.tituloAjuda.toLowerCase().includes(filtro.toLowerCase()) : false;
            });
        }
    }, [filtro]);

    const ResultSearch = ({ id, tituloAjuda, caminhoAjuda, descAjuda}) => (
        
    <TouchableOpacity onPress={()=> navigation.navigate('ArtigosBilhete',{id: id, titulo: tituloAjuda, caminho: caminhoAjuda, desc: descAjuda})}>
        <View style={styles.boxAjuda}>
            <View style={styles.boxTituloAjuda}>
                <Text style={styles.tituloArtigo}>{tituloAjuda}</Text>
               
            </View>
        </View>
    </TouchableOpacity>
    );

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
                                value={filtro}
                                onChangeText={(texto) => setFiltro(texto)}
                                style={styles.input}>
                            </TextInput>

                            <TouchableOpacity>
                                <Ionicons name='search-outline' size={30} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={resultSearchData}
                            renderItem={({ item }) => <ResultSearch id={item.id} tituloAjuda={item.tituloAjuda} caminhoAjuda={item.caminhoAjuda} descAjuda={item.descAjuda} />}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={false}
                        />
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
                                        <Ionicons style={styles.centralizar} name="chatbubble-ellipses-outline" size={60} color={'black'}></Ionicons>
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
