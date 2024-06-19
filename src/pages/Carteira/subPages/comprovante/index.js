import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';






// const DATA = [
//     {
//         id: '1',
//         titulo: 'Valor',
//         conteudo: 'R$ 26,40',
//     },
//     {
//         id: '2',
//         titulo: 'Passagens',
//         conteudo: '6',
//     },
//     {
//         id: '3',
//         titulo: 'Pagamento com',
//         conteudo: 'Cartão de crédito',
//     },
//     {
//         id: '4',
//         titulo: 'Data da recarga',
//         conteudo: '12/12/2023',
//     },
// ];

export default function Comprovante({route}) {
    const resolveValor = (qtd) => {
        let valor = `R$ ${(parseFloat(qtd)).toFixed(2)}`

            return valor.replaceAll ('.', ',')
    }

    const formasPagamento = {
        1 : 'Cartão',
        2: 'Pix',
        3:'Boleto'
    }
    let dados = route.params.dados;
    console.log(dados);
    const[DATA, setDATA] = useState([
        
            {
                id: '1',
                titulo: 'Valor',
                conteudo: resolveValor(dados.valor),
            },
            {
                id: '2',
                titulo: 'Passagens',
                conteudo: dados.passagens,
            },
            {
                id: '3',
                titulo: 'Pagamento com',
                conteudo: formasPagamento[dados.forma]
            },
            {
                id: '4',
                titulo: 'Data da recarga',
                conteudo: dados.dataCompra,
            },
        
    ])
    const Item = ({ titulo, conteudo}) => (
        <View style={styles.passagens}>
          <View style={styles.esquerda}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.conteudo}>{conteudo}</Text>
          </View>
        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaEfetuada}>
                <Text style={styles.text}>Recarga efetuada</Text>
                <Ionicons name="checkmark-circle" size={100} color="green" />
            </View>

            <View style={styles.areaComprovante}>
                <Text style={styles.text}>Comprovante</Text>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item titulo={item.titulo} conteudo={item.conteudo}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />

            </View>
        </SafeAreaView>
    );
}