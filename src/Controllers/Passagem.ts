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
}

export default Passagem