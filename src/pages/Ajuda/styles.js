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
    boxTitulo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: Height/6,
    },
    titulo:{
       fontSize: Width/10,
       fontWeight: 'bold'
    },
    boxSubTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Height/9,
    },
    subTitulo: {
        fontSize: Width/15,
        textAlign: 'center',
        fontWeight: 'bold',
        width: Width/2
    },
    boxDuvida:{
        
        gap: 20
    },
    BoxsubTituloDuvida:{
        height: Height/8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    subTituloDuvida: {
        fontSize: Width/15,
        textAlign: 'center',
        fontWeight: '500',
    },
    sectionPesquisa:{
        
        gap: Height/22
    },

    boxInput:{
        flex:0,
        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    
      },
    input: { 
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#9B9B9B',
        marginHorizontal: 10,
        backgroundColor: 'white',
        height: Height/16,
        width: Width/1.4,
        padding: 10
    
      },
    linha:{
        borderBottomWidth: 5,
        borderColor: '#d3d3d3', 
         
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

    centralizar:{
        padding: Width/40,
        justifyContent: 'center',
        alignItems: 'center',
    },
  boxResposta:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: Width/38,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3', 
    
  },

  tituloArtigo:{
    color: '#9b9b9b'
  },
    respostaDuvida:{
        width: Width/4,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
    }
});