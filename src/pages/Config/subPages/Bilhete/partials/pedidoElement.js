import {View, ScrollView, Text, StyleSheet, Dimensions, Pressable} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ConfirmarPagamento from './confirmarPagamento';
import { useNavigation } from '@react-navigation/native';

export default function PedidoElement(props)
{
    let navigation = useNavigation()
    let tipo = props.tipo
    let data = props.data
    data = data.split(" ")[0]
    data = data.split("-")
    data = data[2]+"/"+data[1]+"/"+data[0]
    let id = props.id
    let status = props.status

    const pagar = (item) =>{
        navigation.navigate('ConfirmarPagamentoBilhete', {
            tipo : tipo,
            id: id
        })
    }
    
   
    return(
        <View style={styles.container}>
            <View style={styles.tipoArea}>
                <Text style={{ fontSize:18, marginStart:9 }}>{tipo}</Text>
                <Text style={{ fontSize:18, marginEnd:9, color: 'rgba(0,0,0,0.7)' }}>{data}</Text>
            </View>
            {status == "Aberto" ?
                <View style={styles.etapas}>
                    <Ionicons name="time-outline" size={30} color="yellow" />
                    <FontAwesome name="dollar" size={30} color="black" />
                    <FontAwesome name="check" size={30} color="black" />
                </View>
                : status == "Aprovado" ?
                <View style={styles.etapas}>
                    <Ionicons name="time-outline" size={30} color="green" />
                    <FontAwesome name="dollar" size={30} color="green" />
                    <FontAwesome name="check" size={30} color="black" />
                </View>
            : status == "Reprovado" ?
            <View style={styles.etapas}>
                <Ionicons name="time-outline" size={30} color="red" />
                <FontAwesome name="dollar" size={30} color="red" />
                <FontAwesome name="check" size={30} color="black" />
            </View>
                :
                <View style={styles.etapas}>
                    <Ionicons name="time-outline" size={30} color="green" />
                    <FontAwesome name="dollar" size={30} color="green" />
                    <FontAwesome name="check" size={30} color="green" />
                </View>
            }
                
           
            <View style={styles.statusBar}>
                <View style={styles.bar}>
                    <View style={[styles.fulledBar, , status == "Aberto" ? styles.analise : status == "Aprovado" ? styles.aprovado : status == "Reprovado" ? status.reprovado : styles.concluido]}></View>
                </View>
                {status == "Aberto" ?
                <Text style={{ fontSize:20 }}>
                    
                    Em Análise
                </Text>
                : status == "Aprovado" ?
                <Text style={{ fontSize:20 }}>
                    
                Aguardando pagamento
            </Text>
            : status == "Reprovado" ?
            <Text style={{ fontSize:20 }}>
                    
                    Pedido Recusado
                </Text>
                :
                <Text style={{ fontSize:20 }}>
                    
                    Pedido Concluído
                </Text>
            }
            </View>
            <View style={styles.btnArea}>
                { status == "Aprovado" ?
                <Pressable
                style={{ width:'100%', justifyContent:'center', alignItems:'center', height:'100%' }}
                onPress={() => pagar(id)}>
                <View style={{width:'40%', height:40, backgroundColor: "#01A926", justifyContent:'center', alignItems:'center', borderRadius:25}}>
                    <Text style={{ fontSize:18, color: '#fff' }}>
                        Pagar
                    </Text>
                </View>
                </Pressable>
                : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('screen').width/1.09,
        backgroundColor: '#D9D9D9',
        height:250,
        
        marginVertical:8,
        borderRadius:25
    },
    bar:{
        width:'70%',
        height:10,
        backgroundColor:'#fff',
        borderRadius:25,
    },
    fulledBar:{
        borderStartStartRadius:25,
        borderEndStartRadius:25,
        backgroundColor: '#01A926',
        width: '60%',
        height:'100%',
    },
    analise:{
        width:'20%',
        backgroundColor: "#a99c01",
    },
    aprovado:{
        width: '60%',
        backgroundColor:'#01A926'
    },
    reprovado:{
        width: '60%',
        backgroundColor:'#a90101'
    },
    concluido:{
        width: '100%',
        backgroundColor: '#01A926'
    },
    statusBar:{
        height:'30%',
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        gap:10
    },
    etapas:{
        flexDirection:'row',
        width:'70%',
        height:'25%',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    btnArea:{
        width: '100%',
        height: '20%',
        
        justifyContent:'center',
        alignItems:'center'
    },

    tipoArea:{
        width:'100%',
        height:'25%',
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    }
})