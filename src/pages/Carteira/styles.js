import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeContainer: {
        flex:1,
        backgroundColor: 'red',

      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      //PARTE VERMELHA
      cima: {
        flex: 3,
        backgroundColor: 'red',

        paddingHorizontal: 20,
        marginBottom: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },

      nav: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      nomeCarteira: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      },

      passagens: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      tituPassag: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      qtdPassag: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
      },

      
    
      recarga: {
        flex: 2,
        paddingHorizontal: 20,
      },

      fundometodos: {
        gap: 5,
        alignItems: 'center',
      },
      circleMetodo: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      },
      metodo: {
        width: 50,
        height: 50,
      },

      shadow: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },

      
      tituInte: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 7,
        alignItems: 'flex-start',
      },
      tempo: {
        fontSize: 50,
        fontWeight: 'bold',
      },
    
      historico: {
        flex: 3,
        paddingHorizontal: 20, 
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    
    
      item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "thistle",
        paddingVertical: 20,

        justifyContent: 'space-between',
      },

      esquerda: {
        rowGap: 5,
        columnGap: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      meio:{
        //flexDirection: 'column', já é por padrao

      },
      pagamen: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
      },
      foto: {
        alignSelf: 'center',
        width: 28,
        height: 28,
      },
      tipoRecarga: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      qtd: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'grey',
      },

      direita:{
        
      },
      data: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'grey',
        
      },
});