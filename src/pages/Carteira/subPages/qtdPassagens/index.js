import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DATA = [
    {
      id: '1',
      qtd: '1',
    },
    {
        id: '2',
        qtd: '2',
    },
    {
        id: '3',
        qtd: '4',
    },
    {
        id: '4',
        qtd: '6',
    },
    {
        id: '5',
        qtd: '10',
    },
    {
        id: '6',
        qtd: '12',
    },
    {
        id: '7',
        qtd: '15',
    },
    {
        id: '8',
        qtd: '20',
    },
    
];
function qtdPasssagem(){
    
}

export default function QtdPassagens({route}) {
    const navigation = useNavigation();

    const Item = ({ qtd }) => (
        <View style={styles.bolinhas}>
            <View style={styles.numPassagens}>
                <TouchableOpacity onPress={() => navigation.navigate('ConfirmarPagamento', {quantidade:qtd, formaPagamento: route.params.fpId} )}>
                    <Text style={styles.textPassagens}>{qtd}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
                <View style={styles.areaTexto}>
                    <Text style={styles.text}>Quantas passagens?</Text>
                    <Text style={styles.subText}>Selecione a quantidade de passagens.</Text>
                </View>

                <View style={styles.areaPassagens}> 
                    <FlatList
                        data={DATA}
                        numColumns={4}
                        renderItem={({ item }) => <Item qtd={item.qtd} />}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                    <View style={styles.areaPerso}>
                        <TextInput style={styles.input}
                            placeholder={'Outro valor'}
                            keyboardType='numeric'
                        />
                    </View>
                </View>

                <View style={styles.areaBotao}>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate('ConfirmarPagamento')}>
                            <AntDesign name="right" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                



        </SafeAreaView>
    );
}