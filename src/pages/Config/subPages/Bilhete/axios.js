import AsyncStorage from '@react-native-async-storage/async-storage';


export const setIdBilheteStorage = async(idBilhete)=>{
  try {
   await AsyncStorage.setItem('idBilhete', idBilhete);
  return true
  } catch (error) {
      console.error("Deu bom nao meu chegado",error);
      return false
  }
}
export const getIdStorage = async()=>{
  try {
      const id = await AsyncStorage.getItem('id')
      // console.log('Valor recuperado:', id);
      return id !== null ? id : null;
  } catch (error) {
      console.error('Erro ao recuperar dados:', error);
      return false
  }
}
export const getTokenStorage = async()=>{
  try {
      const token = await AsyncStorage.getItem('token')
      // console.log('Valor recuperado:', token);
      return token !== null ? token : null;
  } catch (error) {
      console.error('Erro ao recuperar dados:', error);
      return false
  }
}