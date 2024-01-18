import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DATA = [
  {
    id: '1',
    passagem: 'Compra no PIX',
    linha: '2 PASSAGENS',
    data: '18 OUT ',
  },
  {
    id: '2',
    passagem: 'Compra no PIX',
    linha: '20 PASSAGENS',
    data: '10 OUT',
  },
  {
    id: '3',
    passagem: 'Compra no PIX',
    linha: '15 PASSAGENS',
    data: '24 SET',
  },
  {
    id: '4',
    passagem: 'Compra no PIX',
    linha: '10 PASSAGENS',
    data: '4 SET',
  },
];

const Item = ({passagem,linha,data}) => (
  <View style={styles.item}>
    <View style={styles.esquerda}>
      <View style={styles.pagamen}>
        <Image source={require('../../../assets/img/carteira/pix.png')} style={styles.foto}/>
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
              <Text style={styles.nomeCarteira}>CARTEIRA</Text>
          </View>

          <View style={styles.passagens}>
            <Text style={styles.tituPassag}>Passagens disponiveis</Text>
            <Text style={styles.qtdPassag}>42</Text>
          </View>
        </View>
      

        <View style={styles.recarga}>
            <Text style={styles.titulo}>Recarga</Text>
            <View style={styles.fundometodos}>
                <View style={styles.circleMetodo}>
                    <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                        <Image
                            source={require('../../../assets/img/carteira/pix.png')}
                            style={styles.metodo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleMetodo}>
                    <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                        <Image
                            source={require('../../../assets/img/carteira/pix.png')}
                            style={styles.metodo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleMetodo}>
                    <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                        <Image
                            source={require('../../../assets/img/carteira/pix.png')}
                            style={styles.metodo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        <View style={styles.historico}>
          <Text style={styles.titulo}>Historico</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item passagem={item.passagem} linha={item.linha} data={item.data}/>}
            keyExtractor={item => item.id}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}