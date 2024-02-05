import { StyleSheet, Dimensions } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: Width/40,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    
    

    circuloBorda:{
        width:  40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    section:{
        flexDirection: 'column',
        gap: Height/10,
    },
    boxAssunto:{
        justifyContent: 'space-between',
         flexDirection: 'column',
         gap: 20
    },
    assunto:{
        paddingVertical: Width/50,
        fontWeight:'bold',
        fontSize: Width/16
        
    },

    textAssunto:{
        width: Width/1.2,
        paddingHorizontal: Width/40,
        color: '#9B9B9B',
        fontWeight: '500',
        fontSize: Width/23,
        textAlign: 'justify'
    },
    inputArea:{
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#f00',
        height: Height/2.8,
        padding: Width/40,
       

    },
    boxButton:{
        flex: 1,
        justifyContent:'flex-end'
    },
    buttonArea:{
        height: Height/12,
        justifyContent: "space-evenly",
        padding: Width/40,
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
    },
    buttonAjuda: {
        height: Height/12,
        width: Height/12,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#9B9B9B',
        borderRadius: 10
    },
    arquivo:{
        flexDirection: 'row',
        gap: 10
    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold'
    }, 
     
    
    
   
    
    
});