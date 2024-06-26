import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({


modal:{
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
},
containerModal:{
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
areaModal:{
    width:'100%',
    height: '30%',
    backgroundColor: '#fff',
    padding: 20,
    elevation: 15,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,

},
closeArea:{
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
},
contArea:{
    height: '85%',
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
},
textModal:{
    width: Dimensions.get('screen').width/1.27,

},
link:{
    color:'#f00'
},
descModalArea:{
    height:'40%',
    width:'80%',
    justifyContent:'center',
    alignItems:'flex-start',
    
},
informe:{
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#7b7b7b'
},
buttonAlterar:{
    width: 180,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f00',
    borderRadius: 25,
},
textButton:{
    color:'#fff',
    fontSize:20
},
buttonArea:{
    height:'40%',
    justifyContent:'center',
    alignItems:'center',
    
},

metodo: {
    width: 100,
    height: 100,
  },

});     