import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      cima: {
        flex: 2,

      },
    
      integracao: {
        backgroundColor: '#fff',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

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
        backgroundColor: '#fff',
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

        justifyContent: 'flex-start',
        
        
      },

      esquerda: {
        rowGap: 5,

      },
      foto: {
        alignSelf: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 3,
      },
      passagem: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      linha: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
      },

      direita:{
        alignContent: 'flex-end',
        justifyContent: 'flex-start'
      },
      data: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        
      },
});