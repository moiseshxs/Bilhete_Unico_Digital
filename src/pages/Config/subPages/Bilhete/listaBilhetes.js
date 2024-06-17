import { SafeAreaView, View, Text, StyleSheet, FlatList,  RefreshControl,Image, Pressable,Dimensions } from "react-native"
import BilletElement from './partials/billetElement'
import { useContext, useEffect, useState } from "react"
import Bilhete from "../../../../Controllers/Bilhete"
import MyContext from "../../../../Context/context"
import Loading from "../../../Loading"
import ModalErro from '../../../../components/ModalErro';
import { setIdStorage,getIdStorage,getTokenStorage} from './axios';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import noBilhete from '../../../../../assets/img/bilhete/noBilhete.png';
export default function ListaBilhetes({navigation}){
    
    const{ token, passageiro, setToken,setBilhete, setPassagens, setCompras} = useContext(MyContext)
    const[infos, setInfos] = useState(false)
    const[refreshing, setRefreshing] = useState(false)
    const [error, setError] = useState(false)
    const[modalErro, setModalErro] = useState(false)
    const[iconModal, setIconModal] = useState('')
    const [pedidos, setPedidos] = useState(0)
    const[textModal, setTextModal] = useState('')
    const[idPassageiro,setIdPassageiro] = useState('')
    const[pedidoBilheteCount,SetPedidoBilheteCount] = useState('')
    let b = new Bilhete()
    const[DATA, setDATA] = useState('')
    
 useEffect(() => {
    
        const initializePassageiro = async () => {
            const id = await getIdStorage();
            const storedToken = await getTokenStorage();
            setIdPassageiro(id);
            setToken(storedToken);    
        };
        initializePassageiro();
    }, []);

    const visualizarPedidos = () =>{
        navigation.navigate("PedidosBilhetes", {
            pedidos: pedidos
        })
        setDATA('')
    }
    
    
    // let DATA = [ 
    //     // {
    //     //     id: '1',
    //     //     tipoBilhete: 'Estudante',
    //     //     gratuidadeBilhete: 'Sim',
    //     //     meiaPassagemBilhete: 'Sim',
    //     //     statusBilhete: 'Ativo',
    //     //     numBilhete: '123 456 789',
    //     //     backgroundColor: '#438E28'
    //     // },
    //     // {
    //     //     id: '2',
    //     //     tipoBilhete: 'Comum',
    //     //     gratuidadeBilhete: 'Não',
    //     //     meiaPassagemBilhete: 'Não',
    //     //     statusBilhete: 'Ativo',
    //     //     numBilhete: '543 326 123',
    //     //     backgroundColor: 'gray'
    //     // },
    //     // {
    //     //     id: '3',
    //     //     tipoBilhete: 'PCD',
    //     //     gratuidadeBilhete: 'Sim',
    //     //     meiaPassagemBilhete: 'Sim',
    //     //     statusBilhete: 'Ativo',
    //     //     numBilhete: '544 222 749',
    //     //     backgroundColor:'#728'
    //     // }
    // ]
    const getPedidoBilhete = async() => {
        const response = await b.getPedidoBilhete(passageiro.id,token)
        SetPedidoBilheteCount(response.length)
        console.log(response)
        if(response.length > 0){
            setPedidos(response)
        }
    }
    
    const choseBilhete = (item) => {
        setBilhete(item)
        navigation.navigate('Bilhete')
    }
    const getBilhetes = async() => {
        setInfos(false)
        const response = await b.getBilhetes(!idPassageiro?passageiro.id:idPassageiro, token)
        setDATA(response)
        setRefreshing(false)
        setInfos(true)

    }
    useEffect(() => {

        if(DATA == ''){
        getPedidoBilhete()
        getBilhetes()
        setPassagens('')
        setCompras('')
        }
    })
    const onRefresh = () => {
        setRefreshing(true)
        getBilhetes()
        // console.log('vai')
    }
    const EscolhaBilhete = () =>{
        navigation.navigate('EscolhaBilhete')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Seus Bilhetes</Text>
            </View>
            
            <View style={styles.lista}>
                
            {infos ? 
                    DATA.length > 0 ? (
                        <FlatList
                            data={DATA}
                            refreshControl={<RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh} />}
                            renderItem={({ item }) => !error ? <BilletElement lista={true}
                                tipoBilhete={item.tipoBilhete}
                                statusBilhete={item.statusBilhete}
                                gratuidadeBilhete={item.gratuidadeBilhete ? 'Sim' : 'Não'}
                                meiaPassagemBilhete={item.meiaPassagensBilhete ? 'Sim' : 'Não'}
                                numBilhete={item.numBilhete}
                                backgroundColor={item.backgroundColor}
                                press={() => choseBilhete(item)} /> :
                                <Text>{item.error}</Text>}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                      
                    ) : 
                    <View style={styles.lista}>
                            <Image source={noBilhete} style={styles.noDataImage} />
                            <Text style={styles.textBilhete}>Você não possui bilhetes</Text>
                    </View>
                    
                    :
                    <Loading/>}
                    <View style={styles.boxButtonCircular}>
                    <Pressable 
                    onPress={() => visualizarPedidos()}>
                        <View style={styles.buttonCircular}>
                            <FontAwesome name="list" size={30} color="white" />
                        </View>
                    </Pressable>
                    </View>
                     
          </View>
          <View style={styles.boxButton}>
                <Pressable onPress={EscolhaBilhete}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Solicitar Bilhete</Text>
                        </View>
                </Pressable>
          </View>
         
        </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            
        },
        lista:{
            width:'100%',
            flex:0.75,
            justifyContent:'center',
            alignItems:'center'
        },
        titleArea:{
            flex:0.2,
            justifyContent:'center',
            alignItems:'flex-start',
            width:'85%'
        },
        title:{
            fontSize:30,
            fontWeight:'500'
        },
        noDataImage:{
            width:220,
            height:200
        },
        boxButton:{
            flex:0.15,
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
        },
        button:{
            backgroundColor: '#f00',
            height: 40,
            width: 250,
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textButton:{
            color: '#fff',
            fontSize: 20,
            fontWeight: '500',
        },
        textBilhete:{
            marginTop:10,
            color:'gray',
            fontSize:24,
            fontWeight:'500'
        },
        boxButtonCircular:{
            width:'100%',
            justifyContent:'flex-end',
            alignItems:'flex-end',
            paddingHorizontal:30
        },
        buttonCircular:{
            borderRadius:1000,
            width:60,
            height:60,
            backgroundColor:'red',
            borderWidth:2,
            borderColor:'red',
            justifyContent:'center',
            alignItems:'center'
        },

    })