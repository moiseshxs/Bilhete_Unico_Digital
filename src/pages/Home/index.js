import { Feather } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    linha: '312N-10 SÃO MIGUEL',
    data: '4 NOV',
  },
  {
    id: '4',
    passagem: 'Passagem em QrCode',
    linha: '312N-10 TERM. CID. TIRADENTES',
    data: '4 NOV',
  },
];

const Item = ({passagem,linha,data}) => (
  <View style={styles.item}>
    <View style={styles.esquerda}>
      <View style={styles.pagamen}>
        <Image source={require('../../../assets/img/home/qrcode.png')} style={styles.foto}/>
      </View>
      <View style={styles.meio}>
        <Text style={styles.passagem}>{passagem}</Text>
        <Text style={styles.linha}>{linha}</Text>
      </View>
    </View>

    <View style={styles.direita}>
      <Text style={styles.data}>{data}</Text>
    </View>
  </View>
);

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

        <View style={[styles.cima, styles.shadow]}>
          <View style={styles.nav}>
            <View style={styles.perfil}>
            <Image
              source={require('../../../assets/img/home/perfil.png')}
              style={styles.fotoPerfil}
            />
              <Text style={styles.nomePerfil}>Bom dia, Cassio Ramos</Text>
            </View>
            <View style={styles.config}>
              <TouchableOpacity onPress={() => navigation.navigate('Ajuda')}>
              <Feather name='help-circle' size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.passagens}>
            <TouchableOpacity onPress={() => navigation.navigate('Carteira')}>
                <Text style={styles.tituPassag}>Passagens disponiveis</Text>
                <Text style={styles.qtdPassag}>42</Text>
              </TouchableOpacity>
          </View>
        </View>
      

        <View style={styles.integracao}>
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
            showsVerticalScrollIndicator={false}
          />
        </View>
 
      </View>

      

    </SafeAreaView>
  );
}