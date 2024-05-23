import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCpfStorage = async() =>{
try {
const cpf = await AsyncStorage.getItem('cpf')
console.log('Valor recuperado:', cpf);
return cpf !== null ? cpf : null;

} catch (error) {
 console.error('Erro ao recuperar dados:', error);
 return false;
}
}
export const getPasswordStorage = async()=>{
    try {
        const password = await AsyncStorage.getItem('password')
        console.log('Valor recuperado:', password);
        return password !== null ? password : null;
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
        return false
    }
}
export const getIdStorage = async()=>{
  try {
      const id = await AsyncStorage.getItem('id')
      console.log('Valor recuperado:', id);
      return id !== null ? id : null;
  } catch (error) {
      console.error('Erro ao recuperar dados:', error);
      return false
  }
}
