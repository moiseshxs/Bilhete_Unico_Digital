import Api from "../Services/api/Api";

class Compra extends Api{

    async getComprasByBilhete(id:number, bilheteId:number, token:string)
    {
        try{
            const response = await this.api.get(`/compras/${id}/${bilheteId}`,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        }
    }

    async storageCompraByBilhete(id:number,token:string, qtdPassagensCompra:string, valorTotalCompra:string, forma_pagamento_id:string, tipoAcao:string, bilhete_id:string ) {
        let form = new FormData();
        
        form.append("qtdPassagensCompra", qtdPassagensCompra);
        form.append("bilhete_id", bilhete_id);
        form.append("valorTotalCompra", valorTotalCompra);
        form.append("forma_pagamento_id", forma_pagamento_id);
        form.append("tipoAcao", tipoAcao);
        try{
            const response = await this.api.post(`/acao/${id}`,form,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        }
    }

    async countCompras(idBilhete:number, token:string){
        try{
            const response = await this.api.get(`countCompras/${idBilhete}`);
            return response.data
        }catch(e){
            return false
        }
    }

}

export default Compra