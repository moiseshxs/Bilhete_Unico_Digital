import React, { useState, useContext } from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Modal, Image} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import Compra from '../../../../Controllers/Compra';
import Passagem from '../../../../Controllers/Passagem';
import Loading from '../../../Loading';
import Preco from '../../../../Controllers/Preco';
import MyContext from '../../../../Context/context';


const metodos = [
    {
      id: '2',
      tipoRecarga: 'Pix',
      image: require('../../../../../assets/img/carteira/pix.png'),
    },
    {
      id: '1',
      tipoRecarga: 'Cartão',
      image: require('../../../../../assets/img/carteira/cartao.png'),
    },
    {
      id: '3',
      tipoRecarga: 'Boleto',
      image: require('../../../../../assets/img/carteira/boleto.png'),
    },
  ];

export default function ConfirmarPagamento({navigation, route}) {
    const [modalEdit, setModalEdit] = useState(false)
    const [idEdit, setIdEdit] = useState("")
    
    const formasPagamento = {
        1 : 'Cartão',
        2: 'Pix',
        3:'Boleto'
    }



    const {passageiro, token, bilhete, setPassagens, setCompras} = useContext(MyContext);
    let pr = new Preco()
    const[loading, setLoading] = useState(false)


    const[preco, setPreco] = useState(1)

    const getPreco = async() =>{
        let response = await pr.getPreco()
        console.log(response)
        setPreco(response)
        setLoading(false)
    }
    useFocusEffect(() =>{
    if(preco == 1){
        setLoading(true)
        getPreco()
    }
    })

    const resolveMes = (mes) =>{
        if(mes<10){
            return `0${mes+1}`
        }
        return mes+1
    }

    const resolveDia = (dia) =>{
        if(dia<10){
            return `0${dia}`
        }
        return dia
    }

    const resolveValor = (qtd) => {
        let valor = `R$ ${(qtd*preco).toFixed(2)}`

            return valor.replaceAll ('.', ',')
    }


    const dataAtual = () =>{
        let ano = new Date().getFullYear()
        let mes = new Date().getMonth()
        let dia = new Date().getDate()
        return `${resolveDia(dia)}/${resolveMes(mes)}/${ano}`
        
    }

    const DATA = [
        {
            id: '1',
            titulo: 'Passagens',
            conteudo: route.params.quantidade,
            editar: 'QtdPassagens',
        },
        {
            id: '2',
            titulo: 'Forma Pagamento',
            conteudo: idEdit!='' ? formasPagamento[idEdit]:formasPagamento[route.params.formaPagamento],
            editar: 'formaPagamento',
        },
        {
            id: '3',
            titulo: 'Data da recarga',
            conteudo:   dataAtual() ,
            
        },
    ];

    const modalEditId = (id) =>{
        setIdEdit(id)
        setModalEdit(false)
    }

    const Metodos = ({tipoRecarga,image, id}) => ( 
        <View style={styles.fundometodos}>            
          <View style={styles.circleMetodo}>
            <TouchableOpacity onPress={()=>modalEditId(id)}>
              <Image
                source={image}
                style={styles.metodo}
                />
                </TouchableOpacity>
           
          </View>
          <Text style={styles.recargatext}>{tipoRecarga}</Text>
        </View>
      );
    

  
    
    let compra = new Compra();
    let passagem = new Passagem();
    const storeCompra = async() => {
       setLoading(true);

       const response = await compra.storageCompraByBilhete(passageiro.id, token, route.params.quantidade, (route.params.quantidade*preco), idEdit!='' ?idEdit:route.params.formaPagamento, 'Compra', bilhete.id)
       if(!response){
            return false
       }
       const compras = await compra.getComprasByBilhete(passageiro.id, bilhete.id, token)
       if(!compras){
            return false
       }
       const passagens = await passagem.getPassagens(bilhete.id, token)
       if(!passagens){
            return false
       }
       setTimeout(()=> {setLoading(false)
       setPassagens(passagens)

    } ,300)

       setCompras(compras)
       navigation.navigate('Comprovante', {dados:response.message});
       
    };
    
    const arrayEdit = (editar) => {
      
      if (editar == "formaPagamento") {
          setModalEdit(true);
      } else {
        navigation.navigate('QtdPassagens', {formaPagamento: idEdit == ''? route.params.formaPagamento: idEdit}); 
    }
  }
    const Item = ({ titulo, conteudo, editar }) => (
        <View style={styles.passagens}>
          <View style={styles.esquerda}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.conteudo}>{conteudo}</Text>
          </View>

          <View style={styles.direita}>
            <TouchableOpacity onPress={() =>arrayEdit(editar) }>
              <Text style={styles.textEditar}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      
      if(!loading){
          
          return (
              <SafeAreaView style={styles.container}>
            <View style={styles.recarregando}>
                <Text style={styles.text}>Você está recarregando</Text>
                <Text style={styles.valor}>{resolveValor(route.params.quantidade)}</Text>
            </View>

            <View style={styles.infos}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item titulo={item.titulo} conteudo={item.conteudo} editar={item.editar}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    />
            </View>

            <View style={styles.areaBotao}>
                <View style={styles.botao}>
                    <TouchableOpacity onPress={() => storeCompra()}>
                        <Text style={styles.textBotao}>Confirmar pagamento</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal  transparent visible={modalEdit}  >

        <View style={styles.modalEdit}>
          <View style={styles.containerModalEdit}>
          <View style={styles.flatListContainer}>
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

        </View>
      </Modal>
        </SafeAreaView>
    );
}else{
    return(
                <Loading/>
            )
        }
}