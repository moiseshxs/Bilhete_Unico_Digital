import axios from "axios";
import Api from "./Api";


class Passageiro extends Api{
    async getBilhetes(id:number, token:string)
    {
        const response = await this.api.get(`/bilhetes/${id}` ,{ headers: {'Authorization': `Bearer ${token}`}})
        console.log(response.data)
        return response.data
    }
    async getPassagens(idBilhete:number, token:string)
    {
        const response = await this.api.get(`/passagens/${idBilhete}`,{ headers: {'Authorization': `Bearer ${token}`}})
        console.log(response.data)
        return response.data
    }
    async getComprasByBilhete(id:number, bilheteId:number, token:string)
    {
        const response = await this.api.get(`/compras/${id}/${bilheteId}`,{ headers: {'Authorization': `Bearer ${token}`}})
        console.log(response.data)
        return response.data
    }
    async storageCompraByBilhete(id:number,token:string, qtdPassagensCompra:number, valorTotalCompra:number, forma_pagamento_id:number, tipoAcao:string, bilhete_id:number ) {

        const response = await this.api.post(`/acao/${id}`,{ headers: {'Authorization': `Bearer ${token}`}})
        console.log(response.data)
        return response.data
    }
 
    
    
    
    
}

export default Passageiro