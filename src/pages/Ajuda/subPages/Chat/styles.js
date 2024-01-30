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
    circuloBordaChat:{
        width:  40,
        height: 40,
        backgroundColor:'red',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    row:{
        flex: 0.11,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap:10,
        borderBottomWidth: 1,
        borderColor: '#000', 
        
    },
    center:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    titulo:{
        fontWeight:'bold',
        fontSize: Width/18
    },
    boxInput:{
        flex:0,
        height: Height/12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
    },
    input: { 
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: Height/14,
        width: Width/1.2,
        paddingLeft: 10
        
    },
    viewCompleta:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxChat:{
        height: Height/1.55, 
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    questionario:{
        justifyContent: 'center',
        alignItems:'center',
        gap: 10
    },  
    titleQuest:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonAjuda:{
        
        height: Height/20,
        width: Width/4,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#000',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonArea:{
        justifyContent:'flex-end',
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
    },    
    
});