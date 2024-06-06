import Api from "../Services/api/Api";


class VotoAjuda extends Api{
    async storeVoto(token:string, util:string, id_ajuda:string, id_passageiro:string) {
        try {
            let form = new FormData();
            form.append("util", util);
            form.append("passageiro_id", id_passageiro); // Adiciona o id_passageiro ao formulário
    
            const response = await this.api.post(`/storeVoto/${id_ajuda}`, form, { headers: {'Authorization': `Bearer ${token}`}});
    
            return response.data;
        } catch (error) {
            console.log(error, "ERRO AO VOTAR");
            return error;
        }
    }

    async getVoto(token:string,id:number, idAjuda:number)
{
        try{
            const response = await this.api.get(`/voto/${id}/${idAjuda}` ,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(error){
            return error
        } 
        
}
    async getAjudaMaiores(token:string)
{
        try{
            const response = await this.api.get(`/votoPorcentagem` ,{ headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(error){
            return error
        } 
        
}
    

}

export default VotoAjuda;