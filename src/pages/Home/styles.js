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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      perfil: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
      },
      fotoPerfil: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
      },
      nomePerfil: {
        color: 'white',
        fontSize: 20,
        width: '20ch',
        
        overflow:'hidden',
        fontWeight: 'bold',
      },

      passagens: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    
      integracao: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
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

      boxInte: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "thistle",
    
        alignSelf: 'stretch',
    
        
        paddingLeft: 15,
        paddingVertical: 15,
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
    
      atividades: {
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
        borderWidth: 3,
        justifyContent: 'center',
      },
      foto: {
        alignSelf: 'center',
        width: 28,
        height: 28,
      },
      passagem: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      linha: {
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