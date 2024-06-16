import Api from "../Services/api/Api";


class Acao extends Api{

    async getAcao(id:number,token:string)
    {
            try{
                const response = await this.api.get(`/acoes/${id}` ,{ headers: {'Authorization': `Bearer ${token}`}})
                return response.data
            }catch(error){
                return error
            } 
            
    }

}

export default Acao;