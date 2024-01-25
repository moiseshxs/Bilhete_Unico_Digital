import React from 'react';
import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import visa from '../../../../../assets/img/cartao/visa.png';
import mastercard from '../../../../../assets/img/cartao/mastercard.png';
import styles from './styles';

const DATA = [
    {
      id: '1',
      numero: '**** 2546',
      bandeira: visa,
    },
    {
      id: '2',
      numero: '**** 4278',
      bandeira: mastercard,
    },
  ];

export default function Cartao() {

    const Item = ({numero,bandeira}) => (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('RegistrarCartao')}>
                    <View style={styles.cartao}>
                        <Text style={styles.textCartao}>{numero}</Text>
                        <Image
                            source={bandeira}
                            style={styles.bandeira}
                        />
                    </View>
            </TouchableOpacity>
        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaCartoes}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item numero={item.numero} bandeira={item.bandeira}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegistrarCartao')}>
                        <Text style={styles.textBotao}>Adicionar cartão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}