import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Compra from "../../../../../Controllers/Compra";
import Passagem from "../../../../../Controllers/Passagem";
import Bilhete from "../../../../../Controllers/Bilhete";
import Loading from "../../../../Loading";
import Preco from "../../../../../Controllers/Preco";
import MyContext from "../../../../../Context/context";
import ModalErro from "../../../../../components/ModalErro";
const metodos = [
  {
    id: "2",
    tipoRecarga: "Pix",
    image: require("../../../../../../assets/img/carteira/pix.png"),
  },
  {
    id: "1",
    tipoRecarga: "Cartão",
    image: require("../../../../../../assets/img/carteira/cartao.png"),
  },
  {
    id: "3",
    tipoRecarga: "Boleto",
    image: require("../../../../../../assets/img/carteira/boleto.png"),
  },
];

export default function ConfirmarPagamento({ navigation, route }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [idEdit, setIdEdit] = useState("");
  const[modalErro, setModalErro] = useState(false)
  const[iconModal, setIconModal] = useState('')
  const[textModal, setTextModal] = useState('')
  const[closeButton, setCloseButton] = useState(false)
  const formasPagamento = {
    1: "Cartão",
    2: "Pix",
    3: "Boleto",
  };

  const { passageiro, token, bilhete, setPassagens, setCompras, setTaxa, taxa } =
    useContext(MyContext);
  let pr = new Preco();
  let id = route.params.id
  const [loading, setLoading] = useState(false);

  const [preco, setPreco] = useState(1);

  const payAndStore = async() =>{
    setLoading(true)
    let b = new Bilhete()
    const response = await b.payStoreBihete(id, token)
    console.log(response)
    setLoading(false)
    setTaxa(taxa +1)
    navigation.navigate("ListaBilhetes")
    
  }
 

  const resolveMes = (mes) => {
    if (mes < 10) {
      return `0${mes + 1}`;
    }
    return mes + 1;
  };

  const resolveDia = (dia) => {
    if (dia < 10) {
      return `0${dia}`;
    }
    return dia;
  };

  const resolveValor = (qtd) => {
    let valor = `R$ ${(qtd * preco).toFixed(2)}`;

    return valor.replaceAll(".", ",");
  };

  const dataAtual = () => {
    let ano = new Date().getFullYear();
    let mes = new Date().getMonth();
    let dia = new Date().getDate();
    return `${resolveDia(dia)}/${resolveMes(mes)}/${ano}`;
  };

  const DATA = [
    {
      id: "1",
      titulo: "Bilhete",
      conteudo: route.params.tipo,
      editar: "bilhete",
    },
    {
      id: "2",
      titulo: "Forma Pagamento",
      conteudo:
        idEdit != ""
          ? formasPagamento[idEdit]
          : formasPagamento[1],
      editar: "formaPagamento",
    },
    {
      id: "3",
      titulo: "Data de pagamento",
      conteudo: dataAtual(),
      editar: "Datarecarga",
    },
  ];

  const modalEditId = (id) => {
    setIdEdit(id);
    setModalEdit(false);
  };

  const Metodos = ({ tipoRecarga, image, id }) => (
    <View style={styles.fundometodos}>
      <View style={styles.circleMetodo}>
        <TouchableOpacity onPress={() => modalEditId(id)}>
          <Image source={image} style={styles.metodo} />
        </TouchableOpacity>
      </View>
      <Text style={styles.recargatext}>{tipoRecarga}</Text>
    </View>
  );

  let compra = new Compra();
  let passagem = new Passagem();
 

  const arrayEdit = (editar) => {
    if (editar == "formaPagamento") {
      setModalEdit(true);
    } else {
      navigation.navigate("QtdPassagens", {
        formaPagamento: idEdit == "" ? route.params.formaPagamento : idEdit,
      });
    }
  };
  const Item = ({ titulo, conteudo, editar }) => {
    const [texto, setTexto] = useState("");
    useEffect(() => {
      if (editar === "formaPagamento" || editar === "QtdPassagens") {
        setTexto("Editar");
      } else {
        setTexto("");
      }
    }, [editar]);
    return (
      <View style={styles.passagens}>
        <View style={styles.esquerda}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.conteudo}>{conteudo}</Text>
        </View>

        <View style={styles.direita}>
          <TouchableOpacity onPress={() => arrayEdit(editar)}>
            <Text style={styles.textEditar}>{texto}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.recarregando}>
          <Text style={styles.text}>Você está pagando</Text>
          <Text style={styles.valor}>
            R$ 30,80
          </Text>
        </View>

        <View style={styles.infos}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item
                titulo={item.titulo}
                conteudo={item.conteudo}
                editar={item.editar}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.areaBotao}>
          <View style={styles.botao}>
            <TouchableOpacity onPress={() => payAndStore()}>
              <Text style={styles.textBotao}>Confirmar pagamento</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal transparent visible={modalEdit}>
          <View style={styles.modalEdit}>
            <View style={styles.containerModalEdit}>
              <View style={styles.headerModalEdit}>
                <Text style={styles.textHeaderModal}>Escolha um método de pagamento</Text>
              </View>
              <View style={styles.flexModal}>
                <View style={styles.flatListContainer}>
                  <FlatList
                    data={metodos}
                    renderItem={({ item }) => (
                      <Metodos
                        tipoRecarga={item.tipoRecarga}
                        image={item.image}
                        id={item.id}
                      />
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <ModalErro visible={modalErro} icon={iconModal} text={textModal} closeButton={closeButton} />
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
}
