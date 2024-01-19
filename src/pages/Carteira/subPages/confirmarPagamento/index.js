import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DATA = [
    {
        id: '1',
        titulo: 'Passagens',
        conteudo: '6',
        editar: 'QtdPassagens',
    },
    {
        id: '2',
        titulo: 'Cartão de crédito',
        conteudo: '**** 5372',
        editar: 'QtdPassagens',
    },
    {
        id: '3',
        titulo: 'Data da recarga',
        conteudo: '12/12/2023',
        editar: '{QtdPassagens}',
    },
];

export default function ConfirmarPagamento() {
    const navigation = useNavigation();

    const Item = ({ titulo, conteudo, editar }) => (
        <View style={styles.passagens}>
          <View style={styles.esquerda}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.conteudo}>{conteudo}</Text>
          </View>

          <View style={styles.direita}>
            <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
              <Text style={styles.textEditar}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.recarregando}>
                <Text style={styles.text}>Você está recarregando</Text>
                <Text style={styles.valor}>R$ 26,40</Text>
            </View>

            <View style={styles.infos}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item titulo={item.titulo} conteudo={item.conteudo}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </View>

            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={() => navigation.navigate('Comprovante')}>
                        <Text style={styles.textBotao}>Confirmar pagamento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}