import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import BilletElement from './partials/billetElement';
import MyContext from '../../../../Context/context';

export default function Bilhete({navigation, route}) {
    
    const{passageiro, bilhete, setTroca} = useContext(MyContext)
    const navHome = (bilhete) => {
        setTroca(true)
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bilheteArea}>
                <BilletElement lista={false} 
                tipoBilhete={bilhete.tipoBilhete}
                 gratuidadeBilhete={bilhete.gratuidadeBilhete? 'Sim' : 'Não'}
                 meiaPassagemBilhete={bilhete.meiaPassagensBilhete? 'Sim' : 'Não'} 
                 statusBilhete={bilhete.statusBilhete}
                 numBilhete={bilhete.numBilhete}
                 backgroundColor={bilhete.backgroundColor}/>
            </View>
            <View style={styles.infosArea}>
                <View style={styles.infos1}>
                    <View style={styles.nomePassageiro}>
                        <Text style={styles.miniTitle}>Nome</Text>
                        <Text style={styles.desc}>{passageiro.nomePassageiro}</Text>
                    </View>
                    <View style={styles.numBilhete}>
                        <Text style={styles.miniTitle}>Código de uso/N° do Bilhete Único</Text>
                        <Text style={styles.desc}>{bilhete.numBilhete}</Text>
                    </View>
                </View>
                <View style={styles.infos2}>
                    <View style={styles.tipoBilhete}>
                        <Text style={styles.miniTitle2}>Bilhete</Text>
                        <Text style={styles.desc2}>{bilhete.tipoBilhete}</Text>
                    </View>
                    <View style={styles.statusBilhete}>
                        <Text style={styles.miniTitle2}>Status</Text>
                        <Text style={styles.desc2}>{bilhete.statusBilhete}</Text>
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
                onPress={() => navHome(bilhete)}>    
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