import {MaterialIndicator} from 'react-native-indicators'
import { StyleSheet, SafeAreaView, Text} from 'react-native'
import { useState } from 'react'



export default function Loading(props){
    const[observacoes, setObservacoes] = useState('')
    console.log(props.obs)
    if(props.obs !==undefined && observacoes ==''){

        setObservacoes(props.obs)
    }
    return(
        <SafeAreaView style={styles.content}>
            
            <MaterialIndicator color='red'/>
            <Text style={[observacoes=='' ?  null : styles.obs]}>{observacoes}</Text>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    obs:{
        top:'40%',
        color: 'black',
        fontSize:20,
        position:'absolute'
    }
})