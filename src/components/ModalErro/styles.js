import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({


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
    height: '35%',
    backgroundColor: '#fff',
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
    justifyContent: 'center',
    
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