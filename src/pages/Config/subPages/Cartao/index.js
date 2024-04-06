import React, {  useState } from 'react';
import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  useContext } from 'react';
import visa from '../../../../../assets/img/cartao/visa.png';
import mastercard from '../../../../../assets/img/cartao/mastercard.png';
import styles from './styles';
import CartaoPassageiro from '../../../../Controllers/CartaoPassageiro';
import MyContext from '../../../../Context/context';


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

    const [cartao,setCartao] = useState();
    const {passageiro, token} = useContext(MyContext);
    let cP = new CartaoPassageiro();  

  const getCartoesPassageiro = async() => {
      console.log(passageiro.id);
      console.log(token);
      const response = await cP.getCartaoPassageiro(passageiro.id,token)
      setCartao(response)
  }
  useState(()=>{
    getCartoesPassageiro();
    console.log(cartao)
})
    const navigation = useNavigation();

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
                    data={cartao}
                    renderItem={({item}) => <Item numero={item.numeroCartao} bandeira={item.bandeira}/>}
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