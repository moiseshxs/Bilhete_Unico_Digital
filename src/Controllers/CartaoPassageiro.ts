
import Api from "../Services/api/Api";


class CartaoPassageiro extends Api{

async storeCartaoPassageiro(id:number,token:string, numeroCartao:string, bandeiraCartao: string,bancoCartao: string, cvcCartao: string, contaCartao: string, agenciaCartao: string, validadeCartao:string) {
    try {
        let form = new FormData();
    
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
        return error;
    }
}}

export default CartaoPassageiro