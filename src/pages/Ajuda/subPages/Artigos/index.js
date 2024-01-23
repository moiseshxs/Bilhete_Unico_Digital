import React from 'react';
import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function ArtigosBilhete() {

    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableHighlight style={styles.buttonAjuda} onPress={() => navigation.navigate('Ajuda')}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableHighlight>
                </View>
            </View>

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
                    <TouchableHighlight style={styles.buttonAjuda}
                    //onPress={}
                    >
                        <Text>
                            Sim
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonAjuda}
                    //onPress={}
                    >
                        <Text>
                            Não
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>


        </SafeAreaView>
    );
}