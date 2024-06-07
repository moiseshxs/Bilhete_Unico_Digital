import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  areaCartoes: {
    flex: 6,
    padding: 20,
  },
  cartao: {
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 20,
    height: 180,
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#000',
  },
  areaCimaCartao: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  areaBaixoCartao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textNomeCartao: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  bandeira: {
    height: 25,
    width: 45,
    objectFit: 'contain',
  },

  areaBotao: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 45,
    borderRadius: 50,
  },
  textBotao: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },

  //MODAL STYLE
  modalEdit: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerModalEdit: {
    flex: 0.3,
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerModalEdit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeaderModal: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  flexModal: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModal: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  botaoModal: {
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  botaoModalSim: {
    backgroundColor: 'red',
    borderWidth: 0,
  },
  textModalSim: {
    color: 'white',
  },
  boxBotaoModal: {
    flex: 3,
    flexDirection: 'row',
    borderColor: 'black',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});