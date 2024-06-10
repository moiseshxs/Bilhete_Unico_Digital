import React,{useState, useContext, useEffect} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import VotoAjuda from '../../../../Controllers/VotoAjuda';
import MyContext from '../../../../Context/context';
import Ajuda from '../../../../Controllers/Ajuda';
import Loading from '../../../Loading';
export default function ArtigosBilhete({navigation,route}) {
    const {token, passageiro} = useContext(MyContext);
    let voto = new VotoAjuda()
    let ajuda = new Ajuda()
    const [idAjuda] = useState(route.params?.id);
    const [titulo, setTitulo] = useState('');
    const [caminho,setCaminho] = useState('');
    const [descricao,setDescricao] = useState('')
    const[loading, setLoading] = useState(false);
    const [votou, setVotou] = useState(0)
    const getAjuda = async() =>{
        const response = await ajuda.getAjuda(token,route.params?.id);
        setTitulo(response.map(item=>item.tituloAjuda));
        setCaminho(response.map(item=>item.caminhoAjuda));
        setDescricao(response.map(item=>item.descAjuda));
    }
    const votoAjuda =async (util)=>{
        const response = await voto.storeVoto(token, util, idAjuda, passageiro.id);
        } 
        
        const StoreVotoAjuda = async(util)=>{
            console.log('estou no storeAjuda')
            votoAjuda(util)
            setVotou(util)
            }
            useEffect(()=>{
                console.log('estou no useEffec get')
                getAjuda();
                
                const getVotoAjuda = async()=>{
                    setLoading(true)
                    const response = await voto.getVoto(token, passageiro.id, idAjuda)
                    setVotou(response)
                    if(response)
                        {
                            setLoading(false);
                            }
                            }
                getVotoAjuda();
                            },[])
                    if(!loading){
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
}else{
    return(
        <Loading/>
    )
}}