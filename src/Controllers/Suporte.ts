import Api from "../Services/api/Api";


class Suporte extends Api{
    async storeSuporte(token:string, categoriaSuporte:string, descSuporte:string) {
        try {
            let form = new FormData();
            form.append("categoriaSuporte", categoriaSuporte);
            form.append("descSuporte", descSuporte);
    
            const response = await this.api.post(`/storeVoto`, form, { headers: {'Authorization': `Bearer ${token}`}});
    
            return response.data;
        } catch (error) {
            console.log(error, "ERRO AO inserir");
            return error;
        }
    }

    

}

export default Suporte;