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
    linha:{
        borderBottomWidth: 1,
        borderColor: '#d3d3d3', 
        display: 'flex',
        justifyContent: 'space-between' 
    },
    circuloBorda:{
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
  
      
});