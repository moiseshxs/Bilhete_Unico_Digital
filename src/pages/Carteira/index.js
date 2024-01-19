import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cartao from '../../../assets/img/carteira/cartao.png';
import pix from '../../../assets/img/carteira/pix.png';
import boleto from '../../../assets/img/carteira/boleto.png';
import styles from './styles';

const metodos = [
  {
    id: '1',
    tipoRecarga: 'PIX',
    image: pix,
  },
  {
    id: '2',
    tipoRecarga: 'Cartão',
    image: cartao,
  },
  {
    id: '3',
    tipoRecarga: 'Boleto',
    image: boleto,
  },
];

const historico = [
  {
    id: '1',
    tipoRecarga: 'crédito',
    qtd: '6',
    data: '12 DEZ ',
    image: cartao,
  },
  {
    id: '2',
    tipoRecarga: 'PIX',
    qtd: '20',
    data: '10 OUT',
    image: pix,
  },
  {
    id: '3',
    tipoRecarga: 'boleto',
    qtd: '15',
    data: '24 SET',
    image: boleto,
  },
  {
    id: '4',
    tipoRecarga: 'boleto',
    qtd: '10',
    data: '4 SET',
    image: boleto,
  },
];



export default function Carteira() {
  const navigation = useNavigation();

  const Metodos = ({tipoRecarga,image}) => ( 
    <View style={styles.fundometodos}>            
      <View style={styles.circleMetodo}>
        <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
          <Image
            source={image}
            style={styles.metodo}
          />
        </TouchableOpacity>
      </View>
      <Text>{tipoRecarga}</Text>
    </View>
  );

  const Item = ({tipoRecarga,qtd,data,image}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Comprovante')}>               
    <View style={styles.item}>
      <View style={styles.esquerda}>
        <View style={styles.pagamen}>
          <Image source={image} style={styles.foto}/>
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
            <FlatList
              data={metodos}
              renderItem={({item}) => <Metodos tipoRecarga={item.tipoRecarga} image={item.image}/>}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
                
                
            </View>
        </View>


        <View style={styles.historico}>
          <Text style={styles.titulo}>Historico</Text>
          <FlatList
            data={historico}
            renderItem={({item}) => <Item tipoRecarga={item.tipoRecarga} qtd={item.qtd} data={item.data} image={item.image}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}