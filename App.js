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
        setCompras
      }
      }>
    <Routes />
    </MyContext.Provider>
  );
}