import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {DotIndicator } from 'react-native-indicators'
import ModalErro from '../../components/ModalErro';
import { useContext, useEffect, useState } from 'react';
import styles from './styles';
import MyContext from '../../Context/context';
import Passagem from '../../Controllers/Passagem';
import User from '../../../assets/img/global/defaultUser.png'
import Loading from '../Loading';




  let passagem = new Passagem()





const Item = ({numero,linha,data}) => (
  
  
  <View style={styles.item}>
    <View style={styles.esquerda}>
      <View style={styles.pagamen}>
        <Image source={require('../../../assets/img/home/qrcode.png')} style={styles.foto}/>
      </View>
      <View style={styles.meio}>
        <Text style={styles.passagem}>Passagem em qrCode</Text>
        <Text style={styles.linha}>{linha} {numero}</Text>
      </View>
    </View>

    <View style={styles.direita}>
      <Text style={styles.data}>{data}</Text>
    </View>
  </View>
);

export default function Home()  {



  const {passageiro, bilhete, passagens, setPassagens, url, token, troca, setTroca} = useContext(MyContext)
  const[DATA, setDATA] = useState('')
  const[integracao, setintegracao] = useState(false)
  const[loading, setLoading] = useState(false)
  const[segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [horas, setHoras] = useState()
  const[checkIntegracao, setCheckIntegracao] = useState('')


    const contador = () => {
      
      if(segundos == 0){
        setSegundos('59')
        if(minutos == 0){

          if(horas != 0){
            setHoras(horas -1)
            setMinutos(parseInt('59'))
          }
          
        }else{

          setMinutos(minutos - 1)
        }
      }else{
      setSegundos(segundos - 1)
    }
    if(horas <= 0 && minutos <=0 &&segundos <=5)
    {
      verificaIntegracao()
      
    }
    }


    if(checkIntegracao == 'ok'){
    if(segundos == 0){
      setTimeout( () =>{
        contador()
         
     }, 900)
    }else{
    setTimeout( () =>{
       contador()
        
    }, 1000)
  }
  }
   
  const resolveHoras = (number) =>{
    if(number == 0){
      return `${number}0`
    }
    if(number.toString().length == 1){
      return `0${number}`
    }
    return number
  }

  


  const[infos, setInfos] = useState(false)
  const[refreshing, setRefreshing] = useState(false)
  

  const getPassagens = async() =>{
    setInfos(false)
    setLoading(true)
    let response =  await passagem.getPassagens(bilhete.id, token)
    if(!response){
      return false
      //implementar aqui ainda um tratamento para o usuario
    }

    setPassagens(response)
    setDATA(response.consumos)
     
    await verificaIntegracao()

    setInfos(true) 
      // let response2 = await p.getComprasByBilhete(passageiro.id, bilhete.id, token)
      // setCompras(response2)
      
    if(troca){
      setTroca(false)
    }
      
    setLoading(false)
      
      
  }
  const onRefresh = async() =>{
    setintegracao(false)
    setCheckIntegracao('nook') 
    
    await getPassagens()
    setRefreshing(false)
    
  }

  const verificaIntegracao = async() => {
    setInfos(false)
    
    const response = await passagem.getPassagemEmUso(bilhete.id, token)
    if(!response){
      return false
    }
    if(response.updated_at !== undefined){
        let data = new Date()
        let dataAntiga = new Date(response.updated_at)
        let diferencaMS = dataAntiga - data
        
        
        let segundosC = (diferencaMS/1000) + 7200
        let minutosC = segundosC/60
        segundosC = segundosC%60
        let horasC = minutosC/60
        minutosC = minutosC%60
        
        if(parseInt(segundosC) <= 8 && parseInt(minutosC) <= 0 && parseInt(horasC) <= 0){
          setintegracao(false)
          const response2 = await passagem.inativarPassagem(response.id, token)
          
          setCheckIntegracao('nook')
        }else{
          

          

        
        
        
        setHoras(parseInt(horasC))
        setMinutos(parseInt(minutosC))
        setSegundos(parseInt(segundosC))
        setCheckIntegracao('ok')
        setintegracao(true)
        }
      }
      
      
  }

  useEffect(() => {
    if(troca){
      setInfos(false)
      setDATA(passagens.consumos)
      setInfos(true)
      console.log("aa")
    }

    if(checkIntegracao == ''){
      verificaIntegracao()
      setInfos(true)
    }
  })

  // useEffect(() => {
  //   if(troca == true){
  //     setInfos(false)
      
        
       
      
      
  //   }else{
      
  //   }
  // })
  const  navCarteira  = async() => {
      //const response = await p.getComprasByBilhete(passageiro.id, bilhete.id, token)
       //setCompras(response)
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
              source={passageiro.fotoPassageiro != null ? {uri: url + passageiro.fotoPassageiro} : User}
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
                <Text style={styles.qtdPassag}>{!loading ?  passagens.qtdPassagens : <DotIndicator color='#fff' count={3} size={16} />}</Text>
              </View>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navCarteira()}>
              <View style={styles.botaoPassagens}>
                <AntDesign name="right" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

       
      
    { integracao ?
        <View style={styles.integracao}>
          <View style={styles.boxInte}>
            <Text style={styles.tituInte}>Integração ativa:</Text>
             <Text style={styles.tempo}>{resolveHoras(horas)}h {resolveHoras(minutos)}m {resolveHoras(segundos)}s</Text>  
          </View>
        </View>
        : loading ? <DotIndicator color='#f00' count={3} size={16} /> :  null}

        <View style={[styles.atividades, integracao? styles.atividadesIntegracao : styles.atividadesSemIntegracao]}>
          <Text style={styles.titulo}>Atividades</Text>
          { infos ? 
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item numero={item.numero} linha={item.linha} data={item.data}/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}/>}
          /> :
          <Loading/>
        }
        </View>
 
      </View>

      

    </SafeAreaView>
    
  );
}