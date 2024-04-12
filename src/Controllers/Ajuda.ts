import Api from "../Services/api/Api";


class Ajuda extends Api{
    async search(token:string,tituloAjuda:string){
        try{
            let form = new FormData();
    
    form.append("tituloAjuda", tituloAjuda);
    const response = await this.api.post(`/searchAjuda`,form,{ headers: {'Authorization': `Bearer ${token}`}})
            
    return response.data;
        }catch (error) {
            console.log(error, "ERRO AO PESQUISAR")
            return error;
        }

    }

}

export default Ajuda;