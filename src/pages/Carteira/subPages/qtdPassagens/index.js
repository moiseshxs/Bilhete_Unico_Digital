import React ,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './styles';

const DATA = [
    {
      id: '1',
      qtd: '1',
    },
    {
        id: '2',
        qtd: '2',
    },
    {
        id: '3',
        qtd: '4',
    },
    {
        id: '4',
        qtd: '6',
    },
    {
        id: '5',
        qtd: '10',
    },
    {
        id: '6',
        qtd: '12',
    },
    {
        id: '7',
        qtd: '15',
    },
    {
        id: '8',
        qtd: '20',
    },
    
];




export default function QtdPassagens({route, navigation}) {
    const [outroValor, setOutroValor] = useState(0)
    const [borderColor, setBorderColor] = useState('#7b7b7b')
    const [borderColor2, setBorderColor2] = useState('#7b7b7b')

    function changeColor(input){
 
        if( input =='outroValor'){
            setBorderColor('#7b7b7b')
            setBorderColor2('#F00E0E')
        }
    }
console.log(route.params.formaPagamento == undefined?route.params.fpId: route.params.formaPagamento, "id que está voltando")
const qtdOutroValor = parseInt(outroValor)
    const Item = ({ qtd }) => (
        <View style={styles.bolinhas}>
            <View style={styles.numPassagens}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ConfirmarPagamento', {quantidade: qtd, formaPagamento:route.params.formaPagamento == undefined?route.params.fpId: route.params.formaPagamento} )}}>
                    <Text style={styles.textPassagens}>{qtd}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
                <View style={styles.areaTexto}>
                    <Text style={styles.text}>Quantas passagens?</Text>
                    <Text style={styles.subText}>Selecione a quantidade de passagens.</Text>
                </View>

                <View style={styles.areaPassagens}> 
                    <FlatList
                        data={DATA}
                        numColumns={4}
                        renderItem={({ item }) => <Item qtd={item.qtd} />}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                    <View>
                    <FloatingLabelInput
                    label='Outro Valor'
                    staticLabel
                    hintTextColor='#aaa'
                    mask='0000'
                    value={outroValor}

                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        borderColor: borderColor2,
                        borderRadius: 40,
                        height: 55,
                        
                    }}
                    customLabelStyles={{
                        colorFocused: '#F00E0E',
                        fontSizeFocused: 12,
                        color: '#7B7B7B',
                        
                        
                      }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 8,
                        lineHeight:15,
                        fontSize: 16,
                        fontWeight: '500'
                        
                      }}
                    inputStyles={{
                        color: 'black',
                        borderColor: 'transparent',
                        outline: 'none',
                        paddingHorizontal: 10,
                        
                    }}
                    onChangeText={value => {setOutroValor(value)}}
                    onFocus={() => changeColor('outroValor')}
                    isFocused
                    />
                    </View>
                </View>

                <View style={styles.areaBotao}>
                    <View style={styles.botao}>
<TouchableOpacity onPress={() =>qtdOutroValor!=0? navigation.navigate('ConfirmarPagamento', {quantidade: qtdOutroValor, formaPagamento:route.params.formaPagamento == undefined?route.params.fpId: route.params.formaPagamento}):console.log("escolha a quantidade de passagens")}>
                            <AntDesign name="right" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                



        </SafeAreaView>
    );
}