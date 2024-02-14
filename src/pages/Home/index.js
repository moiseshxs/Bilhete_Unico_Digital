import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { useContext, useEffect, useState } from 'react';
import styles from './styles';
import MyContext from '../../Context/context';

import Passageiro from '../../Services/api/Passageiro';




  let p = new Passageiro()


// const DATA = [
//   {
//     id: '1',
//     passagem: 'Passagem em QrCode',
//     linha: '312N-10 SÃO MIGUEL',
//     data: '7 NOV',
//   },
//   {
//     id: '2',
//     passagem: 'Passagem em QrCode',
//     linha: '312N-10 TERM. CID. TIRADENTES',
//     data: '7 NOV',
//   },
//   {
//     id: '3',
//     passagem: 'Passagem em QrCode',
//     linha: '312N-10 SÃO MIGUEL',
//     data: '4 NOV',
//   },
//   {
//     id: '4',
//     passagem: 'Passagem em QrCode',
//     linha: '312N-10 TERM. CID. TIRADENTES',
//     data: '4 NOV',
//   },
// ];


const Item = ({numero,linha,data}) => (
  
  
  <View style={styles.item}>
    <View style={styles.esquerda}>
      <View style={styles.pagamen}>
        <Image source={require('../../../assets/img/home/qrcode.png')} style={styles.foto}/>
      </View>
      <View style={styles.meio}>
        <Text style={styles.passagem}>Passagem em qrCode</Text>
        <Text style={styles.linha}>{linha}</Text>
      </View>
    </View>

    <View style={styles.direita}>
      <Text style={styles.data}>{data}</Text>
    </View>
  </View>
);

export default function Home()  {



  
  const[DATA, setDATA] = useState('')
  const[infos, setInfos] = useState(false)
  const[refreshing, setRefreshing] = useState(false)
  const {passageiro, bilhete, passagens, setPassagens, setCompras} = useContext(MyContext)

  const getPassagens = async() =>{
    let response =  await p.getPassagens(bilhete.id, passageiro.token)
      setPassagens(response)
      setDATA(response.consumos)
      console.log(response.consumos)
      setInfos(true) 
      let response2 = await p.getComprasByBilhete(passageiro.id, bilhete.id, passageiro.token)
      setCompras(response2)
  }
  const onRefresh = async() =>{
    let response =  await p.getPassagens(bilhete.id, passageiro.token)
    if(response != passagens){
      setPassagens(response)
      setDATA(response.consumos)
    }
  }

  useEffect(() => {
    if(DATA == ''){
      setInfos(false)
      if(passagens == ''){
        getPassagens()   
      }else{
        setDATA(passagens.consumos)
        setInfos(true)
      }
    }
  })
  const  navCarteira  = async() => {
      const response = await p.getComprasByBilhete(passageiro.id, bilhete.id, passageiro.token)
      setCompras(response)
      navigation.navigate('Carteira')
  }
  
  const navigation = useNavigation();

  

  return (
    
    <SafeAreaView  style={styles.safeContainer}>
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>

        <View style={[styles.cima, styles.shadow]}>
          <View style={styles.nav}>
            <View style={styles.perfil}>
            <Image
              source={require('../../../assets/img/home/perfil.png')}
              style={styles.fotoPerfil}
            />
              <Text numberOfLines={1} style={styles.nomePerfil}>Bom dia, {passageiro.nomePassageiro}</Text>
            </View>
            <View style={styles.config}>
              <TouchableOpacity onPress={() => navigation.navigate('Config')}>
              <Ionicons name="settings-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.passagens}>
            <TouchableOpacity onPress={() => navCarteira()}>
              <View style={styles.areaPassagens}>
                <Text style={styles.tituPassag}>Passagens disponiveis</Text>
                <Text style={styles.qtdPassag}>{passagens.qtdPassagens}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navCarteira()}>
              <View style={styles.botaoPassagens}>
                <AntDesign name="right" size={20} color="white" />
              </View>
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
          { infos &&
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item numero={item.numero} linha={item.linha} data={item.data}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}/>}
          />
        }
        </View>
 
      </View>

      

    </SafeAreaView>
    
  );
}