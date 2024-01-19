import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DATA = [
  {
    id: '1',
    tipoRecarga: 'PIX',
    qtd: '2',
    data: '18 OUT ',
  },
  {
    id: '2',
    tipoRecarga: 'PIX',
    qtd: '20',
    data: '10 OUT',
  },
  {
    id: '3',
    tipoRecarga: 'PIX',
    qtd: '15',
    data: '24 SET',
  },
  {
    id: '4',
    tipoRecarga: 'PIX',
    qtd: '10',
    data: '4 SET',
  },
];



export default function Carteira() {
  const navigation = useNavigation();

  const Item = ({tipoRecarga,qtd,data}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Comprovante')}>               
    <View style={styles.item}>
      <View style={styles.esquerda}>
        <View style={styles.pagamen}>
          <Image source={require('../../../assets/img/carteira/pix.png')} style={styles.foto}/>
        </View>
        <View style={styles.meio}>
          <Text style={styles.tipoRecarga}>Compra no {tipoRecarga}</Text>
          <Text style={styles.qtd}>{qtd} PASSAGENS</Text>
        </View>
      </View>
  
      <View style={styles.direita}>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

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
                    <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
                        <Image
                            source={require('../../../assets/img/carteira/pix.png')}
                            style={styles.metodo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleMetodo}>
                    <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
                        <Image
                            source={require('../../../assets/img/carteira/pix.png')}
                            style={styles.metodo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.circleMetodo}>
                    <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
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
            renderItem={({item}) => <Item tipoRecarga={item.tipoRecarga} qtd={item.qtd} data={item.data}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}