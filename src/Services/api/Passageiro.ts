
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
        // variavel = vai la no navegador, digita a url base que eu ja te dei no construtor, adiciona mais esse pedaço
        //  da o enter, se te pedir autorização fala que ce tem o bearer token  
        //  e apresenta, o que voltar pra vc nesse enter , guarda nessa resposta pfv

        const response = await this.api.get(`/compras/${id}/${bilheteId}`,{ headers: {'Authorization': `Bearer ${token}`}})
        console.log(response.data)
        return response.data
    }
    async storageCompraByBilhete(id:number,token:string, qtdPassagensCompra:string, valorTotalCompra:string, forma_pagamento_id:string, tipoAcao:string, bilhete_id:string ) {
        let form = new FormData();
        
        form.append("qtdPassagensCompra", qtdPassagensCompra);
        form.append("bilhete_id", bilhete_id);
        form.append("valorTotalCompra", valorTotalCompra);
        form.append("forma_pagamento_id", forma_pagamento_id);
        form.append("tipoAcao", tipoAcao);

        const response = await this.api.post(`/acao/${id}`,form,{ headers: {'Authorization': `Bearer ${token}`}})
        
        return response.data
    }
    async storeConsumo(id:number, token:string, bilhete_id:string)
    {
        let form = new FormData();
        form.append("tipoAcao", "Consumo");
        form.append("bilhete_id", bilhete_id);
        
        const response = await this.api.post(`/acao/${id}`, form, { headers: {'Authorization': `Bearer ${token}`}});
        return response.data

    }

    async getPassagemEmUso(bilhete_id:string, token:string)
    {
        const response = await this.api.get(`/passagens/ativa/${bilhete_id}`,{ headers: {'Authorization': `Bearer ${token}`}} );
        if(response.data != null){
            return response.data
        }
        return false
    }

    async inativarPassagem(idPassagem:string, token:string)
    {
        const response = await this.api.put(`/passagens/inativar/${idPassagem}`,{ headers: {'Authorization': `Bearer ${token}`}})
        return response.data;
    }

   
    
    
    

    
    
}

export default Passageiro
