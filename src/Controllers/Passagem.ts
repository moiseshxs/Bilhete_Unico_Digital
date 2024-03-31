import Api from "../Services/api/Api";

class Passagem extends Api{
    async getPassagens(idBilhete:number, token:string)
    {
        try{
            const response = await this.api.get(`/passagens/${idBilhete}`,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return false
        }
    }
    async getPassagemEmUso(bilhete_id:string, token:string)
    {
        try{
            const response = await this.api.get(`/passagens/ativa/${bilhete_id}`,{ headers: {'Authorization': `Bearer ${token}`}} );
            if(!response.data){
                return false;
            }
            return response.data
        }
        catch(e){
            return false
        }
    }
    async inativarPassagem(idPassagem:string, token:string)
    {
        try{
            const response = await this.api.put(`/passagens/inativar/${idPassagem}`,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data.message;
        }catch(e){
            return false
        }
    }
} 

export default Passagem