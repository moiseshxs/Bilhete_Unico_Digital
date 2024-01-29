import { StyleSheet, Dimensions } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        height: Height,
        padding: Width/40,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    
    
    row:{
        height: Height/9,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap:10,
        borderBottomWidth: 1,
        borderColor: '#000', 
        
    },
    titulo:{
        fontWeight:'bold',
        fontSize: Width/18
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
        height: Height/2,
        flexDirection: 'column',
        gap: Height/10,
    },
    assunto:{
        borderBottomWidth: 1,
        padding: Width/40,
        fontWeight:'bold',
        fontSize: Width/24
        
    },
    inputArea:{
        borderWidth: 1,
        borderColor: '#f00',
        
        height: Height/2.8,
        padding: Width/40,
        borderRadius: 40

    },
    buttonArea:{
        justifyContent:'flex-end',
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
    },
    buttonAjuda:{
        backgroundColor:'#f00',
        borderWidth: 1,
        borderColor: '#000',
        padding: Width/36,
        borderRadius:10,     
    },
    buttonText:{
        color: '#fff',
        fontWeight:'bold'
    },    
    
    
   
    
    
});