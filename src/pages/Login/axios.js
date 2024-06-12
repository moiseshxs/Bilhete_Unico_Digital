import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCpfStorage = async(cpf)=>{
  try {
  await AsyncStorage.setItem('cpf', cpf.toString());
  return true
  } catch (error) {
      console.error("Deu bom nao meu chegado",error);
      return false
  }
}
export const setPasswordStorage = async(password)=>{
  try {
   await AsyncStorage.setItem('password', password.toString());
  return true
  } catch (error) {
      console.error("Deu bom nao meu chegado",error);
      return false
  }
}
export const setIdStorage = async(id)=>{
  try {
   await AsyncStorage.setItem('id', id.toString());
  return true
  } catch (error) {
      console.error("Deu bom nao meu chegado",error);
      return false
  }
}
export const setTokenStorage = async(token)=>{
  try {
   await AsyncStorage.setItem('token', token.toString());
  return true
  } catch (error) {
      console.error("Deu bom nao meu chegado",error);
      return false
  }
}
