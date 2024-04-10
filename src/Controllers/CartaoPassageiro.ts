
import Api from "../Services/api/Api";


class CartaoPassageiro extends Api{

async storeCartaoPassageiro(id:number,token:string,nomeTitularCartao:string,cpfTitularCartao:string, numeroCartao:string, bandeiraCartao: string,bancoCartao: string, cvcCartao: string, contaCartao: string, agenciaCartao: string, validadeCartao:string) {
    try {
        let form = new FormData();
    
    form.append("nomeTitularCartao", nomeTitularCartao);
    form.append("cpfTitularCartao", cpfTitularCartao);
    form.append("numeroCartao", numeroCartao);
    form.append("bandeiraCartao", bandeiraCartao);
    form.append("bancoCartao", bancoCartao);
    form.append("cvcCartao", cvcCartao);
    form.append("contaCartao", contaCartao);
    form.append("agenciaCartao", agenciaCartao);
    form.append("validadeCartao", validadeCartao);

   

    const response = await this.api.post(`/storeCartao/${id}`,form,{ headers: {'Authorization': `Bearer ${token}`}})
    
    return response.data
    } catch (error) {
        console.log(error, "ERRO AO INSERIR CARTAO")
        return error;
    }
}

async getCartaoPassageiro(id:number,token:string){
    try {
    
    const response = await this.api.get(`/getCartao/${id}`,{ headers: {'Authorization': `Bearer ${token}`}})
    return response.data
    } catch (error) {
        return error;
    }
}

async destroyCartaoPassageiro(id:number, token:string){
    try{
        const response = await this.api.delete(`/destroyCartao/${id}`, {headers: {'Authorization': `Bearer ${token}`}}) 
        return false
    } catch (error) {
        return error;
    }
}
}
export default CartaoPassageiro;
