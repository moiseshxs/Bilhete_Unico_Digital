import Api from "../Services/api/Api";


class Suporte extends Api{
    async storeSuporte(token:string,categoriaSuporte:string, descSuporte:string,id_passageiro:string) {
        try {
            let form = new FormData();
            form.append("tipoAcao", 'Suporte');
            form.append("categoriaSuporte", categoriaSuporte);
            form.append("descSuporte", descSuporte);
            form.append("statusSuporte", 'Aberto');
    
            const response = await this.api.post(`/acao/${id_passageiro}`, form, { headers: {'Authorization': `Bearer ${token}`}});

            return response.data;
        } catch (error) {
            console.log(error, "ERRO AO inserir");
            return error;
        }
    }

    

}

export default Suporte;