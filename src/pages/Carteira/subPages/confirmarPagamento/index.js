import React, { useState, useContext } from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import Passageiro from '../../../../Services/api/Passageiro';
import Loading from '../../../Loading';
import Api from '../../../../Services/api/Api';
import MyContext from '../../../../Context/context';



export default function ConfirmarPagamento({route}) {

    const formasPagamento = {
        1 : 'Cartão',
        2: 'Pix',
        3:'Boleto'
    }

    const {passageiro, token, bilhete, setPassagens, setCompras} = useContext(MyContext);
    let api = new Api()
    const[loading, setLoading] = useState(false)

    console.log(route.params.formaPagamento)
    const[preco, setPreco] = useState(1)

    const getPreco = async() =>{
        let response = await api.getPreco()
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
            conteudo: formasPagamento[route.params.formaPagamento],
            editar: 'QtdPassagens',
        },
        {
            id: '3',
            titulo: 'Data da recarga',
            conteudo:   dataAtual() ,
            
        },
    ];

    const navigation = useNavigation();
    
    let p = new Passageiro();

    const storeCompra = async() => {
       setLoading(true);
       const response = await p.storageCompraByBilhete(passageiro.id, token, route.params.quantidade, (route.params.quantidade*preco), route.params.formaPagamento, 'Compra', bilhete.id)
       console.log(response);
       const compras = await p.getComprasByBilhete(passageiro.id, bilhete.id, token)
       const passagens = await p.getPassagens(bilhete.id, token)
       setTimeout(()=> {setLoading(false)
       setPassagens(passagens)

    } ,300)

       setCompras(compras)
       navigation.navigate('Comprovante', {dados:response.message});
       console.log(compras.compras);
    };
    
    const Item = ({ titulo, conteudo, editar }) => (
        <View style={styles.passagens}>
          <View style={styles.esquerda}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.conteudo}>{conteudo}</Text>
          </View>

          <View style={styles.direita}>
            <TouchableOpacity onPress={() => navigation.navigate('QtdPassagens')}>
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
                    renderItem={({item}) => <Item titulo={item.titulo} conteudo={item.conteudo}/>}
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
        </SafeAreaView>
    );
}else{
    return(
                <Loading/>
            )
        }
}