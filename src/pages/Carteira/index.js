import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, FlatList, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cartao from '../../../assets/img/carteira/cartao.png';
import pix from '../../../assets/img/carteira/pix.png';
import boleto from '../../../assets/img/carteira/boleto.png';
import styles from './styles';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/context';
import Compra from '../../Controllers/Compra';
import Loading from '../Loading';
import ModalErro from '../../components/ModalErro';

const metodos = [
  {
    id: '2',
    tipoRecarga: 'Pix',
    image: pix,
  },
  {
    id: '1',
    tipoRecarga: 'Cartão',
    image: cartao,
  },
  {
    id: '3',
    tipoRecarga: 'Boleto',
    image: boleto,
  },
];

// const historico = [
//   {
//     id: '1',
//     tipoRecarga: 'crédito',
//     qtd: '6',
//     data: '12 DEZ ',
//     image: cartao,
//   },
//   {
//     id: '2',
//     tipoRecarga: 'PIX',
//     qtd: '20',
//     data: '10 OUT',
//     image: pix,
//   },
//   {
//     id: '3',
//     tipoRecarga: 'boleto',
//     qtd: '15',
//     data: '24 SET',
//     image: boleto,
//   },
//   {
//     id: '4',
//     tipoRecarga: 'boleto',
//     qtd: '10',
//     data: '4 SET',
//     image: boleto,
//   },
// ];



export default function Carteira() {
  const navigation = useNavigation();
  const formasPagamento = {
    1 : 'Cartão',
    2: 'Pix',
    3:'Boleto'
  } 
  
  const{compras, setCompras , passagens, passageiro, bilhete, token} = useContext(MyContext)
  const[historico, setHistorico] = useState('')
  const[infos, setInfos] = useState(false)
  const[modalErro, setModalErro] = useState(false)
  const[iconModal, setIconModal] = useState('')
  const[textModal, setTextModal] = useState('')
  const[closeButton, setCloseButton] = useState(false)
  let c = new Compra()
  
  const testeConexao = async () => {
    try {
        const response = await c.testConnection();
        
        if (response) {
            setModalErro(true);
        } 

        if (response === 500) {
            setTextModal('Erro Interno de Servidor. Por favor, tente novamente mais tarde.');
            setIconModal('error-outline');
            setCloseButton(false)
        } else if (response === 404) {
            setTextModal('Verifique sua conexão com a Internet');
            setIconModal('wifi-off');
            setCloseButton(false)
        }
        return response
    } catch (error) {
        setModalErro(true);
        setTextModal('Erro ao tentar conectar. Por favor, tente novamente mais tarde.');
        setIconModal('error-outline');
        setCloseButton(false)
    }

};


  const getComprasByBilhete = async() =>{
    
    const response = await c.getComprasByBilhete(passageiro.id, bilhete.id, token)
    console.log(response)
    if(!response){
      return false
    }
    
    setCompras(response)
    setInfos(true)
  }

  
  useEffect(() => {
    
    if(infos){
    if(historico == '' || historico != compras.compras){
    let comprasAll = compras.compras
    for(var i=0;i<comprasAll.length;i++){
      
      if(comprasAll[i].forma == '1'  ){
        comprasAll[i].image = cartao
        
      }
      else if(comprasAll[i].forma == '2'){
        comprasAll[i].image = pix
      }else{
        comprasAll[i].image = boleto
      }
    }
    setHistorico(comprasAll)
  } 
    
    }else{
      if(compras == ''){
      getComprasByBilhete()
      }else{
        setInfos(true)
      }
    }
  })

  const Metodos = ({tipoRecarga,image, id}) => ( 
    <View style={styles.fundometodos}>            
      <View style={styles.circleMetodo}>
      <TouchableOpacity onPress={async () => {
        const conexaoFuncionando = await testeConexao();
        if (!conexaoFuncionando) {
          navigation.navigate('QtdPassagens', { fpId: id });
        }
      }}>
          <Image
            source={image}
            style={styles.metodo}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.recargatext}>{tipoRecarga}</Text>
    </View>
  );

  const Item = ({ dados}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Comprovante', {
      dados: dados
    })}>               
    <View style={styles.item}>
      <View style={styles.esquerda}>
        <View style={styles.pagamen}>
          <Image source={dados.image} style={styles.foto}/>
        </View>
        <View style={styles.meio}>
          
          <Text style={styles.tipoRecarga}>Compra no {formasPagamento[dados.forma]}</Text>
          <Text style={styles.qtd}>{dados.passagens} PASSAGENS</Text>
        </View>
      </View>
  
      <View style={styles.direita}>
        <Text style={styles.data}>{dados.dataTratada}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
    if(infos){
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

        <View style={[styles.cima, styles.shadow]}>
 

          <View style={styles.passagens}>
            <Text style={styles.tituPassag}>Passagens disponiveis</Text>
            <Text style={styles.qtdPassag}>{passagens.qtdPassagens}</Text>
          </View>
        </View>
      

        <View style={styles.recarga}>
            <Text style={styles.titulo}>Recarga</Text>
            <View style={styles.fundometodos}>
            <FlatList
              data={metodos}
              renderItem={({item}) => <Metodos tipoRecarga={item.tipoRecarga} image={item.image} id={item.id}/>}
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
          { infos && 
          <FlatList
            data={historico}
            renderItem={({item}) => <Item dados={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        }
        </View>

      </View>
      <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
    </SafeAreaView>
  );
}else{
  return(
    <Loading/>
  )
}
}