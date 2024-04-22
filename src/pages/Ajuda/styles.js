import { StyleSheet, Dimensions } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },


  BoxsubTituloDuvida: {
    height: Height / 8,
    justifyContent: 'center',
    alignItems: 'center'

  },
  subTituloDuvida: {
    fontSize: Width / 15,
    textAlign: 'center',
    fontWeight: '500',
  },

  linha: {
    borderBottomWidth: 5,
    borderColor: '#d3d3d3',
  },
  circuloBorda: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  centralizar: {
    padding: Width / 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxResposta: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: Width / 38,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingVertical: 10,
  },

  tituloArtigoP: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  tituloArtigo: {
    color: '#9b9b9b',
    textAlign: 'center',
  },

  boxTituloAjuda: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: Width / 38,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  respostaDuvida: {
    width: Width / 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  boxAjuda: {
    flexDirection: 'column',
    gap: 20,
  },

  //CODIGO CERTO
  areaTitulo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitulo: {
    fontSize: 30,
    fontWeight: "bold",
  },

  areaPesquisa: {
    flex: 2,
  },
  areaSubTitulo: {
    flex: 1,
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  textSubTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  areaPraTudo: {
    flex: 1,
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
    width: "70%",
    padding: 10,
  },

  areaDuvidas: {
    flex: 3,
  },
  areaFrequentes: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  areaChat: {
    flex: 2,
  },
  areaNada: {
    flex: 1,
  },

  //FAKE INPUT STYLE
  fakeInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    height: 40,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  fakeInputText: {
    color: 'grey',
    marginLeft: 5,
  },

  //MODAL STYLE
  areaModal: {
    flex: 1,
  },
  areaModalHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  botaoFechar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fbfbfb',
    borderColor: 'black',
    width: '90%',
    height: 35,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: '600',
  },

  areaModalCorpo: {
    flex: 9,
    backgroundColor: '#fff',
  },
});