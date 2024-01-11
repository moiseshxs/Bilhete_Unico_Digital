
import { Text, View, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles';

const DATA = [
  {
    id: '1',
    passagem: 'Passagem em QrCode',
    linha: '312N-10 SÃO MIGUEL',
    data: '7 NOV',
  },
  {
    id: '2',
    passagem: 'Passagem em QrCode',
    linha: '312N-10 TERM. CID. TIRADENTES',
    data: '7 NOV',
  },
  {
    id: '3',
    passagem: 'Passagem em QrCode',
    linha: '312N-10 TERM. CID. TIRADENTES',
    data: '7 NOV',
  },
  {
    id: '4',
    passagem: 'Passagem em QrCode',
    linha: '312N-10 TERM. CID. TIRADENTES',
    data: '7 NOV',
  },
];

const Item = ({passagem,linha,data}) => (
  <View style={styles.item}>
    
    <View style={styles.foto}>
      
    </View>

    <View style={styles.esquerda}>
      
      <Text style={styles.passagem}>{passagem}</Text>
      <Text style={styles.linha}>{linha}</Text>
    </View>

    <View style={styles.direita}>
      <Text style={styles.data}>{data}</Text>
    </View>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <View style={styles.cima}>

        </View>
      

        <View style={[styles.integracao, styles.shadow]}>
          <View style={styles.boxInte}>
            <Text style={styles.tituInte}>Integração ativa:</Text>
            <Text style={styles.tempo}>02h 07m 29s</Text>
          </View>
        </View>


        <View style={styles.atividades}>
          <Text style={styles.titulo}>Atividades</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item passagem={item.passagem} linha={item.linha} data={item.data}/>}
            keyExtractor={item => item.id}
          />
        </View>

      
    </SafeAreaView>
  );
}