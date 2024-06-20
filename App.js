import Routes from "./src/routes";
import MyContext from "./src/Context/context";
import { useState } from "react";
import Api from "./src/Services/api/Api";
import Passageiro from "./src/Services/api/Passageiro";

export default function App(){

  
 
  const[bilhete, setBilhete] = useState('')
  const[passageiro, setPassageiro] = useState('')
  const[pedidos, setPedidos] = useState('')
  const[passagens, setPassagens] = useState('')
  const[compras, setCompras] = useState('') 
  const[taxa, setTaxa] = useState(0)
  const[token, setToken] = useState('')
  const[troca, setTroca] = useState(false)
  const[password, setPassword] = useState('')
  // 0.tcp.sa.ngrok.io
  const[url, setUrl] = useState("http://localhost:9000/storage/")
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
        url,
        pedidos,
        setPedidos,
        taxa,
        setTaxa
      }
      }>
      <Routes />
    </MyContext.Provider>
  );
}