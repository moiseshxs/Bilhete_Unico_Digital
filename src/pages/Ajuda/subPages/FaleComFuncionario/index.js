import React, { useState, useContext } from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Pressable,Dimensions } from 'react-native';
import styles from './styles';
import CreateSuporte from '../../../../Controllers/Suporte';
import MyContext from '../../../../Context/context';

export default function FaleComFuncionario() {
    const { token, passageiro } = useContext(MyContext);
    const nome = passageiro.nomePassageiro;
    const email = passageiro.emailPassageiro;
    const [tipoSuporte, setTipoSuporte] = useState('');
    const [mensagem, setMensagem] = useState('');

    const create = async () => {
        const c = new CreateSuporte();
        const response = await c.storeSuporte(token, tipoSuporte, mensagem, passageiro.id);
        if(response){
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
                    {/* <TextInput
                        style={styles.input}
                        value={nome}
                        placeholder={nome}
                    /> */}
                     <FloatingLabelInput
                            style={styles.inputModal}
                            maxLength={30}
                            value={nome}
                            editable = {true}
                            placeholder={nome}
                            label='Nome'
                            staticLabel
                            hintTextColor='#aaa'
                            containerStyles={{
                                borderWidth: 2,
                                width: Dimensions.get('screen').width/1.15,
                                paddingHorizontal: 10,
                                borderRadius: 40,
                                height: 55
                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',
                                
                              }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight:15,
                                fontSize: 16,
                                fontWeight: '500'
                              }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                                fontSize: 16
                            }}      
                            />
                </View>
                <View>
                    {/* <TextInput
                        style={styles.input}
                        value={email}
                        placeholder={email}
                    /> */}
                     <FloatingLabelInput
                            style={styles.inputModal}
                            maxLength={30}
                            value={email}
                            editable = {true}
                            placeholder={email}
                            label='Email'
                            staticLabel
                            hintTextColor='#aaa'
                            containerStyles={{
                                borderWidth: 2,
                                width: Dimensions.get('screen').width/1.15,
                                paddingHorizontal: 10,
                                borderRadius: 40,
                                height: 55
                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',
                                
                              }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight:15,
                                fontSize: 16,
                                fontWeight: '500'
                              }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                                fontSize: 16
                            }}      
                            />
                </View>
                <View>
                    {/* <TextInput
                        style={styles.input}
                        value={tipoSuporte}
                        onChangeText={setTipoSuporte}
                    /> */}
                      <FloatingLabelInput
                            style={styles.inputModal}
                            maxLength={30}
                            value={tipoSuporte}
                            editable = {true}
                            onChangeText={(tipoSuporte) => {setTipoSuporte(tipoSuporte)}}
                            label='Tipo de Suporte'
                            staticLabel
                            hintTextColor='#aaa'
                            containerStyles={{
                                borderWidth: 2,
                                width: Dimensions.get('screen').width/1.15,
                                paddingHorizontal: 10,
                                borderRadius: 40,
                                height: 55
                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',
                                
                              }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight:15,
                                fontSize: 16,
                                fontWeight: '500'
                              }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                                fontSize: 16
                            }}      
                            />
                </View>
                <View>
                    
                    {/* <TextInput
                        style={styles.inputMsg}
                        value={mensagem}
                        onChangeText={setMensagem}
                    /> */}
                     <FloatingLabelInput
                            style={styles.inputMsg}
                            value={mensagem}
                            editable = {true}
                            onChangeText={(mensagem) => {setMensagem(mensagem)}}
                            label='Mensagem'
                            staticLabel
                            hintTextColor='#aaa'
                            containerStyles={{
                                borderWidth: 2,
                                width: Dimensions.get('screen').width/1.15,
                                paddingHorizontal: 10,
                                borderRadius: 40,
                                height: 120
                            }}
                            customLabelStyles={{
                                colorFocused: '#F00E0E',
                                fontSizeFocused: 12,
                                color: '#7B7B7B',
                                
                              }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 8,
                                lineHeight:15,
                                fontSize: 16,
                                fontWeight: '500'
                              }}
                            inputStyles={{
                                color: 'black',
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                                fontSize: 16
                            }}      
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
