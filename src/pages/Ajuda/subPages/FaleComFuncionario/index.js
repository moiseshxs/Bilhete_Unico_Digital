import React, { useState, useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './styles';
import CreateSuporte from '../../../../Controllers/Suporte';
import MyContext from '../../../../Context/context';

export default function FaleComFuncionario() {
    const { token, passageiro } = useContext(MyContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipoSuporte, setTipoSuporte] = useState('');
    const [mensagem, setMensagem] = useState('');

    const create = async () => {
        const c = new CreateSuporte();
        const response = await c.storeSuporte(token, tipoSuporte, mensagem, passageiro.id);
        if(response){
            setNome("")
            setEmail("")
            setTipoSuporte("")
            setMensagem("")
        }
        // Faça algo com a resposta, se necessário
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaHeader}>
                <Text style={styles.textHeader}>Para dúvidas, sugestões ou reclamações, preencha o formulário abaixo.</Text>
            </View>
            <View style={styles.areaForm}>
                <View>
                    <Text >Todos os campos são obrigatórios.*</Text>
                </View>
                <View>
                    <Text style={styles.textInput}>NOME*</Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>
                <View>
                    <Text style={styles.textInput}>E-MAIL*</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text style={styles.textInput}>TIPO DE SUPORTE*</Text>
                    <TextInput
                        style={styles.input}
                        value={tipoSuporte}
                        onChangeText={setTipoSuporte}
                    />
                </View>
                <View>
                    <Text style={styles.textInput}>MENSAGEM*</Text>
                    <TextInput
                        style={styles.inputMsg}
                        value={mensagem}
                        onChangeText={setMensagem}
                    />
                </View>
            </View>
            <View style={styles.areaBtn}>
                <Pressable style={styles.btnEnviar} onPress={create}>
                    <Text style={styles.textBtn}>Enviar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
