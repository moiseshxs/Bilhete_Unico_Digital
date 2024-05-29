import React,{useState, useContext} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import VotoAjuda from '../../../../Controllers/VotoAjuda';
import MyContext from '../../../../Context/context';
export default function ArtigosBilhete({navigation,route}) {
    const {token, passageiro} = useContext(MyContext);
    let voto = new VotoAjuda()
    
    const [idAjuda] = useState(route.params?.id);
    const [titulo] = useState(route.params?.titulo);
    const [caminho] = useState(route.params?.caminho);
    const [descricao] = useState(route.params?.desc)
    const votoAjuda =async (util)=>{
        const response = await voto.storeVoto(token, util, idAjuda, passageiro.id);
    } 

    const StoreVotoAjuda = async(util)=>{
        votoAjuda(util)
    }
  
    return (
        <SafeAreaView style={styles.container}>
            

            <View style={styles.boxTitulo}>
                <Text style={styles.subTitulo}>
                   {titulo}
                </Text>
                <View style={{ height: 30 }}>
                    <Text style={styles.caminho}>{caminho}</Text>
                </View>
                <View>
                    <Text style={styles.textoAjuda}>
                       {descricao}
                    </Text>
                </View>
            </View>
            <View style={styles.boxQuestionario}>
                <Text style={styles.artigoUtil}>Esse artigo foi útil?</Text>
                <View style={styles.linha} />
                <View style={styles.center}>
                    <TouchableOpacity style={styles.buttonAjuda}
                    onPress={(()=>{StoreVotoAjuda(1)})}
                    >
                        <Text>
                            Sim
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAjuda}
                    onPress={(()=>{StoreVotoAjuda(0)})}
                    >
                        <Text>
                            Não
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
        );
}