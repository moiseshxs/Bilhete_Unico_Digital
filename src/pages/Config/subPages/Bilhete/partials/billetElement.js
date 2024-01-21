import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Une from '../../../../../../assets/img/bilhete/UNElogo.png'
import Uee from '../../../../../../assets/img/bilhete/UEElogo.png'
import Anpg from '../../../../../../assets/img/bilhete/ANPGlogo.png'
import Ubes from '../../../../../../assets/img/bilhete/UBESlogo.png'
import Umes from '../../../../../../assets/img/bilhete/UMESlogo.jpg'
import Cassio from '../../../../../../assets/img/home/perfil.png'
import Ano from '../../../../../../assets/img/bilhete/anoBilhete.png'


export default function BilheteElement(props) {
    let lista = props.lista
    let tipoBilhete = props.tipoBilhete
    let gratuidadeBilhete = props.gratuidadeBilhete
    let meiaPassagemBilhete = props.meiaPassagemBilhete
    let statusBilhete = props.statusBilhete
    let numBilhete = props.numBilhete
    let backgroundColor = props.backgroundColor
    if (backgroundColor == undefined) {
        backgroundColor = '#438E28'
    }
   

    return (
        <TouchableOpacity
        style={[lista==false ?{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'} : null]}
        onPress={props.press}>
        <View  style={[styles.bilhete, lista == true ? styles.bilheteLista : styles.bilheteUnique, backgroundColor != undefined ? { backgroundColor: backgroundColor }: null]}>
            <View style={styles.header}>
                <Image
                    source={Une}
                    style={styles.logoHeader} />
                <Image
                    source={Ubes}
                    style={styles.logoHeader} />
                <Image
                    source={Anpg}
                    style={styles.logoHeader2} />
                <Image
                    source={Uee}
                    style={styles.logoHeader} />
                <Image
                    source={Umes}
                    style={styles.logoHeader} />
            </View>
            <View style={styles.fotoInfo}>
                <View style={styles.fotoArea}>
                    <Image
                        source={Cassio}
                        style={styles.foto} />
                </View>
                <View style={styles.infoArea}>
                    <View style={styles.info}>
                        <Text><Text style={{ fontWeight: '500' }}>Tipo Bilhete:</Text> {tipoBilhete} </Text>
                        <Text><Text style={{ fontWeight: '500' }}>Status:</Text> {statusBilhete}</Text>
                        <Text><Text style={{ fontWeight: '500' }}>Meia Passagem:</Text> {meiaPassagemBilhete}</Text>
                        <Text><Text style={{ fontWeight: '500' }}>Gratuidade:</Text> {gratuidadeBilhete}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.anoCod}>
                    <View style={styles.codUso}>
                        <Text>Código de uso/N° do Bilhete Único</Text>
                        <Text style={{ textAlign: 'center' }}>{numBilhete}</Text>
                    </View>
                    <Image
                        source={Ano}
                        style={styles.ano} />
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    fotoInfo: {
        height: '60%',
        width: '90%',

        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoArea: {
        width: '40%',

        height: '100%'
    },
    foto: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    infoArea: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    anoCod: {
        flexDirection: 'row',
        gap: 30,
        marginEnd: 5,
    },
    info: {
        marginStart: 10,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    footer: {
        height: '20%',
        justifyContent: 'center',
        width: '100%',

        alignItems: 'flex-end'
    },
    ano: {
        width: 50,
        height: 25,
    },

    bilhete: {
        width: '95%',
        

        borderRadius: 25,

        backgroundColor: '#438E28',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bilheteUnique: {
        height: '85%'
    },
    bilheteLista: {
        height: 250,
        width: Dimensions.get('screen').width/1.09,
        marginVertical: 8,
    },
    header: {
        width: '94%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        gap: 20,
    },
    logoHeader: {
        width: 30,
        height: 30
    },
    logoHeader2: {
        width: 80,
        height: 30
    },

})