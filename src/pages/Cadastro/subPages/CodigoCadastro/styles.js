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
    root: {
        flex: 1,
        padding: 20
    },

    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        height:'20%',
        width:'85%',
        
    },
    celula: {
      width: 70,
      height: 80,
      lineHeight: 38,
      borderWidth: 2,
      borderColor: '#7b7b7b',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 25,
    },
    textCelula:{
        fontSize: 24,
    },
    focusCell: {
      borderColor: '#000',
    },
    returnArea: {
        height: '5%',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: '10%'
    },
    texts:{
        height: '40%',
        justifyContent:'center',
        width: '80%',
        gap: 35
    },

    
   
});
