import React, { useContext, useState, useEffect} from 'react';
import {SafeAreaView, Pressable, View,Text, StyleSheet, TouchableHighlight} from 'react-native';
import BilletElement from '../partials/billetElement';
import MyContext from '../../../../../Context/context';
import { Ionicons } from '@expo/vector-icons';
import ModalErro from '../../../../../components/ModalErro';
import Bilhete from '../../../../../Controllers/Bilhete';


export default function EscolhaBilhete({navigation}) {

    const avancar = () =>{
        if((indice + 1) == tipoBilhetes.length){
            setIndice(0)
        }else{
            setIndice(indice + 1)
        }
    }

    let b = new Bilhete
    const storeBilhete = async() =>{
        const response = await b.storeEscolhaBilhete(passageiro.id,token,tipoBilhetes[indice].tipo)
        setModal(true)
        // navigation.navigate('ListaBilhetes')
    }

    const voltar = () =>{
        if((indice - 1) < 0){
            setIndice(tipoBilhetes.length -1)
        }else{
            setIndice(indice - 1)
        }
    }
    const [indice, setIndice] = useState(0)
    const [modal, setModal] = useState(false)

    let tipoBilhetes = [
        {
            id: '1',
            tipo: 'Comum',
            backgroundColor: '#808075',
            requisito: 'É necessário somente pagar a taxa de emissão do bilhete para poder utiliza-lo.',
            gratuidadeBilhete: false,
            meiaPassagensBilhete: false
        },
        {
            id: '2',
            tipo: 'PCD',
            backgroundColor: '#DDA0DD',
            requisito: 'Destinado para portadores de deficiência, é necessário apresentar o laudo para atestar a condição.',
            gratuidadeBilhete: true,
            meiaPassagensBilhete: true
        },
        {
            id: '3',
            tipo: 'Estudante',
            backgroundColor: '#4390E1',
            requisito: 'É necessário contatar a instituição para que essa faça contato com a SPTRANS.',
            gratuidadeBilhete: true,
            meiaPassagensBilhete: true
        },
        
        {
            id: '4',
            tipo: 'Estudante Ins. Privada',
            backgroundColor: '#FFA500',
            requisito: 'É necessário contatar a instituição para que essa faça contato com a SPTRANS.',
            gratuidadeBilhete: false,
            meiaPassagensBilhete: true
        },
        {
            id: '5',
            tipo: 'Idoso',
            backgroundColor: '#FFDB70',
            requisito: 'É necessário ter uma idade de 60 anos ou mais.',
            gratuidadeBilhete: true,
            meiaPassagensBilhete: true
        },

        
    ]
    
    const{passageiro, bilhete, setTroca, setPassagens, token} = useContext(MyContext)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
            <Ionicons
                    name='ellipse'
                    size={16}
                    color='rgba(0,0,0,0.6)'/>
                <Text style={{fontSize:20, fontWeight:'700', color:'rgba(0,0,0,0.6)'}}>{tipoBilhetes[indice].tipo}</Text>
            </View>
            <View style={styles.bilheteArea}>
                <TouchableHighlight
                onPress={() => voltar()}>

               
            <Ionicons
                    name='arrow-back-outline'
                    size={30}
                    color='black'/>
                     </TouchableHighlight>
                <BilletElement 
                tipoBilhete={tipoBilhetes[indice].tipo}
                 gratuidadeBilhete={tipoBilhetes[indice].gratuidadeBilhete? 'Sim' : 'Não'}
                 meiaPassagemBilhete={tipoBilhetes[indice].meiaPassagensBilhete? 'Sim' : 'Não'} 
                 escolha={true}
                 
                 backgroundColor={tipoBilhetes[indice].backgroundColor}/>
                 <TouchableHighlight
                  onPress={() => avancar()}>
                   
                 <Ionicons
                    name='arrow-forward-outline'
                    size={30}
                    color='black'/>
                    </TouchableHighlight>
                 </View>
                 <View style={styles.requisitos}>
                 <Ionicons
                    name='ellipse'
                    size={16}
                    color='rgba(0,0,0,0.6)'/>
                    <Text style={{fontSize:20, fontWeight:'700', color:'rgba(0,0,0,0.6)'}}>Requisitos</Text>
                 </View>
                 <View style={styles.desc}> 
                    <Text  style={{fontSize:18, fontWeight:'700', color:'rgba(0,0,0,0.6)'}}>{tipoBilhetes[indice].requisito}</Text>
                 </View>
                 <View style={styles.btnArea}>
                 <Pressable onPress={() => storeBilhete()}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Continuar</Text>
                        </View>
                </Pressable>
                 </View>
                 <ModalErro visible={modal} icon={'check-circle-outline'} text={'Sucesso ao fazer pedido de bilhete, acompanhe o status de seu pedido em sua lista de pedidos'} closeButton={true} />
        </SafeAreaView>  
    );

    
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    titleArea: {
        flex: 0.5,
        justifyContent:'flex-start',
        alignItems:'center',
        width: '90%',
        
        flexDirection:'row'

    },
    desc:{
        flex:0.8,
        width: '85%',
        justifyContent:'flex-start',
        
    },
    bilheteArea: {
        flex:2.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    requisitos:{
        flex: 0.5,
        width:'90%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
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
    btnArea:{
        flex: 1,
        justifyContent:'center',
        
    }
})