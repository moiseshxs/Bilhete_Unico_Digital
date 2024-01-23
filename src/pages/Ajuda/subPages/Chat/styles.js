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
    linha:{
        borderBottomWidth: 1,
        borderColor: '#000', 
        display: 'flex',
        justifyContent: 'space-between' 
    },
    circuloBorda:{
        width:  30,
        height: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    row:{
        display: 'flex',
        flexDirection:'row',
        gap:10
    },
    center:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    titulo:{
        fontWeight:'bold',
    },
    boxInput:{
        flex:0,
        height: Height/9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
    },
    input: { 
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: Height/20,
        width: Width/1.4,
        paddingLeft: 3
        
    },
    viewCompleta:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    }
    
    
});