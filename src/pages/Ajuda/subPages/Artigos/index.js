import React,{useState, useContext, useEffect} from 'react';
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
    const [votou, setVotou] = useState(0)
    const votoAjuda =async (util)=>{
        const response = await voto.storeVoto(token, util, idAjuda, passageiro.id);
    } 

    const StoreVotoAjuda = async(util)=>{
        votoAjuda(util)
        setVotou(util)
    }
useEffect(()=>{

    const getVotoAjuda = async()=>{
        const response = await voto.getVoto(token, passageiro.id, idAjuda)
        setVotou(response)
    }

    getVotoAjuda();
},[])
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
                    <TouchableOpacity style={[styles.buttonAjuda, votou === 1 ? styles.jaVotou : null]}
                    onPress={(()=>{StoreVotoAjuda(1)})}
                    >
                        <Text style={votou=== 1?styles.txtJaVotou:null}>
                            Sim
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonAjuda, votou === 0 ? styles.jaVotou : null]}
                    onPress={(()=>{StoreVotoAjuda(0)})}
                    >
                        <Text style={votou=== 0?styles.txtJaVotou:null}>
                            Não
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
        );
}