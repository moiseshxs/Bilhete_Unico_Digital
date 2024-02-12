import Routes from "./src/routes";
import MyContext from "./src/Context/context";
import { useState } from "react";
import Api from "./src/Services/api/Api";

export default function App(){

  
 
  
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[dataNasc, setDataNasc] = useState('')
  const[cpf, setCpf] = useState('')
  const[numTel, setNumTel] = useState('')
  const[foto, setFoto] = useState('')
  const[token, setToken] = useState('')
   const setInfos = () =>{
    setNome("Cuzinho")
  }
  
  
  return(
    <MyContext.Provider value={{nome, setNome, email, setEmail, dataNasc, setDataNasc, cpf, setCpf,numTel, setNumTel, foto, setFoto, token, setToken}}>
    <Routes />
    </MyContext.Provider>
  );
}