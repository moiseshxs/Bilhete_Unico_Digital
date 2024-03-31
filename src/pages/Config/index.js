import React, { useContext, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyContext from '../../Context/context';
import Compra from '../../Controllers/Compra';

export default function Config() {
    const navigation = useNavigation();
    const{passageiro, compras, passagens, bilhete, token} = useContext(MyContext);
    const[loading, setLoading] = useState(false)
    const[countCompra,setCountCompra] = useState('')

    const countCompras = async() =>{
        let c = new Compra()
        const response = await c.countCompras(bilhete.id, token)
        if(!response){
            return false
        }
        setCountCompra(response)

    }

    useEffect(()=>{
        if(compras == ''){
            countCompras()
        }
    })


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.areaImagem}>
                <Image 
                    source={require('../../../assets/img/home/homem.jpg')} 
                    style={styles.imagem}
                />
                <Text style={styles.nomeUsuario}>{passageiro.nomePassageiro}</Text>

                
            </View>
            <View style={styles.areaPassagens}>
                <View style={styles.areaEsq}>
                    <Text style={styles.textPassagens}>CONSUMO</Text>
                    <Text style={styles.numPassagens}>{passagens.qtdConsumos}</Text>
                </View>
                <View style={styles.areaDir}>
                    <Text style={styles.textPassagens}>RECARGA</Text>
                    {compras != '' ?
                    <Text style={styles.numPassagens}>{compras.qtdCompras}</Text>
                    :
                    <Text style={styles.numPassagens}>{countCompra}</Text>
                    }
                </View>
                
            </View>
            

            <View style={styles.areaOpcoes}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <View style={styles.areaBotao}>
                    <View style={styles.esquerda}>
                        <FontAwesome name="user" size={20} color="black" />
                        <Text style={styles.titulo}>Perfil</Text>
                    </View>

                    <View style={styles.direita}>  
                            <AntDesign name="right" size={20} color="black" />
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Bilhete')}>
                <View style={styles.areaBotao}>
                    <View style={styles.esquerda}>
                        <FontAwesome name="vcard" size={20} color="black" />  
                        <Text style={styles.titulo}>Bilhete</Text>
                    </View>

                    <View style={styles.direita}>  
                            <AntDesign name="right" size={20} color="black" />
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cartao')}>
                <View style={styles.areaBotao}>
                    <View style={styles.esquerda}>
                        <FontAwesome name="credit-card-alt" size={20} color="black" />
                        <Text style={styles.titulo}>Cartão</Text>
                    </View>

                    <View style={styles.direita}>  
                            <AntDesign name="right" size={20} color="black" />
                    </View>
                </View>
                </TouchableOpacity>

                <View style={styles.areaUltima}>
                    
                </View>
            </ScrollView>
            </View>

            
        </SafeAreaView>
    );
}