import Api from "../Services/api/Api";

class Bilhete extends Api{


async getBilhetes(id:number, token:string)
{
        try{
            const response = await this.api.get(`/bilhetes/${id}` ,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        } 
        
}

async storeEscolhaBilhete(id:number,token:string,tipoBilhete:string) {
    try {
            let form = new FormData();
            form.append("tipo", tipoBilhete);
    const response = await this.api.post(`/pedidoBilhete/store/${id}`,form,{ headers: {'Authorization': `Bearer ${token}`}})
    return response.data
    } catch (error) {
        console.log(error, "Erro ao pedir bilhete")
        return error;
    }
}
async getPedidoBilhete(id:number, token:string)
{
        try{
            const response = await this.api.get(`/pedidoBilhete/${id}` ,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        } 
        
}
async payStoreBihete(id:number, token:string)
{
    try{
        const response = await this.api.post(`/pedidoBilhete/payTaxaStoreBilhete/${id}`,{ headers: {'Authorization': `Bearer ${token}`}})
        return response
    }catch(e){
        return e
    }
}
}


export default Bilhete