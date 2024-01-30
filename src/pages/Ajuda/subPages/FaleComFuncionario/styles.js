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
        height: Height,
        flexDirection: 'column',
        gap: Height/10,
    },
    assunto:{
        borderBottomWidth: 1,
        paddingVertical: Width/50,
        fontWeight:'bold',
        fontSize: Width/24
        
    },
    inputArea:{
        
        borderColor: '#9B9B9B',
        height: Height/2.8,
        padding: Width/40,
       

    },
    buttonArea:{
        height: Height/10,
        paddingHorizontal: Height/40,
        justifyContent: 'space-between',
        borderColor:'#9B9B9B',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
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