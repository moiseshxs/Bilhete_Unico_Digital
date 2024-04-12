import React,{useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function ArtigosBilhete({navigation,route}) {

    
    const [titulo] = useState(route.params?.titulo);
    const [caminho] = useState(route.params?.caminho);
    const [descricao] = useState(route.params?.desc)
    console.log(route.paramns, "PORRA")
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
                    //onPress={}
                    >
                        <Text>
                            Sim
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAjuda}
                    //onPress={}
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