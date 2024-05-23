import { SafeAreaView, View, Text, StyleSheet, FlatList,  RefreshControl } from "react-native"
import BilletElement from './partials/billetElement'
import { useContext, useEffect, useState } from "react"
import Bilhete from "../../../../Controllers/Bilhete"
import MyContext from "../../../../Context/context"
import Loading from "../../../Loading"
import ModalErro from '../../../../components/ModalErro';
import { setIdStorage,getIdStorage,getTokenStorage} from './axios';

export default function ListaBilhetes({navigation}){
    
    const{ token, passageiro, setToken,setBilhete, setPassagens, setCompras} = useContext(MyContext)
    const[infos, setInfos] = useState(false)
    const[refreshing, setRefreshing] = useState(false)
    const [error, setError] = useState(false)
    const[modalErro, setModalErro] = useState(false)
    const[iconModal, setIconModal] = useState('')
    const[textModal, setTextModal] = useState('')
    const[idPassageiro,setIdPassageiro] = useState('')
    let b = new Bilhete()
    const[DATA, setDATA] = useState('')
    
    useEffect(()=>{
        const initializePassageiro = async () => {
        setIdPassageiro(await getIdStorage());
        setToken(await getTokenStorage());
       console.log(token+'token')
        if(idPassageiro == undefined){
            setIdStorage(passageiro.id);
        }
    }
    initializePassageiro();
    })
    
    
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
    
    
    const choseBilhete = (item) => {
        setBilhete(item)
        navigation.navigate('Bilhete')
    }
    const getBilhetes = async() => {
        setInfos(false)
        const response = await b.getBilhetes(idPassageiro, token)
        if(response.message !== undefined){
            setModalErro(true)
            setTextModal('Você não possui Bilhetes')
            setIconModal('error-outline')
            setInfos(true)
            setRefreshing(false)
        }else{
        setDATA(response)
        setModalErro(false)
        setRefreshing(false)
        setInfos(true)
    }
    
    }
    useEffect(() => {
        if(DATA == ''){
        getBilhetes()
        setPassagens('')
        setCompras('')
        }
    })
    const onRefresh = () => {
        setRefreshing(true)
        getBilhetes()
        console.log('vai')
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
            <Text style={styles.title}>Seus Bilhetes</Text>
            </View>
            
            <View style={styles.lista}>
                { infos ?
            <FlatList
            data={DATA}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}/>}
            renderItem={({item}) => !error ? <BilletElement lista={true}
                tipoBilhete={item.tipoBilhete}
                statusBilhete={item.statusBilhete}
                gratuidadeBilhete={item.gratuidadeBilhete?'Sim' : 'Não'}
                meiaPassagemBilhete={item.meiaPassagensBilhete? 'Sim' : 'Não'}
                numBilhete={item.numBilhete} 
                backgroundColor={item.backgroundColor}
                press={() => choseBilhete(item)}   /> :
            <Text>{item.error}</Text>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            
          />
            :
            <Loading/>}
            
          </View>
          
          <ModalErro visible={modalErro} icon={iconModal} text={textModal} />
        </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            width:'100%'
        },
        lista:{
            width:'100%',
            flex:6,
            justifyContent:'center',
            alignItems:'center'
            
            
        },
        titleArea:{
            flex:1,
            justifyContent:'center',
            alignItems:'flex-start',
            width:'85%'
        },
        title:{
            fontSize:30,
            fontWeight:'500'
        }
    })