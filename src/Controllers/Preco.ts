import Api from "../Services/api/Api";

class Preco extends Api{

    async getPreco(token:string){
        try{
            const response = await this.api.get('/preco', { headers: {'Authorization': `Bearer ${token}`}})
            return response.data
        }catch(e){
            return e.response.data.message
        }
      }
}

export default Preco