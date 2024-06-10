import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MyContext from "../../Context/context";
import search from "../../Controllers/Ajuda";
import ModalErro from '../../components/ModalErro';
import VotoAjuda from '../../Controllers/VotoAjuda';
import Loading from '../Loading';
import styles from "./styles";

export default function Ajuda({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inputRef = useRef(null);
  const[modalErro, setModalErro] = useState(false)
  const[iconModal, setIconModal] = useState('')
  const[textModal, setTextModal] = useState('')
  const[responseGlobal, setResponseGlobal] = useState([])
  const[loading, setLoading] = useState(false);
  const[controle, setControle] = useState(false);
  
  let voto = new VotoAjuda()
  const fetchData = async () => {
    console.log('estou aqui')

    const response = await voto.getAjudaMaiores(token);
    setResponseGlobal(response);
    setControle(true);

  }
  useEffect(() => {
    setLoading(true);
    fetchData();                          
    setLoading(false);
    
    if (isModalVisible) {
      inputRef.current.focus();
      }
      }, [isModalVisible]);
      
      const title = "Como comprar com o cartão de crédito?";
      
      const TextLimitado = ({ texto, limite }) => {
        if (texto.length > limite) {
          return <Text style={styles.tituloArtigo}>{texto.substring(0, limite)}...</Text>;
          }
          return <Text style={styles.tituloArtigo}>{texto}</Text>;
          };
          
          const [filtro, setFiltro] = useState("");
          const [result, setResult] = useState([]);
          const { token } = useContext(MyContext);

                            const ResultSearch = ({ id, tituloAjuda, caminhoAjuda, descAjuda }) => (
                              <TouchableOpacity
      onPress={() =>
        navigation.navigate("ArtigosBilhete", {
          id: id,
          titulo: tituloAjuda,
          caminho: caminhoAjuda,
          desc: descAjuda,
        }, setIsModalVisible(false))

      }
      

      
    >

      
      <View style={styles.boxAjuda}>
        <View style={styles.boxTituloAjuda}>
          <Text style={styles.tituloArtigoP}>{tituloAjuda}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
 
  
 if(!loading){ 
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
            <TouchableOpacity style={styles.fakeInput} onPress={() => setIsModalVisible(true)}>
              <Ionicons name="search-outline" size={20} color={"grey"} />
              <Text style={styles.fakeInputText}>Buscar duvida</Text>
            </TouchableOpacity>



            <Modal
              visible={isModalVisible}
              animationType='slide'
              presentationStyle='overFullScreen'
              onShow={() => {
                inputRef.current.focus();
              }}
            >
              <View style={styles.areaModal}>
                <View style={styles.areaModalHeader}>
                  <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                    <Ionicons name='chevron-back-outline' size={28} color='black' />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.input}
                    ref={inputRef}
                    placeholder='Qual sua dúvida?'
                    value={filtro}
                    onChangeText={(texto) => setFiltro(texto)}
                  />
                </View>
                {/* {<TextInput
            placeholder="Buscar"
            value={filtro}
            onChangeText={(texto) => setFiltro(texto)}
            style={styles.input}
          ></TextInput>} */}
                <View style={styles.areaModalCorpo}>
        
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>

      <View style={styles.areaDuvidas}>
        <View style={styles.areaSubTitulo}>
          <Text style={styles.textSubTitulo}>Dúvidas frequentes</Text>
        </View>

        <View style={styles.areaFrequentes}>
  {responseGlobal.map(item => (
    <TouchableOpacity
      key={item.id}
      style={styles.boxResposta}
      onPress={() => navigation.navigate("ArtigosBilhete", {
        id: item.id,
      })}
    >

      <View  style={styles.respostaTitulo}>
        <Text style={styles.tituloArtigo}>{item.titulo}</Text>
      </View>
      <View style={styles.respostaDuvida}>
        <AntDesign name="right" size={20} color="#9b9b9b" />
      </View>

      <View style={styles.linha} />
    </TouchableOpacity>
  ))}
</View>

      </View>

      <View style={styles.areaChat}>
        <View style={styles.areaSubTitulo}>
          <Text style={styles.textSubTitulo}>Ainda precisa de ajuda?</Text>
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
      <ModalErro visible={modalErro} icon={iconModal} text={textModal} />
    </SafeAreaView>
  );
}else{
  return(
      <Loading/>
  )
}}
