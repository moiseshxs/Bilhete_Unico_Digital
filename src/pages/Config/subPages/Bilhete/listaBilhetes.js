import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView } from "react-native"
import BilletElement from './partials/billetElement'


export default function ListaBilhetes({navigation}){
    
   
        
    

    const DATA = [
        {
            id: '1',
            tipoBilhete: 'Estudante',
            gratuidadeBilhete: 'Sim',
            meiaPassagemBilhete: 'Sim',
            statusBilhete: 'Ativo',
            numBilhete: '123 456 789',
            backgroundColor: '#438E28'
        },
        {
            id: '2',
            tipoBilhete: 'Comum',
            gratuidadeBilhete: 'Não',
            meiaPassagemBilhete: 'Não',
            statusBilhete: 'Ativo',
            numBilhete: '543 326 123',
            backgroundColor: 'gray'
        },
        {
            id: '3',
            tipoBilhete: 'PCD',
            gratuidadeBilhete: 'Sim',
            meiaPassagemBilhete: 'Sim',
            statusBilhete: 'Ativo',
            numBilhete: '544 222 749',
            backgroundColor:'#728'
        }
    ]

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
            <Text style={styles.title}>Seus Bilhetes</Text>
            </View>
            <View style={styles.lista}>
            <FlatList
            data={DATA}
            renderItem={({item}) => <BilletElement lista={true}
                tipoBilhete={item.tipoBilhete}
                statusBilhete={item.statusBilhete}
                gratuidadeBilhete={item.gratuidadeBilhete}
                meiaPassagemBilhete={item.meiaPassagemBilhete}
                numBilhete={item.numBilhete} 
                backgroundColor={item.backgroundColor}
                press={() => navigation.navigate('Bilhete', {
                    tipo: item.tipoBilhete,
                     gratuidade: item.gratuidadeBilhete,
                      meia: item.meiaPassagemBilhete,
                       num: item.numBilhete, 
                       status: item.statusBilhete,
                        backgroundColor: item.backgroundColor
                })}   />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            
          />
          </View>
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