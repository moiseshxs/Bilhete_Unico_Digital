import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Cassio from '../../../../../assets/img/home/perfil.png'
import { Ionicons } from '@expo/vector-icons';
import { launchImageLibrary } from "react-native-image-picker";
export default function Perfil() {
    
    
    const [file, setFile] = useState();

    const handleChoosePhoto = () => {
        const options = {
          noData: true,
          title: "Foto de avaliação",
          takePhotoButtonTitle: "Escolha uma foto",
          chooseFromLibraryButtonTitle: "Selecione da galeria uma foto",
          selectionLimit: 1, // Se deixar 1, será permitido apenas uma foto e 0 várias
        };
    
        launchImageLibrary(options, async (response) => {
          if (response.didCancel) {
            console.log("Usuário cancelou a seleção");
          } else if (response.error) {
            console.log("Ocorreu um erro.");
          } else {
            const photoFile = {
              uri: asset.uri,
              name: asset.fileName,
              type: "image/jpeg",
            };
    
            setFile(photoFile);
          }
        });
      };




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fotoArea}>
                <View style={styles.fotoPlace}>
                    <Image
                    source={Cassio}
                    style={styles.foto}/>
                    <TouchableOpacity style={styles.icon}
                    onPress={() => handleChoosePhoto}>
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
                    <TouchableOpacity>
                    <Ionicons
                    name='create'
                    size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.infos}>
                    
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Nome completo</Text>
                        <Text style={styles.desc}>Cassio Adalberto Ramos</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>E-mail</Text>
                        <Text style={styles.desc}>gigantecassio@gmail.com</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>Celular</Text>
                        <Text style={styles.desc}>(11) 9 0000-0000</Text>
                    </View>
                    <View style={styles.infoController}>
                        <Text style={styles.title}>CPF</Text>
                        <Text style={styles.desc}>777.***.***-*7</Text>
                    </View>
                </View>
            </View>
            <View style={styles.dashArea}>
                <View style={styles.dashController}>              
                    <View style={styles.quadrado}>
                        <Text style={styles.acao}>Consumos</Text>
                        <Text style={styles.numero}>19</Text>
                    </View>
                    <View style={styles.quadrado}>
                        <Text style={styles.acao}>Compras</Text>
                        <Text style={styles.numero}>7</Text>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
}