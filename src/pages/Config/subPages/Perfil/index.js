import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, Linking} from 'react-native';
import styles from './styles';
import Cassio from '../../../../../assets/img/home/homem.jpg'
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import MyContext from '../../../../Context/context';
import AuthPassageiro from '../../../../Controllers/AuthPassageiro';
export default function Perfil({navigation}) {
    
    
    const [file, setFile] = useState();
    const [modal, setModal] =useState(false);
    const{passageiro, compras, passagens} = useContext(MyContext)
    const trocarSenha = () =>{
        setModal(false)
        navigation.navigate('TrocarSenha')
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
            await p.colocaImagem(file);
        }
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fotoArea}>
                <View style={styles.fotoPlace}>
                    <Image
                    source={file}
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
                    <View>
                    <Text style={{fontSize:20}}>Dados Pessoais</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => setModal(true)}>
                    <Ionicons
                    name='create'
                    size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.infos}>
                    
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Nome completo</Text>
                        <Text style={styles.desc}>{passageiro.nomePassageiro}</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>E-mail</Text>
                        <Text style={styles.desc}>{passageiro.emailPassageiro}</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Celular</Text>
                        <Text style={styles.desc}>{passageiro.numTelPassageiro}</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>CPF</Text>
                        <Text style={styles.desc}>{passageiro.cpfPassageiro}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.dashArea}>
                <View style={styles.dashController}>              
                    <View style={styles.quadrado}>
                        <Text style={styles.acao}>Consumos</Text>
                        <Text style={styles.numero}>{passagens.qtdConsumos}</Text>
                    </View>
                    <View style={styles.quadrado}>
                        <Text style={styles.acao}>Compras</Text>
                        <Text style={styles.numero}>{compras.qtdCompras}</Text>
                    </View>
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