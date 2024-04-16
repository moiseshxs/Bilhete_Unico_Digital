import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MyContext from "../../Context/context";
import search from "../../Controllers/Ajuda";

import styles from "./styles";

export default function Ajuda({ navigation }) {
  const [filtro, setFiltro] = useState("");
  const [result, setResult] = useState([]);
  const { token } = useContext(MyContext);
  const searchAjuda = async () => {
    let ajuda = new search();

    const response = await ajuda.search(token, filtro.trim() || "");
    setResult(response);
  };
  const resultSearchData = result.map((item) => ({
    id: item.id,
    tituloAjuda: item.tituloAjuda,
    caminhoAjuda: item.caminhoAjuda,
    descAjuda: item.descAjuda,
  }));
  console.log(resultSearchData);
  useEffect(() => {
    searchAjuda();
    if (filtro != "") {
      result.filter((item) => {
        return item.tituloAjuda
          ? item.tituloAjuda.toLowerCase().includes(filtro.toLowerCase())
          : false;
      });
    }
  }, [filtro]);

  const ResultSearch = ({ id, tituloAjuda, caminhoAjuda, descAjuda }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ArtigosBilhete", {
          id: id,
          titulo: tituloAjuda,
          caminho: caminhoAjuda,
          desc: descAjuda,
        })
      }
    >
      <View style={styles.boxAjuda}>
        <View style={styles.boxTituloAjuda}>
          <Text style={styles.tituloArtigo}>{tituloAjuda}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Text style={styles.textTitulo}>Central de ajuda</Text>
      </View>

      <View style={styles.areaPesquisa}>
        <View style={styles.areaSubTitulo}>
          <Text style={styles.textSubTitulo}>Como podemos te ajudar?</Text>
        </View>

        <View style={styles.areaPraTudo}>
        <View style={styles.areaInput}>
          <TextInput
            placeholder="Buscar"
            value={filtro}
            onChangeText={(texto) => setFiltro(texto)}
            style={styles.input}
          ></TextInput>

          <TouchableOpacity>
            <Ionicons name="search-outline" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={resultSearchData}
          renderItem={({ item }) => (
            <ResultSearch
              id={item.id}
              tituloAjuda={item.tituloAjuda}
              caminhoAjuda={item.caminhoAjuda}
              descAjuda={item.descAjuda}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      </View>

      <View style={styles.areaDuvidas}>
        <View style={styles.areaSubTitulo}>
          <Text style={styles.textSubTitulo}>Dúvidas frequentes</Text>
        </View>

        <View style={styles.areaFrequentes}>
          <View>
          <TouchableOpacity style={styles.boxResposta} onPress={() => navigation.navigate("ArtigosBilhete",{
        id: 3,
        titulo: 'Como consumir uma passagem?',
        caminho: 'Início->QrCode',
        desc: 'Basta acessar a tela de QrCode e aproxima-lo ao leitor de QrCodes de uma catraca',
        })}>
              <Text style={styles.tituloArtigo}>Como utilizar o QR Code?</Text>
              <View style={styles.respostaDuvida}>
                <AntDesign name="right" size={20} color="#9b9b9b" />
              </View>
              <View style={styles.linha} />
            </TouchableOpacity>
          </View>
          <View>
             <TouchableOpacity
              style={styles.boxResposta}
              onPress={() => navigation.navigate("ArtigosBilhete",{
                id: 5,
                titulo: 'Como fazer uma compra com o cartão de crédito?',
                caminho: 'Início->Carteira',
                desc: 'Acessando a carteira, basta selecionar o método de pagamento, selecionar a quantidade de passagens para comprar, depois é so verificar as informações e efetuar a compra',
              })}
            >
              <Text style={styles.tituloArtigo}>Como comprar com o cartão de crédito?</Text>
              <View style={styles.respostaDuvida}>
                <AntDesign name="right" size={20} color="#9b9b9b" />
              </View>
              <View style={styles.linha} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.boxResposta}
              onPress={() => navigation.navigate("ArtigosBilhete",{
                id: 1,
                titulo: 'Como trocar o bilhete selecionado?',
                caminho: 'Início->Config->Bilhetes->Trocar',
                desc: 'Na tela de bilhetes, aperte o botão trocar, assim será listado todos seus bilhetes ativos, basta selecionar o de sua preferência',
              })}
            >
              <Text style={styles.tituloArtigo}>Como trocar de bilhete?</Text>

              <View style={styles.respostaDuvida}>
                <AntDesign name="right" size={20} color="#9b9b9b" />
              </View>
              <View style={styles.linha} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.areaChat}>
        <View style={styles.areaSubTitulo}>
          <Text style={styles.subTituloDuvida}>Ainda precisa de ajuda?</Text>
        </View>
        
        <View style={styles.centralizar}>
          <View style={styles.circuloBorda}>
            <TouchableOpacity
              style={styles.buttonAjuda}
              onPress={() => navigation.navigate("Chat")}
            >
              <Ionicons
                style={styles.centralizar}
                name="chatbubble-ellipses-outline"
                size={60}
                color={"black"}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.areaNada}></View>
    </SafeAreaView>
  );
}
