import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
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
        gap: 80
    },
    inputGroup:{
        width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 35
        

    },
    forgetArea:{
        width: '100%',
        height: '5%',
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
        height: '35%',
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
        height: 45,
        lineHeight: 42,
        borderRadius: 40,
        backgroundColor: '#F00E0E',
        color: '#fff',
        fontSize: 20,
    },
    buttonCad:{
        width: Dimensions.get('screen').width/1.6,
        textAlign: 'center',
        height: 45,
        lineHeight: 42,
        borderRadius: 40,
        backgroundColor: '#fff',
        color: '#F00E0E',
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#F00E0E'
    }
    
   
});
