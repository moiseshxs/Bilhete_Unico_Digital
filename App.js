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
        setTroca
      }
      }>
      <Routes />
    </MyContext.Provider>
  );
}