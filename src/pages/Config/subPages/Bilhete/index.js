import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import BilletElement from './partials/billetElement';

export default function Bilhete({navigation, route}) {
    let tipo = null;
    let gratuidade = null;
    let meia = null;
    let num = null;
    let status = null;
    let backgroundColor = undefined;
    if(route.params == undefined){
         tipo = 'Estudante';
         gratuidade = 'Sim';
         meia = 'Sim';
         num = '123 456 789';
         status = 'Ativo';
    }else{
         tipo = route.params.tipo;
         gratuidade = route.params.gratuidade;
         meia = route.params.meia;
         num = route.params.num;
         status = route.params.status;
         backgroundColor = route.params.backgroundColor
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bilheteArea}>
                <BilletElement lista={false} 
                tipoBilhete={tipo}
                 gratuidadeBilhete={gratuidade}
                 meiaPassagemBilhete={meia} 
                 statusBilhete={status}
                 numBilhete={num}
                 backgroundColor={backgroundColor}/>
            </View>
            <View style={styles.infosArea}>
                <View style={styles.infos1}>
                    <View style={styles.nomePassageiro}>
                        <Text style={styles.miniTitle}>Nome</Text>
                        <Text style={styles.desc}>CASSIO ADALBERTO RAMOS</Text>
                    </View>
                    <View style={styles.numBilhete}>
                        <Text style={styles.miniTitle}>Código de uso/N° do Bilhete Único</Text>
                        <Text style={styles.desc}>123 456 789</Text>
                    </View>
                </View>
                <View style={styles.infos2}>
                    <View style={styles.tipoBilhete}>
                        <Text style={styles.miniTitle2}>Bilhete</Text>
                        <Text style={styles.desc2}>Estudante</Text>
                    </View>
                    <View style={styles.statusBilhete}>
                        <Text style={styles.miniTitle2}>Status</Text>
                        <Text style={styles.desc2}>Ativo</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.buttonArea}>
               <View style={styles.buttonController}> 
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ListaBilhetes')}>
                    <Ionicons
                    size={50}
                    name='arrow-undo-outline'
                    style={{padding:10, backgroundColor:'#d3d3d3',textAlign:'center', width:75,height:75,  borderRadius: 100}}/>
                    </TouchableOpacity>
                    <Text style={styles.legend}>Trocar</Text>
                </View>
                <View style={styles.button}>
                <TouchableOpacity
                onPress={() =>navigation.navigate('Home')}>    
                <Ionicons
                    size={50}
                    name='checkmark-outline'
                    style={{padding:10, backgroundColor:'#d3d3d3', width:75,textAlign:'center',height:75,  borderRadius: 100}}/>
                </TouchableOpacity>
                    <Text style={styles.legend}>Usar</Text>
                </View>
                </View>
            </View>
        </SafeAreaView>  
    );
}