import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'end',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: Dimensions.get('screen').height,
        backgroundColor: 'white',
    
    },

    botao: { 
        borderWidth: 2,
        borderColor: 'white',
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    logo: {
        width: 140,
        height: 140
    },
    inputArea:{
        height: '55%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 80,
        flex:2,
     
    },
    inputGroup:{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 35,
        
        

    },
    forgetArea:{
        width: '100%',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgetText:{
        fontSize: 15,
        color: '#F00E0E',
        fontWeight: '500'
    },
    buttonArea:{
        width: '100%',
        flex:1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    buttonGroup:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        marginBottom: 37,
        gap: 12
    },
    button:{
        width: Dimensions.get('screen').width/1.6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 50,
        backgroundColor: '#F00E0E',
        color: '#fff',
    },
    buttonRecuperar:{
        width: Dimensions.get('screen').width/1.6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        position: 'relative',
        bottom: '100%',
        borderRadius: 50,
        backgroundColor: '#F00E0E',
        color: '#fff',
    },
    buttonCad:{
        width: Dimensions.get('screen').width/1.6,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 50,
        backgroundColor: '#fff',
        color: '#F00E0E',
        borderWidth: 2,
        borderColor: '#F00E0E'
    },
    textButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    textCad:{
        color: '#f00e0e',
        fontSize: 20,
        fontWeight: '500'
    },
    modal:{
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    containerModal:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    areaModal:{
        width:'100%',
        height: '40%',
        backgroundColor: '#fff',
        elevation: 20,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,

    },
    closeArea:{
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon:{
        marginTop:10,
        marginEnd: 15
    },
    contArea:{
        height: '85%',
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textModal:{
        height: '17%',
        width: Dimensions.get('screen').width/1.27,
    },
    informe:{
        fontSize:20,
        color: '#7b7b7b'
    },
    floating:{
        position: 'relative',
        top: '40%',
        borderWidth:1
    }
    
   
});
