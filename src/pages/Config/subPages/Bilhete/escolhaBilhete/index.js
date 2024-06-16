import React, { useContext, useState, useEffect} from 'react';
import {SafeAreaView, Pressable, View,Text} from 'react-native';
import styles from './styles';
import MyContext from '../../../../../Context/context';


export default function EscolhaBilhete({navigation}) {
    
    const{passageiro, bilhete, setTroca, setPassagens, token} = useContext(MyContext)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxTipoBilhete}>
                <Text>Comum</Text>
            </View>

            <View style={styles.boxRequisitosBilhete}>
                <Text>Requisitos</Text>
            </View>

            <View style={styles.boxButton}>
                <Pressable>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Continuar</Text>
                        </View>
                </Pressable>
          </View>

        </SafeAreaView>  
    );

}