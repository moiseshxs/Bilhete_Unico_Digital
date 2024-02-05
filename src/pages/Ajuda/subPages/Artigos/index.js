import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';



export default function ArtigosBilhete() {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
            

            <View style={styles.boxTitulo}>
                <Text style={styles.subTitulo}>
                    Como trocar o bilhete selecionado?
                </Text>
                <View style={{ height: 30 }}>
                    <Text style={styles.caminho}>Inicio -&gt; configurações -&gt; bilhete</Text>
                </View>
                <View>
                    <Text style={styles.textoAjuda}>
                        Ao definir um Bilhete como favorito,
                        sempre ao abrir o aplicativo do Bilhete
                        Único Digital ele abrirá automaticamente
                        com o bilhete selecionado.
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