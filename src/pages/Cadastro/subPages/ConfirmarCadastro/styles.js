import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        flex:1,
        backgroundColor: 'white',
    
    },
    

    
   
    
    
    returnArea: {
        flex:1,
        alignItems: 'flex-start',
        width: '100%',
        marginTop: '10%'
    },
    texts:{
        height: '30%',
        width: '80%',
        gap: 20
    },
    optionsArea:{
        width: '100%',
        flex:7,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection:'column'

    },
    pressable: {
        width: '87%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#7b7b7b'
    },
    controller:{
        height:'80%',
        width: '90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
           },
    icon:{
        width: '30%',
        height:'100%',
                justifyContent:'center',
        alignItems:'center'
    },
    desc:{
        width: '60%',
        height: '100%',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'column',
        marginStart: '4%'
    }

    
   
});
