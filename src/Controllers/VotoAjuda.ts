import Api from "../Services/api/Api";


class VotoAjuda extends Api{
    async storeVoto(token:string,util:string, id_ajuda:string){
        try{
            let form = new FormData();
    
    form.append("util", util);

    const response = await this.api.post(`/storeVoto/${id_ajuda}`,form,{ headers: {'Authorization': `Bearer ${token}`}})
            
    return response.data;
        }catch (error) {
            console.log(error, "ERRO AO VOTAR")
            return error;
        }

    }

}

export default VotoAjuda;