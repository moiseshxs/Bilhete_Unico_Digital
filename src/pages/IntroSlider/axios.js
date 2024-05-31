import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCpfStorage = async() =>{
try {
const cpf = await AsyncStorage.getItem('cpf')
// console.log('Cpf recuperado no IntroSlider:', cpf);
return cpf !== null ? cpf : null;

} catch (error) {
 console.error('Erro ao recuperar dados:', error);
 return false;
}
}
export const getPasswordStorage = async()=>{
    try {
        const password = await AsyncStorage.getItem('password')
        // console.log('Senha recuperada no IntroSlider:', password);
        return password !== null ? password : null;
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
        return false
    }
}



