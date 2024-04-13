import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, View, Text, Pressable,Alert } from "react-native";
import styles from './styles'

import AuthPassageiro from '../../../../Controllers/AuthPassageiro';

export default function FormaRecuperarSenha({navigation,route}){
    
    let authP = new AuthPassageiro()
    
   
    const requireCodRecuperar = async(forma, dado) =>{
      
        const response = await authP.requireCodEmailRecuperar(forma, dado)
        if(response){
            setTimeout(() =>  1000)
            navigation.navigate('RecuperarSenha', {
                id: route.params.dados.id,   
                forma: forma
            })
            
        }else{
            
            Alert.alert('Erro', "Erro inesperado ao carregar informações", [
                {
                  text: 'Cancel',
                  onPress: () => navigation.navigate("Login"),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () =>  navigation.navigate("Login")},
              ]);
            
        }
    }

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.returnArea}>    
            <Ionicons
                name='arrow-back'
                size={30}
                style={{marginStart: 27}}
                onPress={() => navigation.navigate('Login') }/>
          </View>
          <View style={styles.texts}>

              <Text style={{fontSize:40, fontWeight: '600', width: '100%'}}>Esqueceu sua senha?</Text>
              <Text style={{fontSize:20, color:'#7b7b7b', fontWeight: '500'}}>Selecione por qual opção de contato você deseja redefinir sua senha:</Text>
          </View>
          <View style={styles.optionsArea}>
                <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate('RecuperarSenha', {forma: "numero de celular"})}>
                    <View style={styles.controller}>
                        <View style={styles.icon}>
                            <Ionicons name='phone-portrait' size={80}/>
                        </View>
                        <View style={styles.desc}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#7b7b7b'}}>Via SMS:</Text>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>** ****-**10</Text>
                        </View>
                    </View>

                </Pressable>
                <Pressable
                style={styles.pressable}
                onPress={() => requireCodRecuperar("email", route.params.dados.emailPassageiro)}>
                     <View style={styles.controller}>
                        <View style={styles.icon}>
                            <Ionicons name='mail' size={80}/>
                        </View>
                        <View style={styles.desc}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#7b7b7b'}}>Via Email:</Text>
                            <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>******ro12@gmail.com</Text>
                        </View>
                    </View>

                </Pressable>


          </View>
          
        </SafeAreaView>
    )
}