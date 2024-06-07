import Routes from "./src/routes";
import MyContext from "./src/Context/context";
import { useState } from "react";
import Api from "./src/Services/api/Api";
import Passageiro from "./src/Services/api/Passageiro";

export default function App(){

  
 
  const[bilhete, setBilhete] = useState('')
  const[passageiro, setPassageiro] = useState('')
  const[passagens, setPassagens] = useState('')
  const[compras, setCompras] = useState('') 
  const[token, setToken] = useState('')
  const[troca, setTroca] = useState(false)
  const[password, setPassword] = useState('')
  const[url, setUrl] = useState("http://0.tcp.sa.ngrok.io:14566/storage/")
  return(
    <MyContext.Provider value={
      { 
        passageiro,
        setPassageiro,
        bilhete,
        setBilhete,
        passagens,
        setPassagens,
        compras,
        setCompras,
        token,
        setToken,
        troca,
        setTroca,
        password,
        setPassword,
        url
      }
      }>
      <Routes />
    </MyContext.Provider>
  );
}