import React, { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, Linking, Pressable, Dimensions, TextInput} from 'react-native';
import styles from './styles';
import Cassio from '../../../../../assets/img/home/homem.jpg'
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import User from '../../../../../assets/img/global/defaultUser.png'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import MyContext from '../../../../Context/context';
import AuthPassageiro from '../../../../Controllers/AuthPassageiro';
import Passageiro from '../../../../Services/api/Passageiro';


export default function Perfil({navigation}) {
    
    let aP = new AuthPassageiro();
    const [file, setFile] = useState();

    const [modal, setModal] = useState(true);
    const [contador,setContador] = useState(30);
    

    const{passageiro, setPassageiro, url} = useContext(MyContext)
    const trocarSenha = () =>{
        setModal(false)
        navigation.navigate('TrocarSenha')
    }
    const [modalEditTelefone, setModalEditTelefone] = useState(false);
    const [modalEditEmail, setModalEditEmail] = useState(false);
    const [modalEditEscolha, setModalEditEscolha] = useState(false);
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [emailDisplay, setEmailDisplay] = useState('');
    const [telefoneDisplay, setTelefoneDisplay] = useState('');
    const [message,setMessage] = useState('')
    
    useEffect(() => {
        setEmail(passageiro.emailPassageiro);
        setEmailDisplay(passageiro.emailPassageiro);
        setTelefone(passageiro.numTelPassageiro);
        setTelefoneDisplay(passageiro.numTelPassageiro);
    }, [passageiro]);
    
    const updateEmail = async() => {
        const response = await aP.updateEmailPassageiro(passageiro.id,email);
        setModalEditEmail(false);
        setEmailDisplay(email);
        console.log(response)
    }
    const updateTelefone = async() => {
        if (telefone.length === 15) {
            setMessage('');
            const response = await aP.updateTelefonePassageiro(passageiro.id,telefone);
            setModalEditTelefone(false);
            setTelefoneDisplay(telefone);
            console.log(response)
          } 
          if(telefone.length !== 15) {
            setMessage('Número inválido');
        }

         
    }

    // const handleChoosePhoto = () => {
    //     const options = {
    //       noData: true,
    //       title: "Foto de avaliação",
    //       takePhotoButtonTitle: "Escolha uma foto",
    //       chooseFromLibraryButtonTitle: "Selecione da galeria uma foto",
    //       selectionLimit: 1, // Se deixar 1, será permitido apenas uma foto e 0 várias
    //     };
    
    //     launchImageLibrary(options, async (response) => {
    //       if (response.didCancel) {
    //         console.log("Usuário cancelou a seleção");
    //       } else if (response.error) {
    //         console.log("Ocorreu um erro.");
    //       } else {
    //         const photoFile = {
    //           uri: asset.uri,
    //           name: asset.fileName,
    //           type: "image/jpeg",
    //         };
    
    //         setFile(photoFile);
    //       }
    //     });
    //   };
    const pickImage = async() => {
        let response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,4],
            quality: 1
        })
        if(!response.canceled) {
            setFile(response.assets[0].uri);
            console.log(file)
            let p = new AuthPassageiro()
           let resp = await p.colocaImagem(response.assets[0].uri);
           setPassageiro(resp)
        }
    }
    const modalEscolhaEmail = () => {
        setModalEditEscolha(false);
        setModalEditEmail(true);
    }
    const modalEscolhaTelefone = () => {
        setModalEditEscolha(false);
        setMessage('');
        setModalEditTelefone(true);
    }

    const conta = ()=>{
         return 30 - email.length
    }
    useEffect(() => {
       conta();
    }, [email.length]);

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.fotoArea}>
                <View style={styles.fotoPlace}>
                    <Image
                    source={passageiro.fotoPassageiro != null ? {uri: url + passageiro.fotoPassageiro} : User}
                    style={styles.foto}/>
                    <TouchableOpacity style={styles.icon}
                    onPress={() => pickImage()}>
                    <Ionicons
                    name='camera'
                    size={30}
                    color='white'
                    style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infosArea}>
                <View style={styles.alterarArea}>
                    <View style={styles.boxInicio}>
                    <Text style={styles.dadosPessoais}>Dados Pessoais</Text>
                    <TouchableOpacity style={styles.btnBorda} onPress={()=>setModalEditEscolha(true)}>
                                <Ionicons name="create-outline"size={30} />
                            </TouchableOpacity>
                    </View>
                    
                    {/* <TouchableOpacity
                    onPress={() => setModal(true)}>
                    <Ionicons
                    name='create'
                    size={30}/>
                    </TouchableOpacity> */}
                </View>
                <Modal transparent visible={modalEditEscolha}>
                    <View style={styles.ViewModalEdit}>
                <View style={styles.modalEditEscolha}>
                   <View style={styles.containerModalEditEscolha}>  
                   <View style={styles.closeArea}>
                            <Ionicons
                            name='close' size={30} color={'black'} style={styles.icon}
                            onPress={() => setModalEditEscolha(false)}/>
                        </View>
                    <View style={styles.boxTitleEscolha}>
                        <Text style={styles.titleModalEscolha}>Escolha o que deseja editar</Text>
                    </View>
                    <View style={styles.boxBotoesEscolha}>
                        <Pressable  style={styles.botoesModalEscolha}  onPress={modalEscolhaEmail}>
                            <Ionicons name="mail-outline"size={50} />
                            <Text style={styles.titleEscolha}>E-mail</Text>
                        </Pressable>
                        <Pressable style={styles.botoesModalEscolha} onPress={modalEscolhaTelefone}>
                            <Ionicons name="call-outline"size={50} />
                            <Text style={styles.titleEscolha}>Telefone</Text>
                        </Pressable>
                    </View>
                </View>
                </View>
                </View>
            </Modal>   
                <View style={styles.infos}>
                    
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Nome</Text>
                        <Text style={styles.desc}>{passageiro.nomePassageiro}</Text>
                    </View>
                    <View style={styles.infoController}>
                            <Text style={styles.title}>E-mail</Text>
                            <Text style={styles.desc}>{emailDisplay}</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Celular</Text>
                        <Text style={styles.desc}>{telefoneDisplay}</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>CPF</Text>
                        <Text style={styles.desc}>{passageiro.cpfPassageiro}</Text>
                       
                    </View>
                    <Modal transparent visible={modalEditEmail}>
                    <View style={styles.ViewModalEdit}>
                <View style={styles.modalEdit}>
                   <View style={styles.containerModalEdit}>  
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleModal}>Insira seu E-mail</Text>
                    </View>
                    <View style={styles.boxInput}>
                            <FloatingLabelInput
                            style={styles.inputModal}
                            maxLength={30}
                            value={email}
                            editable = {true}
                            onChangeText={(email) => {setEmail(email)}}
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
                            <Text>{conta()}</Text>
                   </View>
                    <View style={styles.containerBoxBotoes}>
                    <View style={styles.boxBotoes}>
                        <Pressable>
                            <Text style={styles.botoesModal}  onPress={()=>setModalEditEmail(false)}>Cancelar</Text> 
                        </Pressable>
                        <Pressable>
                            <Text style={styles.botoesModal} onPress={updateEmail}>Enviar</Text>
                        </Pressable>
              
                    </View>
                    </View>
                </View>
                </View>
                </View>
               
                  
            </Modal>
            <Modal transparent visible={modalEditTelefone}>
                    <View style={styles.ViewModalEdit}>
                <View style={styles.modalEdit}>
                   <View style={styles.containerModalEdit}>  
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleModal}>Insira seu Telefone</Text>
                        <Text style={styles.erroTelefone}>{message}</Text>
                    </View>
                    <View style={styles.boxInput}>
                         <FloatingLabelInput
                            value={telefone}
                            editable = {true}
                            onChangeText={(telefone) => {setTelefone(telefone)}}
                            label='Telefone'
                            staticLabel
                            hintTextColor='#aaa'
                            mask='(00) 00000-0000'
                            keyboardType='numeric'
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
                    <View style={styles.containerBoxBotoes}>
                    <View style={styles.boxBotoes}>
                        <Pressable>
                            <Text style={styles.botoesModal}  onPress={()=>setModalEditTelefone(false)}>Cancelar</Text> 
                        </Pressable>
                        <Pressable>
                            <Text style={styles.botoesModal} onPress={updateTelefone}>Enviar</Text>
                        </Pressable>
              
                    </View>
                    </View>
                </View>
                </View>
                </View>
            </Modal>   
                  
                </View>
            </View>
           


            <Modal
            visible={modal}
            transparent={true}
            style={styles.modal}
            animationType='slide'>
            <TouchableOpacity
            style={{flex: 1}}
            onPress={() => setModal(false)}>
                <SafeAreaView style={styles.containerModal}>
                    <View style={styles.areaModal}>
                        <View style={styles.closeArea}>
                            <Ionicons
                            name='close' size={30} color={'black'} style={styles.icon}
                            onPress={() => setModal(false)}/>
                        </View>
                        <View style={styles.contArea}>
                            <View style={styles.textModal}>
                            <Text style={styles.informe}>Alterar dados</Text>
                            </View>
                            <View style={{height:'10%'}}></View>
                            <View style={styles.descModalArea}>
                                <Text style={{fontSize:16}}>
                                    O Bilhete Único Digital não pode alterar os dados fornecidos pela SPtrans, para atualizar suas informações, acesse o site <Text style={styles.link} onPress={() => Linking.openURL('https://scapub.sbe.sptrans.com.br/sa/acessoPublico/novoUsuario.action')}>SPtrans</Text>.
                                </Text>
                            </View>
                            <TouchableOpacity
                               style={styles.buttonArea}
                               onPress={() => trocarSenha()} >
                                <View style={styles.buttonAlterar}>
                                    <Text style={styles.textButton}>Alterar Senha</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
            </Modal>

        </SafeAreaView>
    );
}