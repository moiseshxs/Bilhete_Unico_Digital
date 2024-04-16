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

  boxTituloAjuda:{
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: Width/38,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3', 
  },
    respostaDuvida:{
        width: Width/4,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
    },

    boxAjuda:{
        gap: 20,
        flexDirection: 'column',
    },


    areaTitulo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      },
      textTitulo: {
        fontSize: 30,
        fontWeight: "bold",
      },
    
      areaPesquisa: {
        flex: 2,
        backgroundColor: "blue",
      },
      areaSubTitulo: {
        flex: 1,
        paddingHorizontal: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      },
      textSubTitulo: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
      },
      areaInput: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#9B9B9B",
        marginHorizontal: 10,
        backgroundColor: "white",
        height: 40,
        width: "80%",
        padding: 10,
      },
    
      areaDuvidas: {
        flex: 3,
        backgroundColor: "purple",
      },
      areaFrequentes: {
        flex: 2,
      },
    
      areaChat: {
        flex: 2,
        backgroundColor: "pink",
      },
      areaNada: {
        flex: 1,
      },
});